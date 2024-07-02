
import { getPost, getPostByID } from '../../Controller/Post.js';
import { getUser } from '../../Controller/User.js';
import { getComment } from '../../Controller/Comment.js';
import { Schema } from '../Schema.js';
import User from "../../Models/User.js"

type newUser={
    name: String;
      email: String;
      password: String;
  }


export const graphResolver={
    Mutation:{
newUser:async(parent:any,{name,email,password}:newUser)=>{
const newUser = new User({ name, email, password });
   await newUser.save();
   console.log(newUser);
return "user saved successfully";
}
    },
      Query:{
         users:getUser,
         posts:getPost,
         post:getPostByID,
      
      },
  }