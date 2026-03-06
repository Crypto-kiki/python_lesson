// src/components/Blog/RenderMdx.js

"use client";

import React, { useEffect } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import MultipleChoiceQuiz from "@/src/components/Quiz/MultipleChoiceQuiz";
import ShortAnswerQuiz from "@/src/components/Quiz/ShortAnswerQuiz";

const mdxComponents = {
  Image,
  MultipleChoiceQuiz,
  ShortAnswerQuiz,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  useEffect(() => {
    const figures = Array.from(
      document.querySelectorAll("[data-rehype-pretty-code-figure]")
    );

    figures.forEach((figure) => {
      if (figure.querySelector("[data-copy-code-btn]")) {
        return;
      }

      const pre = figure.querySelector("pre");
      const code = figure.querySelector("code");

      if (!pre || !code) {
        return;
      }

      let toolbar = figure.querySelector("[data-code-toolbar]");
      if (!toolbar) {
        toolbar = document.createElement("div");
        toolbar.setAttribute("data-code-toolbar", "true");
        toolbar.className = "code-toolbar";
      }

      const title = figure.querySelector("[data-rehype-pretty-code-title]");
      if (title) {
        title.classList.add("code-title");
        if (!toolbar.contains(title)) {
          toolbar.appendChild(title);
        }
      }

      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-copy-code-btn", "true");
      button.className = "code-copy-btn";
      button.setAttribute("aria-label", "코드 복사");
      button.textContent = "Copy";

      button.onclick = async () => {
        try {
          await navigator.clipboard.writeText(code.textContent || "");
          button.textContent = "Copied";
          setTimeout(() => {
            button.textContent = "Copy";
          }, 1500);
        } catch {
          button.textContent = "Failed";
          setTimeout(() => {
            button.textContent = "Copy";
          }, 1500);
        }
      };

      toolbar.appendChild(button);
      figure.appendChild(toolbar);
    });
  }, [blog.body.code]);

  return (
    <div
      className="font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent
    
    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
