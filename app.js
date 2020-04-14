'use-strict';


var stuff = [];
var randomArray = [];

function MakeProducts(name, img) {
  this.name = name;
  this.img = img;
  this.clickCount = 0;
  this.totalShown = 0;
  stuff.push(this);
}

MakeProducts.prototype.render = function()  {
  var targetUl = document.getElementById('products')
  var newLi = document.createElement('li');
  var newImg = document.createElement('img');
  var newP  = document.createElement('p');
  this.totalShown++;
  
  newP.textContent = (this.name);
  newLi.appendChild(newP);

  newImg.src = this.img;
  newImg.id = this.name;
  newLi.appendChild(newImg);
  targetUl.appendChild(newLi);

}

function printMakeProducts()  {
  var target = document.getElementById('products')

  target.innerHTML = '';

  for(var i = 0; i < 3; i++)  {
    var random = Math.floor(Math.random() * stuff.length);
    stuff[random].render();
    console.log(random);
    // randomArray.push(random)
  }
}

var pickNew = document.getElementById('products');

pickNew.addEventListener('click', clickHandler);

function removeImages() {
  var toDelete = document.getElementById('products');
  toDelete.innerHTML = '';
}

function finalTally() {
  
  for (var i = 0; i < stuff.length; i++)  {
    var targetUl = document.getElementById('products')
    var newLi = document.createElement('li');
    newLi.textContent = (stuff[i].name + ' was clicked ' + stuff[i].clickCount + ' time(s) and appeared ' + stuff[i].totalShown + ' time(s) on the screen!');
    targetUl.appendChild(newLi);
  }
}

var clicks = 0;

function clickHandler(event) {

  if (clicks < 26)  {
    clicks++;
    
    for(var i = 0; i < stuff.length; i++)  {

      if (event.target.id === stuff[i].name) {
        stuff[i].clickCount++;
    } 
  }
  printMakeProducts();
} else  {
  removeImages();
  finalTally();
}
}

var bagProduct = new MakeProducts('Bag', 'assets/bag.jpg');
var bananaProduct = new MakeProducts('Banana', 'assets/banana.jpg')
var bathroomProduct = new MakeProducts('Bathroom', 'assets/bathroom.jpg');
var bootsProduct = new MakeProducts('Boots', 'assets/boots.jpg');
var breakfastProduct = new MakeProducts('Breakfast', 'assets/breakfast.jpg');
var bubbleGumProduct = new MakeProducts('BubbleGum', 'assets/bubbleGum.jpg');
var chairProduct = new MakeProducts('Chair', 'assets/chair.jpg');
var cthulhuProduct = new MakeProducts('Cthulhu', 'assets/cthulhu.jpg');
var dogDuckProduct = new MakeProducts('Dog Duck', 'assets/dog-duck.jpg');
var dragonProduct = new MakeProducts('Dragon', 'assets/dragon.jpg');
var penProduct = new MakeProducts('Pen', 'assets/pen.jpg');
var petSweepProduct = new MakeProducts('Pet Sweep', 'assets/pet-sweep.jpg');
var scissorsProduct = new MakeProducts('Scissors', 'assets/scissors.jpg');
var sharkProduct = new MakeProducts('Shark', 'assets/shark.jpg');
var sweepProduct = new MakeProducts('Sweep', 'assets/sweep.png');
var tauntaunProduct = new MakeProducts('Tauntaun', 'assets/tauntaun.jpg');
var unicornProduct = new MakeProducts('Unicorn', 'assets/unicorn.jpg');
var usbProduct = new MakeProducts('Usb', 'assets/usb.gif');
var waterCanProduct = new MakeProducts('Water Can', 'assets/water-can.jpg');
var wineGlassProduct = new MakeProducts('Wine Glass', 'assets/wine-glass.jpg');


printMakeProducts();

