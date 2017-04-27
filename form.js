'use strict';

var signInSubmitButton;
var signInLabelCreate;
var formcreate;
var currentUser;
var getMainDiv = document.getElementById('content');

function Player(username, avatar, dayYouCanGame, skillLevel, comments, gamesPlayed){
  this.username = username;
  this.avatar = avatar;
  this.online = false;
  this.dayYouCanGame = dayYouCanGame;
  this.skillLevel = skillLevel;
  this.comments = comments;
  this.gamesPlayed = gamesPlayed;

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


//function handling player registration
function handleRegisterPlayer(event) {
  event.preventDefault();
  var getTarget = event.target;
  var playerUserName = getTarget.username.value.toLowerCase();
  var playerAvatar = getTarget.avatar.value;
  var playerGamertag = getTarget.gametag.value;
  console.log('username', playerGamertag);
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
    thursday: getTarget.thursday.checked,
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


  // playerList.push(playerList);
  currentUser = new Player(playerUserName, playerAvatar, dayYouCanGame, playerSkillLevel, [], gamesPlayed);
  var prePlayerList = new Player(playerUserName, playerAvatar, dayYouCanGame, playerSkillLevel, [], gamesPlayed);

  if(playerList){
    prePlayerList.gamerTags[playerGamerNetwork] = playerGamertag;
    playerList.push(prePlayerList);
  } else {
    prePlayerList.gamerTags[playerGamerNetwork] = playerGamertag;
    playerList = [prePlayerList];
  }

  try {
    localStorage.playerList = JSON.stringify(playerList);
    localStorage.currentUser = JSON.stringify(currentUser);
  } catch (error) {
    console.error(error);
  }
  resultDisplay();
}

//Section for the sigin logic
function signIn(event) {
  event.preventDefault();
  var playerUserName = signInSubmitButton.userName.value.toLowerCase();
  var matched = false;
  for(var i = 0; i < playerList.length && !matched; i++){
    if(playerUserName == playerList[i].username){
      currentUser = playerList[i];
      try {
        localStorage.currentUser = JSON.stringify(currentUser);
      } catch (error) {
        console.error(error);
      }
      resultDisplay();
      matched = true;
    } else if(i == playerList.length - 1) {
      function validatePlayer(){
        var errorMsg = document.getElementById('landing-msg');
        formcreate.setAttribute('id', 'error-msg-input');
        errorMsg.innerHTML = 'Invalid User, Please Try Again!';
        errorMsg.setAttribute('id','error-msg');
        signInSubmitButton.reset();
        console.log('no good');
      }

      signInSubmitButton.addEventListener('submit', validatePlayer);

    }
  }
}

//function to display the login screen

function SignInBoxCreate(event) {
  event.preventDefault();
  getMainDiv.innerHTML = '';
  var signInBoxcreate = document.createElement('div');
  formcreate = document.createElement('form');
  formcreate.setAttribute('id', 'sign-in');
  signInBoxcreate.className = 'sign-in-box';
  signInBoxcreate.appendChild(formcreate);

  signInLabelCreate = document.createElement('label');
  signInLabelCreate.setAttribute('id', 'landing-msg');
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
  usernameLabelCreate.appendChild(userNameInputField);

  //===== Avatar input field =====
  var avatarDiv = document.createElement('div');
  avatarDiv.id = 'avatarDiv';
  avatarDiv.className = 'registrationFormDivs';
  var avatarLabelCreate = document.createElement('label');
  avatarLabelCreate.innerHTML = 'Add an Avatar: ';
  var avatarInputField = document.createElement('input');
  avatarInputField.type = 'text';
  avatarInputField.name = 'avatar';
  var avatarField = avatarInputField.value;
  console.log('avatarInputField works', avatarField);
  registrationForm.appendChild(avatarDiv);
  avatarDiv.appendChild(avatarLabelCreate);
  avatarLabelCreate.appendChild(avatarInputField);

//===== Days You Can Game Labels and Radio Inputs =====

  var daysYouCanGameDiv = document.createElement('div');
  daysYouCanGameDiv.className = 'registrationFormDivs';
  daysYouCanGameDiv.id = 'daysYouCanGameDiv';
  registrationForm.appendChild(daysYouCanGameDiv);

  var weekDaysHeader = document.createElement('h1');
  weekDaysHeader.textContent = 'When Do You Want To Play?';
  daysYouCanGameDiv.appendChild(weekDaysHeader);

  var mondayLabel = document.createElement('label');
  mondayLabel.innerHTML = 'Monday';
  var mondayCheckBox = document.createElement('input');
  mondayCheckBox.type = 'checkbox';
  mondayCheckBox.name = 'monday';
  mondayCheckBox.value = 'monday';
  daysYouCanGameDiv.appendChild(mondayLabel);
  mondayLabel.appendChild(mondayCheckBox);

  var tuesdayLabel = document.createElement('label');
  tuesdayLabel.innerHTML = 'Tuesday';
  var tuesdayCheckBox = document.createElement('input');
  tuesdayCheckBox.type = 'checkbox';
  tuesdayCheckBox.name = 'tuesday';
  tuesdayCheckBox.value = 'tuesday';
  daysYouCanGameDiv.appendChild(tuesdayLabel);
  tuesdayLabel.appendChild(tuesdayCheckBox);

  var wednesdayLabel = document.createElement('label');
  wednesdayLabel.innerHTML = 'Wednesday';
  var wednesdayCheckBox = document.createElement('input');
  wednesdayCheckBox.type = 'checkbox';
  wednesdayCheckBox.name = 'wednesday';
  wednesdayCheckBox.value = 'wednesday';
  daysYouCanGameDiv.appendChild(wednesdayLabel);
  wednesdayLabel.appendChild(wednesdayCheckBox);

  var thursdayLabel = document.createElement('label');
  thursdayLabel.innerHTML = 'Thursday';
  var thursdayCheckBox = document.createElement('input');
  thursdayCheckBox.type = 'checkbox';
  thursdayCheckBox.name = 'thursday';
  thursdayCheckBox.value = 'thursday';
  daysYouCanGameDiv.appendChild(thursdayLabel);
  thursdayLabel.appendChild(thursdayCheckBox);

  var fridayLabel = document.createElement('label');
  fridayLabel.innerHTML = 'Friday';
  var fridayCheckBox = document.createElement('input');
  fridayCheckBox.type = 'checkbox';
  fridayCheckBox.name = 'friday';
  fridayCheckBox.value = 'friday';
  daysYouCanGameDiv.appendChild(fridayLabel);
  fridayLabel.appendChild(fridayCheckBox);

  var saturdayLabel = document.createElement('label');
  saturdayLabel.innerHTML = 'Saturday';
  var saturdayCheckBox = document.createElement('input');
  saturdayCheckBox.type = 'checkbox';
  saturdayCheckBox.name = 'saturday';
  saturdayCheckBox.value = 'saturday';
  daysYouCanGameDiv.appendChild(saturdayLabel);
  saturdayLabel.appendChild(saturdayCheckBox);

  var sundayLabel = document.createElement('label');
  sundayLabel.innerHTML = 'Sunday';
  var sundayCheckBox = document.createElement('input');
  sundayCheckBox.type = 'checkbox';
  sundayCheckBox.name = 'sunday';
  sundayCheckBox.value = 'sunday';
  daysYouCanGameDiv.appendChild(sundayLabel);
  sundayLabel.appendChild(sundayCheckBox);

//===== GamerTag Label and Text Input =====

  var gamerTagDiv = document.createElement('div');
  gamerTagDiv.id = 'gamerTagDiv';
  gamerTagDiv.className = 'registrationFormDivs';
  var gamerTagLabelCreate = document.createElement('label');
  gamerTagLabelCreate.innerHTML = 'Gamer Tag: ';
  var gamerInputField = document.createElement('input');
  gamerInputField.type = 'text';
  gamerInputField.name = 'gametag';
  registrationForm.appendChild(gamerTagDiv);
  gamerTagDiv.appendChild(gamerTagLabelCreate);
  gamerTagLabelCreate.appendChild(gamerInputField);

//===== Platform Labels and Radio Inputs =====

  var platformDiv = document.createElement('div');
  platformDiv.id = 'platformDiv';
  platformDiv.className = 'registrationFormDivs';
  registrationForm.appendChild(platformDiv);

  var platformHeader = document.createElement('h1');
  platformHeader.textContent = 'Where Do You Game?';
  platformDiv.appendChild(platformHeader);

  var steamLabelCreate = document.createElement('label');
  steamLabelCreate.innerHTML = 'Steam';
  var steamRadioButton = document.createElement('input');
  steamRadioButton.type = 'radio';
  steamRadioButton.name = 'gamerTags';
  steamRadioButton.value = 'steam';
  platformDiv.appendChild(steamLabelCreate);
  steamLabelCreate.appendChild(steamRadioButton);

  var originLabelCreate = document.createElement('label');
  originLabelCreate.innerHTML = 'Origin';
  var originRadioButton = document.createElement('input');
  originRadioButton.type = 'radio';
  originRadioButton.name = 'gamerTags';
  originRadioButton.value = 'origin';
  platformDiv.appendChild(originLabelCreate);
  originLabelCreate.appendChild(originRadioButton);

  var battlenetLabelCreate = document.createElement('label');
  battlenetLabelCreate.innerHTML = 'Battlenet';
  var battlenetRadioButton = document.createElement('input');
  battlenetRadioButton.type = 'radio';
  battlenetRadioButton.name = 'gamerTags';
  battlenetRadioButton.value = 'battlenet';
  platformDiv.appendChild(battlenetLabelCreate);
  battlenetLabelCreate.appendChild(battlenetRadioButton);

  var leagueOfLegendsLabelCreate = document.createElement('label');
  leagueOfLegendsLabelCreate.innerHTML = 'League Of Legends';
  var leagueOfLegendsRadioButton = document.createElement('input');
  leagueOfLegendsRadioButton.type = 'radio';
  leagueOfLegendsRadioButton.name = 'gamerTags';
  leagueOfLegendsRadioButton.value = 'leagueOfLegends';
  platformDiv.appendChild(leagueOfLegendsLabelCreate);
  leagueOfLegendsLabelCreate.appendChild(leagueOfLegendsRadioButton);

  var uplayLabelCreate = document.createElement('label');
  uplayLabelCreate.innerHTML = 'Uplay';
  var uplayRadioButton = document.createElement('input');
  uplayRadioButton.type = 'radio';
  uplayRadioButton.name = 'gamerTags';
  uplayRadioButton.value = 'uplay';
  platformDiv.appendChild(uplayLabelCreate);
  uplayLabelCreate.appendChild(uplayRadioButton);

  var xboxLiveLabelCreate = document.createElement('label');
  xboxLiveLabelCreate.innerHTML = 'Xbox Live';
  var xboxLiveRadioButton = document.createElement('input');
  xboxLiveRadioButton.type = 'radio';
  xboxLiveRadioButton.name = 'gamerTags';
  xboxLiveRadioButton.value = 'xboxLive';
  platformDiv.appendChild(xboxLiveLabelCreate);
  xboxLiveLabelCreate.appendChild(xboxLiveRadioButton);

  var playStationNetworkLabelCreate = document.createElement('label');
  playStationNetworkLabelCreate.innerHTML = 'Playstation Network';
  var playStationNetworkRadioButton = document.createElement('input');
  playStationNetworkRadioButton.type = 'radio';
  playStationNetworkRadioButton.name = 'gamerTags';
  playStationNetworkRadioButton.value = 'playStationNetwork';
  platformDiv.appendChild(playStationNetworkLabelCreate);
  playStationNetworkLabelCreate.appendChild(playStationNetworkRadioButton);

//===== Skill Level Labels and Radio Inputs =====

  var skillLevelDiv = document.createElement('div');
  skillLevelDiv.className = 'registrationFormDivs';
  skillLevelDiv.id = 'skillLevelDiv';
  usernameDiv.appendChild(skillLevelDiv);

  var choiceSkillLevelHeader = document.createElement('h1');
  choiceSkillLevelHeader.textContent = 'Choose Your Skill Level';
  skillLevelDiv.appendChild(choiceSkillLevelHeader);

  var noobLabelCreate = document.createElement('label');
  noobLabelCreate.innerHTML = 'Noob';
  var noobRadioButton = document.createElement('input');
  noobRadioButton.type = 'radio';
  noobRadioButton.name = 'skillLevel';
  noobRadioButton.value = 'Noob';
  skillLevelDiv.appendChild(noobLabelCreate);
  noobLabelCreate.appendChild(noobRadioButton);

  var intermediateLabelCreate = document.createElement('label');
  intermediateLabelCreate.innerHTML = 'Intermediate';
  var intermediateRadioButton = document.createElement('input');
  intermediateRadioButton.type = 'radio';
  intermediateRadioButton.name = 'skillLevel';
  intermediateRadioButton.value = 'intermediate';
  skillLevelDiv.appendChild(intermediateLabelCreate);
  intermediateLabelCreate.appendChild(intermediateRadioButton);

  var veteranLabelCreate = document.createElement('label');
  veteranLabelCreate.innerHTML = 'Veteran';
  var veteranRadioButton = document.createElement('input');
  veteranRadioButton.type = 'radio';
  veteranRadioButton.name = 'skillLevel';
  veteranRadioButton.value = 'Veteran';
  skillLevelDiv.appendChild(veteranLabelCreate);
  veteranLabelCreate.appendChild(veteranRadioButton);

//===== Games Labels and Radio Inputs =====

  var gamesDiv = document.createElement('div');
  gamesDiv.className = 'registrationFormDivs';
  gamesDiv.id = 'gamesDiv';
  registrationForm.appendChild(gamesDiv);

  var chooseYourGame = document.createElement('h1');
  chooseYourGame.textContent = 'What Game Would You Like to Play?';
  gamesDiv.appendChild(chooseYourGame);

  var lolLabel = document.createElement('label');
  lolLabel.innerHTML = 'League of Legends';
  var lolCheckBox = document.createElement('input');
  lolCheckBox.type = 'checkbox';
  lolCheckBox.name = 'leagueOfLegends';
  lolCheckBox.value = 'leagueOfLegends';
  gamesDiv.appendChild(lolLabel);
  lolLabel.appendChild(lolCheckBox);

  var worldOfWarcraftLabel = document.createElement('label');
  worldOfWarcraftLabel.innerHTML = 'World Of Warcraft';
  var worldOfWarcraftCheckBox = document.createElement('input');
  worldOfWarcraftCheckBox.type = 'checkbox';
  worldOfWarcraftCheckBox.name = 'worldOfWarcraft';
  worldOfWarcraftCheckBox.value = 'worldOfWarcraft';
  gamesDiv.appendChild(worldOfWarcraftLabel);
  worldOfWarcraftLabel.appendChild(worldOfWarcraftCheckBox);

  var callOfDutyLabel = document.createElement('label');
  callOfDutyLabel.innerHTML = 'Call Of Duty';
  var callOfDutyCheckBox = document.createElement('input');
  callOfDutyCheckBox.type = 'checkbox';
  callOfDutyCheckBox.name = 'callOfDuty';
  callOfDutyCheckBox.value = 'callOfDuty';
  gamesDiv.appendChild(callOfDutyLabel);
  callOfDutyLabel.appendChild(callOfDutyCheckBox);

  var overwatchLabel = document.createElement('label');
  overwatchLabel.innerHTML = 'Overwatch';
  var overwatchCheckBox = document.createElement('input');
  overwatchCheckBox.type = 'checkbox';
  overwatchCheckBox.name = 'overwatch';
  overwatchCheckBox.value = 'overwatch';
  gamesDiv.appendChild(overwatchLabel);
  overwatchLabel.appendChild(overwatchCheckBox);

  var battlefield1Label = document.createElement('label');
  battlefield1Label.innerHTML = 'Battlefield 1';
  var battlefield1CheckBox = document.createElement('input');
  battlefield1CheckBox.type = 'checkbox';
  battlefield1CheckBox.name = 'battlefield1';
  battlefield1CheckBox.value = 'battlefield1';
  gamesDiv.appendChild(battlefield1Label);
  battlefield1Label.appendChild(battlefield1CheckBox);

  var titanfall2Label = document.createElement('label');
  titanfall2Label.innerHTML = 'Titanfall 2';
  var titanfall2CheckBox = document.createElement('input');
  titanfall2CheckBox.type = 'checkbox';
  titanfall2CheckBox.name = 'titanfall2';
  titanfall2CheckBox.value = 'titanfall2';
  gamesDiv.appendChild(titanfall2Label);
  titanfall2Label.appendChild(titanfall2CheckBox);

  var mineCraftLabel = document.createElement('label');
  mineCraftLabel.innerHTML = 'MineCraft';
  var mineCraftCheckBox = document.createElement('input');
  mineCraftCheckBox.type = 'checkbox';
  mineCraftCheckBox.name = 'mineCraft';
  mineCraftCheckBox.value = 'mineCraft';
  gamesDiv.appendChild(mineCraftLabel);
  mineCraftLabel.appendChild(mineCraftCheckBox);

  var theDivisionLabel = document.createElement('label');
  theDivisionLabel.innerHTML = 'The Division';
  var theDivisionCheckBox = document.createElement('input');
  theDivisionCheckBox.type = 'checkbox';
  theDivisionCheckBox.name = 'theDivision';
  theDivisionCheckBox.value = 'theDivision';
  gamesDiv.appendChild(theDivisionLabel);
  theDivisionLabel.appendChild(theDivisionCheckBox);

  var noMansSkyLabel = document.createElement('label');
  noMansSkyLabel.innerHTML = 'No Man\'s Sky';
  var noMansSkyCheckBox = document.createElement('input');
  noMansSkyCheckBox.type = 'checkbox';
  noMansSkyCheckBox.name = 'noMansSky';
  noMansSkyCheckBox.value = 'noMansSky';
  gamesDiv.appendChild(noMansSkyLabel);
  noMansSkyLabel.appendChild(noMansSkyCheckBox);

//===== Registration Submit Button =====

  var playerRegisterSubmitButton = document.createElement('button');
  playerRegisterSubmitButton.type = 'submit';
  playerRegisterSubmitButton.innerHTML = 'Sign In';
  playerRegisterSubmitButton.className = 'buttons';
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
  var userProfileBox = document.createElement('div');
  userProfileBox.className = 'hamburger-menu-avatar-box';
  hamburgerMenuSettingButton.appendChild(userProfileBox);

  var userEditButtonBox = document.createElement('div');
  userEditButtonBox.className = 'img-setting-box';
  hamburgerMenuSettingButton.appendChild(userEditButtonBox);

  var hamburgerMenuSettingImg = document.createElement('img');
  hamburgerMenuSettingImg.setAttribute('id','setting-button');
  hamburgerMenuSettingImg.src = 'img/setting-button.png';
  userEditButtonBox.appendChild(hamburgerMenuSettingImg);

  var userProfileNameBox = document.createElement('id');
  userProfileNameBox.className = 'user-prifile-name-box';
  var userSpanElement = document.createElement('span');
  userSpanElement.setAttribute('id', 'getUserName');
  userProfileNameBox.appendChild(userSpanElement);
  hamburgerMenuSettingButton.appendChild(userProfileNameBox);
  hamburgerMenuDivCreate.appendChild(hamburgerMenuSettingButton);

  var hamburgerMenuList = document.createElement('div');
  hamburgerMenuList.setAttribute('id', 'dropDownMenu')
  hamburgerMenuList.className = 'hamburger-menu-list';

  var editProfLI = document.createElement('a');
  editProfLI.href = '#';
  editProfLI.innerHTML = 'Edit Profile';

  hamburgerMenuList.appendChild(editProfLI);

  var signOutLI = document.createElement('a');
  signOutLI.setAttribute('id', 'logOut');
  signOutLI.href = '#';
  signOutLI.innerHTML = 'Sign Out';

  hamburgerMenuList.appendChild(signOutLI);

  hamburgerMenuDivCreate.appendChild(hamburgerMenuList);

  document.body.appendChild(hamburgerMenuDivCreate);
  setUsername();
}

//this function logs the current user out
function logOut() {
  localStorage.removeItem('currentUser');
  location.reload();
}
function dropDownMenus(event) {
  if (event.target.matches('#setting-button')) {
    document.getElementById("dropDownMenu").classList.toggle("show");
    var dropdowns = document.getElementsByClassName('hamburger-menu-list');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (!openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function setUsername() {
  var setUsername = document.getElementById('getUserName');
  setUsername.textContent = currentUser.username;

  var getSettingButtonClick = document.getElementById('logOut');
  getSettingButtonClick.addEventListener('click', logOut);

  var getDropDownMenu = document.getElementById('setting-button');
  getDropDownMenu.addEventListener('click', dropDownMenus);
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

try {
  var playerList = JSON.parse(localStorage.playerList);
  currentUser =JSON.parse(localStorage.currentUser);
  console.log('it exists');
} catch(error){
  console.log('error');
}
if(currentUser === undefined){
mainPageLoad();
} else {
  resultDisplay();
}

//event listeners

var signInButtonClick = document.getElementById('signInButton');
signInButtonClick.addEventListener('click', SignInBoxCreate);

var formButtonCreate = document.getElementById('registerButton');
formButtonCreate.addEventListener('click', registerPlayer);
