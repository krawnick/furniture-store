import { Footer, Header, Items } from './components/'
import { useLocalStorage } from './hooks/localStorage'

function App() {
  const [prodInCart, setProdInCard] = useLocalStorage('toCart', [])
  const addInCartHandler = (product) => {
    setProdInCard([...prodInCart, product])
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
