import "./globals.css";

const siteUrl = "https://cheseny1996.github.io";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daniel Samoei | Software, Data & Applied AI",
  description:
    "Daniel Samoei is a full-stack software developer and data professional building practical software, thoughtful analytics, and useful AI systems.",
  applicationName: "Daniel Samoei Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Daniel Samoei",
    title: "Daniel Samoei | Software, Data & Applied AI",
    description:
      "Practical software, thoughtful analytics, and AI systems that earn their place.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Samoei — software, data, and applied AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Samoei | Software, Data & Applied AI",
    description:
      "Practical software, thoughtful analytics, and AI systems that earn their place.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#111514",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
