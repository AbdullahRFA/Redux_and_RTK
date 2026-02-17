import AddToCart from "./addToCart"

const Header=()=>{
    return(
        <header class="site-header">
        <div class="site-logo">
            <a href="#">YourChoice</a>
        </div>

        <nav class="site-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <AddToCart></AddToCart>
    </header>
    )
}
export  default Header