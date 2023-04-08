<?php

namespace App\Helper;

use App\Entity\Concert;
use App\Entity\Artist;
use App\Entity\City;
use Doctrine\ORM\EntityManagerInterface;

class ConcertHelper
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    public function getConcert(): array
    {
        $repo =  $this->entityManager->getRepository(Concert::class);
        return $repo->getAllConcert();
    }
    public function getArtists(): array
    {
        $repo = $this->entityManager->getRepository(Artist::class);
        return $repo->findAll();
    }
    public function getCitys(): array
    {
        $repo = $this->entityManager->getRepository(City::class);
        return $repo->findAll();
    }
    public function answerSearch(array $array): array
    {
        $repo = $this->entityManager->getRepository(Concert::class);
        return $repo->answerSearch($array);
    }
    public function getConcertAdmin(): array
    {
        $repo =  $this->entityManager->getRepository(Concert::class);
        return $repo->getAllConcertAdmin();
    }
}
