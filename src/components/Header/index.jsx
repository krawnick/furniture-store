import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import classNames from 'classnames'
import style from './Header.module.css'

export function Header() {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className={style.logo}>House Staff</span>
        <ul className={style.nav}>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          className={classNames(
            style.shop_cart_button,
            cartOpen ? style.active : ''
          )}
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
        />
      </div>
      {cartOpen && <div className={style.cart}></div>}
      <div className={style.presentations}></div>
    </header>
  )
}
