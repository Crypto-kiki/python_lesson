// src/components/Footer/index.js
import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Explore the Future of Web & Blockchain
      </h3>
      <p className="mt-5 px-4 text-center w-3/4 font-light">
        Dive into the latest trends in front-end and blockchain technologies.
        <br />
        Subscribe for cutting-edge guides, insightful analyses, and engaging
        stories from the forefront of digital innovation.
      </p>
      <div className="flex items-center mt-8">
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-light" />
        </a>
      </div>
      <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex items-center   justify-between">
        <span className="text-center">
          &copy; 2024 Baekki. All rights reserved.{" "}
        </span>
        <Link href="/sitemap.xml" className="text-center underline">
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
