import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import { uiFlags } from "@/src/utils/uiFlags";

const FeaturedPosts = ({ blogs, fallbackBlog = null }) => {
  // 기준: 홈 커버에 노출된 최신 발행 글을 제외한 이후 글들 중 최대 3개
  const primaryFeaturedBlog = blogs[0] || fallbackBlog;
  const secondaryFeaturedBlogs = blogs.slice(1);
  const refined = uiFlags.enableHomeUiRefinements;

  if (!primaryFeaturedBlog) {
    return null;
  }

  return (
    <section className="w-full h-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        추천 강의
      </h2>
      <p className="w-full mt-3 text-gray dark:text-light/70">
        핵심 개념과 실습 흐름을 빠르게 익힐 수 있는 강의부터 시작해보세요.
      </p>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={primaryFeaturedBlog} />
        </article>

        {secondaryFeaturedBlogs.map((blog) => (
          <article
            key={blog._id}
            className={`col-span-2 sm:col-span-1 row-span-1 relative rounded-2xl border p-3 ${
              refined
                ? "border-gray/30 shadow-sm hover:shadow-md transition-shadow bg-white/80 dark:bg-dark/65"
                : "border-gray/20 bg-white/70 dark:bg-dark/60"
            }`}
          >
            <BlogLayoutTwo blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
