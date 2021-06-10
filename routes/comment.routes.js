const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const uploader = require('../config/cloudinary')

//CRUD COMMENT //
router
  .route('/')
  .get(commentController.readComment)
  .post(uploader.single('picture'), commentController.writeComment);

router
  .route('/:id')
  .put(commentController.editComment)
  .delete(commentController.deleteComment);

// LIKE // 
router
  .route('/like/:id')
  .patch(commentController.likeComment)
  .patch(commentController.unlikeComment)



module.exports = router;
