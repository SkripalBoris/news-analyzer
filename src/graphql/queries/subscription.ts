import { gql } from "@apollo/client";

export type GetSubscriptionsQueryType = {
    subscriptions: {
        id: string;
        title: string;
        status: 'enabled' | 'disabled'
        tags: string[];
    }[]
}

export const GET_SUBSCRIPTIONS = gql`
    query Subscriptions {
        subscriptions {
            id
            title,
            status,
            tags
        }
    }
`