import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider

export const metadata: Metadata = {
  title: 'NiksFolio',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}