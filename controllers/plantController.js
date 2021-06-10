const PlantModel = require('../models/plant.model');

//========= GET ALL PLANTS =========//

exports.getAllPlants = async (req, res, next) => {

  try {

    const plants = await PlantModel.find();
    res.status(200).json({
        status: 'succes',
        results: plants.length,
        plants,
    });
  } 
  
  catch (error) {
    next();
  }

};

//========= GET PLANT INFO =========//

exports.getPlant = async (req, res, next) => {

  try {

    await PlantModel.findById(req.params.id, (error, documents) => {
      if (!error)
        return res.status(200).json({
            status: 'succes',
            documents,
        });
    });
  } 
  
  catch (error) {
    next(); // this handle err message is more explicite // when we put error in next => not
  }

};

//========= ADD NEW PLANT =========//

exports.addPlant = async(req, res, next) => {

  const newPlant = {...req.body} 

  if (req.file) {
    newPlant.image = req.file.path
  }

  try {

    await PlantModel.create(newPlant);
    res.status(200).json({
      status : 'succes',
      newPlant
    })
  }

  catch(error) {
    next()
  }
  
};

//=========  UPDATE PLANT ========//

exports.updatePlant = async (req, res, next) => {

  const plant = {...req.body}

  if(req.file) {
    plant.image = req.file.path
    // plant.image = req.file.secure_url; => null what is secure_url
  }

  try {

    await PlantModel.findByIdAndUpdate(
        req.params.id,
        plant,
        { new: true, runValidators: true },
        (error, documents) => {
            if (!error)
            return res.status(200).json({
                status: 'success',
                documents
          });
      }
    );

  }
   catch (error) {
    next();
  }

};

//=========  DELETE PLANT =========//

exports.deletePlant = async (req, res, next) => {

  try {

    await PlantModel.findByIdAndDelete(
        req.params.id,
        (error, documents) => {
            if (!error) 
            return res.status(200).json({ message: 'Delete Successfully' });
    });
  }
  
  catch (error) {
    next(error);
  }

};



// LIKE LOGIC GOES HERE // 


exports.likePlant = async (req, res, next) => {

  try {

    await PlantModel.findByIdAndUpdate(
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

exports.unlikePlant = async (req, res, next) => {
  try {
    await PlantModel.findByIdAndUpdate(
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