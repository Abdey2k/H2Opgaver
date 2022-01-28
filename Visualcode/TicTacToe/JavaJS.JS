
function tictac(){
var i = 0;
var id = 0;
var table = document.getElementById("BoardID")
for (i; i <= 9; i++) {
    let button = document.createElement("button")
    document.body.appendChild(button);
    button.style.width = "50px";
    button.style.height = "50px";
    button.addEventListener("click", function() {
        if ((id == 0) || (id == 2 ) || (id == 4 ) || (id == 6 ) || (id == 8 )) {
            button.innerHTML = "X";
        }
        else
        {
            button.innerHTML = "O"; 
        }
        id++;
    });
    addButtonToTable(button,table);
}
}

function disableclick(buttonID){
    document.getElementById(buttonID).disabled = true;
}

function addButtonToTable(button, table) {
    var cell = document.createElement("td");
    // Get first row of table
    var row = table.rows[0];
    // Create new row if row doesn't exist
    if(!row) {
      row = document.createElement("row");
      table.appendChild(row);
    }
    // Add button to table cell
    cell.appendChild(button);
    row.appendChild(cell);
  }
