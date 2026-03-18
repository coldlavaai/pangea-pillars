import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pangea - Construction Workforce Management Software UK",
    template: "%s | Pangea"
  },
  description: "AI-powered construction workforce management. WhatsApp-native onboarding, CSCS compliance automation, GPS timesheets. Replace agencies from £497/month.",
  keywords: ["construction workforce management", "CSCS compliance software", "construction onboarding", "replace recruitment agencies", "construction software UK"],
  authors: [{ name: "Pangea" }],
  creator: "Pangea",
  publisher: "Pangea",
  metadataBase: new URL("https://joinpangea.ai"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://joinpangea.ai",
    siteName: "Pangea",
    title: "Pangea - Construction Workforce Management Software UK",
    description: "AI-powered construction workforce management. WhatsApp-native onboarding, CSCS compliance automation, GPS timesheets.",
    images: [
      {
        url: "/images/pangea-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pangea Construction Workforce Management"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pangea - Construction Workforce Management Software UK",
    description: "AI-powered construction workforce management. WhatsApp-native onboarding, CSCS compliance automation, GPS timesheets.",
    images: ["/images/pangea-og.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
