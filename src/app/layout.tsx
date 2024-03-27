import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit(
  { subsets: ["latin"] ,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Brainboost",
  description: "Upgrade your IQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
