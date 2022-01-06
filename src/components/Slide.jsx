import React from 'react';
import SlideImg from '../images/slide-img.png'

const Slide = () => {
  return (
    <div className="slide">
      <div className="left">
        <h2>Зимняя распродажа</h2>
        <strong>СКИДКИ ДО 90%</strong>
        <a>СМОТРЕТЬ МОДЕЛИ</a>
      </div>
      <div className="right">
        <img src={SlideImg} alt="" />
        <h3>9 900 ₽ </h3>
        <h4>1 900 ₽ </h4>
      </div>
    </div>
  );
};

export default Slide;