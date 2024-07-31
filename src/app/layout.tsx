import { ClerkProvider } from '@clerk/nextjs';
import { ShadcnProvider } from '@shadcn/ui';
import '~/styles/globals.css';
import { TRPCReactProvider } from '~/trpc/react';

export const metadata = {
  title: 'Agriculture Marketplace',
  description: 'A comprehensive marketplace for farmers',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ShadcnProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ShadcnProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
