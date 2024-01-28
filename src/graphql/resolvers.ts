import { subscriptions } from '@/data'

export const resolvers = {
    Query: {
        subscriptions: async () => {
            return subscriptions
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