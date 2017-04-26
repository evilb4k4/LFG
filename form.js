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

playerList[2] = new Player('test3', '', 'Monday', 'n00b', 'Im n00b');
playerList[2].gamerTags.steam = 'test3steamtag';
playerList[2].gamesPlayed.leagueOfLegends = true;
playerList[2].gamerTags.uplay = 'test3uplaytag';
playerList[2].gamesPlayed.overwatch = true;

playerList[3] = new Player('test4', '', 'Monday', 'n00b', 'Im n00b');
playerList[3].gamerTags.xboxLive = 'test4xboxtag';
playerList[3].gamesPlayed.battlefield1 = true;
playerList[3].gamerTags.battlenet = 'test4battlenettag';
playerList[3].gamesPlayed.worldOfWarcraft = true;

playerList[4] = new Player('test5', '', 'Monday', 'n00b', 'Im a n00b');
playerList[4].gamerTags.steam = 'test5playstationtag';
playerList[4].gamesPlayed.titanfall2 = true;
playerList[4].gamerTags.battlenet = 'test5battlenettag';
playerList[4].gamesPlayed.leagueOfLegends = true;

Player.prototype.daysOfWeek = function(){
  console.log('daysOfWeek running');
  var daysOfWeek = document.getElementsByClassName('gamingDays');
  for(var i = 0; i < daysOfWeek.length; i++){
    console.log('checkboxes work',daysOfWeek[i].checked);
    if(daysOfWeek[i].checked){
      this.dayYouCanGame.push(daysOfWeek[i].value);
    }
  }
};
var registerForm = document.getElementById('registerForm');

// registerForm.addEventListener('submit', handleRegisterPlayer);

