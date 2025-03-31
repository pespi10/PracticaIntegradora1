const express = require('express');
const router = express.Router();
const heroeController = require('../controllers/heroeController');


router.get('/', heroeController.list);
router.get('/detalle/id/:id', heroeController.detail);
router.get('/bio/id/:id/:ok?', heroeController.bio);

module.exports = router