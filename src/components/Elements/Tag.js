// src/components/Elements/Tag.js

import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-flex items-center py-2 md:py-2.5 px-4 md:px-5 rounded-xl border border-dark/15 dark:border-light/20 hover:-translate-y-0.5 transition-all duration-200 text-sm md:text-base backdrop-blur-sm bg-light/80 text-dark dark:bg-dark/70 dark:text-light hover:border-accent/40 hover:text-accent",
        props.className
      )}
    >
      <span className="mr-1 text-accent">#</span>
      <span className="capitalize">{name}</span>
    </Link>
  );
};

export default Tag;
