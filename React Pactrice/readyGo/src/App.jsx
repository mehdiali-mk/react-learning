import { useState } from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

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

export default App;
