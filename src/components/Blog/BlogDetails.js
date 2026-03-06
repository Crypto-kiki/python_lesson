import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

const itemBase =
  "inline-flex items-center rounded-full border border-light/30 dark:border-dark/20 bg-light/15 dark:bg-dark/10 px-3 py-1.5";

const BlogDetails = ({ blog }) => {
  return (
    <div className="px-3 md:px-10 bg-gradient-to-r from-accent to-accent/90 dark:from-accentDark dark:to-accentDark/90 text-light dark:text-dark py-3 flex items-center justify-center md:justify-around gap-3 flex-wrap text-sm sm:text-base font-medium mx-5 md:mx-10 rounded-xl shadow-lg shadow-accent/20">
      <time className={itemBase}>
        <span className="mr-1.5">📅</span>
        {format(parseISO(blog.publishedAt), "yyyy.MM.dd")}
      </time>
      <div className={itemBase}>
        <span className="mr-1.5">⏱</span>
        {blog.readingTime.text}
      </div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className={itemBase}>
        <span className="mr-1.5">🏷</span>
        {blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
