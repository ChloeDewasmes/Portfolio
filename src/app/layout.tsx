import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LangProvider } from "./LangContext";

// Import each weight of the Poppins font
const PoppinsRegular = localFont({
  src: "../fonts/Poppins-Regular.ttf",
  variable: "--poppins-regular",
  weight: "400", // Regular
});

const PoppinsMedium = localFont({
  src: "../fonts/Poppins-Medium.ttf",
  variable: "--poppins-medium",
  weight: "500", // Medium
});

const PoppinsBold = localFont({
  src: "../fonts/Poppins-Bold.ttf",
  variable: "--poppins-bold",
  weight: "700", // Bold
});

const PoppinsExtraBold = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--poppins-extrabold",
  weight: "800", // Extra Bold
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
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${PoppinsRegular.variable} ${PoppinsMedium.variable} ${PoppinsBold.variable} ${PoppinsExtraBold.variable} antialiased`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
