<?php

namespace App\Repository;

use App\Entity\Concert;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Concert>
 *
 * @method Concert|null find($id, $lockMode = null, $lockVersion = null)
 * @method Concert|null findOneBy(array $criteria, array $orderBy = null)
 * @method Concert[]    findAll()
 * @method Concert[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConcertRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Concert::class);
    }

    public function save(Concert $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Concert $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getAllConcert(): array
    {
        $currentDate = new \DateTime();
        $endDate = new \DateTime('+3 months');
        return $this->createQueryBuilder('concert')
            ->select('concert.id, concert.date, artist.name as artiste_name, city.name as city_name, concert.img_url')
            ->join('concert.artist', 'artist')
            ->join('concert.city', 'city')
            ->where('concert.date BETWEEN :currentDate AND :endDate')
            ->orderBy('concert.date', 'DESC')
            ->setParameter('currentDate', $currentDate)
            ->setParameter('endDate', $endDate)
            ->getQuery()
            ->getResult();
    }
    public function  answerSearch(array $array): array
    {
        $startDate = $array['startDate'];
        $stopDate = $array['stopDate'];
        $artistIds = $array['artists'];
        $cityIds = $array['citys'];
        $queryBuilder = $this->createQueryBuilder('concert')
            ->select('concert.id, concert.date, artist.name as artiste_name, city.name as city_name, concert.img_url')
            ->join('concert.artist', 'artist')
            ->join('concert.city', 'city')
            ->where('concert.date BETWEEN :startDate AND :stopDate')
            ->setParameter('startDate', $startDate)
            ->setParameter('stopDate', $stopDate);

        if (!empty($artistIds)) {
            $queryBuilder->andWhere('artist.id IN (:artistIds)')
                ->setParameter('artistIds', $artistIds);
        }
        if (!empty($cityIds)) {
            $queryBuilder->andWhere('city.id IN (:cityIds)')
                ->setParameter('cityIds', $cityIds);
        }
        $queryBuilder->orderBy('concert.date', 'ASC');
        return $queryBuilder->getQuery()->getResult();
    }
    public function getAllConcertAdmin(): array
    {
        $currentDate = new \DateTime();
        $endDate = new \DateTime('+3 months');
        return $this->createQueryBuilder('concert')
            ->select('concert.id, concert.date, artist.name as artiste_name, city.name as city_name, artist.id as artist_id, city.id as city_id, concert.img_url')
            ->join('concert.artist', 'artist')
            ->join('concert.city', 'city')
            ->orderBy('concert.date', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
