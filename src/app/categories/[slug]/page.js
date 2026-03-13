import { allBlogs } from "contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import { getTagMap, slugToTagLabel, tagToSlug } from "@/src/utils/tags";
import { sortBlogs, sortBlogsByUpdatedAt } from "@/src/utils";

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  const sortedBlogs = sortBlogs(allBlogs.filter((blog) => blog.isPublished));

  sortedBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = tagToSlug(tag);
      if (!categories.includes(slugified)) {
        categories.push(slugified);
        paths.push({ slug: slugified });
      }
    });
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const normalizedSlug = params.slug === "all" ? "all" : slugToTagLabel(params.slug);

  return {
    title: `${normalizedSlug.replaceAll("-", " ")} Lessons`,
    description: `파이썬 ${normalizedSlug === "all" ? "전체" : normalizedSlug} 교안 모음입니다.`,
  };
}

const CategoryPage = ({ params }) => {
  const publishedBlogs = allBlogs.filter((blog) => blog.isPublished);
  const tagMap = getTagMap(publishedBlogs);
  const normalizedSlug = params.slug === "all" ? "all" : slugToTagLabel(params.slug);

  const allCategories = [
    { slug: "all", label: "all" },
    ...Array.from(tagMap.entries()).map(([slug, label]) => ({ slug, label })),
  ];

  const currentLabel =
    normalizedSlug === "all" ? "all" : tagMap.get(normalizedSlug) ?? normalizedSlug;

  let blogs = publishedBlogs.filter((blog) => {
    if (normalizedSlug === "all") {
      return true;
    }

    return blog.tags.some((tag) => tagToSlug(tag) === normalizedSlug);
  });

  blogs = sortBlogsByUpdatedAt(blogs);

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{currentLabel}</h1>
        <span className="mt-2 inline-block text-gray dark:text-light/70">
          파이썬 학습 주제별로 강의 교안을 탐색해보세요.
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={normalizedSlug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog) => (
          <article key={blog._id} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
