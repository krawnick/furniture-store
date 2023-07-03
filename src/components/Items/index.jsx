import { Item } from '../Item'
import products from '../../assets/data/products'
import style from './Items.module.css'
import { useSelector } from 'react-redux'
import { selectVisibleCategory } from '../../features/Categories/catregoriesSlice'

export const Items = ({ addInCart, showItem }) => {
  const filterProducts = useSelector((state) =>
    selectVisibleCategory(state, products)
  )

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
