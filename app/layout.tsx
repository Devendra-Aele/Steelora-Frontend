import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import Footer from "@/components/layout/Footer";
import SocialMediaSection from "@/components/reusables/SocialMediaBox";
import { footerData } from "@/constants/footerContent";
import localFont from "next/font/local";
import Script from "next/script";
import { Suspense } from "react";

const RidleyGrotesk = localFont({
  src: [
    {
      path: "../public/font/RidleyGroteskLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/RidleyGroteskLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/RidleyGroteskRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/RidleyGroteskThin.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/RidleyGroteskMedium.otf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../public/font/RidleyGroteskMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/font/RidleyGroteskSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/RidleyGroteskSemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/font/RidleyGroteskBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/RidleyGroteskBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/RidleyGroteskExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/font/RidleyGroteskBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-ridleyGrotesk",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Manufacturer and Supplier of Stainless Steel Railings | Steelora",

  description:
    "A Premium Manufacturer and Supplier of stainless steel railings, aluminum railings, PVD sheets, profiles, decorative mesh, and facade solutions | Steelora",

  openGraph: {
    title:
      "Manufacturer and Supplier of Stainless Steel Railings | Steelora",

    description:
      "A Premium Manufacturer and Supplier of stainless steel railings, aluminum railings, PVD sheets, profiles, decorative mesh, and facade solutions | Steelora",
    images: [
      {
        url: "https://wip.steelora.com/assets/navbar/nav-logo-2.png",
        width: 100,
        height: 50,
        alt: "Steelora",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="apolloTracker"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function initApollo(){
              var n=Math.random().toString(36).substring(7),
              o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n,
              o.async=!0,o.defer=!0,
              o.onload=function(){
                window.trackingFunctions.onLoad({appId:"663115e43a04cb0573850392"})
              },
              document.head.appendChild(o)
            }
            initApollo();
          `,
        }}
      />
      <html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon//favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon//favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta name="application-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body
          className={`${poppins.className} ${montserrat.className} ${RidleyGrotesk.variable} bg-white dark:bg-white`}
        >
          <div className="mb-10">
            <Suspense>
              <Navbar />
            </Suspense>
          </div>

          {children}
          <SocialMediaSection />
          <Footer footerData={footerData} />
        </body>
      </html>
    </>
  );
}
