import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PlaceResolver } from "./resolvers/placeResolver";

(async () => {
  const app = express();
  const port = 4000;
  // cross origin
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  // orm connection to the db
  await createConnection();
  // apollo server middleware
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PlaceResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  // set the middleware to express server
  apolloServer.applyMiddleware({ app, cors: false });
  app.listen(4000, () => {
    console.log(`server listens at port: ${port}`);
  });
})();
