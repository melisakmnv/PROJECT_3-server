const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        userId : {
            type: String,
            required: true,
        },
        message : {
            type: String,
            maxlength: 500,
            trim: true
        },
        likesComment : [String],
    },
    {
        timestamps: true
    }
)

const CommentModel = mongoose.model('comment', commentSchema);

module.exports = CommentModel;