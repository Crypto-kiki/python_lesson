// src/components/Blog/Categories.js

import { slug } from "github-slugger";
import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="px-20 mt-10 border-t-2 text-dark border-b-2 border-dark py-4 flex flex-wrap font-medium mx-10">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
