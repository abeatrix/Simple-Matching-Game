var numberOfFaces = 5;
var theBody = document.getElementsByTagName("body")[0];
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
function generateFaces() {
for (var i=0; i < numberOfFaces; i++) {
    var image = document.createElement("img");
    var randomNumberLeft = Math.floor((Math.random()*400) + 1);
    var randomNumberTop = Math.floor((Math.random()*400) + 1);
    image.src="https://i.ibb.co/ckMgpmY/smiley.png";
    image.style.top = randomNumberTop + "px";
    image.style.left = randomNumberLeft + "px";
    theLeftSide.appendChild(image);
}
var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

theLeftSide.lastChild.onclick = function nextLevel(event){
    event.stopPropagation();
    numberOfFaces += 5;
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateFaces();
}

theBody.onclick = function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    numberOfFaces = 5;
    generateFaces();
}
}
