// src/components/Home/HomeCoverSection.js

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";
import { uiFlags } from "@/src/utils/uiFlags";

const HomeCoverSection = ({ blog }) => {
  if (!blog) {
    return null;
  }

  const refined = uiFlags.enableHomeUiRefinements;

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[38vh] sm:h-[50vh] lg:h-[56vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% via-dark/30 to-dark/90 rounded-3xl z-0" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
          sizes="100vw"
          priority
        />

        <div
          className={`w-full lg:w-3/4 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-start justify-center z-0 text-light ${
            refined ? "bg-dark/20 backdrop-blur-[2px] rounded-2xl m-3 sm:m-5" : ""
          }`}
        >
          <div className="mt-2 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <Tag key={tag} link={`/categories/${slug(tag)}`} name={tag} />
            ))}
          </div>
          <Link href={blog.url} className="mt-3">
            <h1 className="font-bold capitalize text-base sm:text-xl md:text-2xl lg:text-3xl leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
              <span className="bg-gradient-to-r from-accentDark/70 to-accentDark/70 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="hidden sm:inline-block mt-2 md:text-sm lg:text-base font-in text-light/90 line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
