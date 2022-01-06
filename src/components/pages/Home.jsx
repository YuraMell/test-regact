import React from 'react'
import Banner from "../banner";
import CategoriesLinks from "../categories-links";
import Catalog from "../Catalog";
import NewModels from "../NewModels";
import Form from "../Form";

const Home = () => {
  return (
    <>
      <Banner/>
      <CategoriesLinks/>
      <Catalog/>
      <NewModels/>
      <Form/>
    </>
  )
}

export { Home }
