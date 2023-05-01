import { FaTrash } from 'react-icons/fa'
import style from './Order.module.css'

export const Order = ({ product }) => {
  return (
    <div className={style.cartItem}>
      <img src={'./img/' + product.img} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price} руб.</p>
      <FaTrash className={style.deleteIcon} />
    </div>
  )
}
