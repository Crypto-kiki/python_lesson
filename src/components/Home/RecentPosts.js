// src/components/Home/RecentPosts.js

import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { uiFlags } from "@/src/utils/uiFlags";

const RecentPosts = ({ blogs }) => {
  const refined = uiFlags.enableHomeUiRefinements;

  return (
    <section className="mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-between items-end gap-4">
        <div>
          <h2 className="w-fill inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            최신 업데이트
          </h2>
          <p className="mt-2 text-gray dark:text-light/70">최근 수정된 강의 자료를 빠르게 확인하세요.</p>
        </div>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-4 text-base md:text-lg"
        >
          모든 강의 보기
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8 sm:gap-10 lg:gap-12 mt-10 sm:mt-12 md:mt-14">
        {blogs.map((blog) => {
          return (
            <article
              key={blog._id}
              className={`col-span-1 row-span-1 relative rounded-2xl border p-3 ${
                refined
                  ? "border-gray/30 shadow-sm hover:shadow-md transition-shadow bg-white/80 dark:bg-dark/65"
                  : "border-transparent"
              }`}
            >
              <BlogLayoutThree blog={blog} dateType="updated" />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
