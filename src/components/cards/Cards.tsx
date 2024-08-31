// import React, { useState } from "react";
// import "./cards.css";
// import { posts } from "../data";

// interface CartItem {
//   name: string;
//   image: string;
//   priceCents: number;
//   quantity: number;
// }
// interface ProductProps {
//   cartItems: CartItem[];
//   setCartCount: React.Dispatch<React.SetStateAction<number>>;
//   setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
//   image: string;
//   name: string;
//   rating: number;
//   priceCents: number;
//   cartCount: number;
// }

// const getRatingImage = (rating: number) => {
//   const ratingValue = Math.round(rating * 10);
//   return `/icons/rating-${ratingValue}.png`;
// };

// const Cards = ({
//   setCartCount,
//   cartCount,
//   setCartItems,
// }: {
//   setCartCount: React.Dispatch<React.SetStateAction<number>>;
//   cartCount: number;
//   setCartItems: React.Dispatch<
//     React.SetStateAction<
//       { name: string; priceCents: number; quantity: number }[]
//     >
//   >;
//   cartItems: { name: string; priceCents: number; quantity: number }[];
// }) => {
//   const [selectedQuantities, setSelectedQuantities] = useState<number[]>(
//     posts.map(() => 0)
//   );

//   const handleQuantityChange = (index: number, quantity: number) => {
//     const updatedQuantities = [...selectedQuantities];
//     updatedQuantities[index] = quantity;
//     setSelectedQuantities(updatedQuantities);
//   };

//   const handleAddToCart = (index: number) => {
//     const quantity = selectedQuantities[index];
//     if (quantity > 0) {
//       const product = posts[index];
//       setCartCount(cartCount + quantity);
//       setCartItems((prevItems) => {
//         const existingItem = prevItems.find(
//           (item) => item.name === product.name
//         );
//         if (existingItem) {
//           return prevItems.map((item) =>
//             item.name === product.name
//               ? { ...item, quantity: item.quantity + quantity }
//               : item
//           );
//         } else {
//           return [...prevItems, { ...product, quantity }];
//         }
//       });
//     }
//   };

//   // const getRatingImage = (rating: number) => {
//   //   const ratingValue = Math.round(rating * 10);
//   //   return `/icons/rating-${ratingValue}.png`;
//   // };

//   // //main function
//   // const Cards = ({ setCartCount, cartCount }: ProductProps) => {
//   //   const [selectedQuantities, setSelectedQuantities] = useState<number[]>(
//   //     posts.map(() => 0)
//   //   );

//   //   const handleQuantityChange = (index: number, quantity: number) => {
//   //     const updatedQuantities = [...selectedQuantities];
//   //     updatedQuantities[index] = quantity;
//   //     setSelectedQuantities(updatedQuantities);
//   //   };

//   //   const handleAddToCart = (index: number) => {
//   //     const quantity = selectedQuantities[index];
//   //     setCartCount(cartCount + quantity);
//   //   };

//   return (
//     <div className="container-name">
//       {posts.map((product: ProductProps, index: number) => (
//         <div key={index} className="product-container">
//           <div className="description">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="imageLayout"
//               style={{ width: "300px", height: "400px" }}
//             />

//             <div
//               style={{ fontFamily: "Verdana" }}
//               className="product-description"
//             >
//               {product.name}
//             </div>
//             <div>
//               <img
//                 className="star-rating"
//                 src={getRatingImage(product.rating)}
//                 alt="rating"
//               />
//             </div>
//             <div className="product-price">
//               ${(product.priceCents / 100).toFixed(2)}
//             </div>
//             <div className="quantityIndicator">
//               <select
//                 className="cart-quantity"
//                 value={selectedQuantities[index]}
//                 onChange={(e) =>
//                   handleQuantityChange(index, parseInt(e.target.value))
//                 }
//               >
//                 {[...Array(11).keys()].map((value) => (
//                   <option key={value} value={value}>
//                     {value}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               className="addtocart "
//               data-product-name={product.name}
//               onClick={() => handleAddToCart(index)}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;
import React, { useState } from "react";
import "./cards.css";
import { posts } from "../data";

interface CartItem {
  name: string;
  image: string;
  priceCents: number;
  quantity: number;
}
interface ProductProps {
  cartItems: CartItem[];
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  image: string;
  name: string;
  rating: number;
  priceCents: number;
  cartCount: number;
}
interface CardsProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const getRatingImage = (rating: number) => {
  const ratingValue = Math.round(rating * 10);
  return `/icons/rating-${ratingValue}.png`;
};

const Cards: React.FC<CardsProps> = ({
  cartCount,
  setCartCount,
  setCartItems,
}) => {
  const [selectedQuantities, setSelectedQuantities] = useState<number[]>(
    posts.map(() => 0)
  );

  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedQuantities = [...selectedQuantities];
    updatedQuantities[index] = quantity;
    setSelectedQuantities(updatedQuantities);
  };

  const handleAddToCart = (index: number) => {
    const quantity = selectedQuantities[index];
    if (quantity > 0) {
      const product = posts[index];
      setCartCount(cartCount + quantity);
      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) => item.name === product.name
        );
        if (existingItem) {
          return prevItems.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevItems, { ...product, quantity }];
        }
      });
    }
  };

  return (
    <div className="container-name">
      {posts.map((product: ProductProps, index: number) => (
        <div key={index} className="product-container">
          <div className="description">
            <img
              src={product.image}
              alt={product.name}
              className="imageLayout"
              style={{ width: "300px", height: "400px" }}
            />
            <div
              style={{ fontFamily: "Verdana" }}
              className="product-description"
            >
              {product.name}
            </div>
            <div>
              <img
                className="star-rating"
                src={getRatingImage(product.rating)}
                alt="rating"
              />
            </div>
            <div className="product-price">
              ${(product.priceCents / 100).toFixed(2)}
            </div>
            <div className="quantityIndicator">
              <select
                className="cart-quantity"
                value={selectedQuantities[index]}
                onChange={(e) =>
                  handleQuantityChange(index, parseInt(e.target.value))
                }
              >
                {[...Array(11).keys()].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="addtocart"
              data-product-name={product.name}
              onClick={() => handleAddToCart(index)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
