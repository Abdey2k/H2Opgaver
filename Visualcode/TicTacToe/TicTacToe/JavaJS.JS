
function tictac(){
var id = 0;
var s = 0;

var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");


for (s; s <= 2; s++) {
 // creates a table row
var row = document.createElement("tr"); 
// add the row to the end of the table body
var i = 0;
    for (i; i <= 2; i++) {     
    
    let button = document.createElement("button")


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
    var cell = document.createElement("td");

    cell.appendChild(button);
    row.appendChild(cell);
    }
tblBody.appendChild(row);
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);
}

function disableclick(buttonID){
    document.getElementById(buttonID).disabled = true;
}
