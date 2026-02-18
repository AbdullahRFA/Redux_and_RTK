import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link

const AddToCart = () => {
  const Cartselector = useSelector((state) => state.cart.item);

  return (
    <div className="header-actions"> {/* Fixed: class -> className */}
      {/* Fixed: a -> Link */}
      <Link to="/cart" className="cart-btn" aria-label="View Cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>

        <span className="cart-count">
          {Cartselector.length ? Cartselector.length : 0}
        </span>
      </Link>
    </div>
  );
};
export default AddToCart;