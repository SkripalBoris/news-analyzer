import { Context } from '@/pages/api/graphql';
import { addNewsSource, getNewsSources } from '@/services/news-source';

export const newsSourcesResolvers = {
    Query: {
        newsSources: (_parent: any, _args: any, context: Context) => {
            return getNewsSources(context.prisma)
        }
    },
    Mutation: {
        addNewsSource: (_parent: any, args: any, context: Context) => {
            return addNewsSource(args, context.prisma)
        }
    }
}