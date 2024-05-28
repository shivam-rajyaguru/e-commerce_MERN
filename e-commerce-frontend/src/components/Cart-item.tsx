import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItem: any;
};

function CartItem({ cartItem }: CartItemProps) {
  const { productId, photo, name, stock, quantity, price } = cartItem;
  return (
    <div className="cart-item">
      <img src={photo} alt={name} />

      <article>
        <Link to={"/products/${productId}"}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>

      <button>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
