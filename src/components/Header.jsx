import React from 'react'
import logo from '../images/logo.png'
import cart from '../images/cart.svg'

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
            <li className="logo burger-menu_link">
              <img src={logo} alt="" />
            </li>
            <li className="burger-menu_link"><a href="#">Оплата</a></li>
            <li className="burger-menu_link"><a href="#">Доставка</a></li>
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
              <li className="logo">
                <img src="../images/logo.png" alt="" />
              </li>
              <li><a href="#">Оплата</a></li>
              <li><a href="#">Доставка</a></li>
            </ul>
            <div className="cart">
              <img src="../images/cart.svg" alt="" />
              <strong>5</strong>
            </div>
          </header>
        </div>
      </section>
    </>
  )
}

export { Header }
