import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, selectVisibleProducts } from './productsSilce'
import { Item } from '../../components'
import style from './Products.module.css'

export const Products = () => {
  const products = useSelector((state) => state.products.list)
  const filterProducts = useSelector((state) =>
    selectVisibleProducts(state, products)
  )

  const dispatch = useDispatch()
  useEffect(() => {
    if (filterProducts.length === 0) {
      dispatch(loadProducts())
    }
  }, [filterProducts.length, dispatch])
  return (
    <main className={style.main}>
      {filterProducts.map((product) => {
        return (
          <Item
            key={product.id}
            product={product}
            // addInCart={addInCart}
            // showItem={showItem}
          ></Item>
        )
      })}
    </main>
  )
}
