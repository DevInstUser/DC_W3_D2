////////// 1 ///////////
var paraph= document.getElementsByTagName("p");
console.log(paraph);
for(var i=0; i<paraph.length; i++){
    paraph[i].classList.add("para_article"); // add a class on a each p element belonging the array variable "paraph"
}


/////////// 2 //////////


var i = paraph.length-1;
var lastparaph = paraph[i];
lastparaph.remove();


////// 3 ///////////

var h2_select = document.querySelector("h2");
h2_select.addEventListener("click",removeElem);
h2_select.addEventListener("mouseover",chg_font_size);
h2_select.addEventListener("mouseleave",default_font_size);
h2_select.addEventListener("contextmenu",chg_background);
h2_select.addEventListener("select",chg_background);
//h2_select.addEventListener("select",xxxx);

function removeElem()

{

h2_select.remove();

}

////// 4 ////////

function chg_font_size()

{
h2_select.style.fontSize = "50px";

}


function default_font_size()

{
h2_select.style.fontSize = "1.5em";

}


function chg_background()

{
   h2_select.style.background = "lightblue";

}

function Elem_to_Link()

{

var link = document.createElement("a");
h2_select.appendChild(link);

}

