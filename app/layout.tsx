import type { Metadata } from "next";
import { Inter, Golos_Text } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const golos = Golos_Text({
  subsets: ['latin'],
  variable: '--font-golos',
});

export const metadata: Metadata = {
  title: "ChrsNikhil",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={golos.variable}>
      <head>
        <link rel="icon" href="/about/logo.png" sizes="64x64" />
        <link rel="icon" href="/about/logo.png" sizes="128x128" />
        <link rel="icon" href="/about/logo.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/about/logo.png" sizes="512x512" />
      </head>
      <body className="font-golos antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}