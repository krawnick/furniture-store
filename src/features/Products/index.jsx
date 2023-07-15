import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, selectVisibleProducts } from './productsSilce'
import { Item } from '../../components'
import style from './Products.module.css'
import { selectCategory } from '../Categories/catregoriesSlice'
import { useLocalStorage } from '../../hooks'

export const Products = () => {
  const selectedCategory = useSelector(selectCategory)
  const products = useSelector((state) => state.products.list)
  const filterProducts = selectVisibleProducts(selectedCategory, products)
  const dispatch = useDispatch()
  useEffect(() => {
    if (products.length === 0) {
      dispatch(loadProducts())
    }
  }, [products.length, dispatch])

  // Добавление товара в корзину
  const [prodInCart, setProdInCart] = useLocalStorage('toCart', [])

  const addInCart = (product) => {
    let isInArray = false
    prodInCart.forEach((el) => {
      if (el.id === product.id) isInArray = true
    })
    if (!isInArray) {
      setProdInCart([...prodInCart, product])
    }
  }

  return (
    <main className={style.main}>
      {filterProducts.map((product) => {
        return (
          <Item
            key={product.id}
            product={product}
            addInCart={addInCart}
            // showItem={showItem}
          ></Item>
        )
      })}
    </main>
  )
}
