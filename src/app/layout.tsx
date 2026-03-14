// src/app/layout.tsx
import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { siteConfig } from "@/config/site.config";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],  // ✅ FIX 1 — spread removes readonly
  icons: [
    {
      url: "/favicon-16x16.ico",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/favicon-32x32.ico",
      rel: "icon",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon-48x48.ico",
      rel: "icon",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicon-64x64.ico",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <Suspense fallback={null}>
        {isDebug ? null : <GoogleAnalytics />}
      </Suspense>

      <body className={isDebug ? "debug-screens" : ""}>
        <Suspense fallback={null}>
          {isDebug ? <WebVitals /> : null}
        </Suspense>
        <Suspense
          fallback={
            <div className="h-16 bg-gray-200 animate-pulse"></div>
          }
        >
          <FloatingNavbar
            className="app_nav"
            navItems={[...siteConfig.navItems]}  // ✅ FIX 2 — spread removes readonly
          />
        </Suspense>
        <main>{children}</main>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;