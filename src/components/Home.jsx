import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas") // <- endpoint correcto
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error al cargar pizzas:", err));
  }, []);

  if (pizzas.length === 0) return <p>Cargando pizzas...</p>;

  return (
    <main className="container my-4">
      <Header />
      <section className="d-flex flex-wrap gap-3 justify-content-center mt-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img || "https://via.placeholder.com/150"}
          />
        ))}
      </section>
    </main>
  );
}
