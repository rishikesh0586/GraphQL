import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String
  });


  export default  mongoose.model('Post', PostSchema);
