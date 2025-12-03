import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [packingItems, setPackingItems] = useState(initialItems);

  function handleAddItems(item) {
    setPackingItems((packingItems) => [...packingItems, item]);
  }

  function handleDeleteItem(id) {
    setPackingItems((packingItems) =>
      packingItems.filter((item) => item.id !== id)
    );
  }
  function handleToggleItem(id) {
    setPackingItems((packingItems) =>
      packingItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    let confirmed = window.confirm("Are you sure you want to clear the list?");
    if (confirmed) setPackingItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        packingItems={packingItems}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats packingItems={packingItems} />
    </div>
  );
}

function Logo() {
  return <h1>✈️ Myown packing 💼</h1>;
}

function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    console.log(newItem);

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="list-description"
        id="list-description"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({
  packingItems,
  handleDeleteItem,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = packingItems;

  if (sortBy === "description")
    sortedItems = packingItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = packingItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  if (sortBy === "quantity")
    sortedItems = packingItems
      .slice()
      .sort((a, b) => Number(b.quantity) - Number(a.quantity));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
  console.log(item.packed);
  return (
    <li>
      <input
        type="checkbox"
        name="packed"
        id="packed"
        checked={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={(e) => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ packingItems }) {
  console.log(packingItems.length);
  if (!packingItems.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀.</em>
      </footer>
    );

  const numberOfItems = packingItems.length;
  const numberOfItemsPacked = packingItems.filter((item) => item.packed).length;
  const percentageCompletePacking = Math.round(
    (numberOfItemsPacked / numberOfItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {percentageCompletePacking === 100
          ? `You got everything! Ready to Go ✈️`
          : `📦 You have ${numberOfItems} items on your list, and you already packed
        ${numberOfItemsPacked}(${percentageCompletePacking}%)`}
      </em>
    </footer>
  );
}
