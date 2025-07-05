import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkTree Clone",
  description: "LinkTree Clone by Hafemi for practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
