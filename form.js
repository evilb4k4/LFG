'use strict';
//Demo Object creation
function Player(userName, gamertag, skillLevel) {
  this.gamertag = gamertag;
  this.skillLevel = skillLevel;
  this.userName = userName;

}

//Function
var registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', handleRegisterPlayer);

function handleRegisterPlayer(event) {
  event.preventDefault();
  var getTarget = event.target;

  var playerUserName = getTarget.userName.value;
  var createNewPlayer;

  //Checking if the Players localStorage DB exists
  try {
    createNewPlayer = JSON.parse(localStorage.Players);
    console.log('it exists');
  } catch(error){
    console.log('error');
  }
  if(createNewPlayer){
    console.log('again');
    createNewPlayer.push(new Player(playerUserName));
  } else {
    createNewPlayer = [new Player(playerUserName)];
  }

  localStorage.Players = JSON.stringify(createNewPlayer);
  console.log(playerUserName);

}
