var i = 0;
var txt = 'And there is something about us';
var txt2 = 'Be welcomed, pal.'
var speed = 100;
var speed2 = 200;
var speedBack2 = 75;

/* function TypeEffect() {
    if (i < txt.length) {
        document.getElementById("js1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(TypeEffect, speed);
    }
}
 */

function TypeEffect2() {
    if (i >= txt2.length) {
        setTimeout(UnType, 3500);
        return;
    }

    if (i < txt2.length) {
        document.getElementById("js2").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(TypeEffect2, speed2);
    }
}

function UnType() {
    if (i <= 0) {
        setTimeout(TypeEffect2, 1000);
        return;
    }

    if (i > 0) {
        var newHeading = document.getElementById("js2").innerHTML.split('');
        newHeading.pop();
        i--;
        document.getElementById("js2").innerHTML = newHeading.join('');
        setTimeout(UnType, speedBack2);
    }
}

/* function actionToggle() {
    const action = document.querySelector('.action');
    action.classList.toggle('active')
} */


/* function HidePlaceholder(a) {




    document.getElementById(a).style.visibility = "hidden";
}

function ShowPlaceHolder(holder, input) {
    const inputValue = document.getElementById(input).value;
    const value = inputValue.trim();
    if (value === "") {
        document.getElementById(holder).style.visibility = "visible";
    }
} */



/* var typeText = document.querySelector(".typeText")
var textToBeTyped = "And there is something about us"
var index = 0,
    isAdding = true

function playAnim() {
    setTimeout(function() {
       
        typeText.innerText = textToBeTyped.slice(0, index)
        if (isAdding) {
            if (index > textToBeTyped.length) {
                isAdding = false
                    
                setTimeout(function() {
                    playAnim()
                }, 2000)
                return
            } else {
                index++
            }
        }
         else {
                  
                   if (index === 0) {
                       
                       isAdding = true
                   } else {
                       
                       index--
                   }
               } 
        
        playAnim()
    }, 120)
}

playAnim() */