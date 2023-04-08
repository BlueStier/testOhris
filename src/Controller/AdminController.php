<?php

namespace App\Controller;

use App\Entity\Artist;
use App\Entity\City;
use App\Entity\Concert;
use App\Form\ConcertUpdateType;
use App\Form\ConcertCreateType;
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
      return $this->render('admin/index.html.twig', [
         'concerts' => $this->concerts,
         'artists' => $this->artists,
         'citys' => $this->citys,
         'createForm' => $this->create($request, $entityManager),
         'updateForm' => $this->update($request, $entityManager),
         'deleteForm' => $this->delete($request, $entityManager)
      ]);
   }
   #[Route('/admin/create', name: 'app_admin_create')]
   public function create(Request $request, EntityManagerInterface $entityManager): string
   {
      $form = $this->createForm(ConcertCreateType::class, null, [
         'artists' => $this->artists,
         'citys' => $this->citys
      ]);
      $form->handleRequest($request);
      if ($form->isSubmitted() && $form->isValid()) {
         $data = $form->getData();
         $concert = new Concert();
         $concert->setDate($data['datel']);
         $concert->setArtistId($data['artists']->getId());
         $concert->setCityId($data['citys']->getId());
         $concert->setImgUrl($this->get_imgUrl($data['artists']->getId()));
         $concert->setArtist($entityManager->getRepository(Artist::class)->findOneById($data['artists']->getId()));
         $concert->setCity($entityManager->getRepository(City::class)->findOneById($data['citys']->getId()));
         dump($concert);
         //die;
         $entityManager->persist($concert);
         $entityManager->flush();
         $this->addFlash(
            'create',
            'Votre évenement a bien était enregistré'
         );
         return $this->redirectToRoute("app_admin");
      }
      return $this->renderView('admin/create.html.twig', [
         'createForm' => $form->createView(),
      ]);
   }
   #[Route('/admin/update', name: 'app_admin_update')]
   public function update(Request $request, EntityManagerInterface $entityManager): string
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
   private function delete(Request $request, EntityManagerInterface $entityManager): string
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
