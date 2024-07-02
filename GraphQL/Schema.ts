// your data.
export const Schema = `#graphql
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }
  type Post {
    _id:ID!
    title: String!
    author: String!
    content: String!
  }
  type Comment {
    user: String! 
  text:  String!
  createdAt: String!
  }

type newUser{
  name: String!
    email: String!
    password: String!
}
  type Query {
   
   users: [User]
   posts: [Post]
   post(id:ID!):Post

  }

  type Mutation{
    newUser(name:String!, email:String!, password:String!):String
  }
`;