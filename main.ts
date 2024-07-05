import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { typeDefs } from "./gql/schema.ts";
import  Query  from "./resolvers/Query.ts"
import Episode  from "./resolvers/Episode.ts";
import Character from "./resolvers/Character.ts";
//import Location from "./resolvers/Location.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Episode,
    Character,
    //Location,
  }
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3005},
});
console.info('🚀 Server ready at ${url}');