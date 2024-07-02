// models/Commen
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  text: { type: String },
  createdAt: { type: Date, default: Date.now }
});
export default  mongoose.model('Comment', commentSchema);

