import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Product({ product }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <h2>Nombre: {product.name}</h2>
      <p> precio: ${product.price}</p>
      <button onClick={() => addProduct(product)}>Agregar 🛒</button>
    </>
  );
}
