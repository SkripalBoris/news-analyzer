import React, { FC, ReactNode } from 'react';
import { ConfiguredApolloProvider } from './apollo-provider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ConfiguredThemeProvider } from './theme-provider';

type ProvidersProps = {
    children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
    return <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ConfiguredThemeProvider>
            <ConfiguredApolloProvider>
                {children}
            </ConfiguredApolloProvider>
        </ConfiguredThemeProvider>
    </AppRouterCacheProvider>
}