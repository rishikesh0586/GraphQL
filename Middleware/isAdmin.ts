
import {Request, Response,NextFunction} from "express";

const isAdmin =(req: Request, res: Response, next: NextFunction)=>{
const user ={role:"admin"};
if(user.role=="admin")next();
else res.send("you are not allowed ")
}


export default isAdmin;