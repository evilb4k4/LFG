'use strict';

function Player(username, avatar, startTimeUsual, endTimeUsual, skillLevel, comments) {
  this.username = username;
  this.avatar = avatar;
  this.online = false;
  this.startTimeUsual = startTimeUsual;
  this.endTimeUsual = endTimeUsual;
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
