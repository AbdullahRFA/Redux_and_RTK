import AddToCart from "./component/addToCart"
import Header from "./component/header"
import ProductList from "./component/product"

import './App.css';
import { useDispatch } from "react-redux";
import { clearAllItem } from "./redux/slice";


function App() {
  const dispatch = useDispatch()

  return (
    <>
     <Header/>
     <button className="clear-cart" onClick={()=>dispatch(clearAllItem())}>Clear Cart</button>
    <ProductList/>
    </>
  )
}

export default App
