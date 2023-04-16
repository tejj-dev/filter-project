import React, { useState } from "react";

const items = [
  { name: "Apple", category: "fruits" },
  { name: "Banana", category: "fruits" },
  { name: "Carrot", category: "vegetables" },
  { name: "Broccoli", category: "vegetables" },
];

function Home() {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredItems = category === "all" ? items : items.filter((item) => item.category === category);

  return (
    <div>
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </select>
      </label>
      <br />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home