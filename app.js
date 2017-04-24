'use strict';

function Player(username, avatar, skillLevel) {
  this.username = username;
  this.avatar = '';
  this.online = false;
  this.startTimeUsual = '';
  this.endTimeUsual = '';
  this.skillLevel = skillLevel;

  var gamesPlayed = {
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

  var gamerTags = {
    steam:'',
    origin:'',
    uplay:'',
    xboxLive:'',
    playStationNetwork:'',
  };
}
