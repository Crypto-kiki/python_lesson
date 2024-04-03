// src/components/Footer/index.js
import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetadata";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Explore the Future of Web & Blockchain
      </h3>
      <p className="mt-5 px-4 text-center sm:w-4/5 text-sm sm:text-base font-light dark:font-medium">
        Dive into the latest trends in front-end and blockchain technologies.
        <br />
        Subscribe for cutting-edge guides, insightful analyses, and engaging
        stories from the forefront of digital innovation.
      </p>
      <div className="flex items-center mt-8">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark" />
        </a>
      </div>
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center   justify-between">
        <span className="text-center">
          &copy; 2024 Baekki. All rights reserved.{" "}
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made by{" "}
          <a href="http://localhost:3000/" className="underline">
            Baekki
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
