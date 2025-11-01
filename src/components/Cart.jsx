import { useState } from "react";
import { pizzaCart } from "../pizzas";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between border p-3 mb-2"
        >
          <img
            src={item.img || "https://via.placeholder.com/80"}
            alt={item.name}
            width="80"
          />
          <h5 className="m-0">{item.name}</h5>
          <p className="m-0">${item.price.toLocaleString()}</p>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
          </div>
          <p className="fw-bold m-0">
            ${(item.price * item.quantity).toLocaleString()}
          </p>
        </div>
      ))}

      <hr />
      <h4>Total: ${total.toLocaleString()}</h4>
      <button className="btn btn-primary mt-3">Pagar</button>
    </div>
  );
}
