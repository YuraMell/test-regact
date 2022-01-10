import React from 'react';
import {Link} from "react-router-dom";
import NewModelItem from "../models/NewModelItem";
import {allProducts} from "../../models";

const Products = () => {
  return (
    <>
      <section className="new-models">
        <div className="inner">
          <h2>
            Все товары
          </h2>
          <div className="new-models-all">
            {allProducts.map(item => <Link to={'/single-item/'+ item._id} key={item._id} ><NewModelItem info={item} /></Link>)}
          </div>
        </div>
      </section>
    </>
  );
};

export { Products };