// src/components/Footer/index.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 rounded-3xl bg-gradient-to-r from-dark to-dark/90 m-2 sm:m-10 flex flex-col items-center text-light">
      <h3 className="mt-14 font-semibold text-center text-2xl sm:text-3xl lg:text-4xl px-4">
        Python Lesson Lab
      </h3>
      <p className="mt-5 px-4 text-center sm:w-4/5 text-sm sm:text-base text-light/80">
        파이썬 강의 교안, 예제 코드, 학습 로드맵을 한 곳에서 정리한 실습형 학습 플랫폼입니다.
      </p>
      <div className="w-full mt-12 relative font-medium border-t border-solid border-light/20 py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-center">© {currentYear} Python Lesson Lab. All rights reserved.</span>
        <Link href="/sitemap.xml" className="text-center underline underline-offset-4">
          sitemap.xml
        </Link>
        <div className="text-center text-light/70">Built for Python learners.</div>
      </div>
    </footer>
  );
};

export default Footer;
