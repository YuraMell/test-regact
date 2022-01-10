import React from 'react';
import NewModelItem from "./NewModelItem";
import NewModel from '../../images/new-model.png'
import {Link} from "react-router-dom";
import { newModels, newModelsSales } from '../../models.js'

const NewModels = ({title, type}) => {
  return (
    <>
      <section className="new-models">
        <div className="inner">
          <h2>
            {title}
          </h2>
          <div className="new-models-all">
            {type.map((item, id) => <Link to={'/single-item/'+ id} key={id} ><NewModelItem info={item} /></Link>)}
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