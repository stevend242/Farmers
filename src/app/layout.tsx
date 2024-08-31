import { ClerkProvider } from '@clerk/nextjs';
import Script from 'next/script';
import Translate from '~/components/translate';
import { Toaster } from '~/components/ui/toaster';

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
        <head>
          {/* Google Translate */}
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          ></Script>

          {/* Google Translate CSS */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
          />
        </head>
        <body>
          <Translate />
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
