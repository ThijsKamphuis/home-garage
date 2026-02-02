import type { Metadata } from "next";
import "./globals.css";
import { default as Header } from "./components/header";
import { default as Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Home Garage",
  description: "Self Hosted Garage Logging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <Header /> */}
        <div className="max-w-md mx-auto overflow-hidden">
          {children}
        </div>
        <Navbar />
      </body>
    </html>
  );
}
