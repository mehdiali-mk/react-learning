import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  function handleDeleteItems(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        initialItems={items}
        handleDeleteItems={handleDeleteItems}
        handleToggleItem={handleToggleItem}
        handleClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ ReadyGo 💼</h1>;
}

function Form({ handleItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    handleItems({
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    });

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        value={description}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({
  initialItems,
  handleDeleteItems,
  handleToggleItem,
  handleClearItem,
}) {
  const [sortMethod, setSortMethod] = useState("input");

  let sortedItems;

  if (sortMethod === "input") sortedItems = initialItems;

  if (sortMethod === "description") {
    sortedItems = [...initialItems].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortMethod === "packed") {
    sortedItems = [...initialItems].sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItems={handleDeleteItems}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortMethod}
          onChange={(event) => {
            setSortMethod(event.target.value);
          }}
        >
          <option value="input">Input order</option>
          <option value="description">Description</option>
          <option value="packed">Packed Status</option>
        </select>
        <button onClick={handleClearItem}>Clear</button>
      </div>
    </div>
  );
}

function Item({ item, handleDeleteItems, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          handleToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          handleDeleteItems(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em> Start adding some items to your packing list. 🚀</em>
      </footer>
    );

  console.log(items);

  const packedItems = items.filter((item) => item.packed).length;
  const totalItems = items.length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${totalItems} items on your list, and you already packed ${" "}
          ${packedItems} (${packedPercentage} %)`}
      </em>
    </footer>
  );
}

export default App;
