const RecipeModel = require('../models/recipe.model');


//========= GET ALL RECIPES =========//

exports.getAllRecipes = async (req, res, next) => {

    try {

        const recipes = await RecipeModel.find();
        res.status(200).json({
            status : 'succes',
            results : recipes.length,
            recipes
        });
    }

    catch(error) {
        next()
    }

}


//========= GET ONE RECIPE =========// 

exports.getRecipe = async (req, res, next) => {

    try {

        await RecipeModel.findById(req.params.id, (error, documents) => {
            if(!error) 
            return res.status(200).json({
                status : 'succes',
                documents
            })
        });
    }

    catch (error) {
        next()
    }
}

//========= ADD NEW RECIPE =========// 

exports.addRecipe = async (req, res, next) => {

    const newRecipe = {...req.body}

    if(req.file) {
        newRecipe.picture = req.file.path
    }

    try {

        await RecipeModel.create(newRecipe);
        res.status(201).json({
            status : 'succes',
            newRecipe
        })
    }
    
    catch (error){
        next()
    }

}


//========= UPDATE RECIPE =========// 

exports.updateRecipe = async (req, res, next) => {

    const recipe = {...req.body}

    if(req.file) {
        recipe.picture = req.file.path
    }

    try {

        await RecipeModel.findByIdAndUpdate(
            req.params.id,
            recipe, 
            {new: true, runValidators: true}, 
            (error, documents) => {
            if (!error) 
            return res.status(200).json({
                status : 'success',
                documents
            });
        });
    }

    catch (error) {
        next()
    }
}

//========= DELETE RECIPE =========// 

module.exports.deleteRecipe = async (req,res) => {

    try {

        await RecipeModel.findByIdAndRemove(
            req.params.id,
            (error, documents) => {
                if(!error)
                return res.status(200).json({message : 'Delete Successfully'})
        });
    }

    catch(error) {
        next()
    }
};

// LIKE LOGIC GOES HERE // 


exports.likeRecipe = async (req, res, next) => {

    try {

      await RecipeModel.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { likesRecipe: req.params.id } },
        { new: true },
        (error, documents) => {
          if (error)
            return res.status(400).json({
              status: 'fail',
              error,
            });
        }
      );
      await UserModel.findByIdAndUpdate(
        req.body.id,
        { $addToSet: { likes: req.params.id } },
        { new: true },
        (error, documents) => {
          if (!error)
            return res.status(200).json({
              status: 'succes',
              documents,
            });
          else
            return res.status(400).json({
              status: 'succes',
              error,
            });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };
  
  exports.unlikeRecipe = async (req, res, next) => {
    try {
      await RecipeModel.findByIdAndUpdate(
        req.params.id,
        { $pull: { likesRecipe: req.params.id } },
        { new: true },
        (error, documents) => {
          if (error)
            return res.status(400).json({
              status: 'fail',
              error,
            });
        }
      );
      await UserModel.findByIdAndUpdate(
        req.body.id,
        { $pull: { likes: req.params.id } },
        { new: true },
        (error, documents) => {
          if (!error)
            return res.status(200).json({
              status: 'succes',
              documents,
            });
          else
            return res.status(400).json({
              status: 'succes',
              error,
            });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };