import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout';
import { About } from './components/pages/About';
import { Contacts } from './components/pages/Contacts';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import SingleItem from "./components/pages/SingleItem";

import './style.scss'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
          <Route path='single-item' element={<SingleItem />} >
              <Route path=':id' element={<SingleItem />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export { App };
