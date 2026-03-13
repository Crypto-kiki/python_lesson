import { slug } from "github-slugger";

export const tagToSlug = (tag = "") => slug(tag);

export const slugToTagLabel = (value = "") => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

export const getTagMap = (blogs = []) => {
  return blogs.reduce((map, blog) => {
    blog.tags.forEach((tag) => {
      const tagSlug = tagToSlug(tag);
      if (!map.has(tagSlug)) {
        map.set(tagSlug, tag);
      }
    });

    return map;
  }, new Map());
};
