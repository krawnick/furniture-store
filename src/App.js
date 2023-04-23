import { useState } from 'react'
import { Footer, Header, Items } from './components/'

function App() {
  const [prodInCart, setProdInCard] = useState([])
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
