var mouseEvent = "empty";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

/*Uncomment the correct line*/
canvas.addEventListener("mousedown", my_mousedown);
//canvas.setEventListener("mousedown", my_mousedown);
//canvas.getEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

/*
Create an event listener for "mousemove"
and call function my_mousemove
*/
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    console.log(mouseEvent);
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.Strokestyle = "blue";
        ctx.Linewidth = 2;
        ctx.moveTo(oldx, oldy);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
    }
    oldx = currentx;
    oldy = currenty;
}



//Create an event listener for "mouseup" and call function my_mouseup
//Create a function named my_mouseup with event e as parameter.
//Assign "mouseUP" to mouseEvent within the function

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

//Create an event listener for "mouseleave" and call function my_mouseleave
//Create a function named my_mouseleave with event e as parameter.
//Assign "mouseleave" to mouseEvent within the function

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


