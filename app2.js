'use strict';
var uniqueIndexArray = [];
var allBusMall = [];
var parentElement = document.getElementById('busMall');
var totalVotes = 0;
var names = [];
var votes =[];

function BusmallImage(name, extension){
  this.filepath = `img/${name}${extension}`;
  this.alt = name;
  this.title = name;
  this.votes = 0;
  this.views = 0;
  allBusMall.push(this);
}
BusmallImage.prototype.render = function(){
  var imageElement = document.createElement('img');
  imageElement.src = this.filepath;
  imageElement.alt = this.alt;
  imageElement.title = this.title;
  parentElement.appendChild(imageElement);
};

new BusmallImage('bag', '.jpg');
new BusmallImage('banana', '.jpg');
new BusmallImage('bathroom', '.jpg');
new BusmallImage('boots', '.jpg');
new BusmallImage('breakfast', '.jpg');
new BusmallImage('bubblegum', '.jpg');
new BusmallImage('chair', '.jpg');
new BusmallImage('cthulhu', '.jpg');
new BusmallImage('dog-duck', '.jpg');
new BusmallImage('dragon', '.jpg');
new BusmallImage('pen', '.jpg');
new BusmallImage('pet-sweep', '.jpg');
new BusmallImage('scissors', '.jpg');
new BusmallImage('shark', '.jpg');
new BusmallImage('sweep', '.png');
new BusmallImage('tauntaun', '.jpg');
new BusmallImage('unicorn', '.jpg');
new BusmallImage('usb', '.gif');
new BusmallImage('water-can', '.jpg');
new BusmallImage('wine-glass', '.jpg');

function getRandomIndex(){

  var index = getRandomNumber(allBusMall.length);

  while (uniqueIndexArray.includes(index)){
    index = getRandomNumber(allBusMall.length);
  }
  uniqueIndexArray.push(index);
  if(uniqueIndexArray > 6){
    uniqueIndexArray.shift();
  }
  return index;
}




function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}

function displayImage(){
  var index = getRandomIndex();
  allBusMall[index].render();
}

function handleClick(){
  parentElement.textContent = '';
  var titleOfTheThingThatWasClickedOn =  event.target.title;

  for(var i=0; i<allBusMall.length; i++){
    if(titleOfTheThingThatWasClickedOn === allBusMall[i].title){
      allBusMall[i].votes++;
      totalVotes++;

      if(totalVotes === 25){
        parentElement.removeEventListener('click', handleClick);
        makeNamesArray();

      }
    }
  }
  displayImage();
  displayImage();
  displayImage();

}

displayImage();
displayImage();
displayImage();

parentElement.addEventListener('click', handleClick);

function makeNamesArray(){
  for(var i=0; i<allBusMall.length; i++){
    names.push(allBusMall[i].title);
    votes.push(allBusMall[i].title);
  }
  generateChart();
}



function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

