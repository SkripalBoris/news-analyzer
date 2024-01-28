'use client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { FC, ReactNode } from 'react';

type ApolloProviderProps = {
    children: ReactNode
}

const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
});

export const ConfiguredApolloProvider: FC<ApolloProviderProps> = ({children}) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}