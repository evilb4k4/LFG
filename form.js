'use strict';

var signInSubmitButton;
var getMainDiv = document.getElementById('content');

function Player(username, avatar, dayYouCanGame, skillLevel, comments){
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
// currentUser.gamesPlayed.worldOfWarcraft = true;

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

// function dayOfWeek(){
//   console.log('daysOfWeek running');
//   var daysOfWeek = document.getElementsByClassName('gamingDays');
//   for(var i = 0; i < daysOfWeek.length; i++){
//     console.log('checkboxes work',daysOfWeek[i].checked);
//     if(daysOfWeek[i].checked){
//       this.dayYouCanGame.push(daysOfWeek[i].value);
//     }
//   }
// };

// var playerRegistrationForm = document.getElementById('playerCreated');
// playerRegistrationForm.addEventListener('submit', registerPlayer);

//function handling player registration
function handleRegisterPlayer(event) {
  event.preventDefault();
  var getTarget = event.target;
  var playerUserName = getTarget.username.value;
  var playerGamertag = getTarget.gamertag.value;
  console.log('username', playerUserName);
  var playerSkillLevel = getTarget.skillLevel.value;
  var playerGamerNetwork = getTarget.gamerTags.value;
  console.log('playerGamerNetwork', playerGamerNetwork);
  console.log('network gamertag', playerGamerNetwork);
  // var playerGamerNetwork = getTarget.gamerTags.value;
  var playerGamingDays = getTarget.monday.value;
  console.log('dayYouCanGame', playerGamingDays);

  var dayYouCanGame = {
    monday: getTarget.monday.checked,
    tuesday: getTarget.tuesday.checked,
    wednesday: getTarget.wednesday.checked,
    thrusday: getTarget.thrusday.checked,
    friday: getTarget.friday.checked,
    saturday: getTarget.saturday.checked,
    sunday: getTarget.sunday.checked,
  };
  var gamesPlayed = {
    leagueOfLegends: getTarget.leagueOfLegends.checked,
    worldOfWarcraft: getTarget.worldOfWarcraft.checked,
    callOfDuty: getTarget.callOfDuty.checked,
    overwatch: getTarget.overwatch.checked,
    battlefield1:getTarget.battlefield1.checked,
    titanfall2: getTarget.titanfall2.checked,
    mineCraft: getTarget.mineCraft.checked,
    theDivision: getTarget.theDivision.checked,
    noMansSky: getTarget.noMansSky.checked,
  };
  console.log('COD', gamesPlayed);

  var player = new Player(playerUserName, 'avatar', dayYouCanGame, playerSkillLevel, [], gamesPlayed);
  player.gamerTags[playerGamerNetwork] = playerGamertag;

  console.log('lulwat player', player);

  playerList.push(player);

  try {
    localStorage.playerList = JSON.stringify(playerList);
  } catch (error) {
    console.error(error);
  }

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
    } else if(i == playerList.length - 1) {
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

  var usernameLabelCreate = document.createElement('label');
  usernameLabelCreate.innerHTML = 'User Name: ';
  var userNameInputField = document.createElement('input');
  userNameInputField.type = 'text';
  userNameInputField.name = 'username';
  registrationForm.appendChild(usernameLabelCreate);
  registrationForm.appendChild(userNameInputField);

  var gamerTagLabelCreate = document.createElement('label');
  gamerTagLabelCreate.innerHTML = 'Gamer Tag: ';
  var gamerInputField = document.createElement('input');
  gamerInputField.type = 'text';
  gamerInputField.name = 'gamertag';
  registrationForm.appendChild(gamerTagLabelCreate);
  registrationForm.appendChild(gamerInputField);

  var steamLabelCreate = document.createElement('label');
  steamLabelCreate.innerHTML = 'Steam';
  var steamRadioButton = document.createElement('input');
  steamRadioButton.type = 'radio';
  steamRadioButton.name = 'gamerTags';
  steamRadioButton.value = 'steam';
  registrationForm.appendChild(steamLabelCreate);
  registrationForm.appendChild(steamRadioButton);

  var originLabelCreate = document.createElement('label');
  originLabelCreate.innerHTML = 'Origin';
  var originRadioButton = document.createElement('input');
  originRadioButton.type = 'radio';
  originRadioButton.name = 'gamerTags';
  originRadioButton.value = 'origin';
  registrationForm.appendChild(originLabelCreate);
  registrationForm.appendChild(originRadioButton);

  var battlenetLabelCreate = document.createElement('label');
  battlenetLabelCreate.innerHTML = 'Battlenet';
  var battlenetRadioButton = document.createElement('input');
  battlenetRadioButton.type = 'radio';
  battlenetRadioButton.name = 'gamerTags';
  battlenetRadioButton.value = 'battlenet';
  registrationForm.appendChild(battlenetLabelCreate);
  registrationForm.appendChild(battlenetRadioButton);

  var leagueOfLegendsLabelCreate = document.createElement('label');
  leagueOfLegendsLabelCreate.innerHTML = 'League Of Legends';
  var leagueOfLegendsRadioButton = document.createElement('input');
  leagueOfLegendsRadioButton.type = 'radio';
  leagueOfLegendsRadioButton.name = 'gamerTags';
  leagueOfLegendsRadioButton.value = 'leagueOfLegends';
  registrationForm.appendChild(leagueOfLegendsLabelCreate);
  registrationForm.appendChild(leagueOfLegendsRadioButton);

  var uplayLabelCreate = document.createElement('label');
  uplayLabelCreate.innerHTML = 'Uplay';
  var uplayRadioButton = document.createElement('input');
  uplayRadioButton.type = 'radio';
  uplayRadioButton.name = 'gamerTags';
  uplayRadioButton.value = 'uplay';
  registrationForm.appendChild(uplayLabelCreate);
  registrationForm.appendChild(uplayRadioButton);

  var xboxLiveLabelCreate = document.createElement('label');
  xboxLiveLabelCreate.innerHTML = 'Xbox Live';
  var xboxLiveRadioButton = document.createElement('input');
  xboxLiveRadioButton.type = 'radio';
  xboxLiveRadioButton.name = 'gamerTags';
  xboxLiveRadioButton.value = 'xboxLive';
  registrationForm.appendChild(xboxLiveLabelCreate);
  registrationForm.appendChild(xboxLiveRadioButton);

  var playStationNetworkLabelCreate = document.createElement('label');
  playStationNetworkLabelCreate.innerHTML = 'Playstation Network';
  var playStationNetworkRadioButton = document.createElement('input');
  playStationNetworkRadioButton.type = 'radio';
  playStationNetworkRadioButton.name = 'gamerTags';
  playStationNetworkRadioButton.value = 'playStationNetwork';
  registrationForm.appendChild(playStationNetworkLabelCreate);
  registrationForm.appendChild(playStationNetworkRadioButton);

  var choiceSkillLevelHeader = document.createElement('h1');
  choiceSkillLevelHeader.textContent = 'Choice your Gamer skill Level (Be honest with yourself)';
  registrationForm.appendChild(choiceSkillLevelHeader);

  var noobLabelCreate = document.createElement('label');
  noobLabelCreate.innerHTML = 'Noob';
  var noobRadioButton = document.createElement('input');
  noobRadioButton.type = 'radio';
  noobRadioButton.name = 'skillLevel';
  noobRadioButton.value = 'Noob';
  registrationForm.appendChild(noobLabelCreate);
  registrationForm.appendChild(noobRadioButton);

  var intermediateLabelCreate = document.createElement('label');
  intermediateLabelCreate.innerHTML = 'Intermediate';
  var intermediateRadioButton = document.createElement('input');
  intermediateRadioButton.type = 'radio';
  intermediateRadioButton.name = 'skillLevel';
  intermediateRadioButton.value = 'intermediate';
  registrationForm.appendChild(intermediateLabelCreate);
  registrationForm.appendChild(intermediateRadioButton);

  var veteranLabelCreate = document.createElement('label');
  veteranLabelCreate.innerHTML = 'Veteran';
  var veteranRadioButton = document.createElement('input');
  veteranRadioButton.type = 'radio';
  veteranRadioButton.name = 'skillLevel';
  veteranRadioButton.value = 'Veteran';
  registrationForm.appendChild(veteranLabelCreate);
  registrationForm.appendChild(veteranRadioButton);

  var chooseYourGame = document.createElement('h1');
  chooseYourGame.textContent = 'What Game would you like to find gamers on?)';
  registrationForm.appendChild(chooseYourGame);

  var lolLabel = document.createElement('label');
  lolLabel.innerHTML = 'League of Legends';
  var lolCheckBox = document.createElement('input');
  lolCheckBox.type = 'checkbox';
  lolCheckBox.name = 'leagueOfLegends';
  lolCheckBox.value = 'leagueOfLegends';
  registrationForm.appendChild(lolLabel);
  registrationForm.appendChild(lolCheckBox);

  var worldOfWarcraftLabel = document.createElement('label');
  worldOfWarcraftLabel.innerHTML = 'World Of Warcraft';
  var worldOfWarcraftCheckBox = document.createElement('input');
  worldOfWarcraftCheckBox.type = 'checkbox';
  worldOfWarcraftCheckBox.name = 'worldOfWarcraft';
  worldOfWarcraftCheckBox.value = 'worldOfWarcraft';
  registrationForm.appendChild(worldOfWarcraftLabel);
  registrationForm.appendChild(worldOfWarcraftCheckBox);

  var callOfDutyLabel = document.createElement('label');
  callOfDutyLabel.innerHTML = 'Call Of Duty';
  var callOfDutyCheckBox = document.createElement('input');
  callOfDutyCheckBox.type = 'checkbox';
  callOfDutyCheckBox.name = 'callOfDuty';
  callOfDutyCheckBox.value = 'callOfDuty';
  registrationForm.appendChild(callOfDutyLabel);
  registrationForm.appendChild(callOfDutyCheckBox);

  var overwatchLabel = document.createElement('label');
  overwatchLabel.innerHTML = 'Overwatch';
  var overwatchCheckBox = document.createElement('input');
  overwatchCheckBox.type = 'checkbox';
  overwatchCheckBox.name = 'overwatch';
  overwatchCheckBox.value = 'overwatch';
  registrationForm.appendChild(overwatchLabel);
  registrationForm.appendChild(overwatchCheckBox);

  var battlefield1Label = document.createElement('label');
  battlefield1Label.innerHTML = 'Battlefield 1';
  var battlefield1CheckBox = document.createElement('input');
  battlefield1CheckBox.type = 'checkbox';
  battlefield1CheckBox.name = 'battlefield1';
  battlefield1CheckBox.value = 'battlefield1';
  registrationForm.appendChild(battlefield1Label);
  registrationForm.appendChild(battlefield1CheckBox);

  var titanfall2Label = document.createElement('label');
  titanfall2Label.innerHTML = 'Titanfall 2';
  var titanfall2CheckBox = document.createElement('input');
  titanfall2CheckBox.type = 'checkbox';
  titanfall2CheckBox.name = 'titanfall2';
  titanfall2CheckBox.value = 'titanfall2';
  registrationForm.appendChild(titanfall2Label);
  registrationForm.appendChild(titanfall2CheckBox);

  var mineCraftLabel = document.createElement('label');
  mineCraftLabel.innerHTML = 'MineCraft';
  var mineCraftCheckBox = document.createElement('input');
  mineCraftCheckBox.type = 'checkbox';
  mineCraftCheckBox.name = 'mineCraft';
  mineCraftCheckBox.value = 'mineCraft';
  registrationForm.appendChild(mineCraftLabel);
  registrationForm.appendChild(mineCraftCheckBox);

  var theDivisionLabel = document.createElement('label');
  theDivisionLabel.innerHTML = 'The Division';
  var theDivisionCheckBox = document.createElement('input');
  theDivisionCheckBox.type = 'checkbox';
  theDivisionCheckBox.name = 'theDivision';
  theDivisionCheckBox.value = 'theDivision';
  registrationForm.appendChild(theDivisionLabel);
  registrationForm.appendChild(theDivisionCheckBox);

  var noMansSkyLabel = document.createElement('label');
  noMansSkyLabel.innerHTML = 'No Man\'s Sky';
  var noMansSkyCheckBox = document.createElement('input');
  noMansSkyCheckBox.type = 'checkbox';
  noMansSkyCheckBox.name = 'noMansSky';
  noMansSkyCheckBox.value = 'noMansSky';
  registrationForm.appendChild(noMansSkyLabel);
  registrationForm.appendChild(noMansSkyCheckBox);

  var weekDaysHeader = document.createElement('h1');
  weekDaysHeader.textContent = 'Day you are usually online to game)';
  registrationForm.appendChild(weekDaysHeader);

  var mondayLabel = document.createElement('label');
  mondayLabel.innerHTML = 'Monday';
  var mondayCheckBox = document.createElement('input');
  mondayCheckBox.type = 'checkbox';
  mondayCheckBox.name = 'monday';
  mondayCheckBox.value = 'monday';
  registrationForm.appendChild(mondayLabel);
  registrationForm.appendChild(mondayCheckBox);

  var tuesdayLabel = document.createElement('label');
  tuesdayLabel.innerHTML = 'Tuesday';
  var tuesdayCheckBox = document.createElement('input');
  tuesdayCheckBox.type = 'checkbox';
  tuesdayCheckBox.name = 'tuesday';
  tuesdayCheckBox.value = 'tuesday';
  registrationForm.appendChild(tuesdayLabel);
  registrationForm.appendChild(tuesdayCheckBox);

  var wednesdayLabel = document.createElement('label');
  wednesdayLabel.innerHTML = 'Wednesday';
  var wednesdayCheckBox = document.createElement('input');
  wednesdayCheckBox.type = 'checkbox';
  wednesdayCheckBox.name = 'wednesday';
  wednesdayCheckBox.value = 'wednesday';
  registrationForm.appendChild(wednesdayLabel);
  registrationForm.appendChild(wednesdayCheckBox);

  var thrusdayLabel = document.createElement('label');
  thrusdayLabel.innerHTML = 'Thrusday';
  var thrusdayCheckBox = document.createElement('input');
  thrusdayCheckBox.type = 'checkbox';
  thrusdayCheckBox.name = 'thrusday';
  thrusdayCheckBox.value = 'thrusday';
  registrationForm.appendChild(thrusdayLabel);
  registrationForm.appendChild(thrusdayCheckBox);

  var fridayLabel = document.createElement('label');
  fridayLabel.innerHTML = 'Friday';
  var fridayCheckBox = document.createElement('input');
  fridayCheckBox.type = 'checkbox';
  fridayCheckBox.name = 'friday';
  fridayCheckBox.value = 'friday';
  registrationForm.appendChild(fridayLabel);
  registrationForm.appendChild(fridayCheckBox);

  var saturdayLabel = document.createElement('label');
  saturdayLabel.innerHTML = 'Saturday';
  var saturdayCheckBox = document.createElement('input');
  saturdayCheckBox.type = 'checkbox';
  saturdayCheckBox.name = 'saturday';
  saturdayCheckBox.value = 'saturday';
  registrationForm.appendChild(saturdayLabel);
  registrationForm.appendChild(saturdayCheckBox);

  var sundayLabel = document.createElement('label');
  sundayLabel.innerHTML = 'Sunday';
  var sundayCheckBox = document.createElement('input');
  sundayCheckBox.type = 'checkbox';
  sundayCheckBox.name = 'sunday';
  sundayCheckBox.value = 'sunday';
  registrationForm.appendChild(sundayLabel);
  registrationForm.appendChild(sundayCheckBox);

  var playerRegisterSubmitButton = document.createElement('button');
  playerRegisterSubmitButton.type = 'submit';
  playerRegisterSubmitButton.innerHTML = 'Sign In';
  registrationForm.appendChild(playerRegisterSubmitButton);

  playerRegistrationForm.appendChild(registrationForm);
  getMainDiv.appendChild(playerRegistrationForm);

  var playerRegistrationForm = document.getElementById('playerCreated');
  playerRegistrationForm.addEventListener('submit', handleRegisterPlayer);
}

//function to create a humburger menu when player log in
function hamburgerMenu() {

  var hamburgerMenuDivCreate = document.createElement('div');
  hamburgerMenuDivCreate.className = 'hambur-menu-box';
  var hamburgerMenuSettingButton = document.createElement('div');
  hamburgerMenuSettingButton.className = 'hamburger-menu-button-img';
  var hamburgerMenuSettingImg = document.createElement('img');
  hamburgerMenuSettingImg.setAttribute('id','setting-button');
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

// var playerRegistrationForm = document.getElementById('playerCreated');
// playerRegistrationForm.addEventListener('submit', registerPlayer);
