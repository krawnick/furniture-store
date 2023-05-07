import { Item } from '../Item'
import products from '../../assets/data/products'
import style from './Items.module.css'

export const Items = ({ addInCart, category, showItem }) => {
  const filterProducts = [...products].filter((el) => {
    return category !== 'all' ? el.category === category : category
  })

  return (
    <main>
      {filterProducts.map((product) => {
        return (
          <Item
            key={product.id}
            product={product}
            addInCart={addInCart}
            showItem={showItem}
          ></Item>
        )
      })}
    </main>
  )
}
