import { Footer, Header, Items } from './components/'
import { useLocalStorage } from './hooks/localStorage'

function App() {
  const [prodInCart, setProdInCart] = useLocalStorage('toCart', [])
  // const addInCartHandler = (product) => {
  //   setProdInCart([...prodInCart, product])
  // }
  const addInCartHandler = (product) => {
    let isInArray = false
    prodInCart.forEach((el) => {
      if (el.id === product.id) isInArray = true
    })
    if (!isInArray) {
      setProdInCart([...prodInCart, product])
    }
  }

  return (
    <div className="wrapper">
      <Header cart={prodInCart} />
      <Items addInCart={addInCartHandler} />
      <Footer />
    </div>
  )
}

export default App
