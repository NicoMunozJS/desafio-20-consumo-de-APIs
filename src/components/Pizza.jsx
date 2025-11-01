import { useState, useEffect } from "react";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001") // <- pizza individual
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al cargar pizza:", err));
  }, []);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="card p-3 m-3" style={{ maxWidth: "400px" }}>
      <img
        src={pizza.img}
        alt={pizza.name}
        className="img-fluid"
        style={{ borderRadius: "8px" }}
      />
      <h2 className="mt-3">{pizza.name}</h2>
      <p className="fw-bold">Precio: ${pizza.price}</p>
      <ul>
        {pizza.ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
      <p>{pizza.description}</p>
      <button className="btn btn-primary mt-2">Añadir al carrito</button>
    </div>
  );
}
