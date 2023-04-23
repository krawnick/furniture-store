import { Item } from '../Item'
import products from '../../assets/data/products'
import style from './Items.module.css'

export const Items = ({ addInCart }) => {
  return (
    <main>
      {products.map((product) => {
        return (
          <Item key={product.id} product={product} addInCart={addInCart}></Item>
        )
      })}
    </main>
  )
}
