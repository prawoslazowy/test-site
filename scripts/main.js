var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Fx-Logo.png') {
      myImage.setAttribute ('src','images/Fx-Logo-blue.png');
    } else {
      myImage.setAttribute ('src','images/Fx-Logo.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Wpisz imię.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool. ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}