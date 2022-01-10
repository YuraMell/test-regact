import React from 'react';
import NewModelItem from "./NewModelItem";
import NewModel from '../../images/new-model.png'
import {Link} from "react-router-dom";
import { newModels } from '../../models.js'

const NewModels = ({title}) => {
  // const newModels = [
  //   {
  //     title: 'Коктейльное платье',
  //     img: NewModel,
  //     price: '40 000',
  //   },
  //   {
  //     title: 'Вечернее платье',
  //     img: NewModel,
  //     price: '60 000',
  //   },
  //   {
  //     title: 'Дэфолтный скин',
  //     img: NewModel,
  //     price: '00 000',
  //   },
  //   {
  //     title: 'Старое платье',
  //     img: NewModel,
  //     price: '10 000',
  //   },
  // ]
  return (
    <>
      <section className="new-models">
        <div className="inner">
          <h2>
            {title}
          </h2>
          <div className="new-models-all">
            {newModels.map((item, id) => <Link to={'/single-item/'+ id} key={id} ><NewModelItem info={item} /></Link>)}
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