import React from 'react';
import NewModelItem from "./NewModelItem";
import NewModel from '../images/new-model.png'

const NewModels = () => {
  const newModels = [
    {
      title: 'Коктейльное платье',
      img: NewModel,
      price: '40 000',
    },
    {
      title: 'Коктейльное платье',
      img: NewModel,
      price: '40 000',
    },
    {
      title: 'Коктейльное платье',
      img: NewModel,
      price: '40 000',
    },
    {
      title: 'Коктейльное платье',
      img: NewModel,
      price: '40 000',
    },
  ]
  return (
    <>
      <section className="new-models">
        <div className="inner">
          <h2>
            Новые модели
          </h2>
          <div className="new-models-all">
            {newModels.map((item, id) => <NewModelItem info={item} key={id} />)}
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