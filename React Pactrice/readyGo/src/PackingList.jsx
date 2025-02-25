import Item from "./Item.jsx";
import { useState } from "react";

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

export default PackingList;
