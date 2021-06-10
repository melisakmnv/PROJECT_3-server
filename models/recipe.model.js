const mongoose = require('mongoose');

const recipeModel = new mongoose.Schema(
    {
        recipeName : {
            type: String,
            requires: [true, 'Please provide a recipe name']
        },
        ingredients : {
            type: String,
            requires: [true, 'Please provide ingredients names']
        },
        picture : {
            type: String,
            default: ''
        },
        duration : {
            type: String,
            requires: [true, 'Please provide a duration']
        },
        step : {
            type: String,
            requires: [true, 'Please provide a description of steps']
        },
        likesRecipe: [String],
    },
    {
        timestamps : true
    }
);

const RecipeModel = mongoose.model('recipe', recipeModel);
module.exports = RecipeModel;