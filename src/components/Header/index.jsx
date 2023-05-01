import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import classNames from 'classnames'
import style from './Header.module.css'
import { Order } from '../Order'

export function Header({ cart, deleteFromCart }) {
  let [cartOpen, setCartOpen] = useState(false)

  // Стоимость товаров в корзине
  let sumPrice = 0
  cart.forEach((el) => {
    sumPrice += Number(el.price)
    return sumPrice
  })

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
                  <Order
                    key={product.id}
                    product={product}
                    deleteFromCart={deleteFromCart}
                  >
                    {product.title}
                  </Order>
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
