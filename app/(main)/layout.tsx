import type { Metadata } from "next";
import Link from "next/link";
import { BetaTopbar } from "@/components/BetaTopbar";
import { BetaFooter } from "@/components/BetaFooter";
import { siteMetadata } from "@/lib/site-metadata";
import { inter, instrumentSerif } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  ...siteMetadata,
  robots: {
    index: false,
    follow: true,
  },
};


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased bg-zinc-950 text-white flex flex-col min-h-screen font-sans">
        <div className="bg-amber-100 text-amber-900 text-sm font-medium px-4 py-2 text-center">
          You are viewing the deprecated SPC site. Visit the latest site at{" "}
          <Link href="/" className="underline underline-offset-2">
            spcberkeley.org
          </Link>
          .
        </div>
        <BetaTopbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <BetaFooter />
      </body>
    </html>
  );
}
