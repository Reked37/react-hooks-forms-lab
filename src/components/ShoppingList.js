import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, passNewItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch]=useState("")

  function handleSearchChange(event){
    return setSearch(event.target.value)
  }
  console.log(search)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item)=>{
    return item.name.includes(search)
  })


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={passNewItems}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
