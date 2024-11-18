import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import each weight of the Poppins font
const PoppinsRegular = localFont({
  src: "./public/fonts/Poppins-Regular.ttf",
  variable: "--poppins-regular",
  weight: "400", // Regular
});

const PoppinsBold = localFont({
  src: "./public/fonts/Poppins-Bold.ttf",
  variable: "--poppins-bold",
  weight: "700", // Bold
});

const PoppinsExtraBold = localFont({
  src: "./public/fonts/Poppins-ExtraBold.ttf",
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
        className={`${PoppinsRegular.variable} ${PoppinsBold.variable} ${PoppinsExtraBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
