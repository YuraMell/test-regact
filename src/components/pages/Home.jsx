import React from 'react'
import Banner from "../banner";
import CategoriesLinks from "../categories-links";
import Catalog from "../Catalog";
import NewModels from "../NewModels";
import Form from "../Form";
import Slider from "../Slider";
import Sales from "../Sales";

const Home = () => {
  return (
    <>
      <Slider/>
      <Banner/>
      <CategoriesLinks/>
      <Catalog/>
      <NewModels title="Новые модели"/>
      <Form/>
      <Sales/>
    </>
  )
}

export { Home }
