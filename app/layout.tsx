import type { Metadata } from "next";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Product @ Cal (SPC)",
  description: "Bold. Modern. Minimal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased bg-white text-zinc-900 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col">
          <Topbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
