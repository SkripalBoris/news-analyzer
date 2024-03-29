import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from '@/graphql/schemas';
import { resolvers } from '@/graphql/resolvers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export type Context = {
	prisma: PrismaClient
};

const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer, {
	context: async (req, res) => ({ req, res, prisma }),
});