'use strict';

var signInSubmitButton;
var getMainDiv = document.getElementById('content');

function Player(username, avatar, dayYouCanGame, skillLevel, comments) {
  this.username = username;
  this.avatar = avatar;
  this.online = false;
  this.dayYouCanGame = dayYouCanGame;
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

//===== test currentUser =====
var currentUser = new Player('testCurrentUser', '', 'Monday', 'n00b', 'Im a n00b');
currentUser.gamerTags.steam = 'CUsteamtag';
currentUser.gamesPlayed.leagueOfLegends = true;
currentUser.gamerTags.battlenet = 'CUbattlenettag';
currentUser.gamesPlayed.worldOfWarcraft = true;

//===== test Players =====
var playerList = [];

playerList[0] = new Player('test1', '', 'Monday', 'n00b', 'Im a n00b');
playerList[0].gamerTags.steam = 'test1steamtag';
playerList[0].gamesPlayed.leagueOfLegends = true;
playerList[0].gamerTags.battlenet = 'test1battlenettag';
playerList[0].gamesPlayed.worldOfWarcraft = true;

playerList[1] = new Player('test2', '', 'Monday', 'n00b', 'Im a n00b');
playerList[1].gamerTags.steam = 'test2steamtag';
playerList[1].gamesPlayed.leagueOfLegends = true;
playerList[1].gamerTags.origin = 'test2origintag';
playerList[1].gamesPlayed.callOfDuty = true;

playerList[2] = new Player('test3', '', 'Monday', 'intermediate', 'Im intermediate');
playerList[2].gamerTags.steam = 'test3steamtag';
playerList[2].gamesPlayed.leagueOfLegends = true;
playerList[2].gamerTags.uplay = 'test3uplaytag';
playerList[2].gamesPlayed.overwatch = true;

playerList[3] = new Player('test4', '', 'Monday', 'intermediate', 'Im intermediate');
playerList[3].gamerTags.xboxLive = 'test4xboxtag';
playerList[3].gamesPlayed.battlefield1 = true;
playerList[3].gamerTags.battlenet = 'test4battlenettag';
playerList[3].gamesPlayed.worldOfWarcraft = true;

playerList[4] = new Player('test5', '', 'Monday', 'n00b', 'Im a n00b');
playerList[4].gamerTags.steam = 'test5playstationtag';
playerList[4].gamesPlayed.titanfall2 = true;
playerList[4].gamerTags.battlenet = 'test5battlenettag';
playerList[4].gamesPlayed.worldOfWarcraft = true;

Player.prototype.daysOfWeek = function(){
  console.log('daysOfWeek running');
  var daysOfWeek = document.getElementsByClassName('gamingDays');
  for(i = 0; i < daysOfWeek.lenght; i++){
    console.log('checkboxes work',daysOfWeek[i].checked);
    if(daysOfWeek[i].checked){
      this.dayYouCanGame.push(daysOfWeek[i].value);
    }
  }
};
var registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', handleRegisterPlayer);

//function handling player registration
function handleRegisterPlayer(event) {
  event.preventDefault();
  var getTarget = event.target;

  var playerUserName = getTarget.userName.value;
  var playerSkillLevel = getTarget.skillLevel.value;
  var playerGamingDays = getTarget.dayYouCanGame.value;

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

//Section for the sigin logic
function signIn() {
  try {
    var playerList = JSON.parse(localStorage.playerList);
  } catch(error){
    console.log('error: ' + error);
  }

  var playerUserName = signInSubmitButton.userName.value;
  var matched = false;
  console.log(playerUserName);
  for(var i = 0; i < playerList.length && !matched; i++){
    if(playerUserName == playerList[i].username){
      showresults();
      matched = true;
    } else {
      console.log('no match');
      alert('no match');
    }
  }
}

//function to display the login screen
function SignInBoxCreate() {
  getMainDiv.innerHTML = '';
  var signInBoxcreate = document.createElement('div');
  var formcreate = document.createElement('form');
  formcreate.setAttribute('id', 'sign-in');
  signInBoxcreate.className = 'sign-in-box';
  signInBoxcreate.appendChild(formcreate);

  var signInLabelCreate = document.createElement('label');
  signInLabelCreate.innerHTML = 'sample';
  formcreate.appendChild(signInLabelCreate);

  var signInInputFieldCreate = document.createElement('input')
  signInInputFieldCreate.type = 'text';
  signInInputFieldCreate.name = 'userName';
  signInInputFieldCreate.placeholder = 'Please enter your username';
  formcreate.appendChild(signInInputFieldCreate);

  var signInSubmitButtonCreate = document.createElement('button');
  signInSubmitButtonCreate.type = 'submit';
  signInSubmitButtonCreate.innerHTML = 'Sign In';
  formcreate.appendChild(signInSubmitButtonCreate);

  getMainDiv.appendChild(signInBoxcreate);

 signInSubmitButton = document.getElementById('sign-in');
  signInSubmitButton.addEventListener('submit', signIn);
}
  //function to display the register and sign in buttons on the main site
function mainPageLoad() {
  var registerSignBox = document.createElement('div');
  registerSignBox.className = 'registerSignInButtons';

  var registerButtonCreate = document.createElement('button');
  registerButtonCreate.setAttribute('id', 'registerButton');
  registerButtonCreate.className = 'buttons';
  registerButtonCreate.innerHTML = 'Register';
  registerSignBox.appendChild(registerButtonCreate);

  var signInButtonCreate = document.createElement('button');
  signInButtonCreate.setAttribute('id', 'signInButton');
  signInButtonCreate.className = 'buttons';
  signInButtonCreate.innerHTML = 'Sign In';
  registerSignBox.appendChild(signInButtonCreate);

  // getMainDiv.appendChild(registerSignBox);
}
// mainPageLoad();

//event listeners

var signInButtonClick = document.getElementById('signInButton');

signInButtonClick.addEventListener('click', SignInBoxCreate);

function showresults() {
  alert('you are logged in');
}
