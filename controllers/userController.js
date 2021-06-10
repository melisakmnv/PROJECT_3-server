const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId


//========= ALL USERS =========//

exports.getAllUsers = async (req, res, next) => {

    try {

        const users = await UserModel.find().select('-password')
        res.status(200).json({
            status : 'success',
            results : users.length,
            users
        })
    }

    catch (error) {
        next()
    }

};


//=========  USER INFO =========//

exports.getUserInfo = async (req, res, next) => {

    try {

        await UserModel.findById(req.params.id, (error, documents) => {
            if(!error)
            return res.status(200).json({
                status : 'succes',
                data : { documents }
            })
        }).select("-password")
    }

    catch(error) {
        next()
    } 

};


//========= UPADATE USER =========//

exports.updateUserInfo = async (req, res, next) => {

    const user = {...req.body}

    if(req.file) {
        user.avatar = req.file.path
    }

    try {

        await UserModel.findByIdAndUpdate(
            req.params.id,
            user,
            {new: true, runValidators: true},
            (error, documents) => {
            if (!error)
            return res.status(200).json({
                status : 'success',
                documents
            })
        }).select("-password");
    }

    catch(error){
        next()
    }

}


//========= DELETE USER =========// 

exports.deleteUser = async (req, res, next) => {

    try { 

        await UserModel.findByIdAndRemove(
            req.params.id,
            (error, documents) =>{
                if (!error)
                return res.status(200).json({message : 'Delete Successfully'})
        })
    }

    catch(error) {
        next()
    }

}


//========= 2nd FEATURN : FOLLOW USER =========// 


exports.followingUser = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id) || (!ObjectId.isValid(req.body.idToFollow)))
    return res.status(400).send({message : 'Error'})

    try {

        await UserModel.findByIdAndUpdate(
            req.params.id, 
            { $addToSet: { followings: req.body.idToFollow}}, 
            { new : true, upsert: true }, 
            (error, documents) => {
                if (!error)
                return res.status(200).json({
                    status : "unfollowing successfully",
                    documents
                });
            }
        )

        await UserModel.findByIdAndUpdate(
            req.body.idToFollow,
            { $addToSet: { followers : req.params.id}},
            {new: true},
            (error, documents) => {
                if (error)
                return next(error)
            }
        )
    }

    catch (error) {
        next()
    }
}

exports.unFollowingUser = async (req, res, next) => {

    if (!ObjectId.isValid(req.params.id) || (!ObjectId.isValid(req.body.idToUnfollow)))
    return res.status(400).send({message : 'Error'})

    try {

        // Remove Id from Following List

        await UserModel.findByIdAndUpdate(
            req.params.id, 
            { $pull: { followings: req.body.idToUnfollow}}, 
            { new : true, upsert: true }, 
            (error, documents) => {
                if (!error)
                return res.status(200).json({
                    status : "following successfully",
                    data: { documents }
                });
            }
        )

        await UserModel.findByIdAndUpdate(
            req.body.idToUnfollow,
            { $pull: { followers : req.params.id}},
            {new: true},
            (error, documents) => {
                if (error)
                return next(error)
            }
        )
    }

    catch (error) {
        next()
    }
}


