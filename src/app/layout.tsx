import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darwin Becker",
  description: "Personal portfolio of Darwin Becker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
