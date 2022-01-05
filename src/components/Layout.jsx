import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Header } from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>footer ok</footer>
    </>
  )
}

export { Layout }
