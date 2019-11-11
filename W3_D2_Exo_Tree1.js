//// exo 1 tree ///

document.querySelector("ul").lastElementChild.innerHTML="Richard";

var ul = document.querySelectorAll("ul");

console.log(ul[0].children);

for (var i =0; i< ul.length;i++)
{

	ul[i].firstElementChild.innerHTML="Lise";
}

for (var i =0; i< ul.length;i++)
{

	var newElem = document.createElement("li");
	newElem.innerHTML="Hey Student"
	ul[i].append(newElem);
}

var ul = document.querySelectorAll("ul")[1];

var sarah = ul.children[1];

sarah.remove();



