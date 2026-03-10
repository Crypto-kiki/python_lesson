// src/utils/index.js

import { compareDesc, parseISO } from "date-fns";

export const cx = (...className) => className.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const sortBlogsByUpdatedAt = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(
        parseISO(a.updatedAt || a.publishedAt),
        parseISO(b.updatedAt || b.publishedAt)
      )
    );
};
