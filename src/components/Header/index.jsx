import { FaShoppingCart } from 'react-icons/fa'
import { Cart } from '../../features/Cart'
import classNames from 'classnames'
import style from './Header.module.css'
import { useToggle } from '../../hooks/toggle'

export function Header({ cart, deleteFromCart }) {
  let [cartOpen, setCartOpen] = useToggle()

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
          onClick={() => setCartOpen()}
        />
      </div>
      {cartOpen && <Cart />}

      <div className={style.presentations}></div>
    </header>
  )
}
