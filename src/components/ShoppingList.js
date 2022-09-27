import React, { useState,useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
  //handleChange,handledelete, handlesubmit
  function handleChange(addedItemToCart){
    const updateItems = items.map(item => {
      if(item.id === addedItemToCart.id){
        return addedItemToCart;
      }
      else{
        return item;
      }

    })

    setItems(updateItems);
  }

  function handleDelete(deletedItem){
    const updateItems = items.filter(item => item.id !== deletedItem.id)
    setItems(updateItems)
  }
  function handleSubmit(item) {
    fetch('http://localhost:4000/items', {
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data =>setItems([...items, data]))
  }
  // Updates the state by passing the data into setItems function
  useEffect(() => {
    fetch('http://localhost:4000/items')
    .then(res => res.json())
    .then(data => setItems(data));
  }, [])

//end
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
