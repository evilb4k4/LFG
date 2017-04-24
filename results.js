'use strict';
function resultDisplay(){
  var results = document.getElementById('results');
  var player = document.createElement('div');
  var avatarUserWrap = document.createElement('div');
  var userOnlineWrap = document.createElement('div');
  var gamerGamesWrap = document.createElement('div');
  var avatarPic = document.createElement('div');
  var username = document.createElement('h3');
  var userOnline = document.createElement('h3');
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
    
