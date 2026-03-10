// src/components/Home/RecentPosts.js

import { sortBlogsByUpdatedAt } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const latestBlogs = sortBlogsByUpdatedAt(blogs).slice(0, 6);

  return (
    <section className="mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-between items-end gap-4">
        <div>
          <h2 className="w-fill inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Latest Updates
          </h2>
          <p className="mt-2 text-gray dark:text-light/70">Recently updated lesson materials.</p>
        </div>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-4 text-base md:text-lg"
        >
          View all lessons
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {latestBlogs.map((blog, index) => {
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
