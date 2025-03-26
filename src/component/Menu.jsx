import pizzaData from "../data";
import "../index.css";

function Menu() {
  const pizzaList = pizzaData.map((pizza, index) => {
    return (
      <div key={index} className="menu">
        <img src={pizza.photoName} alt={pizza.name} />
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        {pizza.soldOut ? <p>Sold out!</p> : <p>${pizza.price}</p>}
      </div>
    );
  });

  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      {pizzaList}
    </main>
  );
}

export default Menu;
