import Header from "./component/header";
import ProductList from "./component/product";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { useEffect } from "react";

import { fetchProduct } from "./redux/productSlice";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CartListItem from "./component/cartList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const productSelector = useSelector((state) => state.product.items);
  console.log(productSelector);

  return (

      <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/cart" element={<CartListItem/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
