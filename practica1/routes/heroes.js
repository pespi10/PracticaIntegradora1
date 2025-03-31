const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroeController');
const heroes = require('../db/science')

router.get('/', heroesController.index);
router.get('/detalle/id/:id', heroesController.detalle);
router.get('/bio/id/:id/:ok?', heroesController.bio);

module.exports = router