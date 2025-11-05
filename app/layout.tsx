import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dcrm.life - Simple CRM for Solo Professionals",
  description: "A refreshingly simple CRM for solo professionals. Just a pipeline, follow-up reminders, and the 3 metrics that matter. No bloat. No complexity.",
  keywords: ["CRM", "solo professional", "freelancer", "consultant", "simple CRM", "deal tracking", "pipeline management"],
  authors: [{ name: "dcrm.life" }],
  creator: "dcrm.life",
  publisher: "dcrm.life",
  metadataBase: new URL("https://dcrm.life"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/icon', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dcrm.life",
    title: "dcrm.life - Simple CRM for Solo Professionals",
    description: "A refreshingly simple CRM for solo professionals. Just a pipeline, follow-up reminders, and the 3 metrics that matter. No bloat. No complexity.",
    siteName: "dcrm.life",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'dcrm.life - Simple CRM for Solo Professionals',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dcrm.life - Simple CRM for Solo Professionals",
    description: "A refreshingly simple CRM for solo professionals. Just a pipeline, follow-up reminders, and the 3 metrics that matter. No bloat. No complexity.",
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
