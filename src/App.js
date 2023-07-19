import { useState } from 'react'
import { useToggle, useLocalStorage } from './hooks/'
import { Footer, Header, Items, ShowItem } from './components/'
import { Categories, Products } from './features'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Products />
      {/* {onShowItem && <ShowItem />} */}
      <Footer />
    </div>
  )
}

export default App
