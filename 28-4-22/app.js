/* const btn = document.getElementById('btn');
btn.onclick = function showing() {
    document.getElementById("text-show").style.display = 'block';
}; */

/* $(document).ready(function() {
    $("#btn").click(function() {
        $("#text-show").toggleClass("show-style");
    });
}); */



btn.onclick = function() {
    document.getElementById("text-show").classList.toggle("show-style");
}