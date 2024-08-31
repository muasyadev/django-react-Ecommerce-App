import "./header.css";
import Logo from "../icons/logo2.jpg";
import User from "../icons/mainUser.jpg";
import Cart from "../icons/cart-icon.png";
import SearchButton from "../icons/search-icon.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  cartCount: number;
}

function Header({ cartCount }: HeaderProps) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate({ pathname: "/cart" }); // Correctly pass an object with the `to` property
  };
  return (
    <>
      <div className="head">
        <img src={Logo} alt="" className="amazonLogo"></img>
        <div className="searchBox">
          <input type="text" placeholder="search" className="headerInput" />
          <img src={SearchButton} alt="" className="inputSearch-button" />
        </div>
        <div>
          <img src={User} alt="" className="mainUser" />
        </div>
        <div className="cart-css">
          <button className="ButtonCart" onClick={handleCartClick}>
            <img src={Cart} alt="" className="amazon-cart"></img>
            <div className="cart-quantity-update ">{cartCount}</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
