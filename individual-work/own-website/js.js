/* var i = 0;
var txt = "vítejte, hodinářství pantera je zde pro vás";
var speed = 125;
function typeWriter(){
    if (i < txt.length)
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
} */

function top() {
    document.getElementById( 'top' ).scrollIntoView();    
};

function bottom() {
    document.getElementById( 'bottom' ).scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );
};

bottom();