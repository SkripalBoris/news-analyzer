import { subscriptions } from '@/data'

export const resolvers = {
    Query: {
        subscriptions: async () => {
            return subscriptions
        }
    }
}