import { useSelector } from 'react-redux'
import { Footer, Header, ShowItem } from './components/'
import { Categories, Products } from './features'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Products />
      {useSelector((state) => state.showItem.showProduct) && <ShowItem />}
      <Footer />
    </div>
  )
}

export default App
