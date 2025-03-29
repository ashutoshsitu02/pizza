import pizzaData from "../data";
import "../index.css";

function Menu() {
  const pizzaList = pizzaData.map((pizza, index) => {
    return (
      <li key={index} className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
        <img src={pizza.photoName} alt={pizza.name} />
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span> {pizza.soldOut ? "Sold out!" : pizza.price}</span>
      </li>
    );
  });

  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas"> {pizzaList}</ul>
    </main>
  );
}

export default Menu;
