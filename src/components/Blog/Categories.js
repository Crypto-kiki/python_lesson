// src/components/Blog/Categories.js

import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-y text-dark dark:text-light border-gray/20 py-5 flex flex-wrap font-medium mx-5 md:mx-10 rounded-2xl bg-light/40 dark:bg-dark/30">
      {categories.map((cat) => (
        <Category
          key={cat.slug}
          link={`/categories/${cat.slug}`}
          name={cat.label}
          active={currentSlug === cat.slug}
        />
      ))}
    </div>
  );
};

export default Categories;
