var i = 0;
var txt = 'Beginings';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("js1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function actionToggle() {
    const action = document.querySelector('.action');
    action.classList.toggle('active')
}