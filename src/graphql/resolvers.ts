import { subscriptions } from '@/data'
import Parser from 'rss-parser';

export const resolvers = {
    Query: {
        subscriptions: async () => {
            return subscriptions
        },
        subscriptionDetails: async (_parent: any, args: { id: string }) => {
            const subscription = subscriptions.find(({ id }) => id == args.id);
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
        addSubscription: async (_parent: any, args: any) => {
            const item = {
                id: Math.random().toString().substring(2),
                title: args.title,
                status: args.status,
                tags: args.tags
            }

            subscriptions.push(item)

            return item;
        }
    }
}