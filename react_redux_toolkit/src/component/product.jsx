// Remove useEffect from imports
import { useDispatch, useSelector } from "react-redux";
// Remove fetchProduct import (it is handled in App.jsx)
import { addItem, removeItem } from "../redux/slice"; 

const ProductList = () => {
  const dispatch = useDispatch();

  // --- DELETE THIS BLOCK ---
  // useEffect(() => {
  //   dispatch(fetchProduct());
  // }, [dispatch]);
  // -------------------------

  const Cartselector = useSelector((state) => state.cart.item);
  const { items, status } = useSelector((state) => state.product);

  if (status === "loading")
    return <div className="loading">Loading products...</div>;

  return (
    <div className="product-list-container">
      {/* ... rest of your component remains the same ... */}
       <h2 className="section-title">Our Products</h2>
       <div className="product-grid">
         {/* ... (mapping code) ... */}
         {items.length > 0 && items.map((item) => {
            // ... (keep your existing mapping logic)
             const originalPrice = (item.price / (1 - item.discountPercentage / 100)).toFixed(2);
             return (
               <div className="product-card" key={item.id}>
                 {/* ... content ... */}
                 <div className="product-image-wrapper">
                    <img src={item.thumbnail} alt={item.title} className="product-img"/>
                     {item.discountPercentage > 0 && (
                        <span className="discount-badge">-{Math.round(item.discountPercentage)}%</span>
                    )}
                 </div>
                 <div className="product-content">
                    <span className="product-brand">{item.brand}</span>
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-desc">{item.description}</p>
                    <div className="product-rating">
                        <span className="star">★</span><span>{item.rating}</span>
                    </div>
                    <div className="product-price-box">
                        <span className="current-price">${item.price}</span>
                        <span className="old-price">${originalPrice}</span>
                    </div>
                    {Cartselector.find((cartItem) => cartItem.id == item.id) ? (
                        <button className="add-to-cart-btn btn-disable" disabled={item.stock === 0} onClick={()=>dispatch(removeItem(item))}>
                           Remove From Cart
                        </button>
                    ) : (
                        <button className="add-to-cart-btn" onClick={() => dispatch(addItem(item))} disabled={item.stock === 0}>
                           {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
                        </button>
                    )}
                 </div>
               </div>
             )
         })}
       </div>
    </div>
  );
};

export default ProductList;