const express = require('express');
const router = express.Router();
const UserModel = require('../models/user.model')
const authController = require('../controllers/authController');
const bcrypt = require('bcrypt')


router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.get('/signout', authController.signOut);
router.get('/isloggedin', authController.isLoggedIn);

  
module.exports = router;