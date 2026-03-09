// src/app/blogs/[slug]/page.js

import { allBlogs } from "contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetadata";
import { slug } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allBlogs
    .filter((blog) => blog.isPublished)
    .map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find(
    (item) => item._raw.flattenedPath === params.slug && item.isPublished
  );

  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const ogImages = imageList.map((img) => ({
    url: img.includes("http") ? img : siteMetadata.siteUrl + img,
  }));

  const authors = blog?.author ? blog.author : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "ko-kr",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      author: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}


export default function BlogPage({ params }) {
  const blog = allBlogs.find(
    (item) => item._raw.flattenedPath === params.slug && item.isPublished
  );

  if (!blog) {
    notFound();
  }

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const tocItems = blog.toc.filter(
    (heading) => heading.level === "one" || heading.level === "two"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? blog.author : siteMetadata.author,
        url: siteMetadata.siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[58vh] md:h-[64vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
            <Tag
              name={blog.tags[0]}
              link={`/categories/${slug(blog.tags[0])}`}
              className="px-5 py-2 text-sm !rounded-xl !border !border-light/60 !bg-light/15 backdrop-blur-sm shadow-md"
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl leading-normal relative w-full md:w-5/6">
              {blog.title}
            </h1>
            <p className="hidden md:block mt-4 w-full md:w-3/5 text-light/80 text-base lg:text-lg">
              {blog.description}
            </p>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <BlogDetails blog={blog} />
        <details
          className="lg:hidden border border-dark/20 dark:border-light/20 text-dark dark:text-light rounded-2xl p-5 mx-5 md:mx-10 mb-6 bg-light/70 dark:bg-dark/50 shadow-sm"
          open
        >
          <summary className="text-base font-bold tracking-wide cursor-pointer list-none flex items-center justify-between">📚 Table of Contents</summary>
          <ul className="mt-4 font-in space-y-1">
            {tocItems.map((heading) => {
              return (
                <li key={`mobile-#${heading.slug}`} className="py-1">
                  <a
                    href={`#${heading.slug}`}
                    data-level={heading.level}
                    className="data-[level=one]:pt-2 data-[level=one]:border-b border-dark/20 data-[level=two]:pl-5 sm:data-[level=two]:pl-7
                flex items-center rounded-md px-2 py-1 hover:bg-dark/5 dark:hover:bg-light/10 transition-colors"
                  >
                    <span className="hover:underline">{heading.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <aside className="hidden lg:block lg:col-span-4 lg:self-start lg:sticky lg:top-24 h-fit">
            <details
              className="border border-dark/20 dark:border-light/20 text-dark dark:text-light rounded-2xl p-5 max-h-[calc(100vh-8rem)] overflow-hidden overflow-y-auto bg-light/80 dark:bg-dark/60 shadow-md"
              open
            >
              <summary className="text-base font-bold tracking-wide cursor-pointer list-none flex items-center justify-between">
                📚 Table of Contents
              </summary>
              <ul className="mt-4 font-in space-y-1">
                {tocItems.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=one]:pt-2 data-[level=one]:border-b border-dark/20 data-[level=two]:pl-5 sm:data-[level=two]:pl-7
                    flex items-center rounded-md px-2 py-1 hover:bg-dark/5 dark:hover:bg-light/10 transition-colors"
                      >
                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </aside>
          <div className="col-span-12 lg:col-span-8"><RenderMdx blog={blog} /></div>
        </div>
      </article>
    </>
  );
}
