import Image from "next/image";

export default function BrandLogo() {
  return (
    <Image
      src="/lendsqr-logo.svg"
      alt="Lendsqr logo"
      width={200}
      height={50}
      priority={true}
    />
  );
}
