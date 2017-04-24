'use strict';
console.log('test');

//Demo Object creation
function Player(userName, gamertag, skillLevel) {
  this.gamertag = gamertag;
  this.skillLevel = skillLevel;
  this.userName = userName;

}

var registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', handleRegisterPlayer);

function handleRegisterPlayer(event) {
  console.log('it worked');
  event.preventDefault();
  // var getTarget = event.target;
  //
  // var playerUserName = registerForm
  // var createNewPlayer = new Player();
}
