import { useSelector, useDispatch } from "react-redux";
// Assuming you will update your slice to handle removing by ID
import { removeItem } from "../redux/slice"; 

function CartListItem() {
  // Access the array of items from your Redux state
  const cartItems = useSelector((state) => state.cart.item || []);
  const dispatch = useDispatch();

  // Calculate Subtotal
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart ({cartItems.length} items)</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">Your cart is empty.</div>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item">
              
              {/* Product Image */}
              <div className="cart-item-img">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              {/* Product Details */}
              <div className="cart-item-details">
                <span className="item-brand">{item.brand}</span>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-category">Category: {item.category}</p>
                <div className="stock-status" style={{ color: item.stock > 0 ? 'green' : 'red' }}>
                   {item.availabilityStatus}
                </div>
              </div>

              {/* Price & Actions */}
              <div className="cart-item-actions">
                <div className="item-price">${item.price.toFixed(2)}</div>
                <button 
                    className="remove-btn" 
                    onClick={() => dispatch(removeItem(item))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary / Footer */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
            <div className="summary-row">
                <span>Subtotal:</span>
                <span className="summary-total">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartListItem;