import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../Categories/catregoriesSlice'
import { loadProducts, selectVisibleProducts } from './productsSilce'
import { useEffect } from 'react'

export const useSelectProducts = () => {
  const selectedCategory = useSelector(selectCategory)
  const products = useSelector((state) => state.products.list)
  const filterProducts = selectVisibleProducts(selectedCategory, products)
  const dispatch = useDispatch()
  useEffect(() => {
    if (products.length === 0) {
      dispatch(loadProducts())
    }
  }, [products.length, dispatch])
  return [filterProducts, dispatch]
}
