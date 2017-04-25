'use strict';

function Player(userName, avatar, dayYouCanGame, skillLevel) {
  this.username = userName;
  this.avatar = avatar;
  this.online = false;
  this.dayYouCanGame = [];
  this.skillLevel = skillLevel;

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
  var playerSkillLevel = getTarget.skillLevel.value;
  var playerGamingDays = getTarget.dayYouCanGame.value;

  var checkedValue = null;
  var inputElements = document.getElementsByClassName('gamingDays');
  for(var i = 0; inputElements[i]; ++i){
    if(inputElements[i].checked){
      checkedValue = inputElements[i].value;
      this.dayYouCanGame.push(checkedValue);
      break;
    }
  }
  console.log('player days work', playerGamingDays);
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
    playerList.push(new Player(playerUserName, playerSkillLevel, playerGamingDays));
  } else {
    playerList = [new Player(playerUserName, playerSkillLevel, playerGamingDays)];
  }

  localStorage.playerList = JSON.stringify(playerList);
  console.log(playerUserName);

}
