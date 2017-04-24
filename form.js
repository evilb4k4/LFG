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
registerForm.addEventListener('submit', handleRegisterPlayer);

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


///Section for the sigin logic
function signIn(userNames) {
  try {
    var playerList = JSON.parse(localStorage.playerList);
    console.log('Sign in');
  } catch(error){
    console.log('error');
  }

  for (var i = 0; i < playerList.length; i++) {
    if(userNames == playerList[i].userName) {
      console.log(playerList[0]);
    } else {
      console.log('Please try again');
    }
  }
}
