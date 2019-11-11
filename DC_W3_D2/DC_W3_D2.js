var h2_select = document.querySelector("h2");
h2_select.addEventListener("click",removeElem);
h2_select.addEventListener("mouseover",chg_font_size);
h2_select.addEventListener("mouseleave",init_font_size);
h2_select.addEventListener("contextmenu",chg_background);
h2_select.addEventListener("select",chg_background);


function removeElem()

{

h2_select.remove();

}


function chg_font_size()

{
h2_select.style.fontSize = "50px";

}


function init_font_size()

{
h2_select.style.fontSize = "1.5em";

}


function chg_background()

{
   h2_select.style.background = "lightblue";

}




 

