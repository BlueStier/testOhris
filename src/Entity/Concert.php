<?php

namespace App\Entity;

use App\Repository\ConcertRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Artist;

#[ORM\Entity(repositoryClass: ConcertRepository::class)]
class Concert
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column]
    private ?int $artist_id = null;

    #[ORM\Column]
    private ?int $city_id = null;

    #[ORM\Column(length: 50)]
    private ?string $img_url = null;

    #[ORM\ManyToOne(targetEntity : Artist::class)]
    #[ORM\JoinColumn(nullable:false)]

    private $artist;

    #[ORM\ManyToOne(targetEntity : City::class)]
    #[ORM\JoinColumn(nullable:false)]

    private $city;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getArtistId(): ?int
    {
        return $this->artist_id;
    }

    public function setArtistId(int $artist_id): self
    {
        $this->artist_id = $artist_id;

        return $this;
    }

    public function getCityId(): ?int
    {
        return $this->city_id;
    }

    public function setCityId(int $city_id): self
    {
        $this->city_id = $city_id;

        return $this;
    }

    public function getImgUrl(): ?string
    {
        return $this->img_url;
    }

    public function setImgUrl(string $img_url): self
    {
        $this->img_url = $img_url;

        return $this;
    }
    public function getArtist(): ?Artist
    {
        return $this->artist;
    }

    public function setArtist(?Artist $artist): self
    {
        $this->artist = $artist;

        return $this;
    }
    public function getCity(): ?City
    {
        return $this->city;
    }

    public function setCity(?City $city): self
    {
        $this->city = $city;

        return $this;
    }
}
