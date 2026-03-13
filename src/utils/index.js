// src/utils/index.js

import { compareDesc, parseISO } from "date-fns";

const toDate = (value) => parseISO(value);

const compareByDateAndPath = (a, b, key) => {
  const primary = compareDesc(toDate(a[key]), toDate(b[key]));

  if (primary !== 0) {
    return primary;
  }

  return a._raw.flattenedPath.localeCompare(b._raw.flattenedPath);
};

export const cx = (...className) => className.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a, b) => compareByDateAndPath(a, b, "publishedAt"));
};

export const sortBlogsByUpdatedAt = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) => {
      const aDate = a.updatedAt || a.publishedAt;
      const bDate = b.updatedAt || b.publishedAt;
      const primary = compareDesc(toDate(aDate), toDate(bDate));

      if (primary !== 0) {
        return primary;
      }

      return a._raw.flattenedPath.localeCompare(b._raw.flattenedPath);
    });
};
