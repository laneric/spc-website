import { BetaTopbar } from "@/components/BetaTopbar";
import { BetaFooter } from "@/components/BetaFooter";
// Announcement bar removed 2026-10-28 (Product Sprint is over). To reuse it,
// import AnnouncementBar from "@/components/AnnouncementBar" and render it
// above <BetaTopbar />, then set top-14 on the topbar wrappers again.
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
        <BetaTopbar />

        {/* Page content */}
        <main className="flex-1 flex flex-col">{children}</main>

        <BetaFooter />
      </body>
    </html>
  );
}