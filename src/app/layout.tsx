import { Header } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Zupreme",
  description: "All - Shop - Zupreme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
