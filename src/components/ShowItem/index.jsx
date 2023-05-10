export const ShowItem = ({ product }) => {
  console.log(product)
  return (
    <>
      <img src={'./img/' + product.img} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.desc}</p>
      <b>{product.price} руб.</b>
    </>
  )
}
