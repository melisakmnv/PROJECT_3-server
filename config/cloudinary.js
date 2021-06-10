
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const multer = require('multer');


cloudinary.config({

    cloud_name : process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret : process.env.CLOUD_SECRET

});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "Dandelion",
    allowedFormats: ["jpg", "png"],
    filename : function (req, file, cb) {
        cb(null, file.originalname)
    }

});

const uploadCloud = multer({
    storage: storage
})

module.exports = uploadCloud