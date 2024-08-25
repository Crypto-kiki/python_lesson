// src/components/Header/index.js
"use client";

import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  TwitterIcon,
  MoonIcon,
} from "../icons";
import siteMetadata from "@/src/utils/siteMetadata";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <div className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button className="inline-block sm:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="w-max py-3 px-6 sm:px-8 font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2  backdrop-blur-sm z-50 transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <div className={mode === "light" ? "text-dark" : "text-white"}>
          <Link
            href="/"
            className="mr-2 relative inline-block hover:font-bold hover:scale-110 transition-transform duration-300 ease-out px-2 py-1 rounded"
          >
            Home
          </Link>
          <Link
            href="/categories/all"
            className="mx-2 relative inline-block hover:font-bold hover:scale-110 transition-transform duration-300 ease-out px-2 py-1 rounded"
          >
            Category
          </Link>
          <Link
            href="/about"
            className="mx-2 relative inline-block hover:font-bold hover:scale-110 transition-transform duration-300 ease-out px-2 py-1 rounded"
          >
            About
          </Link>
        </div>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav className="w-max py-3 px-8  font-medium capitalize hidden sm:flex items-center fixed top-6 right-1/2 translate-x-1/2  backdrop-blur-sm z-50">
        <div className={mode === "light" ? "text-dark" : "text-white"}>
          <Link
            href="/"
            className="mr-2 relative inline-block hover:font-bold hover:scale-110 transition-transform duration-300 ease-out px-2 py-1 rounded"
          >
            Home
          </Link>
          <Link
            href="/categories/all"
            className="mx-2 relative inline-block hover:font-bold hover:scale-110 transition-transform duration-300 ease-out px-2 py-1 rounded"
          >
            Category
          </Link>
          <Link
            href="/about"
            className="mx-2 relative inline-block hover:font-bold hover:scale-110 transition-transform duration-300 ease-out px-2 py-1 rounded"
          >
            About
          </Link>
        </div>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="hidden sm:flex items-center">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4"
          target="_blank"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div>
    </div>
  );
};

export default Header;
