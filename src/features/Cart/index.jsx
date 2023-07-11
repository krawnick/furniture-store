export const Cart = () => {
  return (
    <>
      {cartOpen && (
        <div className={style.cart}>
          {cart.length ? (
            <div>
              {cart.map((product) => {
                return (
                  <Order
                    key={product.id}
                    product={product}
                    deleteFromCart={deleteFromCart}
                  >
                    {product.title}
                  </Order>
                )
              })}
              <p className={style.price}>
                итого к оплате:
                <span
                  className={style.sumPrice}
                >{` ${new Intl.NumberFormat().format(sumPrice)} руб.`}</span>
              </p>
            </div>
          ) : (
            <div>Ваша корзина пуста</div>
          )}
        </div>
      )}
    </>
  )
}
