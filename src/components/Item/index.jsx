export const Item = ({ product }) => {
  return (
    <>
      <h2>{product.title}</h2>
      <p>{product.desc}</p>
      <b>{product.price}</b>
    </>
  )
}
