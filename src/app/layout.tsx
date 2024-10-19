import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Poppins = localFont({
  src: "./public/fonts/Poppins-Regular.ttf",
  variable: "--poppins",
  weight: "100 900",
});

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
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${Poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
