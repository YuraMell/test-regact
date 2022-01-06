import React from 'react';
import CatalogItem from "./CatalogItem";
import ManItem from '../images/man-item.png'

const Catalog = () => {
  const catalogItems = [
    {
      title: 'ПЛАТЬЯ',
      image: ManItem,
    },
    {
      title: 'ПЛАТЬЯ',
      image: ManItem,
    },
    {
      title: 'ПЛАТЬЯ',
      image: ManItem,
    },
    {
      title: 'ПЛАТЬЯ',
      image: ManItem,
    },
    {
      title: 'ПЛАТЬЯ',
      image: ManItem,
    },
    {
      title: 'ПЛАТЬЯ',
      image: ManItem,
    },
    {
      title: 'ПЛАТЬЯ',
      image: ManItem,
    },
    {
      title: 'ПЛАТЬЯ',
      image: ManItem,
    }
  ]
  return (
    <>
      <section className="catalog">
        <div className="inner">
          {catalogItems.map((item, id) => <CatalogItem info={item} key={id} />)}
        </div>
      </section>
    </>
  );
};

export default Catalog;