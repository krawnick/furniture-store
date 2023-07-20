import { Item } from '../../components'
import style from './Products.module.css'
import { addToCart } from '../Cart/cartSlice'
import { useSelectProducts } from './useSelectProducts'

export const Products = () => {
  const [filterProducts, dispatch] = useSelectProducts()

  return (
    <main className={style.main}>
      {filterProducts.map((product) => {
        return (
          <Item
            key={product.id}
            product={product}
            addInCart={() => {
              dispatch(addToCart(product))
            }}
            // showItem={showItem}
          ></Item>
        )
      })}
    </main>
  )
}
