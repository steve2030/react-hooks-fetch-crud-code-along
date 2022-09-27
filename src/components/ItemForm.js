import React, { useState } from "react";

function ItemForm({handleSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
// introducing  onsubmitItem function
  function onSubmitItem(event) {
    event.preventDefault();
    handleSubmit({
      name:name,
      category:category,
      isInCart:false,
    })

  }

  return (
    //include the onsubmitItem in the submit
    <form className="NewItem" onSubmit={onSubmitItem}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
