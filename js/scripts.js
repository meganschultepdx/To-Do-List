// Business Logic for ToDoList ---------
function ToDoList() {
  this.items = [],
  this.currentItemId = 0
}

ToDoList.prototype.addItem = function(item) {
  item.id = this.assignItemId();
  this.items.push(item);
}

ToDoList.prototype.assignItemId = function() {
  this.currentItemId += 1;
  return this.currentItemId;
}

ToDoList.prototype.findItem = function(id) {
  for (var i=0; i< this.items.length; i++) {
      if (this.items[i].id == id) {
        return this.items[i];
      }
    };
  return false;
}

ToDoList.prototype.deleteItem = function(id) {
  for (var i=0; i< this.items.length; i++) {
    if (this.items[i]) {
      if (this.items[i].id == id) {
        delete this.items[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Item ---------
function Item(itemName) {
  this.itemName = itemName
}

Item.prototype.itemName = function() {
  return "<li>" + this.itemName + "</li>";
}

var toDoList = new ToDoList();
var item = new Item("Learn objects");
var item2 = new Item("Profit!");
toDoList.addItem(item);
toDoList.addItem(item2);

toDoList.items;
