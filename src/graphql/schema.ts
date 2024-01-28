export const typeDefs = `#graphql
    type Subscription {
        id: ID!
        title: String!
        status: String!
        tags: [String]!
    }

    type Query {
        subscriptions: [Subscription]
    }
`