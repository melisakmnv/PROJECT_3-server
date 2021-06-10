const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema(
  {
    plantName: {
      type: String,
      required: [true, 'Please provide a plant name'],
    },
    nameLatin: {
      type: String,
      required: [true, 'Please provide a plant name in Latin'],
    },
    species: {
      type: String,
      required: [true, 'Please provide a plant species'],
    },
    family: {
      type: String,
      required: [true, 'Please provide a plant family'],
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
    },
    likesPlant: [String],
    id_tag: [String],
  },
  {
    timestamps: true,
  }
);

const PlantModel = mongoose.model('plant', plantSchema);
module.exports = PlantModel;
