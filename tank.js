var image = document.getElementById("image");
var steps = 1;
var leftPos = 0;
var topPos = 0;
var stepSize = 10;
var oriented = "right";

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    var seq = steps % 8;
    if(e.keyCode == 32){
    	console.log("spacebar");
        shootBullet();
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        if(oriented != "up"){
            image.style.transform = "rotate(0deg)"
            oriented = "up";
        }
        image.style.backgroundPosition = (seq*84)+"px 0px"; // check goed de rupsband
        topPos -= stepSize;
        if(checkLegal()){
            image.style.top = topPos+"px";
        }
        steps++;
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        if(oriented != "down"){
            image.style.transform = "rotate(180deg)"
            oriented = "down";
        }
        image.style.backgroundPosition = (seq*84)+"px 0px"; // check goed de rupsband
        topPos += stepSize;
        if(checkLegal()){
            image.style.top = topPos+"px";
        }
        steps++;
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        if(oriented != "left"){
            image.style.transform = "rotate(270deg)"
            oriented = "left";
        }
        image.style.backgroundPosition = (seq*84)+"px 0px"; // check goed de rupsband
        leftPos -= stepSize;
        if(checkLegal()){
            image.style.left = leftPos+"px";
        }
        steps++;
    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        if(oriented != "right"){
            image.style.transform = "rotate(90deg)"
            oriented = "right";
        }
    	image.style.backgroundPosition = (seq*84)+"px 0px"; // check goed de rupsband
        leftPos += stepSize;
        if(checkLegal()){
            image.style.left = leftPos+"px";
        }
        steps++;
    }
}

function checkLegal(left, top){
    if(leftPos <= 720 && leftPos >= 0 && topPos <= 560 && topPos >= 0){
        return true;
    }
    else{
        if(leftPos > 720){
            leftPos -= stepSize;           
        }
        else if(leftPos < 0){
            leftPos += stepSize;
        }
        if(topPos > 560){
            topPos -= stepSize;
        }
        else if(topPos < 0){
            topPos += stepSize;
        }
        return false;
    }
}

function shootBullet(){
    var bullet = document.createElement("p");
    bullet.id = "bullet";
    bullet.style.background = "url('tank.png') 336px 168px";
    bullet.style.width = "80px";
    bullet.style.height = "80px";
    bullet.style.position = "absolute";
    bullet.style.top = topPos+"px";
    bullet.style.left = leftPos+"px";
    if(oriented == "right"){
        bullet.style.left = (leftPos+80)+"px";
        bullet.style.transform = "rotate(90deg)";
    } else if(oriented == "down"){
        bullet.style.transform = "rotate(180deg)";
        bullet.style.top = (topPos+80)+"px";
    } else if(oriented == "left"){
        bullet.style.transform = "rotate(270deg)";
        bullet.style.left = (leftPos-80)+"px";
    } else if(oriented == "up"){
        bullet.style.transform = "rotate(0deg)";
        bullet.style.top = (topPos-80)+"px";
    }
    document.getElementById("demo").appendChild(bullet);
}