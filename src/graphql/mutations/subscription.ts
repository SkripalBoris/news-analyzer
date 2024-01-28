import { gql } from '@apollo/client';

export const ADD_SUBSCRIPTION = gql`
	mutation AddSubscription($title: String!, $status: String!, $tags: [String]!) {
		addSubscription(title: $title, status: $status, tags: $tags) {
			title
			status
			tags
		}
	}
`;