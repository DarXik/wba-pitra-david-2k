const setNums = () => {
    console.log(5 + 6);

}

setNums();

document.getElementById("demo").innerHTML = "dom je js";

const click = document.getElementById("demo");

function h1Click() {
    click.innerHTML = "dom";
}

/* $(document).ready(() => {



}); */

$(document).ready(function() {
    $(p).click(function() {
        $(h1).hide();
    });
});