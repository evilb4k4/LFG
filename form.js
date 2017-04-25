'use strict';

function Player(userName, avatar, startTimeUsual, endTimeUsual, skillLevel, comments) {
  this.userName = userName;
  this.avatar = avatar;
  this.online = false;
  this.startTimeUsual = startTimeUsual;
  this.endTimeUsual = endTimeUsual;
  this.skillLevel = skillLevel;
  this.comments = comments;


  this.gamesPlayed = {
    leagueOfLegends: false,
    worldOfWarcraft: false,
    callOfDuty: false,
    overwatch: false,
    battlefield1: false,
    titanfall2: false,
    mineCraft: false,
    theDivision: false,
    noMansSky: false,
  };

  this.gamerTags = {
    steam:'',
    origin:'',
    battlenet:'',
    leagueOfLegends: '',
    uplay:'',
    xboxLive:'',
    playStationNetwork:'',
  };
}


//Function
var registerForm = document.getElementById('registerForm');
// registerForm.addEventListener('submit', handleRegisterPlayer);

function handleRegisterPlayer(event) {
  event.preventDefault();
  var getTarget = event.target;

  var playerUserName = getTarget.userName.value;
  var playerList;

  //Checking if the Players localStorage DB exists
  try {
    playerList = JSON.parse(localStorage.playerList);
    console.log('it exists');
  } catch(error){
    console.log('error');
  }
  if(playerList){
    console.log('again');
    playerList.push(new Player(playerUserName));
  } else {
    playerList = [new Player(playerUserName)];
  }

  localStorage.playerList = JSON.stringify(playerList);
  console.log(playerUserName);

}


//Section for the sigin logic
function signIn(playerSignInName) {
  try {
    var playerList = JSON.parse(localStorage.playerList);
  } catch(error){
    console.log('error: ' + error);
  }
  var matched = false;

  for(var i = 0; i < playerList.length && !matched; i++){
    if(playerSignInName == playerList[i].userName){
      console.log('match');
      matched = true;
    } else {
      console.log('no match');
    }
  }
}
  //fucntion to display the register and sign in buttons on the main site
function mainPageLoad() {
  var getMainDiv = document.getElementById('content');
  var registerSignBox = document.createElement('div');
  registerSignBox.className = 'registerSignBox';

var registerButtonCreate = document.createElement('button');
  registerButtonCreate.setAttribute('id', 'registerButton');
  registerButtonCreate.className = 'buttons';
  registerButtonCreate.innerHTML = 'Registe';
  registerSignBox.appendChild(registerButtonCreate);



  getMainDiv.appendChild(registerSignBox);



}
mainPageLoad();
