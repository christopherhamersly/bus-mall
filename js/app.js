'use strict';

// alert('im alive');

// global variables;
var rabbit = document.getElementById('busMall1');
var allBusMall = [];
var runs = 2;
var votes = 0;
var views = 0;

// // constructor function
function BusMallImage(url, name){
  this.url = url;
  this.name = name;
  this.votes = 0;
  this.views = 0;
  allBusMall.push(this);
}

new BusMallImage('img/bag.jpg', 'bag');
new BusMallImage('img/banana.jpg', 'banana');
new BusMallImage('img/bathroom.jpg', 'bathroom');
new BusMallImage('img/boots.jpg', 'boots');
new BusMallImage('img/breakfast.jpg', 'breakfast');
new BusMallImage('img/bubblegum.jpg', 'bubblegum');
new BusMallImage('img/chair.jpg', 'chair');
new BusMallImage('img/cthulhu.jpg', 'cthulhu');
new BusMallImage('img/dog-duck.jpg', 'dog-duck');
new BusMallImage('img/dragon.jpg', 'dragon');
new BusMallImage('img/pen.jpg', 'pen');
new BusMallImage('img/pet-sweep.jpg', 'petsweep');
new BusMallImage('img/scissors.jpg', 'scissors');
new BusMallImage('img/shark.jpg', 'shark');
new BusMallImage('img/shark.jpg', 'shark');
new BusMallImage('img/sweep.png', 'sweep');
new BusMallImage('img/tauntaun.jpg', 'tauntaun');
new BusMallImage('img/unicorn.jpg', 'unicorn');
new BusMallImage('img/usb.gif', 'usb');
new BusMallImage('img/water-can.jpg', 'water-can');
new BusMallImage('img/wine-glass.jpg', 'wine-glass');

BusMallImage.prototype.appendChild = function (){
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', this.url);
  imageElement.setAttribute('name', this.name);
  rabbit.appendChild(imageElement);
};

// function getRandomPicture(){
//   rabbit.textContent ='';

//   var randomIndex = randomNumber(0, allBusMall.length-1);
//   var secondRandomIndex = randomNumber(0, allBusMall.length-1);
//   var thirdRandomIndex= randomNumber(0, allBusMall.length-1);

//   while(randomIndex === secondRandomIndex){
//     secondRandomIndex = randomNumber(0, allBusMall.length-1);
//   }
//   while(randomIndex && secondRandomIndex === thirdRandomIndex){
//     thirdRandomIndex = randomNumber(0, allBusMall.length-1);
//   }

//   allBusMall[randomIndex].appendChild();
//   allBusMall[randomIndex].views++;
//   allBusMall[randomIndex].votes++;

//   allBusMall[secondRandomIndex].appendChild();
//   allBusMall[secondRandomIndex].views++;
//   allBusMall[secondRandomIndex].votes++;

//   allBusMall[thirdRandomIndex].appendChild();
//   allBusMall[thirdRandomIndex].views++;
//   allBusMall[thirdRandomIndex].votes;
// }

parent.addEventListener('click', function(){
  var busMallImageClickedOn = event.target.name;

  for (var i=0; i<allBusMall.length; i++){
    if(busMallImageClickedOn === allBusMall[i].name){
      allBusMall[i].votes++;
    }
    else if (i===runs)
      break;

    getRandomPicture();
  }
});


function randomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

getRandomPicture();
generateChart();



