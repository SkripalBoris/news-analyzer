import { gql } from "@apollo/client";

export type GetSubscriptionsQueryType = {
    subscriptions: {
        id: string;
        title: string;
        status: 'enabled' | 'disabled'
        tags: string[];
    }[]
}

export type GetSubscriptionDetailsQueryType = {
    subscriptionDetails: {
        id: string;
        title: string;
        status: 'enabled' | 'disabled'
        tags: string[];
        articles: {
            url: string
            title: string
            content: string
            image: string
        }[]
    }
}


export const GET_SUBSCRIPTIONS = gql`
    query Subscriptions {
        subscriptions {
            id
            title
            status
            tags
        }
    }
`

export const GET_SUBSCRIPTION_DETAILS = gql`
    query SubscriptionDetails($id: ID!) {
        subscriptionDetails(id: $id) {
            id
            title
            status
            tags
            articles {
                url
                title
                content
                image
            }
        }
    }
`