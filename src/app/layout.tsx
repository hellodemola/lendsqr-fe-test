import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styling/auth.scss";

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

export const metadata: Metadata = {
  title: "Lendsqr login page",
  description: "Login page for Lendsqr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={avenirNext.className}>
      <body>{children}</body>
    </html>
  );
}
