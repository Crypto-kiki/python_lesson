// src/components/Blog/Category.js

import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <div>
      <Link
        href={link}
        className={cx(
          "inline-flex items-center py-1.5 md:py-2 px-4 md:px-6 rounded-full border border-solid border-dark/20 dark:border-light/20 hover:-translate-y-0.5 transition-all ease duration-200 m-2 text-sm md:text-base shadow-sm",
          props.className,
          active
            ? "bg-dark text-light dark:text-dark dark:bg-light shadow-md"
            : "bg-light/80 text-dark dark:bg-dark/70 dark:text-light hover:bg-light dark:hover:bg-dark"
        )}
      >
        <span className="mr-1 text-accent">#</span>
        {name}
      </Link>
    </div>
  );
};

export default Category;
