'use client';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';
import React, { FC, ReactNode } from 'react';

type ConfiguredThemeProviderProps = {
    children: ReactNode
}

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export const ConfiguredThemeProvider: FC<ConfiguredThemeProviderProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}