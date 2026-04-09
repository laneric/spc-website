import type { Metadata } from "next";
import { BetaTopbar } from "@/components/BetaTopbar";
import { BetaFooter } from "@/components/BetaFooter";
import { inter, instrumentSerif } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "SPC Beta",
  description: "Beta version of the Software Product @ Cal website.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function BetaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased bg-zinc-950 text-white flex flex-col min-h-screen font-sans">
        <BetaTopbar />

        {/* Page content */}
        <main className="flex-1 flex flex-col">{children}</main>

        <BetaFooter />
      </body>
    </html>
  );
}
