import style from './Item.module.css'

export const Item = ({ product, addInCart }) => {
  return (
    <div className={style.item}>
      <div className={style.image}>
        <img src={'./img/' + product.img} alt={product.title} />
      </div>
      <div className={style.content}>
        <h2>{product.title}</h2>
        <p>{product.desc}</p>
        <b>{product.price} руб.</b>
      </div>
      <div className={style.addToCart} onClick={() => addInCart(product)}>
        +
      </div>
    </div>
  )
}
