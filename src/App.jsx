import { CartProvider } from "./CartContext";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  const productos = [
    { id: 1, name: "Producto 1", price: "100" },
    { id: 2, name: "Producto 2", price: "200" },
    { id: 3, name: "Producto 3", price: "300" },
    { id: 4, name: "Producto 4", price: "400" },
    { id: 5, name: "Producto 5", price: "500" },
    { id: 6, name: "Producto 6", price: "600" },
  ];
  return (
    <CartProvider>
      {productos.map((producto) => (
        <Product key={producto.id} product={producto} />
      ))}
      <Cart />
    </CartProvider>
  );
}

export default App;
