import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import CartEnhanced from "./pages/CartEnhanced/CartEnhanced";
import Checkout from "./pages/Checkout/Checkout";
import Account from "./pages/Account/Account";
import Success from "./pages/Success/Success";
import Articles from "./pages/Articles/Articles";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import WomensFashion from "./pages/WomensFashion/WomensFashion";
import MensFashion from "./pages/MensFashion/MensFashion";
import Accessories from "./pages/Accessories/Accessories";
import SearchResults from "./pages/SearchResults/SearchResults";
import { useSelector } from "react-redux";
import Wishlist from "./components/Wishlist/Wishlist";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const user = useSelector((state: any) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products/:category" element={<ProductList />} />

      <Route path="/women" element={<WomensFashion />} />

      <Route path="/men" element={<MensFashion />} />

      <Route path="/accessories" element={<Accessories />} />

      <Route path="/product/:id" element={<ProductDetail />} />

      <Route path="/articles" element={<Articles />} />

      <Route path="/article/:id" element={<ArticleDetail />} />

      <Route path="/search" element={<SearchResults />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/faq" element={<FAQ />} />

      <Route path="/product/:id" element={<Product />} />

      <Route path="/cart" element={user ? <CartEnhanced /> : <Cart />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/wishlist" element={user ? <Wishlist /> : <Navigate to="/login" />} />

      <Route path="/profile" element={user ? <Account /> : <Navigate to="/login" />} />

      <Route path="/success" element={<Success />} />

      <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />

      <Route
        path="/register"
        element={user ? <Navigate to={"/"} /> : <Register />}
      />
    </Routes>
  );
}

export default App;
