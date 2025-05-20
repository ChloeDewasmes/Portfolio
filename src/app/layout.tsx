import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./LangContext";

export const metadata: Metadata = {
  title: "Chloe Dewasmes - Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="font-poppins antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
