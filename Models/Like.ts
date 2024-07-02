// models/Like.js
import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true },
  createdAt: { type: Date, default: Date.now }
});

export default  mongoose.model('Like', likeSchema);
