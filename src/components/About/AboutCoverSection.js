// src/components/About/AboutCoverSection.js

import Image from "next/image";
import React from "react";
import profileCharater from "@/public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharater}
          alt="Baekki"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left">
          Imagine Limitlessly, Strive Relentlessly, Surpass Expectations!
        </h2>
        <p className="font-medium capitalize mt-4">
          In the fields of blockchain and front-end development, I am dedicated
          to redefining user experiences with innovative solutions.
          Additionally, I employ modern web technologies to design intuitive and
          visually compelling interfaces, ensuring seamless interaction and
          navigation for users. If you&apos;re envisioning a project, let&apos;s
          collaborate to bring it to fruition.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
