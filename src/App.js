import { Footer, Header, Items } from './components/'
import { useLocalStorage } from './hooks/localStorage'

function App() {
  const [prodInCart, setProdInCart] = useLocalStorage('toCart', [])

  // Добавление товара в корзину
  const addInCartHandler = (product) => {
    let isInArray = false
    prodInCart.forEach((el) => {
      if (el.id === product.id) isInArray = true
    })
    if (!isInArray) {
      setProdInCart([...prodInCart, product])
    }
  }

  // Удаление товара из корзины
  const deleteFromCartHandler = (id) => {
    const result = prodInCart.filter((el) => el.id !== id)
    setProdInCart([...result])
  }

  return (
    <div className="wrapper">
      <Header cart={prodInCart} deleteFromCart={deleteFromCartHandler} />
      <Items addInCart={addInCartHandler} />
      <Footer />
    </div>
  )
}

export default App
