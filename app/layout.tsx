import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mansoor Aslam | Python Backend Developer",
  description:
    "Mansoor Aslam is a Python Backend Developer and Computer Science graduate building FastAPI applications, PostgreSQL databases, and multi-tenant backend systems.",
  keywords: [
    "Mansoor Aslam",
    "Python Backend Developer",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Backend Development",
    "Pakistan",
  ],
  openGraph: {
    type: "website",
    title: "Mansoor Aslam | Python Backend Developer",
    description:
      "Explore backend projects, technologies, experience and the CV of Mansoor Aslam.",
  },
  twitter: {
    card: "summary",
    title: "Mansoor Aslam | Python Backend Developer",
    description: "Backend projects, skills and experience built with Python and FastAPI.",
  },
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
