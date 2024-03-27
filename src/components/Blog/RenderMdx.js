// src/components/Blog/RenderMdx.js

"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

// MDX 파일에서 사용할 컴포넌트들을 정의합니다.
const mdxComponents = {
  Image, // Image 컴포넌트를 추가합니다.
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="col-span-8 font-in prose prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
