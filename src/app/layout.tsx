import type { Metadata } from "next";
import localFont from "next/font/local";
import { Work_Sans, Roboto } from "next/font/google";
import "../styling/global.scss";
import ClaritySetup from "./clearitySetUp";

const avenirNext = localFont({
  src: [
    {
      path: "../fonts/AvenirNextLTPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/AvenirNextLTPro-Demi.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/AvenirNextLTPro-Bold.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

const workSans = Work_Sans({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lendsqr vendor Dashboard",
  description: "Lendsqr | Ademola onasoga assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenirNext.className} ${workSans.className} ${roboto.className}`}
    >
      <ClaritySetup />
      <body>{children}</body>
    </html>
  );
}
