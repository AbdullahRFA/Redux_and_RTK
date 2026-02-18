# YourChoice - Modern E-Commerce Storefront

YourChoice is a fully functional, responsive e-commerce web application built with **React** and **Redux Toolkit**. It provides a seamless shopping experience where users can browse products, manage their cart, and simulate a checkout process.

## 🚀 Features

* **Dynamic Product Listing**: Fetches real-time product data from the DummyJSON API.
* **Advanced Cart Management**:
* Add or remove items directly from the product grid.
* Update item quantities within the cart view.
* Real-time calculation of subtotal and total prices.


* **Persistent Storage**: Utilizes `localStorage` to ensure cart data is saved even after refreshing the page.
* **State Management**: Centralized state handling for both products and cart items using Redux Toolkit slices.
* **Client-Side Routing**: Smooth navigation between Home, Shop, About, and Cart pages via React Router.
* **Responsive UI**: A clean, modern interface styled with custom CSS that adapts to various screen sizes.

## 🛠️ Tech Stack

* **Frontend**: React.js
* **State Management**: Redux Toolkit
* **Routing**: React Router DOM
* **Styling**: Custom CSS3 with Grid and Flexbox layouts
* **API**: [DummyJSON]()

## 📸 Screenshots

| Home | Cart Item List | 
|:---:|:---:|
| <img src="/react_redux_toolkit/src/assets/ss/Screenshot 2026-02-18 at 10.38.51 AM.png" width="400"> | <img src="/react_redux_toolkit/src/assets/ss/Screenshot 2026-02-18 at 10.39.01 AM.png" width="400"> |

## 📁 Project Structure

```text
src/
├── assets/             # Static assets
├── component/          # UI Components
│   ├── About.jsx       # About page content
│   ├── addToCart.jsx   # Header cart icon and badge
│   ├── cartList.jsx    # Detailed cart view and logic
│   ├── header.jsx      # Navigation bar
│   └── product.jsx     # Product grid and item cards
├── redux/              # Redux Logic
│   ├── productSlice.js # Async thunks for API fetching
│   ├── slice.js        # Cart reducers and local storage logic
│   └── store.js        # Redux store configuration
├── App.jsx             # Root component and routes
├── App.css             # Global styles
└── main.jsx            # Application entry point

```

## ⚙️ Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/yourchoice-store.git
cd yourchoice-store

```


2. **Install dependencies**:
```bash
npm install

```


3. **Start the development server**:
```bash
npm run dev

```



## 📖 Key Functionality Overview

### State Management

The application uses two primary slices:

* **Product Slice**: Handles the asynchronous lifecycle (`pending`, `fulfilled`, `rejected`) of fetching data from the external API.
* **Cart Slice**: Manages the `item` array, including logic to prevent duplicate entries and synchronizing state with the browser's local storage.

### Navigation

The `Header` component uses `NavLink` to provide an active state for the current route, helping users identify their location within the app.

### Checkout Logic

The checkout process includes a confirmation dialog before clearing the cart and redirecting the user back to the home page, simulating a completed transaction.



