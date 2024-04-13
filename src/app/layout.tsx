import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Providers from "@/providers";
import "./globals.css";
import AppFooter from "@/components/AppFooter/AppFooter";
import AppNavbar from "@/components/AppNavbar/AppNavbar";

const outfit = Outfit(
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
      <body className={outfit.className}>
      <AppNavbar/>
        {children}
        <AppFooter/>
        </body>
    </html>
    
  );
}
