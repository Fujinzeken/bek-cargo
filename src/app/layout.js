import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title:
    "BEK CARGO INC — Reliable Trucking & Logistics | Nationwide Freight Services",
  description:
    "BEK CARGO INC offers comprehensive trucking services with safe handling, real-time communication, and coast-to-coast coverage. 50+ trucks, 24/7 GPS tracking, nationwide freight solutions.",
  keywords: [
    "trucking",
    "logistics",
    "freight",
    "dry van",
    "nationwide shipping",
    "BEK CARGO",
    "coast to coast",
    "GPS tracking",
    "cargo transport",
  ],
  openGraph: {
    title: "BEK CARGO INC — Reliable Trucking & Logistics",
    description:
      "Comprehensive trucking services with safe handling, real-time communication, and coast-to-coast coverage.",
    type: "website",
    locale: "en_US",
    siteName: "BEK CARGO INC",
  },
  twitter: {
    card: "summary_large_image",
    title: "BEK CARGO INC — Reliable Trucking & Logistics",
    description:
      "Comprehensive trucking services with safe handling, real-time communication, and coast-to-coast coverage.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TruckingCompany",
              name: "BEK CARGO INC",
              description:
                "Comprehensive trucking services with safe handling, real-time communication, and coast-to-coast coverage.",
              foundingDate: "2021-04-22",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9674 Waterford Pl Apt 104",
                addressLocality: "Loveland",
                addressRegion: "OH",
                postalCode: "45140",
                addressCountry: "US",
              },
              telephone: "(543) 493-1023",
              email: "dispatch@bek-cargo.com",
              openingHours: "Mo-Su 00:00-23:59",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: 50,
                unitText: "trucks",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
