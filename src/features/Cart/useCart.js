import { useDispatch, useSelector } from 'react-redux'

export const useCart = () => {
  const dispatch = useDispatch()
  const prodInCart = useSelector((state) => state.cart)

  const sumPrice = prodInCart.reduce((result, product) => {
    return Number(product.price) + result
  }, 0)

  return [dispatch, prodInCart, sumPrice]
}
