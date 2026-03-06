import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full h-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Lessons
      </h2>
      <p className="w-full mt-3 text-gray dark:text-light/70">
        Start with hand-picked Python lessons that balance core concepts and practice.
      </p>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative rounded-2xl border border-gray/20 p-3 bg-white/70 dark:bg-dark/60">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative rounded-2xl border border-gray/20 p-3 bg-white/70 dark:bg-dark/60">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
