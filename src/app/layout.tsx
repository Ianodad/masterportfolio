import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cx from "classnames";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ian Adera",
  description: "Portfolio website of Ian Adera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const combinedClassName = cx(
    inter.className,
    "font-sans",
    "bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
  );
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Analytics mode={"production"} />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <body className={combinedClassName}>{children}</body>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
