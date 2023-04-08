<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230329154930 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE concert ADD COLUMN img_url VARCHAR(50) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__concert AS SELECT id, date, artist_id, city_id FROM concert');
        $this->addSql('DROP TABLE concert');
        $this->addSql('CREATE TABLE concert (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, date DATE NOT NULL, artist_id INTEGER NOT NULL, city_id INTEGER NOT NULL)');
        $this->addSql('INSERT INTO concert (id, date, artist_id, city_id) SELECT id, date, artist_id, city_id FROM __temp__concert');
        $this->addSql('DROP TABLE __temp__concert');
    }
}
