import type { Metadata } from "next";
import "./globals.css";

// Jost font will be loaded via CSS from Google Fonts CDN as a fallback
// Using CSS import to avoid Next.js font loader issues in restricted environments

export const metadata: Metadata = {
  title: "SmartCamp.AI Web Design Showcase | 200+ Spectacular Components",
  description: "Explore 200+ carefully curated, spectacular web design components with live demos and copyable code. Your complete resource for modern web design inspiration.",
  keywords: ["web design", "ui components", "design inspiration", "react components", "tailwind css", "framer motion", "animations", "SmartCamp.AI"],
  authors: [{ name: "SmartCamp.AI", url: "https://smartcamp.ai" }],
  creator: "SmartCamp.AI",
  publisher: "SmartCamp.AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartcamp.ai",
    siteName: "SmartCamp.AI Web Design Showcase",
    title: "SmartCamp.AI Web Design Showcase | 200+ Spectacular Components",
    description: "Explore 200+ carefully curated, spectacular web design components with live demos and copyable code.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartCamp.AI Web Design Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartCamp.AI Web Design Showcase",
    description: "200+ spectacular web design components with live demos",
    images: ["/og-image.png"],
    creator: "@SmartCampAI",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
  verification: {
    google: "google-site-verification-code", // Add actual code when deploying
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-jost antialiased">
        {children}
      </body>
    </html>
  );
}
