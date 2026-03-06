// src/components/Home/RecentPosts.js

import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-between items-end gap-4">
        <div>
          <h2 className="w-fill inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Latest Updates
          </h2>
          <p className="mt-2 text-gray dark:text-light/70">
            Recently updated lesson notes and examples.
          </p>
        </div>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-4 text-base md:text-lg"
        >
          Browse all lessons
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
