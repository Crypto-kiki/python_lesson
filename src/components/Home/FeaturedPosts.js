import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs, fallbackBlog = null }) => {
  // 기준: 홈 커버에 노출된 최신 발행 글을 제외한 이후 글들 중 최대 3개
  const primaryFeaturedBlog = blogs[0] || fallbackBlog;
  const secondaryFeaturedBlogs = blogs.slice(1);

  if (!primaryFeaturedBlog) {
    return null;
  }

  return (
    <section className="w-full h-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Lessons
      </h2>
      <p className="w-full mt-3 text-gray dark:text-light/70">
        Start with the most useful lesson materials and practical walkthroughs.
      </p>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={primaryFeaturedBlog} />
        </article>

        {secondaryFeaturedBlogs.map((blog) => (
          <article
            key={blog._id}
            className="col-span-2 sm:col-span-1 row-span-1 relative rounded-2xl border border-gray/20 p-3 bg-white/70 dark:bg-dark/60"
          >
            <BlogLayoutTwo blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
