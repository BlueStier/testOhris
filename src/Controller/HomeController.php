<?php

namespace App\Controller;

use App\Helper\ConcertHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(ConcertHelper $concertHelper): Response
    {
        $concerts = $concertHelper->getConcert();
        $artists = $concertHelper->getArtists();
        $citys = $concertHelper->getCitys();
        return $this->render('home/index.html.twig', [
            'concerts' => $concerts,
            'artists' => $artists,
            'citys' => $citys
        ]);
    }
    #[Route('/concertSearch', name: 'app_concert_search')]
    #[Assert\DateTime]
    public function concertSearch(ConcertHelper $concertHelper, Request $request): Response
    {
        $arrayData = [];
        $dateStartJs = new \DateTime($request->request->get('startDate'));
        $dateStopJs = new \DateTime($request->request->get('stopDate'));
        $arrayData['startDate'] = $dateStartJs;
        $arrayData['stopDate'] = $dateStopJs;
        $arrayData['artists'] = $request->request->get('artists');
        $arrayData['citys'] = $request->request->get('citys');
        $answer = $concertHelper->answerSearch($arrayData);
        $html = $this->renderView('concert/concertSearch.html.twig', [
            'concertList' => $answer
        ]);
        return new Response($html);
    }
}
