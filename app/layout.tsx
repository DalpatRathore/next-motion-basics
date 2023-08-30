import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WikiRocket!",
  description: "This is Wiki Rocket Project!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-700 ${inter.className}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
