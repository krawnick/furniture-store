import { FaTrash } from 'react-icons/fa'
import { removeFromCart } from './cartSlice'
import { useCart } from './useCart'
import style from './Cart.module.css'

export const Cart = () => {
  const [dispatch, prodInCart, sumPrice] = useCart()

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
