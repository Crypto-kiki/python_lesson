import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cx } from "@/src/utils";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetadata";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "ko-kr",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light text-dark dark:bg-dark dark:text-light"
        )}
      >
        <Script id="theme-script">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
