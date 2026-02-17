import React from 'react';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "https://www.skyland.com.bd/image/cache/wp/gj/Hoco/Hoco%20W35%20Max%20Bluetooth%20Wireless%20Headphone%20(6)-500x500.webp",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 80,
    image: "https://cdn.bdstall.com/product-image/giant_247997.jpg",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 45,
    image: "https://www.ryans.com/storage/products/main/logitech-g502-x-plus-lightsync-black-gaming-11720091442.webp",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 150,
    image: "https://www.startech.com.bd/image/cache/catalog/keyboard/havit/kb884l/kb884l-01-500x500.webp",
  },
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2 className="section-title">Our Products</h2>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;