import { useDispatch, useSelector } from "react-redux";
import { clearAllItem, removeItem, updateQuantity } from "../redux/slice"; 
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

function CartListItem() {
  const cartItems = useSelector((state) => state.cart.item || []);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 2. Initialize hook

  const handleQuantityChange = (id, value) => {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty > 0) {
      dispatch(updateQuantity({ id, quantity: qty }));
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const qty = item.quantity || 1;
    return total + (item.price * qty);
  }, 0);

  // 3. Handle logic and navigation together
  const placeOrder = () => {
    if(window.confirm("Are you sure you want to place this order?")) {
        alert("Your order is placed successfully!");
        dispatch(clearAllItem());
        navigate("/"); // Navigate programmatically
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart ({cartItems.length} items)</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">Your cart is empty.</div>
      ) : (
        <div className="cart-list">
          {/* ... existing map logic ... */}
          {cartItems.map((item) => {
             const currentQty = item.quantity || 1; 
             return (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="cart-item-details">
                  <span className="item-brand">{item.brand}</span>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-category">Category: {item.category}</p>
                </div>
                <div className="cart-item-actions">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="number"
                      min="1"
                      style={{ margin: "15px", width: "60px" }}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      value={currentQty}
                    />
                    <div>
                      <div className="item-price">
                        ${(item.price * currentQty).toFixed(2)}
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => dispatch(removeItem(item))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span className="summary-total">${totalPrice.toFixed(2)}</span>
          </div>
          
          {/* 4. Remove <Link> wrapper and use onClick */}
          <button className="checkout-btn" onClick={placeOrder}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartListItem;