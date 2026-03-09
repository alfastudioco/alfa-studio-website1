import "./globals.css";

export const metadata = {
  title: "Alfa Studio",
  description: "Luxury cabinetry and custom millwork.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
