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

export default Stats;
