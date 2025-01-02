import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styling/globals.scss";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="grid grid-2">
          <div>
            <Image
              src="/lendsqr-logo.svg"
              alt="Lendsqr logo"
              width={100}
              height={100}
            />
          </div>
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
