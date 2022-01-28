const url = "https://swapi.dev/api";

const menubar = document.querySelector(".menubarz");

fetch(url) 
.then(function(response){return response.json()})

.then(function(json){
    console.log(json);
 for (let key in json) {
     
 let menuitemz = document.createElement("div");
 menuitemz.className = "menuitemz";
 menuitemz.innerHTML = json.films;
 menuitemz.addEventListener("click", menuClick)
 menuitemz.appendChild(menuitemz)
}
})

async function menuClick(e){
e.preventDefault();
alert(e.target.href);
let data = await getData(url)
return json
}

async function getData(url){
let response = await fetch(url)
let json = await response.json()
return json;
}

function showData(data){
    Date.results.forEach(function(alm){
    dataBox.innerHTML += alm.name + "<br>"
    })

}
