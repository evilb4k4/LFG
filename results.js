'use strict';

try {
  var playerList = JSON.parse(localStorage.playerList);
} catch (error) {
  console.log('error');
}

function resultDisplay(){

  var content = document.getElementById('testContent');
  content.InnerHTML = '';

  var results = document.createElement('div');
  results.id = 'results';

  for (var j = 0; j < playerList.length; j++) {

    //===== Conditionals for Comparison between currentUser and Player objects =====

    if (currentUser.username != playerList[j].username){
      console.log(playerList[j].username);
      if (currentUser.dayYouCanGame == playerList[j].dayYouCanGame){
        console.log(playerList[j].dayYouCanGame);
        if (currentUser.skillLevel == playerList[j].skillLevel){
          console.log(playerList[j].skillLevel);
          for (var i = 0; i < Object.entries(playerList[j].gamerTags).length; i++){
            if((Object.entries(currentUser.gamerTags)[i][1])== true && (Object.entries(playerList[j].gamerTags)[i][1]) == true){
              console.log(playerList[j].gamerTags);
            }
            if((Object.entries(currentUser.gamesPlayed)[i][1])== true && (Object.entries(playerList[j].gamesPlayed)[i][1]) == true){
              console.log(playerList[j].gamesPlayed);
            }
            
            playerRender();

          }
        }
      }
    }
  }


  // ===== Renders Player Object to Results Page =====

  function playerRender() {
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

    for (i = 0; i < Object.entries(playerList[j].gamerTags).length; i++){
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
