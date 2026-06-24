import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Footer, Header, MobileTabBar } from "@/components/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexoit.com.au"),
  title: {
    default: "NEXOIT | Managed IT, Cloud, Security, and Web Services",
    template: "%s | NEXOIT",
  },
  description:
    "NEXOIT provides managed IT, Microsoft 365, cloud, security, web development, and professional engineering services for Australian SMBs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileTabBar />
      </body>
    </html>
  );
}
