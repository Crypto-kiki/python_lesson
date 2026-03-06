// src/components/Footer/index.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 rounded-3xl bg-gradient-to-r from-dark to-dark/90 m-2 sm:m-10 flex flex-col items-center text-light">
      <div className="w-full relative font-medium py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-center">© {currentYear} Python Bootcamp. All rights reserved.</span>
        <Link href="/sitemap.xml" className="text-center underline underline-offset-4">
          Sitemap
        </Link>
        <div className="text-center text-light/70">Practical Python lessons for builders.</div>
      </div>
    </footer>
  );
};

export default Footer;
