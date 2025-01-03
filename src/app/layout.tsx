import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styling/auth.scss";
import Image from "next/image";

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
      <body>
        <div className="logo-container">
          <Image
            src="/lendsqr-logo.svg"
            alt="Lendsqr logo"
            width={200}
            height={50}
          />
        </div>
        <div className="auth-container">
          <div className="auth-col desktop">
            <Image
              src="/illustrations/login.svg"
              alt="Lendsqr text"
              width={700}
              height={700}
            />
          </div>
          <div className="auth-col auth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
