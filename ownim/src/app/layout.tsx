import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import IsMobileDevice from "@/components/utils/DevicePlatform";
import FinalNavbar from "@/components/Navigation/FinalNavbar";
export const metadata: Metadata = {
  title: "Ownim",
  description: "we own your trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <IsMobileDevice>
      <body
      style={{overflowX:'hidden',backgroundColor:'white'}}
      >
    <FinalNavbar/>
        {children}
      </body>
      </IsMobileDevice>
    </html>
  );
}
