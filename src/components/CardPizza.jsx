export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card p-3" style={{ width: "200px" }}>
      <img
        src={img || "https://via.placeholder.com/150"}
        alt={name}
        width="150"
        height="150"
      />
      <h3>{name}</h3>
      <p>${price.toLocaleString()}</p>
      <ul>
        {ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
