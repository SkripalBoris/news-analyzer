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

    type NewsSource {
        id: ID!
        title: String!
        url: String!
        type: String!
    }

    type Query {
        subscriptions: [Subscription]
        subscriptionDetails(id: ID!): Subscription
        newSources: [NewsSource]
    }

    type Mutation {
        addSubscription(title: String!, status: String!, tags: [String]!): Subscription
        addNewsSource(title: String!, url: String!, type: String!)
    }
`