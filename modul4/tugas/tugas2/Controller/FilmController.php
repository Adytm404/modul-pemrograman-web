<?php
require_once 'Database.php';
require_once 'Traits/Film.php';

use FilmNamespace\FilmTrait; 


class FilmController {
    use FilmTrait;

    private $db;
    private $conn;

    public function __construct() {
        $this->db = new Database();
        $this->conn = $this->db->connect();
    }

    public function createFilm($namafilm, $ratingfilm, $deskripsifilm, $playerfilm) {
        $query = "INSERT INTO databaseFilm (namafilm, ratingfilm, deskripsifilm, playerfilm) VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$namafilm, $ratingfilm, $deskripsifilm, $playerfilm]);
    }

    public function deleteFilm($filmId) {
        $query = "DELETE FROM databaseFilm WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->execute([$filmId]);
    }

    public function getAllFilms() {
        $query = "SELECT * FROM databaseFilm";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $films = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $films;
    }
}
?>
