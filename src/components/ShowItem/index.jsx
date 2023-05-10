import { ButtonAdd } from '../UI'
import style from './ShowItem.module.css'
export const ShowItem = ({ product, addInCart, onShowItem }) => {
  return (
    <div
      className={style.modaleBackground}
      onClick={() => {
        onShowItem()
      }}
    >
      <div className={style.modale}>
        <div className={style.image}>
          <img src={'./img/' + product.img} alt={product.title} />
        </div>
        <h2>{product.title}</h2>
        <p>{product.desc}</p>
        <b>{product.price} руб.</b>
        <ButtonAdd onClick={() => addInCart(product)} />
      </div>
    </div>
  )
}
