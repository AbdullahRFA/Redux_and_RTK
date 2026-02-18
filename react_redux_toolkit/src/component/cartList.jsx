import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/slice"; // Import updateQuantity

function CartListItem() {
  // 1. Read directly from Redux (Source of Truth)
  const cartItems = useSelector((state) => state.cart.item || []);
  const dispatch = useDispatch();

  // 2. Handle Quantity via Redux
  const handleQuantityChange = (id, value) => {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty > 0) {
      dispatch(updateQuantity({ id, quantity: qty }));
    }
  };

  // 3. Calculate Subtotal safely
  const totalPrice = cartItems.reduce((total, item) => {
    const qty = item.quantity || 1;
    return total + (item.price * qty);
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart ({cartItems.length} items)</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">Your cart is empty.</div>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => {
             // Default quantity to 1 if undefined
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
                    
                    {/* Quantity Input */}
                    <input
                      type="number"
                      min="1"
                      style={{ margin: "15px", width: "60px" }}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      value={currentQty}
                    />

                    <div>
                      {/* Fix Math: Calculate first, then format */}
                      <div className="item-price">
                        ${(item.price * currentQty).toFixed(2)}
                      </div>
                      
                      {/* Dispatch Remove */}
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

      {/* Footer */}
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