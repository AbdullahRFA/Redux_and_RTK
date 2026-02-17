import AddToCart from "./component/addToCart"
import Header from "./component/header"
import ProductList from "./component/product"

import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { clearAllItem } from "./redux/slice";
import { useEffect } from "react";

import { fetchProduct } from "./redux/productSlice";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProduct())
  },[dispatch])

  const productSelector = useSelector((state) => state.product.items);
  console.log(productSelector)

  return (
    <>
     <Header/>
     <button className="clear-cart" onClick={()=>dispatch(clearAllItem())}>Clear Cart</button>
    <ProductList/>
    </>
  )
}

export default App