//function handling player registration
function handleRegisterPlayer(event) {
  event.preventDefault();
  var getTarget = event.target;
  var playerUserName = getTarget.username.value;
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
function signIn(event) {
  event.preventDefault();
  var playerUserName = signInSubmitButton.userName.value;
  var matched = false;
  console.log(playerUserName);
  for(var i = 0; i < playerList.length && !matched; i++){
    if(playerUserName == playerList[i].username){
      currentUser = playerList[i];
      resultDisplay();
      matched = true;
    } else if(i == playerList.length -1) {
      console.log('no match');
      alert('no match');
    }
  }
}

//function to display the login screen

function SignInBoxCreate(event) {
  event.preventDefault();
  getMainDiv.innerHTML = '';
  var signInBoxcreate = document.createElement('div');
  var formcreate = document.createElement('form');
  formcreate.setAttribute('id', 'sign-in');
  signInBoxcreate.className = 'sign-in-box';
  signInBoxcreate.appendChild(formcreate);

  var signInLabelCreate = document.createElement('label');
  signInLabelCreate.innerHTML = 'Welcome Back, Player One';
  formcreate.appendChild(signInLabelCreate);

  var signInInputFieldCreate = document.createElement('input');
  signInInputFieldCreate.type = 'text';
  signInInputFieldCreate.name = 'userName';
  signInInputFieldCreate.placeholder = 'Please enter your username';
  formcreate.appendChild(signInInputFieldCreate);

  var signInSubmitButtonCreate = document.createElement('button');
  signInSubmitButtonCreate.type = 'submit';
  signInSubmitButtonCreate.className = 'buttons';
  signInSubmitButtonCreate.innerHTML = 'Sign In';
  formcreate.appendChild(signInSubmitButtonCreate);

  getMainDiv.appendChild(signInBoxcreate);

  signInSubmitButton = document.getElementById('sign-in');
  signInSubmitButton.addEventListener('submit', signIn);
}

//this fuctions creates the html form
function registerPlayer() {
  getMainDiv.innerHTML = '';

  var playerRegistrationForm  = document.createElement('div');
  playerRegistrationForm.className = 'register-container';

  var registrationForm = document.createElement('form');
  registrationForm.setAttribute('id', 'playerCreated');

//===== Username Label and Text Input =====

  var usernameDiv = document.createElement('div');
  usernameDiv.id = 'usernameDiv';
  usernameDiv.className = 'registrationFormDivs';
  var usernameLabelCreate = document.createElement('label');
  usernameLabelCreate.innerHTML = 'User Name: ';
  var userNameInputField = document.createElement('input');
  userNameInputField.type = 'text';
  userNameInputField.name = 'username';
  registrationForm.appendChild(usernameDiv);
  usernameDiv.appendChild(usernameLabelCreate);
  usernameDiv.appendChild(userNameInputField);

//===== GamerTag Label and Text Input =====

  var gamerTagDiv = document.createElement('div');
  gamerTagDiv.id = 'gamerTagDiv';
  gamerTagDiv.className = 'registrationFormDivs';
  var gamerTagLabelCreate = document.createElement('label');
  gamerTagLabelCreate.innerHTML = 'Gamer Tag: ';
  var gamerInputField = document.createElement('input');
  gamerInputField.type = 'text';
  gamerInputField.name = 'username';
  registrationForm.appendChild(gamerTagDiv);
  gamerTagDiv.appendChild(gamerTagLabelCreate);
  gamerTagDiv.appendChild(gamerInputField);

//===== Platform Labels and Radio Inputs =====

  var platformDiv = document.createElement('div');
  platformDiv.id = 'platformDiv';
  platformDiv.className = 'registrationFormDivs';
  registrationForm.appendChild(platformDiv);

  var steamLabelCreate = document.createElement('label');
  steamLabelCreate.innerHTML = 'Steam';
  var steamRadioButton = document.createElement('input');
  steamRadioButton.type = 'radio';
  steamRadioButton.name = 'steam';
  steamRadioButton.value = 'steam';
  platformDiv.appendChild(steamLabelCreate);
  platformDiv.appendChild(steamRadioButton);

  var originLabelCreate = document.createElement('label');
  originLabelCreate.innerHTML = 'Origin';
  var originRadioButton = document.createElement('input');
  originRadioButton.type = 'radio';
  originRadioButton.name = 'origin';
  originRadioButton.value = 'origin';
  platformDiv.appendChild(originLabelCreate);
  platformDiv.appendChild(originRadioButton);

  var battlenetLabelCreate = document.createElement('label');
  battlenetLabelCreate.innerHTML = 'Battlenet';
  var battlenetRadioButton = document.createElement('input');
  battlenetRadioButton.type = 'radio';
  battlenetRadioButton.name = 'battlenet';
  battlenetRadioButton.value = 'battlenet';
  platformDiv.appendChild(battlenetLabelCreate);
  platformDiv.appendChild(battlenetRadioButton);

  var leagueOfLegendsLabelCreate = document.createElement('label');
  leagueOfLegendsLabelCreate.innerHTML = 'League Of Legends';
  var leagueOfLegendsRadioButton = document.createElement('input');
  leagueOfLegendsRadioButton.type = 'radio';
  leagueOfLegendsRadioButton.name = 'leagueOfLegends';
  leagueOfLegendsRadioButton.value = 'leagueOfLegends';
  platformDiv.appendChild(leagueOfLegendsLabelCreate);
  platformDiv.appendChild(leagueOfLegendsRadioButton);

  var uplayLabelCreate = document.createElement('label');
  uplayLabelCreate.innerHTML = 'Uplay';
  var uplayRadioButton = document.createElement('input');
  uplayRadioButton.type = 'radio';
  uplayRadioButton.name = 'uplay';
  uplayRadioButton.value = 'uplay';
  platformDiv.appendChild(uplayLabelCreate);
  platformDiv.appendChild(uplayRadioButton);

  var xboxLiveLabelCreate = document.createElement('label');
  xboxLiveLabelCreate.innerHTML = 'Xbox Live';
  var xboxLiveRadioButton = document.createElement('input');
  xboxLiveRadioButton.type = 'radio';
  xboxLiveRadioButton.name = 'xboxLive';
  xboxLiveRadioButton.value = 'xboxLive';
  platformDiv.appendChild(xboxLiveLabelCreate);
  platformDiv.appendChild(xboxLiveRadioButton);

  var playStationNetworkLabelCreate = document.createElement('label');
  playStationNetworkLabelCreate.innerHTML = 'Playstation Network';
  var playStationNetworkRadioButton = document.createElement('input');
  playStationNetworkRadioButton.type = 'radio';
  playStationNetworkRadioButton.name = 'playStationNetwork';
  playStationNetworkRadioButton.value = 'playStationNetwork';
  platformDiv.appendChild(playStationNetworkLabelCreate);
  platformDiv.appendChild(playStationNetworkRadioButton);

//===== Skill Level Labels and Radio Inputs =====

  var skillLevelDiv = document.createElement('div');
  skillLevelDiv.className = 'registrationFormDivs';
  skillLevelDiv.id = 'skillLevelDiv';
  registrationForm.appendChild(skillLevelDiv);

  var choiceSkillLevelHeader = document.createElement('h1');
  choiceSkillLevelHeader.textContent = 'Player One: Choose Your Skill Level (Be honest with yourself)';
  skillLevelDiv.appendChild(choiceSkillLevelHeader);

  var noobLabelCreate = document.createElement('label');
  noobLabelCreate.innerHTML = 'Noob';
  var noobRadioButton = document.createElement('input');
  noobRadioButton.type = 'radio';
  noobRadioButton.name = 'Noob';
  noobRadioButton.value = 'Noob';
  skillLevelDiv.appendChild(noobLabelCreate);
  skillLevelDiv.appendChild(noobRadioButton);

  var intermediateLabelCreate = document.createElement('label');
  intermediateLabelCreate.innerHTML = 'Intermediate';
  var intermediateRadioButton = document.createElement('input');
  intermediateRadioButton.type = 'radio';
  intermediateRadioButton.name = 'intermediate';
  intermediateRadioButton.value = 'intermediate';
  skillLevelDiv.appendChild(intermediateLabelCreate);
  skillLevelDiv.appendChild(intermediateRadioButton);

  var veteranLabelCreate = document.createElement('label');
  veteranLabelCreate.innerHTML = 'Veteran';
  var veteranRadioButton = document.createElement('input');
  veteranRadioButton.type = 'radio';
  veteranRadioButton.name = 'Veteran';
  veteranRadioButton.value = 'Veteran';
  skillLevelDiv.appendChild(veteranLabelCreate);
  skillLevelDiv.appendChild(veteranRadioButton);

//===== Games Labels and Radio Inputs =====

  var gamesDiv = document.createElement('div');
  gamesDiv.className = 'registrationFormDivs';
  registrationForm.appendChild(gamesDiv);

  var chooseYourGame = document.createElement('h1');
  chooseYourGame.textContent = 'What Game would you like to find gamers on?)';
  gamesDiv.appendChild(chooseYourGame);

  var lolLabel = document.createElement('label');
  lolLabel.innerHTML = 'League of Legends';
  var lolCheckBox = document.createElement('input');
  lolCheckBox.type = 'checkbox';
  lolCheckBox.name = 'leagueOfLegends';
  lolCheckBox.value = 'leagueOfLegends';
  gamesDiv.appendChild(lolLabel);
  gamesDiv.appendChild(lolCheckBox);

  var worldOfWarcraftLabel = document.createElement('label');
  worldOfWarcraftLabel.innerHTML = 'World Of Warcraft';
  var worldOfWarcraftCheckBox = document.createElement('input');
  worldOfWarcraftCheckBox.type = 'checkbox';
  worldOfWarcraftCheckBox.name = 'worldOfWarcraft';
  worldOfWarcraftCheckBox.value = 'worldOfWarcraft';
  gamesDiv.appendChild(worldOfWarcraftLabel);
  gamesDiv.appendChild(worldOfWarcraftCheckBox);

  var callOfDutyLabel = document.createElement('label');
  callOfDutyLabel.innerHTML = 'Call Of Duty';
  var callOfDutyCheckBox = document.createElement('input');
  callOfDutyCheckBox.type = 'checkbox';
  callOfDutyCheckBox.name = 'callOfDuty';
  callOfDutyCheckBox.value = 'callOfDuty';
  gamesDiv.appendChild(callOfDutyLabel);
  gamesDiv.appendChild(callOfDutyCheckBox);

  var overwatchLabel = document.createElement('label');
  overwatchLabel.innerHTML = 'Overwatch';
  var overwatchCheckBox = document.createElement('input');
  overwatchCheckBox.type = 'checkbox';
  overwatchCheckBox.name = 'overwatch';
  overwatchCheckBox.value = 'overwatch';
  gamesDiv.appendChild(overwatchLabel);
  gamesDiv.appendChild(overwatchCheckBox);

  var battlefield1Label = document.createElement('label');
  battlefield1Label.innerHTML = 'Battlefield 1';
  var battlefield1CheckBox = document.createElement('input');
  battlefield1CheckBox.type = 'checkbox';
  battlefield1CheckBox.name = 'battlefield1';
  battlefield1CheckBox.value = 'battlefield1';
  gamesDiv.appendChild(battlefield1Label);
  gamesDiv.appendChild(battlefield1CheckBox);

  var titanfall2Label = document.createElement('label');
  titanfall2Label.innerHTML = 'Titanfall 2';
  var titanfall2CheckBox = document.createElement('input');
  titanfall2CheckBox.type = 'checkbox';
  titanfall2CheckBox.name = 'titanfall2';
  titanfall2CheckBox.value = 'titanfall2';
  gamesDiv.appendChild(titanfall2Label);
  gamesDiv.appendChild(titanfall2CheckBox);

  var mineCraftLabel = document.createElement('label');
  mineCraftLabel.innerHTML = 'MineCraft';
  var mineCraftCheckBox = document.createElement('input');
  mineCraftCheckBox.type = 'checkbox';
  mineCraftCheckBox.name = 'mineCraft';
  mineCraftCheckBox.value = 'mineCraft';
  gamesDiv.appendChild(mineCraftLabel);
  gamesDiv.appendChild(mineCraftCheckBox);

  var theDivisionLabel = document.createElement('label');
  theDivisionLabel.innerHTML = 'The Division';
  var theDivisionCheckBox = document.createElement('input');
  theDivisionCheckBox.type = 'checkbox';
  theDivisionCheckBox.name = 'theDivision';
  theDivisionCheckBox.value = 'theDivision';
  gamesDiv.appendChild(theDivisionLabel);
  gamesDiv.appendChild(theDivisionCheckBox);

  var noMansSkyLabel = document.createElement('label');
  noMansSkyLabel.innerHTML = 'No Man\'s Sky';
  var noMansSkyCheckBox = document.createElement('input');
  noMansSkyCheckBox.type = 'checkbox';
  noMansSkyCheckBox.name = 'noMansSky';
  noMansSkyCheckBox.value = 'noMansSky';
  gamesDiv.appendChild(noMansSkyLabel);
  gamesDiv.appendChild(noMansSkyCheckBox);

//===== Days You Can Game Labels and Radio Inputs =====

  var daysYouCanGameDiv = document.createElement('div');
  daysYouCanGameDiv.className = 'registrationFormDivs';
  registrationForm.appendChild(daysYouCanGameDiv);

  var weekDaysHeader = document.createElement('h1');
  weekDaysHeader.textContent = 'Day you are usually online to game)';
  daysYouCanGameDiv.appendChild(weekDaysHeader);

  var mondayLabel = document.createElement('label');
  mondayLabel.innerHTML = 'Monday';
  var mondayCheckBox = document.createElement('input');
  mondayCheckBox.type = 'checkbox';
  mondayCheckBox.name = 'daysOfWeek';
  mondayCheckBox.value = 'monday';
  daysYouCanGameDiv.appendChild(mondayLabel);
  daysYouCanGameDiv.appendChild(mondayCheckBox);

  var tuesdayLabel = document.createElement('label');
  tuesdayLabel.innerHTML = 'Tuesday';
  var tuesdayCheckBox = document.createElement('input');
  tuesdayCheckBox.type = 'checkbox';
  tuesdayCheckBox.name = 'daysOfWeek';
  tuesdayCheckBox.value = 'tuesday';
  daysYouCanGameDiv.appendChild(tuesdayLabel);
  daysYouCanGameDiv.appendChild(tuesdayCheckBox);

  var wednesdayLabel = document.createElement('label');
  wednesdayLabel.innerHTML = 'Wednesday';
  var wednesdayCheckBox = document.createElement('input');
  wednesdayCheckBox.type = 'checkbox';
  wednesdayCheckBox.name = 'daysOfWeek';
  wednesdayCheckBox.value = 'wednesday';
  daysYouCanGameDiv.appendChild(wednesdayLabel);
  daysYouCanGameDiv.appendChild(wednesdayCheckBox);

  var thursdayLabel = document.createElement('label');
  thursdayLabel.innerHTML = 'Thursday';
  var thursdayCheckBox = document.createElement('input');
  thursdayCheckBox.type = 'checkbox';
  thursdayCheckBox.name = 'daysOfWeek';
  thursdayCheckBox.value = 'thursday';
  daysYouCanGameDiv.appendChild(thursdayLabel);
  daysYouCanGameDiv.appendChild(thursdayCheckBox);

  var fridayLabel = document.createElement('label');
  fridayLabel.innerHTML = 'Friday';
  var fridayCheckBox = document.createElement('input');
  fridayCheckBox.type = 'checkbox';
  fridayCheckBox.name = 'daysOfWeek';
  fridayCheckBox.value = 'friday';
  daysYouCanGameDiv.appendChild(fridayLabel);
  daysYouCanGameDiv.appendChild(fridayCheckBox);

  var saturdayLabel = document.createElement('label');
  saturdayLabel.innerHTML = 'Saturday';
  var saturdayCheckBox = document.createElement('input');
  saturdayCheckBox.type = 'checkbox';
  saturdayCheckBox.name = 'daysOfWeek';
  saturdayCheckBox.value = 'saturday';
  daysYouCanGameDiv.appendChild(saturdayLabel);
  daysYouCanGameDiv.appendChild(saturdayCheckBox);

  var sundayLabel = document.createElement('label');
  sundayLabel.innerHTML = 'Sunday';
  var sundayCheckBox = document.createElement('input');
  sundayCheckBox.type = 'checkbox';
  sundayCheckBox.name = 'daysOfWeek';
  sundayCheckBox.value = 'sunday';
  daysYouCanGameDiv.appendChild(sundayLabel);
  daysYouCanGameDiv.appendChild(sundayCheckBox);

//===== Registration Submit Button =====

  var playerRegisterSubmitButton = document.createElement('button');
  playerRegisterSubmitButton.type = 'submit';
  playerRegisterSubmitButton.innerHTML = 'Sign In';
  playerRegisterSubmitButton.className = 'buttons';
  registrationForm.appendChild(playerRegisterSubmitButton);

  playerRegistrationForm.appendChild(registrationForm);
  getMainDiv.appendChild(playerRegistrationForm);
}

//function to create a humburger menu when player log in
function hamburgerMenu() {

  var hamburgerMenuDivCreate = document.createElement('div');
  hamburgerMenuDivCreate.className = 'hambur-menu-box';
  var hamburgerMenuSettingButton = document.createElement('div');
  hamburgerMenuSettingButton.className = 'hamburger-menu-button-img';
  var hamburgerMenuSettingImg = document.createElement('img');
  hamburgerMenuSettingImg.setAttribute('id','setting-button')
  hamburgerMenuSettingImg.src = 'img/setting-button.png';
  hamburgerMenuSettingButton.appendChild(hamburgerMenuSettingImg);
  hamburgerMenuDivCreate.appendChild(hamburgerMenuSettingButton);

  var hamburgerMenuList = document.createElement('div');
  hamburgerMenuList.className = 'hamburger-menu-list';
  var hamburgerMenuUL = document.createElement('ul');
  var hamburgerMenuLI = document.createElement('li');
  hamburgerMenuLI.innerHTML = 'Sign Out';
  hamburgerMenuUL.appendChild(hamburgerMenuLI);
  hamburgerMenuList.appendChild(hamburgerMenuUL);

  hamburgerMenuDivCreate.appendChild(hamburgerMenuList);

  document.body.appendChild(hamburgerMenuDivCreate);
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

  getMainDiv.appendChild(registerSignBox);
}

mainPageLoad();

//event listeners

var signInButtonClick = document.getElementById('signInButton');
signInButtonClick.addEventListener('click', SignInBoxCreate);

var formButtonCreate = document.getElementById('registerButton');
formButtonCreate.addEventListener('click', registerPlayer);
