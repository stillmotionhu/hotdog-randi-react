import type { Metadata } from "next";
import { props } from "@stylexjs/stylex";

import { Providers } from "@/app/providers";
import { PageWrapper } from "@components/layout/page";

import "./globals.css";

import { styles } from "./layout.stylex";

export const metadata: Metadata = {
  title: "Hot-Dog Randevouz",
  description: "Rate hot-dogs with your significant other.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=family=Stack+Sans+Text:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body {...props(styles.body)}>
        <Providers>
          <PageWrapper>{children}</PageWrapper>
        </Providers>
      </body>
    </html>
  );
}
