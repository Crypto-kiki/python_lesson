// src/app/page.js

import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import { sortBlogs, sortBlogsByUpdatedAt } from "@/src/utils";

const FEATURED_LESSON_COUNT = 3;
const LATEST_UPDATE_COUNT = 6;

export default function Home() {
  const publishedLessons = allBlogs.filter((blog) => blog.isPublished);

  const lessonsByPublishedAt = sortBlogs(publishedLessons);
  const homeCoverBlog = lessonsByPublishedAt[0] ?? null;
  const featuredLessons = lessonsByPublishedAt.slice(1, FEATURED_LESSON_COUNT + 1);
  const latestUpdatedLessons = sortBlogsByUpdatedAt(publishedLessons).slice(0, LATEST_UPDATE_COUNT);

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blog={homeCoverBlog} />
      <FeaturedPosts blogs={featuredLessons} fallbackBlog={homeCoverBlog} />
      <RecentPosts blogs={latestUpdatedLessons} />
    </main>
  );
}
