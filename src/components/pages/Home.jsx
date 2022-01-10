import React from 'react'
import Banner from "../Banner";
import CategoriesLinks from "../category/CategoriesLinks";
import Catalog from "../catalog/Catalog";
import NewModels from "../models/NewModels";
import Form from "../Form";
import Slider from "../slider/Slider";
import Sales from "../Sales";
import { newModels } from '../../models.js'

const Home = () => {
  return (
    <>
      <Slider/>
      <Banner/>
      <CategoriesLinks/>
      <Catalog/>
      <NewModels title="Новые модели" type={newModels}/>
      <Form/>
      <Sales/>
    </>
  )
}

export { Home }
