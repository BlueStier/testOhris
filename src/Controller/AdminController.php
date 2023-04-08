<?php

namespace App\Controller;

use App\Entity\Artist;
use App\Entity\City;
use App\Entity\Concert;
use App\Form\ConcertUpdateType;
use Doctrine\ORM\EntityManagerInterface;
use App\Helper\ConcertHelper;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class AdminController extends AbstractController
{
   protected $concerts;
   protected $artists;
   protected $citys;
   #[Route('/admin', name: 'app_admin')]
   public function index(ConcertHelper $concertHelper, Request $request, EntityManagerInterface $entityManager): Response
   {
      $this->concerts = $concertHelper->getConcertAdmin();
      $this->artists = $concertHelper->getArtists();
      $this->citys = $concertHelper->getCitys();
      $deleteForm = $this->createFormBuilder()->add('id', NumberType::class)->getForm();
      return $this->render('admin/index.html.twig', [
         'concerts' => $this->concerts,
         'artists' => $this->artists,
         'citys' => $this->citys,
         'updateForm' => $this->update($request, $entityManager),
         'deleteForm' => $this->delete($request, $entityManager)
      ]);
   }
   #[Route('/admin/create', name: 'app_admin_create')]
   public function create(EntityManagerInterface $entityManager, Request $request): Response
   {
      $repoArtist = $entityManager->getRepository(Artist::class);
      $repoCity = $entityManager->getRepository(City::class);
      $artistList =  $repoArtist->findAll();
      $CityList =  $repoCity->findAll();
      $choicesArtist = [];
      $choicesCity = [];
      foreach ($artistList as $item) :
         $choicesArtist[$item->getName()] = $item->getId();
      endforeach;
      foreach ($CityList as $item) :
         $choicesCity[$item->getName()] = $item->getId();
      endforeach;
      $form = $this->createFormBuilder()
         ->add('date', DateType::class)
         ->add("Artiste", ChoiceType::class, [
            'choices' => $choicesArtist
         ])
         ->add("Ville", ChoiceType::class, [
            'choices' => $choicesCity
         ])
         ->add('submit', SubmitType::class)
         ->getForm();
      $form->handleRequest($request);
      if ($form->isSubmitted() && $form->isValid()) {
         $data = $form->getData();
         $concert = new Concert();
         $concert->setArtistId($data['Artiste']);
         $concert->setCityId($data['Ville']);
         $concert->setDate($data['date']);
         $concert->setImgUrl($this->get_imgUrl($data['Artiste']));
         $entityManager->persist($concert);
         $entityManager->flush();
      }
      return $this->render('admin/create.html.twig', [
         'form' => $form->createView()
      ]);
   }
   #[Route('/admin/update', name: 'app_admin_update')]
   public function update(Request $request, EntityManagerInterface $entityManager)
   {
      $form = $this->createForm(ConcertUpdateType::class, null, [
         'artists' => $this->artists,
         'citys' => $this->citys
      ]);
      $form->handleRequest($request);

      if ($form->isSubmitted() && $form->isValid()) {
         $data = $form->getData();
         $concert = $entityManager->getRepository(Concert::class)->findOneById($data['id']);
         if (!$concert) {
            throw $this->createNotFoundException('Concert non trouvé');
         }
         $concert->setDate($data['daterange']);
         $concert->setArtistId($data['artists']->getId());
         $concert->setCityId($data['citys']->getId());
         $concert->setImgUrl($this->get_imgUrl($data['artists']->getId()));
         $entityManager->persist($concert);
         $entityManager->flush();
         $this->addFlash(
            'update',
            'Votre évenement a bien était mis à jour'
         );
         return $this->redirectToRoute("app_admin");
      }
      return $this->renderView('admin/update.html.twig', [
         'updateForm' => $form->createView(),
      ]);
   }
   #[Route('/admin/delete', name: 'app_admin_delete')]
   private function delete(Request $request, EntityManagerInterface $entityManager)
   {
      $form = $this->createFormBuilder()
         ->add('delete_id', NumberType::class)
         ->add('goDelete', SubmitType::class, [
            'label' => 'Supprimer',
            'attr' => ['class' => 'containerButton']
         ])
         ->getForm();
      $form->handleRequest($request);

      if ($form->isSubmitted() && $form->isValid()) {
         $data = $form->getData();
         $concert = $entityManager->getRepository(Concert::class)->findOneById($data['delete_id']);
         if (!$concert) {
            throw $this->createNotFoundException('Concert non trouvé');
         }
         $entityManager->remove($concert);
         $entityManager->flush();
         $this->addFlash(
            'delete',
            'Votre évenement a bien était supprimé'
         );
         return $this->redirectToRoute("app_admin");
      }
      return $this->renderView('admin/update.html.twig', [
         'updateForm' => $form->createView(),
      ]);
   }
   private function get_imgUrl(int $artistId): String
   {
      switch ($artistId) {
         case 1:
            return './images/dead.webp';
            break;
         case 2:
            return './images/daft.webp';
            break;
         case 3:
            return './images/iam.webp';
            break;
         case 4:
            return './images/ntm.webp';
            break;
         case 5:
            return './images/cabrel.webp';
            break;
         case 6:
            return './images/cyp.webp';
            break;
         case 7:
            return './images/mk.webp';
            break;
         case 8:
            return './images/zhang.webp';
            break;
         default:
            return './images/logo.webp';
            break;
      }
      return '';
   }
}
