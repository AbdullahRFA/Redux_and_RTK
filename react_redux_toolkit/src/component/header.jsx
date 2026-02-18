import AddToCart from "./addToCart";
import { NavLink, Link } from "react-router-dom"; 

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-logo">
        <Link to="/">YourChoice</Link>
      </div>

      <nav className="site-nav">
        <ul>
          <li>
            {/* ADD 'end' HERE */}
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            {/* Since Shop also points to /, it also needs 'end' or a unique route */}
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
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