import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alfa Studio",
  description: "Luxury cabinetry and custom millwork.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
