<?php
require_once 'Controller/FilmController.php';

$filmController = new FilmController();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_GET['namafilm']) && isset($_GET['ratingfilm']) && isset($_GET['deskripsifilm']) && isset($_GET['playerfilm'])) {
        $namafilm = $_GET['namafilm'];
        $ratingfilm = $_GET['ratingfilm'];
        $deskripsifilm = $_GET['deskripsifilm'];
        $playerfilm = $_GET['playerfilm'];
        
        $filmController->createFilm($namafilm, $ratingfilm, $deskripsifilm, $playerfilm);
    } elseif (isset($_GET['delete'])) {
        $filmId = $_GET['delete'];
        $filmController->deleteFilm($filmId);
    }
} else {
    echo json_encode($filmController->getAllFilms());
}
?>
