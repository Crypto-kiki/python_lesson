// src/app/page.js

import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  const publishedLessons = allBlogs.filter((blog) => blog.isPublished);

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={publishedLessons} />
      <FeaturedPosts blogs={publishedLessons} />
      <RecentPosts blogs={publishedLessons} />
    </main>
  );
}
