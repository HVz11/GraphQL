import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// server setup
// apollo server takes in an object as an argument
// and object expects two properties typeDefs and resolvers
const server = new ApolloServer({});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
