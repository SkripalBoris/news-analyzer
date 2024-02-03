import { gql } from '@apollo/client';

export const subscriptionsTypeDefs = gql`
    type Subscription {
        id: ID!
        title: String!
        status: String!
        tags: [String]!
        articles: [Article]
    }

    extend type Query {
        subscriptions: [Subscription]
        subscriptionDetails(id: ID!): Subscription
    }

    extend type Mutation {
        addSubscription(title: String!, status: String!, tags: [String]!): Subscription
    }
`