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

    figures.forEach((figure, index) => {
      if (figure.querySelector("[data-copy-code-btn]")) {
        return;
      }

      const pre = figure.querySelector("pre");
      const code = figure.querySelector("code");

      if (!pre || !code) {
        return;
      }

      const title = figure.querySelector("[data-rehype-pretty-code-title]");
      let actionWrapper = figure.querySelector("[data-code-actions]");

      if (!actionWrapper) {
        actionWrapper = document.createElement("div");
        actionWrapper.setAttribute("data-code-actions", "true");
        actionWrapper.className = "code-actions";
      }

      if (title && !actionWrapper.contains(title)) {
        actionWrapper.appendChild(title);
      }

      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-copy-code-btn", "true");
      button.className = "code-copy-btn";
      button.setAttribute("aria-label", "코드 복사");
      button.textContent = "📋";

      button.onclick = async () => {
        try {
          await navigator.clipboard.writeText(code.textContent || "");
          button.textContent = "✅";
          setTimeout(() => {
            button.textContent = "📋";
          }, 1500);
        } catch {
          button.textContent = "❌";
          setTimeout(() => {
            button.textContent = "📋";
          }, 1500);
        }
      };

      actionWrapper.appendChild(button);
      figure.appendChild(actionWrapper);
      pre.setAttribute("data-code-index", `${index}`);
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
