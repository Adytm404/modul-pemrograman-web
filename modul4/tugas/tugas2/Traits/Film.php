<?php

namespace FilmNamespace; 

trait FilmTrait {
    private $id;
    private $namafilm;
    private $ratingfilm;
    private $deskripsifilm;
    private $playerfilm;

    public function __construct($namafilm, $ratingfilm, $deskripsifilm, $playerfilm) {
        $this->namafilm = $namafilm;
        $this->ratingfilm = $ratingfilm;
        $this->deskripsifilm = $deskripsifilm;
        $this->playerfilm = $playerfilm;
    }

    public function getId() {
        return $this->id;
    }

    public function getNamafilm() {
        return $this->namafilm;
    }

    public function getRatingfilm() {
        return $this->ratingfilm;
    }

    public function getDeskripsifilm() {
        return $this->deskripsifilm;
    }

    public function getPlayerfilm() {
        return $this->playerfilm;
    }
}
