var toDoList = [];

function addItem() {
  var newItem = document.getElementById("inputItem").value;
  //console.log(newItem);
  toDoList.push(newItem);
  
  // Add as a new <li> element
    var node = document.createElement("LI");
    var textnode = document.createTextNode(newItem);
    node.appendChild(textnode);
    document.getElementById("toDo").appendChild(node);
    
    // document.getElementById("toDo").innerText = toDoList;  
}

function clearList() {
  toDoList = [];
  document.getElementById("toDo").innerText = toDoList;
}

