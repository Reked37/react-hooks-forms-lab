import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  function handleNewItem(event){
    event.preventDefault()
  const newItem = {
    id: uuid(), 
    name: event.target.name.value,
    category: event.target.category.value,
  };
  console.log(newItem)
  onItemFormSubmit(newItem)
}

  return (
    <form className="NewItem" onSubmit={handleNewItem} >
      <label>
        Name:
        <input type="text" name="name"  />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
