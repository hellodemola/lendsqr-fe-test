import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="logo-container">
        <Image
          src="/lendsqr-logo.svg"
          alt="Lendsqr logo"
          width={200}
          height={50}
          priority={true}
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
        <div className="auth-col auth-content">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
