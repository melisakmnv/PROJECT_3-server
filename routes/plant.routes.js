const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');
const uploader = require('../config/cloudinary');

router
  .route('/')
  .get(plantController.getAllPlants)
  .post(uploader.single('image'), plantController.addPlant);

router
  .route('/:id')
  .get(plantController.getPlant)
  .patch(uploader.single('image'), plantController.updatePlant)
  .delete(plantController.deletePlant);

router
  .route('/like/:id')
  .patch(plantController.likePlant)
  .patch(plantController.unlikePlant);

module.exports = router;
