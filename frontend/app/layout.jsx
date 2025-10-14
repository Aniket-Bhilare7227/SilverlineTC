import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Silver Line Travel Compain",
  description: "Licensed, compassionate companions for seniors and travelers who need assistance. From planning to arrival, we're with you every step.",
  keywords: "travel companion, senior travel assistance, medical travel support, airport wheelchair service, mobility assistance, door-to-door travel care",
  authors: [{ name: "SilverlineTC" }],
  icons: {
    icon: '/favicon.ico?v=2',
  },
  openGraph: {
    siteName: "SilverlineTC",
    title: "SilverlineTC - Travel with confidence, care, and company",
    description: "Professional travel companions for seniors and travelers needing mobility or medical support—door to door.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SilverlineTC - Travel with confidence, care, and company",
    description: "Professional travel companions for seniors and travelers needing mobility or medical support",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Silver Line Travel Companions",
              alternateName: "SilverlineTC",
              url: "https://silverlinetc.com",
              logo: "https://silverlinetc.com/logo.png",
              description: "Professional travel companions for seniors and travelers who need assistance",
              contactPoint: [{
                "@type": "ContactPoint",
                telephone: "+19414046255",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: ["English"]
              }],
              sameAs: [
                "https://facebook.com/silverlinetc",
                "https://instagram.com/silverlinetc",
                "https://linkedin.com/company/silverlinetc"
              ]
            })
          }}
        />
      </head>
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
