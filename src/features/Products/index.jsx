import { useSelector } from 'react-redux'

export const Products = () => {
  const products = useSelector((state) => state.products.list)
  return (
    <main>
      {products.map((product) => {
        return (
          <article
            key={product.id}
            product={product}
            addInCart={addInCart}
            showItem={showItem}
          ></article>
        )
      })}
    </main>
  )
}
