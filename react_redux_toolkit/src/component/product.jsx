import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import { addItem, removeItem } from "../redux/slice"; // Import the cart action

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const { items, status } = useSelector((state) => state.product);

  if (status === 'loading') return <div className="loading">Loading products...</div>;

  return (
    <div className="product-list-container">
      <h2 className="section-title">Our Products</h2>
      
      {/* Grid Container */}
      <div className="product-grid">
        {items.length > 0 && items.map((item) => {
           // Calculate original price for display: Price / (1 - discount/100)
           const originalPrice = (item.price / (1 - item.discountPercentage / 100)).toFixed(2);

           return (
            <div className="product-card" key={item.id}>
                {/* Image Section with Badge */}
                <div className="product-image-wrapper">
                    <img src={item.thumbnail} alt={item.title} className="product-img" />
                    {item.discountPercentage > 0 && (
                        <span className="discount-badge">-{Math.round(item.discountPercentage)}%</span>
                    )}
                </div>

                {/* Content Section */}
                <div className="product-content">
                    <span className="product-brand">{item.brand}</span>
                    <h3 className="product-title" title={item.title}>{item.title}</h3>
                    <p className="product-desc">{item.description}</p>
                    
                    {/* Rating */}
                    <div className="product-rating">
                        <span className="star">★</span>
                        <span>{item.rating}</span>
                        <span className="review-count">({item.reviews?.length || 0} reviews)</span>
                    </div>

                    {/* Price Section */}
                    <div className="product-price-box">
                        <span className="current-price">${item.price}</span>
                        <span className="old-price">${originalPrice}</span>
                    </div>

                    {/* Action Button */}
                    <button 
                        className="add-to-cart-btn"
                        onClick={() => dispatch(addItem())}
                        disabled={item.stock === 0}
                    >
                        {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>

                    <button 
                        className="add-to-cart-btn remove-cart"
                        onClick={() => dispatch(removeItem())}
                        disabled={item.stock === 0}
                    >
                        Remove from cart
                    </button>
                </div>
            </div>
           )
        })}
      </div>
    </div>
  );
};

export default ProductList;