import { useDispatch } from 'react-redux'
import { ButtonAdd } from '../UI'
import style from './Item.module.css'
import { addToCart } from '../../features/Cart/cartSlice'
import { displayItem } from '../../features/ShowItem/showItemSlice'

export const Item = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div className={style.item}>
        <div className={style.image}>
          <img
            onClick={() => dispatch(displayItem(product))}
            src={'./img/' + product.img}
            alt={product.title}
          />
        </div>
        <div className={style.content}>
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <b>{product.price} руб.</b>
        </div>
        <div className={style.addToCart}>
          <ButtonAdd onClick={() => dispatch(addToCart(product))} />
        </div>
      </div>
    </>
  )
}
