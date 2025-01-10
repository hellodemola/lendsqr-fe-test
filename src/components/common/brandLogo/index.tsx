import Image from "next/image";

export default function BrandLogo({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  if (isMobile)
    return (
      <Image
        src="/lendsqr-logo.svg"
        alt="Lendsqr logo"
        width={120}
        height={50}
        priority={true}
      />
    );
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
