import React from "react";
// calling the  function handlechange and onDelete as params
function Item({ item, handleChange, onDeleteItem }) {
  // handleCartChange function
  function handleCartChange(){
    fetch(`http://localhost:4000/items/${item.id}`,
    {
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({isInCart:!item.isInCart})
    })
    .then(res => res.json())
    .then(data => handleChange(data));
  }
//handling the deletion
  function handleDelete() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method:'DELETE'})
    .then(res => res.json())
    .then(() => onDeleteItem(item));
  }



  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
  }

export default Item;
