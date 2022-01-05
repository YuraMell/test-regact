import React from 'react';
import SingleCategoriesLink from "./SingleCategoriesLink";
import Man from '../images/category-man.png'
import WoMan from '../images/WoMan.png'

const CategoriesLinks = () => {
  const categories = {
    colMan: {
      titleSex: 'МУЖСКАЯ ',
      description: 'Обувь, полуверы, костюмы',
      linkID: 1,
      img: Man,
    },
    colWoMan: {
      titleSex: 'ЖЕНСКАЯ ',
      description: 'Обувь, полуверы, костюмы',
      linkID: 2,
      img: WoMan,
    }
  }

  return (
    <>
      <section className="categories-links">
        <div className="inner">
          <SingleCategoriesLink description={categories.colMan}/>
          <SingleCategoriesLink description={categories.colWoMan}/>
        </div>
      </section>
    </>
  );
};

export default CategoriesLinks;