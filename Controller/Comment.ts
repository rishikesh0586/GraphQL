import Comment from "../Models/Comment.js"

export const getComment = async()=>{
    const comment = await Comment.find();
    return comment;
}