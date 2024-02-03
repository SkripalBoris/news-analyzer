import { gql } from '@apollo/client';

export const newsSourcesTypeDefs = gql`
    type NewsSource {
        id: ID!
        title: String!
        url: String!
        type: String!
    }

    extend type Query {
        newsSources: [NewsSource]
    }

    extend type Mutation {
        addNewsSource(title: String!, url: String!, type: String!): NewsSource
    }
`