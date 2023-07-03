import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";

// server setup
// apollo server takes in an object as an argument
// and object expects two properties typeDefs and resolvers
const server = new ApolloServer({ typeDefs });
// typeDefs -- definitions of types of data
// resolvers -- bunch of resolver functions

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
