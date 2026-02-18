import Header from "./component/header";
import ProductList from "./component/product";
import CartListItem from "./component/cartList";
import About from "./component/About"; // <--- Import About

import { useDispatch } from "react-redux";
import "./App.css";

import { useEffect } from "react";
import { fetchProduct } from "./redux/productSlice";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // Removed console.log for cleaner production code

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartListItem />} />
        <Route path="/about" element={<About />} /> {/* <--- Add Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;