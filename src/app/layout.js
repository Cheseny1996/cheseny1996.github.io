import "./globals.css";

const siteUrl = "https://cheseny1996.github.io";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daniel Cheseny Samoei | Software Engineer, ML Scientist & Physicist",
  description:
    "Daniel Cheseny Samoei is a software engineer, machine learning scientist, and physicist specializing in AI model evaluation, code review, testing, and production machine learning.",
  applicationName: "Daniel Samoei Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Daniel Samoei",
    title: "Daniel Cheseny Samoei | Software Engineer, ML Scientist & Physicist",
    description:
      "AI model evaluation, code review, software engineering, and machine learning grounded in physics and rigorous testing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Cheseny Samoei — software engineer, machine learning scientist, and physicist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Cheseny Samoei | Software Engineer, ML Scientist & Physicist",
    description:
      "AI model evaluation, code review, software engineering, and machine learning grounded in physics and rigorous testing.",
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
