import React from 'react';
import ManItem from '../../images/man-item.png'

const CatalogItem = ({info}) => {
  return (
    <div className="catalog-item">
      <h2>{info.title}</h2>
      <img src={info.image} alt="" />
    </div>
  );
};

export default CatalogItem;