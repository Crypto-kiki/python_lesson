// src/components/Header/index.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { SunIcon, MoonIcon } from "../icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const mobileNavRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggle = () => {
    setClick((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!click) return;

      const target = event.target;
      const isInMenu = mobileNavRef.current?.contains(target);
      const isInButton = menuButtonRef.current?.contains(target);

      if (!isInMenu && !isInButton) {
        setClick(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [click]);

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button
        ref={menuButtonRef}
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="메뉴 열기"
        aria-expanded={click}
        aria-controls="mobile-nav"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{ opacity: click ? 0 : 1 }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        id="mobile-nav"
        ref={mobileNavRef}
        className="w-max py-3 px-6 sm:px-8 font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 backdrop-blur-md bg-light/70 dark:bg-dark/80 border border-gray/20 rounded-2xl z-50 transition-all ease duration-300 sm:hidden"
        style={{ top: click ? "1rem" : "-5rem" }}
      >
        <div className={mode === "light" ? "text-dark" : "text-light"}>
          <Link href="/" className="mx-2 relative inline-block hover:font-bold hover:scale-105 transition-transform duration-300 ease-out px-2 py-1 rounded">
            홈
          </Link>
          <Link
            href="/categories/all"
            className="mx-2 relative inline-block hover:font-bold hover:scale-105 transition-transform duration-300 ease-out px-2 py-1 rounded"
          >
            강의
          </Link>
        </div>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="테마 전환"
        >
          {mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />}
        </button>
      </nav>

      <nav className="w-max py-3 px-8 font-medium capitalize hidden sm:flex items-center fixed top-6 right-1/2 translate-x-1/2 backdrop-blur-md bg-light/70 dark:bg-dark/80 border border-gray/20 z-50 rounded-full">
        <div className={mode === "light" ? "text-dark" : "text-light"}>
          <Link href="/" className="mr-2 relative inline-block hover:font-bold hover:scale-105 transition-transform duration-300 ease-out px-2 py-1 rounded">
            홈
          </Link>
          <Link
            href="/categories/all"
            className="mx-2 relative inline-block hover:font-bold hover:scale-105 transition-transform duration-300 ease-out px-2 py-1 rounded"
          >
            강의
          </Link>
        </div>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="테마 전환"
        >
          {mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
