import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";
import Login from "./components/Login/Login";
import "./App.css";
import Cart from "./pages/cart/Cart";
import { UserProvider } from "./pages/user/UserContext";
import User from "./pages/user/User";
import Medics from "./pages/medics/Medics";

interface CartItem {
  name: string;
  image: string;
  priceCents: number;
  quantity: number;
}
interface HomeProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Home: React.FC<HomeProps> = ({
  cartCount,
  setCartCount,
  cartItems,
  setCartItems,
}) => (
  <div>
    <Header cartCount={cartCount} />
    <Navbar />
    <div className="container">
      <Cards
        cartCount={cartCount}
        setCartCount={setCartCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  </div>
);

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/cart"
            element={
              isAuthenticated ? (
                <Cart cartItems={cartItems} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/user" element={<User />} />
          <Route path="/medics" element={<Medics />} />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
