import User from "../Models/User.js";

export const getUser = async()=>{
    const user = await User.find();
    return user;
}