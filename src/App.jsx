import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Layout } from './components/Layout';
import { About } from './components/pages/About';
import { Contacts } from './components/pages/Contacts';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';

import './style.scss'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };
