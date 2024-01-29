import { Context } from '@/pages/api/graphql';
import { Subscription } from '@prisma/client';
import Parser from 'rss-parser';

function prepareSubscription(rawSubscription: Subscription): Omit<Subscription, 'tags'> & {tags: string[]} {
    return {
        ...rawSubscription,
        tags: rawSubscription.tags.split(';')
    }
}

export const resolvers = {
    Query: {
        subscriptions: async (_parent: any, _args: any, context: Context) => {
            const rawSubscriptions = await context.prisma.subscription.findMany()
            return rawSubscriptions.map(prepareSubscription)
        },
        subscriptionDetails: async (_parent: any, args: { id: string }, context: Context) => {
            const rawSubscription = await context.prisma.subscription.findFirstOrThrow({
                where: {
                    id: Number(args.id)
                }
            });

            const subscription = prepareSubscription(rawSubscription)

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
            const item = await context.prisma.subscription.create({
                data: {
                    title: args.title,
                    status: args.status,
                    tags: args.tags.join(';')
                }
            })

            return prepareSubscription(item);
        }
    }
}