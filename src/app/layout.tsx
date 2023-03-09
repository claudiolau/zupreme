"use client";

import "./globals.css";

// not supported in 13.2
// export const metadata = {
//   title: "Zupreme",
//   description: "All - Shop - Zupreme",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>All - Shop - Zupreme</title>

      <body>{children}</body>
    </html>
  );
}
