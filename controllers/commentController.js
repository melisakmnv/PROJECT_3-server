const CommentModel = require('../models/comment.model');
const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;

exports.readComment = (req, res) => {

  CommentModel.find((error, documents) => {
    if (!error) return res.send(documents);
    else console.log(error);
  });

};

exports.writeComment = async (req, res) => {

  const newComment = new CommentModel({
    userId: req.body.userId,
    message: req.body.message,
    likers: [],
    comments: [],

  });

  try {
    const comment = await newComment.save();
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.editComment = async (req, res) => {
    
  try {
    CommentModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          message: req.body.message, // if we want to dry, we can declara a variable and put {message : blablabl} , variable should be outside of try
        },
      },
      { new: true },
      (error, documents) => {
        if (!error)
          return res.status(200).json({
            status: 'success',
            documents,
          });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await CommentModel.findByIdAndDelete(req.params.id, (error, documents) => {
      if (!error)
        return res.status(200).json({
          message: 'Delete Successfully',
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.likeComment = async (req, res, next) => {
  try {
    await CommentModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.params.id } },
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

exports.unlikeComment = async (req, res, next) => {
  try {
    await CommentModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likesComment: req.params.id } },
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
      { $pull: { likesComment: req.params.id } },
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


