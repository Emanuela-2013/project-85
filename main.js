var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var greencar_width = 75;
var greencar_height = 100;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

var green_x = 5;
var green_y = 225;

var background_imgTag = new Image(); 
var greencar_imgTag = new Image();

function add() {
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
    ctx.drawImage(greencar_imgTag, green_x, green_y, greencar_width, greencar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (green_y >= 0) {
        green_y -= 10;
        console.log("When up arrow is pressed, x=" + green_x + " |  y=" + green_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down() {
    if (green_y <= canvas.height) {
        green_y += 10;
        console.log("When down arrow is pressed, x=" + green_x + " | y=" + green_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left() {
    if (green_x >= 0) {
        green_x -= 10;
        console.log("When left arrow is pressed, x=" + green_x + " | y=" + green_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right() {
    if (green_x <= canvas.width - greencar_width) {
        green_x += 10;
        console.log("When right arrow is pressed, x=" + green_x + " | y=" + green_y);
        uploadBackground();
        uploadgreencar();
    }
}

add();
