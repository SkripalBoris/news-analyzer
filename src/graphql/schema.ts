export const typeDefs = `#graphql
    type Subscription {
        id: ID!
        title: String!
        status: String!
        tags: [String]!
        articles: [Article]
    }

    type Article {
        url: String!
        title: String!
        content: String!
        image: String
    }

    type Query {
        subscriptions: [Subscription]
        subscriptionDetails(id: ID!): Subscription
    }

    type Mutation {
        addSubscription(title: String!, status: String!, tags: [String]!): Subscription
    }
`