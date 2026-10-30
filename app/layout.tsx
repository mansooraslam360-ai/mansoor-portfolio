import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mansoor Aslam | Backend Developer",
  description:
    "The portfolio of Mansoor Aslam, a computer science student focused on backend development, APIs, and database-driven applications.",
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
