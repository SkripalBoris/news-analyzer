export const typeDefs = `#graphql
    type Subscription {
        id: ID!
        title: String!
    }

    type Query {
        subscriptions: [Subscription]
    }
`