import { BetaTopbar } from "@/components/BetaTopbar";
import { BetaFooter } from "@/components/BetaFooter";
// Added 2026-10-26: announcement bar for the Product Sprint event
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { siteMetadata } from "@/lib/site-metadata";
import { inter, instrumentSerif } from "../fonts";
import "../globals.css";

export const metadata = siteMetadata;

export default function BetaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased bg-zinc-950 text-white flex flex-col min-h-screen font-sans">
        <AnnouncementBar />
        <BetaTopbar />

        {/* Page content */}
        <main className="flex-1 flex flex-col">{children}</main>

        <BetaFooter />
      </body>
    </html>
  );
}