'use strict';

// alert('im alive');
// global variables;

var parent = document.getElementById('busMall1');
var allBusMall = [];

// constructor function
function BusMallImage(url, name){
  this.url = url;
  this.name = name;
  this.votes = 0;
  this.views = 0;
  allBusMall.push(this);
}

new BusMallImage('img/bad.jpg', 'bag');
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
new BusMallImage('img/petsweep.jpg', 'petsweep');
new BusMallImage('img/scissors.jpg', 'scissors');
new BusMallImage('img/shark.jpg', 'shark');
new BusMallImage('img/shark.jpg', 'shark');
new BusMallImage('img/sweep.jpg', 'sweep');
new BusMallImage('img/tauntaun.jpg', 'tauntaun');
new BusMallImage('img/unicorn.jpg', 'unicorn');
new BusMallImage('img/usb.jpg', 'usb');
new BusMallImage('img/water-can.jpg', 'water-can');
new BusMallImage('img/wine-glass.jpg', 'wine-glass');

BusMallImage.prototype.appendChild = function (){
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', this.url);
  imageElement.setAttribute('name', this.name);
  parent.appendChild(imageElement);
};

function getRandomPicture(){
  parent.textContent ='';

  var randomIndex = randomNumber(0, allBusMall.length-1);
  var secondRandomIndex = randomNumber(0, allBusMall.length-1);
  var thirdRandomIndex= randomNumber(0, allBusMall.length-1);

  while(randomIndex === secondRandomIndex){
    secondRandomIndex = randomNumber(0, allBusMall.length-1);
  }
  while(secondRandomIndex === thirdRandomIndex){
    thirdRandomIndex = randomNumber(0, allBusMall.length-1);
  }

  allBusMall[randomIndex].appendChild();
  allBusMall[randomIndex].views++;
  allBusMall[randomIndex].votes++;

  allBusMall[secondRandomIndex].appendChild();
  allBusMall[secondRandomIndex].view++;
  allBusMall[secondRandomIndex].votes++;

  allBusMall[thirdRandomIndex].appendChild();
  allBusMall[thirdRandomIndex].views++;
  allBusMall[thirdRandomIndex].votes;
}

function whenClicked(){
  parent.addEventListener('click', function(){
    var busMallImageClickedOn = event.target.title;

    for (var i=0; i<allBusMall.length; i++){
      if(busMallImageClickedOn === allBusMall[i].name){
        allBusMall[i].votes++;
      }
    }


  });
}

getRandomPicture();
whenClicked();







// helper function
function randomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}
