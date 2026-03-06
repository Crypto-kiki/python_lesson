import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

const BlogDetails = ({ blog }) => {
  return (
    <div className="px-3 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-3 flex items-center justify-center md:justify-around gap-3 flex-wrap text-sm sm:text-base font-medium mx-5 md:mx-10 rounded-xl shadow-lg shadow-accent/20">
      <time className="inline-flex items-center rounded-full bg-light/20 dark:bg-dark/15 px-3 py-1">
        게시일: {format(parseISO(blog.publishedAt), "yyyy.MM.dd")}
      </time>
      <div className="inline-flex items-center rounded-full bg-light/20 dark:bg-dark/15 px-3 py-1">
        읽기 시간: {blog.readingTime.text}
      </div>
      <Link
        href={`/categories/${slug(blog.tags[0])}`}
        className="inline-flex items-center rounded-full bg-light/20 dark:bg-dark/15 px-3 py-1"
      >
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
