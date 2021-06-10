const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const uploader = require('../config/cloudinary');

router
  .route('/')
  .get(recipeController.getAllRecipes)
  .post(uploader.single('picture'), recipeController.addRecipe);

router
  .route('/:id')
  .get(recipeController.getRecipe)
  .patch(uploader.single('picture'), recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);

router
  .route('/like/:id')
  .patch(recipeController.likeRecipe)
  .patch(recipeController.unlikeRecipe);

module.exports = router;
