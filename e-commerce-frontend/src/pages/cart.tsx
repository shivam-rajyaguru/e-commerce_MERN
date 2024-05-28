import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/Cart-item";

const cartItems = [
  {
    productId: "bakmdfs",
    name: "Macbook",
    stock: 10,
    quantity: 4,
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    price: 45000,
  },
  {
    productId: "bakmdfq",
    name: "Macbook",
    stock: 10,
    quantity: 2,
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    price: 48000,
  },
  {
    productId: "bakmxsdfs",
    name: "Macbook",
    stock: 10,
    quantity: 7,
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    price: 52000,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setisValidCouponCode(true);
      } else {
        setisValidCouponCode(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      setisValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems?.length > 0 ? (
          cartItems.map((i, index) => <CartItem key={index} cartItem={i} />)
        ) : (
          <h1>No Item Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount : <em> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon-Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
}

export default Cart;
