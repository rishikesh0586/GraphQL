import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { graphResolver } from './Resolvers/resolvers.js';
import { Schema } from './Schema.js';

 const connectGraphQL =() => {

    const server = new ApolloServer({
        typeDefs: Schema,
        resolvers:graphResolver
      });
      return server;
    
  //  startStandaloneServer(server, {
  //   listen: { port: 4000 },
  // }).then(() => {
  
  // console.log(`🚀  Server ready at: 4000`);
  // }).catch((err) => { console.error(err); });
}
export default connectGraphQL;