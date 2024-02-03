import {merge} from 'lodash'
import { newsSourcesResolvers } from './news-sources'
import { subscriptionsResolvers } from './subscriptions'

export const resolvers = merge(newsSourcesResolvers, subscriptionsResolvers)