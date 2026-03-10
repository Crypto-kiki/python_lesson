import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

const BlogDetails = ({ blog }) => {
  return (
    <div className="px-4 md:px-10 py-4 flex items-center justify-center md:justify-between gap-3 flex-wrap text-sm sm:text-base font-medium mx-5 md:mx-10 rounded-2xl bg-gradient-to-r from-dark to-dark/90 text-light shadow-xl">
      <time className="inline-flex items-center rounded-full bg-light/15 px-4 py-2 border border-light/20">
        📅 Published: {format(parseISO(blog.publishedAt), "yyyy.MM.dd")}
      </time>
      <div className="inline-flex items-center rounded-full bg-light/15 px-4 py-2 border border-light/20">
        ⏱️ Reading time: {blog.readingTime.text}
      </div>
      <div className="inline-flex items-center gap-2 flex-wrap">
        {blog.tags.map((tag) => (
          <Link
            key={tag}
            href={`/categories/${slug(tag)}`}
            className="inline-flex items-center rounded-full bg-accent/80 px-4 py-2 border border-light/20 hover:scale-105 transition-transform"
          >
            🏷️ {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
