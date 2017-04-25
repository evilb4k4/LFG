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
    var skillLevel = document.createElement('h1');
    skillLevel.className = 'skillLevel';
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
  //
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
    gamerGamesWrap.appendChild(gamertags);
    gamerGamesWrap.appendChild(gamesPlayed);
    player.appendChild(comments);
    player.appendChild(contactButton);

    for (var i = 0; i < Object.entries(playerList[j].gamerTags).length; i++){
      var gamerTagLi = document.createElement('li');
      gamerTagLi.textContent = (Object.entries(playerList[j].gamerTags)[i][0], ': ' , Object.entries(playerList[j].gamerTags)[i][1]);
      gamertags.appendChild(gamerTagLi);
    }

  }

    // Gamertag Creation for div


}

  //



resultDisplay();
