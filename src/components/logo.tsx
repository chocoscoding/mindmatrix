import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" aria-label="home" className="flex items-center space-x-2">
      {/* <p className="text-white font-bold font-sans text-2xl">MM</p> */}
      <Image src="/mmlogo.png" alt="Logo" width={32} height={32} className="h-8 w-auto rounded-lg" />
    </Link>
  );
};
