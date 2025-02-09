import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/SideBar/Sidebar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="flex place-items-center">
          <div className="w-[10%] h-screen bg-gray-100 p-4 flex justify-center place-items-center">
            <Sidebar/>
          </div>
          <div className="w-[90%]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
