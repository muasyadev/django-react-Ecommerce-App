import { useNavigate } from "react-router-dom";
import "./Cart.css";
interface CartItem {
  image: string;
  name: string;
  priceCents: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {
  const navigate = useNavigate();

  const getTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.priceCents * item.quantity,
      0
    );
  };
  console.log(getTotalCost());

  const handleCheckout = () => {
    console.log("Proceed to checkout");
    navigate("/checkout");
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${(item.priceCents / 100).toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
      <div className=" Billing">
        <p className="results">
          TotalCost: ${(getTotalCost() / 100).toFixed(2)}
        </p>
      </div>
      <p className="checkOut" onClick={handleCheckout}>
        {" "}
        Proceed to Checkout
      </p>
    </div>
  );
};

export default Cart;
