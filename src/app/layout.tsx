import type { Metadata } from "next";
import "./globals.css";
import "normalize.css";

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
      <body className="flex place-items-center min-h-[100svh] touch-none m-0 p-2 justify-center">{children}</body>
    </html>
  );
}