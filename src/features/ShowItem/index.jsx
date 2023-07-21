import { useDispatch, useSelector } from 'react-redux'
import { ButtonAdd } from '../../components/UI'
import { addToCart } from '../Cart/cartSlice'
import { displayItem } from './showItemSlice'
import style from './ShowItem.module.css'

export const ShowItem = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.showItem.product)

  return (
    <div
      className={style.modaleBackground}
      onClick={(event) => {
        dispatch(displayItem())
        console.log(event.target)
      }}
    >
      <div
        className={style.modale}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={style.image}>
          <img src={'./img/' + product.img} alt={product.title} />
        </div>
        <h2>{product.title}</h2>
        <p>{product.desc}</p>
        <b>{product.price} руб.</b>
        <ButtonAdd onClick={() => dispatch(addToCart(product))} />
      </div>
    </div>
  )
}
