import AddToCart from "./addToCart";
import { NavLink, Link } from "react-router-dom"; // Import NavLink for active styling

const Header = () => {
  return (
    <header className="site-header"> {/* Fixed: class -> className */}
      <div className="site-logo">
        <Link to="/">YourChoice</Link>
      </div>

      <nav className="site-nav">
        <ul>
          <li>
            {/* NavLink adds an 'active' class automatically when route matches */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            {/* Point Shop to home as well, or a specific /shop route if you make one */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <AddToCart />
    </header>
  );
};
export default Header;