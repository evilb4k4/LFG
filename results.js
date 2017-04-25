'use strict';

var playerList = JSON.parse(localStorage.playerList);

function resultDisplay(){

  var content = document.getElementById('content');
  content.InnerHTML = '';

  var results = document.createElement('div');
  results.id = 'results';

  for (var j = 0; j < playerList.length; j++) {

// ===== Creates Single 'Player' Profile for Results Page =====

    var player = document.createElement('div');
    player.className = 'player';

    var avatarUserWrap = document.createElement('div');
    avatarUserWrap.className = 'avatarUserWrap';

    var userOnlineWrap = document.createElement('div');
    userOnlineWrap.className = 'userOnlineWrap';
    var gamerGamesWrap = document.createElement('div');
    gamerGamesWrap.className = 'gamerGamesWrap';
    var avatarPic = document.createElement('div');
    avatarPic.className = 'avatarPic';
    var username = document.createElement('h1');
    username.className = 'username';
    var skillLevel = document.createElement('h1');
    skillLevel.className = 'skillLevel';
    var userOnline = document.createElement('h3');
    userOnline.className = 'userOnline';
    var gamerTags = document.createElement('ul');
    gamerTags.className = 'gamerTags';
    var gamesPlayed = document.createElement('ul');
    gamesPlayed.className = 'gamesPlayed';
    var comments = document.createElement('p');
    comments.className = 'comments';
    var contactButton = document.createElement('button');
    contactButton.className = 'contactButton';

    username.textContent = playerList[j].username;
    avatarPic.textContent = playerList[j].avatarPic;
    userOnline.textContent = playerList[j].userOnline;
    skillLevel.textContent = playerList[j].skillLevel;

    content.appendChild(results);
    results.appendChild(player);
    player.appendChild(avatarUserWrap);
    avatarUserWrap.appendChild(avatarPic);
    avatarUserWrap.appendChild(userOnlineWrap);
    userOnlineWrap.appendChild(username);
    userOnlineWrap.appendChild(skillLevel);
    userOnlineWrap.appendChild(userOnline);
    player.appendChild(gamerGamesWrap);
    gamerGamesWrap.appendChild(gamerTags);
    gamerGamesWrap.appendChild(gamesPlayed);
    player.appendChild(comments);
    player.appendChild(contactButton);

// ========== gamerTags List Item Creation =====

    for (var i = 0; i < Object.entries(playerList[j].gamerTags).length; i++){
      var gamerTagLi = document.createElement('li');
      if(Object.entries(playerList[j].gamerTags)[i][1]){
        gamerTagLi.textContent = (Object.entries(playerList[j].gamerTags)[i][0], ': ' ,   Object.entries(playerList[j].gamerTags)[i][1]);
        gamerTags.appendChild(gamerTagLi);
      }
    }

// ========== gamesPlayed List Item Creation =====
    for (i = 0; i < Object.entries(playerList[j].gamesPlayed).length; i++){
      var gamesPlayedLi = document.createElement('li');
      if(Object.entries(playerList[j].gamesPlayed)[i][1]){
        gamesPlayedLi.textContent = Object.entries(playerList[j].gamesPlayed)[i][0];
        gamesPlayed.appendChild(gamesPlayedLi);
      }
    }
  }
}

resultDisplay();
=======
function resultDisplay(){
  var results = document.getElementById('results');
  var player = document.createElement('div');
  var avatarUserWrap = document.createElement('div');
  var userOnlineWrap = document.createElement('div');
  var gamerGamesWrap = document.createElement('div');
  var avatarPic = document.createElement('div');
  var username = document.createElement('h3');
  var userOnline = document.createElement('h3');
  var playerSkill = document.createElement('h1');
  var gamertags = document.createElement('ul');
  var gamesPlayed = document.createElement('ul');
  var comments = document.createElement('p');
  var contactButton = document.createElement('button');

  player.className = 'player';
  results = document.appendChild(player);
  player = document.appendChild(avatarUserWrap);
  avatarUserWrap = document.appendChild(avatarPic);
  avatarUserWrap = document.appendChild(userOnlineWrap);
  userOnlineWrap = document.appendChild(username);
  userOnlineWrap = document.appendChild(userOnline);
  userOnlineWrap = document.appendChild(playerSkill);
  player = document.appendChild(gamerGamesWrap);
  gamerGamesWrap = document.appendChild(gamertags);
  gamerGamesWrap = document.appendChild(gamesPlayed);
  player = document.appendChild(comments);
  player = document.appendChild(contactButton);


  // Gamertag Creation for div
  for (var i = 0; i < object.entries(playerList.gamerTags).length; i++){
    var gamerTagLi = createElement('li');
    var gamerTagLiText = new textNode (object.entries(playerList[j].gamerTags[i][0], ': ', object.entries(playerList[j].gamerTags[i][1])))
}

