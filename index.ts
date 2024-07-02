import connectDB from './db.js';
import connectGraphQL from  "./GraphQL/GraphQL.js";
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import isAdmin from './Middleware/isAdmin.js';
// books:()=>{
//     return []
// },

connectDB();
 const graphqlServer=connectGraphQL();
 await   graphqlServer.start();
 
// import connectDB from './db.js';
// import create from './CrudController/Create.js';
// import Read from './CrudController/Read.js';
// import Update from './CrudController/Update.js';
// import Delete from './CrudController/Delete.js';

 const app = express();
 app.use(express.json());

 
 app.use("/graphql",isAdmin,expressMiddleware(graphqlServer));


 

// connectDB();



// app.post('/new',create)
// app.get('/read',Read)
// app.put('/update',Update)
 app.get('/', (req, res) => {
     res.send("Welcome this is home route");
 })

 app.listen(8080,()=>{
    console.log('listening on port 8080');
})


// console.log("hello bhai")