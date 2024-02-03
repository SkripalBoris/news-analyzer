import { gql } from '@apollo/client';

export const ADD_NEWS_SOURCE = gql`
	mutation AddNewsSource($title: String!, $url: String!, $type: String!) {
		addNewsSource(title: $title, url: $url, type: $type) {
			title
			url
			type
		}
	}
`;