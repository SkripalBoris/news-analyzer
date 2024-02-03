import { gql } from '@apollo/client';

export const articlesTypeDefs = gql`
    type Article {
        url: String!
        title: String!
        content: String!
        image: String
    }
`