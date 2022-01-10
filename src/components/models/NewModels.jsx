import React from 'react';
import NewModelItem from "./NewModelItem";
import {Link} from "react-router-dom";
import {Products} from "../pages/Products";

const NewModels = ({title, type}) => {
  return (
    <>
      <section className="new-models">
        <div className="inner">
          <h2>
            {title}
          </h2>
          <div className="new-models-all">
            {type.map(item => <Link to={'/single-item/'+ item._id} key={item._id} ><NewModelItem info={item} /></Link>)}
          </div>
          <a className="new-item-button">
            ВСЕ МОДЕЛИ
          </a>
        </div>
      </section>
    </>
  );
};

export default NewModels;