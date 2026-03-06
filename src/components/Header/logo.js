// src/components/Header/logo.js

import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-accent/50 dark:border-accentDark/60 mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="Python Bootcamp"
          className="w-full h-auto rounded-r-full"
          sizes="33vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">Python Bootcamp</span>
    </Link>
  );
};

export default Logo;
