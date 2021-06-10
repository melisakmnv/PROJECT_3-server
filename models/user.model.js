const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide username'],
      minlength: 3,
      maxlength: 55,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please provide an email'],
      validate: [isEmail], // forcer à écrire @qqch.com
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide password with minimum 6 characters'],
      minlength: 6,
    },
    avatar: {
      type: String,
      default: 'https://loocaly.fr/storage/users/default.png',
    },
    bio: {
      type: String,
      maxlength: 1024,
    },
    followers: [String],
    followings: [String],
    likes: [String],
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
