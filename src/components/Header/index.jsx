import { FaShoppingCart } from 'react-icons/fa'
import { Cart } from '../../features/Cart'
import { useState } from 'react'
import classNames from 'classnames'
import style from './Header.module.css'

export function Header({ cart, deleteFromCart }) {
  let [cartOpen, setCartOpen] = useState(false)

  // Стоимость товаров в корзине
  const sumPrice = cart.reduce((result, product) => {
    return Number(product.price) + result
  }, 0)

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
      {cartOpen && (
        <div className={style.cart}>
          {cart.length ? (
            <div>
              {cart.map((product) => {
                return (
                  <Cart
                    key={product.id}
                    product={product}
                    deleteFromCart={deleteFromCart}
                  />
                )
              })}
              <p className={style.price}>
                итого к оплате:
                <span
                  className={style.sumPrice}
                >{` ${new Intl.NumberFormat().format(sumPrice)} руб.`}</span>
              </p>
            </div>
          ) : (
            <div>Ваша корзина пуста</div>
          )}
        </div>
      )}

      <div className={style.presentations}></div>
    </header>
  )
}
