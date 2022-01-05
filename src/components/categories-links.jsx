import React from 'react';
import SingleCategoriesLink from "./SingleCategoriesLink";

const CategoriesLinks = () => {
  return (
    <>
      <section className="categories-links">
          <SingleCategoriesLink/>
          <SingleCategoriesLink/>
      </section>
    </>
  );
};

export default CategoriesLinks;