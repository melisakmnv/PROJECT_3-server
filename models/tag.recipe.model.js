const mongoose = require('mongoose');

const tagRecipeModel = new mongoose.Schema(
    {
        icon : {
            type: String,
            enum : ["soupe", "salade", "ragout", "infusion", "pesto", "cocktail", "poélé", "blanchi", "omelette"]
        }
    }
)

const TagRecipe = mongoose.model('tagRecipe', tagRecipeModel)
module.exports = TagRecipe;
