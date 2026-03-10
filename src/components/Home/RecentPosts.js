// src/components/Home/RecentPosts.js

import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {blogs.map((blog) => {
          return (
            <article key={blog._id} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} dateType="updated" />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
