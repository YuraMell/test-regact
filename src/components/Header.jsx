import React from 'react'
import logo from '../images/logo.png'
import cart from '../images/cart.svg'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <div className="burger-menu">
        <button className="burger-menu_button">
          <span className="burger-menu_lines"></span>
        </button>
        <nav className="burger-menu_nav">
          <ul>
            <li className="burger-menu_link"><a href="#">Для мужчин</a></li>
            <li className="burger-menu_link"><a href="#">Для женщин</a></li>
            <li className="burger-menu_link"><a href="#">Для детей</a></li>
            <li><Link to='/' className="logo burger-menu_link"><img src={logo} alt="" /></Link></li>
            <li><Link className="burger-menu_link" to='/about'>Оплата</Link></li>
            <li><Link className="burger-menu_link" to="/contacts">Доставка</Link></li>
          </ul>
        </nav>
        <div className="burger-menu_overlay" />
      </div>

      <section className="head">
        <div className="inner">
          <header>
            <ul>
              <li><a href="#">Для мужчин</a></li>
              <li><a href="#">Для женщин</a></li>
              <li><a href="#">Для детей</a></li>
              <li><Link to='/' className="logo burger-menu_link"><img src={logo} alt="" /></Link></li>
              <li><Link className="burger-menu_link" to='/about'>Оплата</Link></li>
              <li><Link className="burger-menu_link" to="/contacts">Доставка</Link></li>
            </ul>
            <div className="cart">
              <img src={cart} alt="" />
              <strong>5</strong>
            </div>
          </header>
        </div>
      </section>
    </>
  )
}

export { Header }
