'use strict'

const playerId= localStorage.getItem('playerid');

const playerName=document.querySelector('.playerName');
playerName.textContent=`PlayerName: ${playerId}`;
