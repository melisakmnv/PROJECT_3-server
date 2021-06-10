const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploader = require('../config/cloudinary')

// CRUD //
router
  .route('/')
  .get(userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUserInfo)
  .patch(uploader.single('avatar'), userController.updateUserInfo)
  .delete(userController.deleteUser);


router.patch('/follow/:id', userController.followingUser);
router.patch('/unfollow/:id', userController.unFollowingUser);

module.exports = router;
