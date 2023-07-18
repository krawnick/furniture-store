import { useState } from 'react'
import { useToggle, useLocalStorage } from './hooks/'
import { Footer, Header, Items, ShowItem } from './components/'
import { Categories, Products } from './features'

function App() {
  const [prodInCart, setProdInCart] = [null, null]

  // Добавление товара в корзину
  // const addInCartHandler = (product) => {
  //   let isInArray = false
  //   prodInCart.forEach((el) => {
  //     if (el.id === product.id) isInArray = true
  //   })
  //   if (!isInArray) {
  //     setProdInCart([...prodInCart, product])
  //   }
  // }

  // Удаление товара из корзины
  const deleteFromCartHandler = (id) => {
    const result = prodInCart.filter((el) => el.id !== id)
    setProdInCart([...result])
  }

  // Передача категории из компонента Categories
  const [category, setCategory] = useState('all')
  const transferCategoryHandler = (category) => {
    setCategory(category)
  }

  // Отображение ShowItem
  const [showProduct, setShowProduct] = useState('')
  const [onShowItem, setOnShowItem] = useToggle()
  const showItemHadler = (product) => {
    setShowProduct(product)
    setOnShowItem()
  }

  return (
    <div className="wrapper">
      <Header cart={prodInCart} deleteFromCart={deleteFromCartHandler} />
      <Categories transferCategory={transferCategoryHandler} />
      <Products />
      {onShowItem && (
        <ShowItem
          product={showProduct}
          onShowItem={setOnShowItem}
          // addInCart={addInCartHandler}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
