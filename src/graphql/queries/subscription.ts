import { gql } from "@apollo/client";

export const GET_SUBSCRIPTIONS = gql`
    query Subscriptions {
        subscriptions {
            id
            title
        }
    }
`