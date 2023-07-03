import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";

import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

// server setup
// apollo server takes in an object as an argument
// and object expects two properties typeDefs and resolvers
const server = new ApolloServer({ typeDefs, resolvers });
// typeDefs -- definitions of types of data
// resolvers -- bunch of resolver functions

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀  Server ready at: ${url}`);
