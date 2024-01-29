import { Context } from '@/pages/api/graphql';
import { createSubscription, getSubscription, getSubscriptions } from '@/services/subscription';
import Parser from 'rss-parser';

export const resolvers = {
    Query: {
        subscriptions: async (_parent: any, _args: any, context: Context) => {
            return await getSubscriptions(context.prisma)
        },
        subscriptionDetails: async (_parent: any, args: { id: number }, context: Context) => {
            const subscription = await getSubscription(Number(args.id), context.prisma)

            let articles: any[] = []; //TODO: fix
            if (subscription?.status === 'enabled') {
                const parser = new Parser()
                const feed = await parser.parseURL('http://static.feed.rbc.ru/rbc/logical/footer/news.rss');
                articles = feed.items.map(({ title, link, content, enclosure }) => ({
                    title,
                    url: link,
                    content,
                    image: enclosure?.url
                })).filter(({ title, content }) => {
                    return subscription?.tags.some((tag) => title?.toLowerCase().includes(tag.toLocaleLowerCase()))
                        || subscription?.tags.some((tag) => content?.toLowerCase().includes(tag.toLocaleLowerCase()))
                })
            }

            return {
                ...subscription,
                articles
            }
        }
    },
    Mutation: {
        addSubscription: async (_parent: any, args: any, context: Context) => {
            return createSubscription(args, context.prisma)
        }
    }
}