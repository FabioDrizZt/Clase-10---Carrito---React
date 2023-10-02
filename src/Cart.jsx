import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart,removeProduct } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <h2>Carrito de compras 🛒</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={()=> removeProduct(item)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
