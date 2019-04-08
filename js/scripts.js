// Business Logic for ToDoList ---------
function ToDoList() {
  this.items = []
}

// Business Logic for Item ---------
function Item(itemName) {
  this.itemName = itemName
}

Item.prototype.itemName = function() {
  return "<li>" + this.itemName + "</li>";
}
