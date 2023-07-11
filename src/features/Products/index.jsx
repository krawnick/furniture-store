export const Products = () => {
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
