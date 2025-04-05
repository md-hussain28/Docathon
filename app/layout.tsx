import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docathon",
  description: "AI Hackathon for Healthcare by CellVerse",
  generator: "msh",
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
