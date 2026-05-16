import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Luxe Estates — Quiet Luxury Real Estate",
  description:
    "A premier real estate atelier crafting cinematic residential and commercial sanctuaries. Quiet luxury, considered design, enduring value.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Luxe Estates — Quiet Luxury Real Estate",
    description:
      "Cinematic residences and commercial sanctuaries crafted with quiet luxury.",
    type: "website"
  }
};

export const viewport = {
  themeColor: "#0a0d0c",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts are loaded over the network from Google's CDN — no build-time
            fetch (Cloudflare-Pages-friendly, plays nicely with edge / restricted
            CI). Preconnects keep first paint fast. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Playfair+Display:ital,wght@1,400;1,500&display=swap"
        />
      </head>
      <body className="bg-ink-950 text-ivory-100 antialiased has-custom-cursor">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
