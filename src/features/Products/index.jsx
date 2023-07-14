import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from './productsSilce'
import { Item } from '../../components'

export const Products = () => {
  const products = useSelector((state) => state.products.list)
  console.log(products)
  const dispatch = useDispatch()
  useEffect(() => {
    if (products.length === 0) {
      dispatch(loadProducts())
    }
  }, [products.length, dispatch])
  return (
    <main>
      {products.map((product) => {
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
