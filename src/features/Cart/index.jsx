import { FaTrash } from 'react-icons/fa'
import style from './Cart.module.css'

export const Cart = ({ product, deleteFromCart }) => {
  return (
    <div className={style.cartItem}>
      <img src={'./img/' + product.img} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price} руб.</p>
      <FaTrash
        className={style.deleteIcon}
        onClick={() => {
          deleteFromCart(product.id)
        }}
      />
    </div>
  )
}
