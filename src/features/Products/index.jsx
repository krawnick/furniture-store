import { Item } from '../../components'
import style from './Products.module.css'
import { useSelectProducts } from './useSelectProducts'

export const Products = () => {
  const filterProducts = useSelectProducts()

  return (
    <main className={style.main}>
      {filterProducts.map((product) => {
        return <Item key={product.id} product={product}></Item>
      })}
    </main>
  )
}
