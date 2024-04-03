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
          "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 border-solid border-dark dark:border-light  hover:scale-105 transition-all ease duration-200 m-2",
          props.className,
          active
            ? "bg-dark text-light dark:text-dark dark:bg-light"
            : "bg-light text-dark dark:bg-dark dark:text-light"
        )}
      >
        # {name}
      </Link>
    </div>
  );
};

export default Category;
