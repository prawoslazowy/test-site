var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (myImage === 'images/Fx-Logo.png') {
        myImage.setAttribute('src', 'images/Fx-Logo-blue.png');
    } else {
        myImage.setAttribute('src', 'images/Fx-Logo.png');
    }
}