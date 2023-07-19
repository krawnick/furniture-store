import { FaTrash } from 'react-icons/fa'
import style from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './cartSlice'

export const Cart = () => {
  const dispatch = useDispatch()
  const prodInCart = useSelector((state) => state.cart)

  // Стоимость товаров в корзине
  const sumPrice = prodInCart.reduce((result, product) => {
    return Number(product.price) + result
  }, 0)

  return (
    <div className={style.cart}>
      {prodInCart.length ? (
        <div>
          {prodInCart.map((product) => (
            <div className={style.cartItem} key={product.id}>
              <img src={'./img/' + product.img} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price} руб.</p>
              <FaTrash
                className={style.deleteIcon}
                onClick={() => {
                  dispatch(removeFromCart(product.id))
                }}
              />
            </div>
          ))}
          <p className={style.price}>
            итого к оплате:
            <span
              className={style.sumPrice}
            >{` ${new Intl.NumberFormat().format(sumPrice)} руб.`}</span>
          </p>
        </div>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  )
}
