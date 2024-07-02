import Post from "../Models/Post.js";

export const getPost = async()=>{
    const posts = await Post.find();
    return posts;
}

export const getPostByID = async(parent:any,arg:{id:string})=>{
    const post = await Post.findById(arg.id);
    return post;
}
