import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Metadata } from 'next';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>
            <Providers>
              <CssBaseline />
              {children}
            </Providers>
        </React.StrictMode>
      </body>
    </html>
  );
}
