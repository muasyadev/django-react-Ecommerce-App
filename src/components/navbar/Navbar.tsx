import "./navbar.css";
import Home from "../icons/home.png";
import User from "../icons/user.jpg";
import Medicine from "../icons/Health.jpg";
import Gaming from "../icons/gaming.png";
import Books from "../icons/books.jpg";
import Furniture from "../icons/furnitures.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleUserClick = () => {
    navigate({ pathname: "/user" });
  };
  const handleMedicClick = () => {
    navigate({ pathname: "/medics" });
  };
  return (
    <>
      <div className="NavbarContainer">
        <ul>
          <li>
            <img src={Home} alt="" className="sidebar-icon" />
          </li>
          <li>
            <img
              src={User}
              alt=""
              className="sidebar-icon"
              onClick={handleUserClick}
            />
          </li>
          <li>
            <img
              src={Medicine}
              alt=""
              className="sidebar-icon"
              onClick={handleMedicClick}
            />
          </li>
          <li>
            <img src={Gaming} alt="" className="sidebar-icon" />
          </li>
          <li>
            <img src={Books} alt="" className="sidebar-icon" />
          </li>
          <li>
            <img src={Furniture} alt="" className="sidebar-icon" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
