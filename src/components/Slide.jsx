import React from 'react';
import SlideImg from '../images/slide-img.png'

const Slide = ({slideDescription}) => {
  console.log(slideDescription)
  return (
    <div className="slide">
      <div className="left">
        <h2>{slideDescription.title}</h2>
        <strong>{slideDescription.sales}</strong>
        <a>{slideDescription.linkTitle}</a>
      </div>
      <div className="right">
        <img src={slideDescription.img} alt="" />
        <h3>{slideDescription.defSale}</h3>
        <h4>{slideDescription.sale} </h4>
      </div>
    </div>
  );
};

export default Slide;