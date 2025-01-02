import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styling/globals.scss";
import Image from "next/image";

const avenirNext = localFont({
  src: [
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
      <body>
        <div className="grid grid-2">
          <div>
            <h1>Lendsqr</h1>
            <Image
              src="/logo.png"
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
