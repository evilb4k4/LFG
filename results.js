'use strict';

var playerList = JSON.parse(localStorage.playerList);

function resultDisplay(){

  var content = document.getElementById('content');
  content.InnerHTML = '';

  var results = document.createElement('div');
  results.id = 'results';

  for (var j = 0; j < playerList.length; j++) {

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
    var playerSkill = document.createElement('h1');
    playerSkill.className = 'playerSkill';
    var userOnline = document.createElement('h3');
    userOnline.className = 'userOnline';
    var gamertags = document.createElement('ul');
    gamertags.className = 'gamertags';
    var gamesPlayed = document.createElement('ul');
    gamesPlayed.className = 'gamesPlayed';
    var comments = document.createElement('p');
    comments.className = 'comments';
    var contactButton = document.createElement('button');
    contactButton.className = 'contactButton';

    // username.textNode('playerList[j].username');
    // avatarPic.textNode('playerList[j].avatarPic');
    // userOnline.textNode('playerList[j].userOnline');
    // playerSkill.textNode('playerList[j].playerSkill');
    // username.textNode('playerList[j].username');

  }

    content.appendChild(results);
    results.appendChild(player);
    player.appendChild(avatarUserWrap);
    avatarUserWrap.appendChild(avatarPic);
    avatarUserWrap.appendChild(userOnlineWrap);
    userOnlineWrap.appendChild(username);
    userOnlineWrap.appendChild(playerSkill);
    userOnlineWrap.appendChild(userOnline);
    player.appendChild(gamerGamesWrap);
    gamerGamesWrap.appendChild(gamertags);
    gamerGamesWrap.appendChild(gamesPlayed);
    player.appendChild(comments);
    player.appendChild(contactButton);


    // Gamertag Creation for div

    for (var i = 0; i < Object.entries(playerList.gamerTags).length; i++){
      var gamerTagLi = createElement('li');
      var gamerTagLiText = new textNode (Object.entries(playerList[j].gamerTags[i][0], ': ', Object.entries(playerList[j].gamerTags[i][1])));
    }
  }

resultDisplay();
