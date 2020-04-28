'use-strict';


MakeProducts.stuff = [];
var randomArray = [];

function MakeProducts(name, img, clickCount = 0, totalShown = 0) {
  this.name = name;
  this.img = img;
  this.clickCount = clickCount;
  this.totalShown = totalShown;
  MakeProducts.stuff.push(this);
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

var tempArray = [];
function makeRandomArray() {

  var randomArray = [];


    
    var random = Math.floor(Math.random() * MakeProducts.stuff.length);
    randomArray.push(random);

    while (randomArray[0] === random) {
    var random = Math.floor(Math.random() * MakeProducts.stuff.length);
    }
    randomArray.push(random);


    while (randomArray[0] === random || randomArray[1] === random) {
      var random = Math.floor(Math.random() * MakeProducts.stuff.length);
    }
    randomArray.push(random);
    tempArray.splice(0, tempArray.length); //Was messing around with JS and found this cool way to empty an array really quickly. https://www.tutorialspoint.com/in-javascript-how-to-empty-an-array
    tempArray.push(randomArray);
    
    for (var i = 0; i < 3; i++){
      MakeProducts.stuff[randomArray[i]].render();
  }
}
  console.log(tempArray);
  console.log(randomArray);


function printMakeProducts()  {

  var target = document.getElementById('products')

  target.innerHTML = '';

 
  makeRandomArray();
 

}

var pickNew = document.getElementById('products');

pickNew.addEventListener('click', clickHandler);

function removeImages() {
  var toDelete = document.getElementById('products');
  toDelete.innerHTML = '';
}

// function finalTally() {
  
//   for (var i = 0; i < MakeProducts.stuff.length; i++)  {
//     var targetUl = document.getElementById('products')
//     var newLi = document.createElement('li');
//     newLi.textContent = (MakeProducts.stuff[i].name + ' was clicked ' + MakeProducts.stuff[i].clickCount + ' time(s) and appeared ' + MakeProducts.stuff[i].totalShown + ' time(s) on the screen!');
//     targetUl.appendChild(newLi);
//   }
// }

var clicks = 0;


  

function clickHandler(event) {

  if (clicks < 26)  {
    clicks++;
    
    for(var i = 0; i < MakeProducts.stuff.length; i++)  {

      if (event.target.id === MakeProducts.stuff[i].name) {
        MakeProducts.stuff[i].clickCount++;
    } 
  }

  printMakeProducts();
 
} else  {
  var stringProducts = JSON.stringify(MakeProducts.stuff);
  localStorage.setItem('allProducts', stringProducts);
  removeImages();
  // finalTally();

  chart();
  

}
}
function chart()  {
  var ctx = document.getElementById('clicksChart').getContext('2d');

    var productLabels = [];
   
    for (var i = 0; i < MakeProducts.stuff.length; i++)  {
      productLabels.push(MakeProducts.stuff[i].name);
  }

    var productData = [];

    for (var i = 0; i < MakeProducts.stuff.length; i++)  {
      productData.push(MakeProducts.stuff[i].clickCount);
  }

    var totalappearences = [];

    for (var i = 0; i < MakeProducts.stuff.length; i++) {
      totalappearences.push(MakeProducts.stuff[i].totalShown);
  }

  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: productLabels,
          datasets: [
            {
              label: '# of Clicks',
              data: productData,
              
              backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  'rgba(255, 159, 64, 0.8)',
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  'rgba(255, 159, 64, 0.8)',
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  'rgba(255, 159, 64, 0.8)',
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
          },
          {
            label: '# of Appearences',
            data: totalappearences,
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }

        ]
      },
      options: {
          scales: {
            xAxes: [{
              stacked: true,
          }],
            yAxes: [{
              stacked: true,
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}




if (localStorage.getItem('allProducts')) {
  var parseProducts = localStorage.getItem('allProducts')
  MakeProducts.stuff = JSON.parse(parseProducts);
  chart();
} else  {
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
}

printMakeProducts();







//Store constructor in local memory
//check if info has been stored
  //if local storage exists
//parse it
//
  //else if doesnt
//instantiate all products
//re construct

//localstorage.getItem('allProducts') = var1
//var2 = JSON.parse(var1)
  //var2 is the array of primitive objects. no methods
//for loop to run the values of the var2 array through the constructor all over again.