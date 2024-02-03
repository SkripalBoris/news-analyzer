import { gql } from '@apollo/client';
import { articlesTypeDefs } from './articles';
import { newsSourcesTypeDefs } from './news-sources';
import { subscriptionsTypeDefs } from './subscription';

const baseTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

export const typeDefs = [
    baseTypeDefs,
    subscriptionsTypeDefs,
    articlesTypeDefs,
    newsSourcesTypeDefs
]