/*
# this source file is part of Volley Zombie, a 2d online game
# Copyright (C) 2012  João Henrique C. Pimentel
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*****************************************
     some stuff to facilitate testing and debugging
*/
var testingMode = false;
var testingMode_tilesGrid = false;
var testingMode_immortal = false;

var logDiv = null;
function log(msg)
{
  if (testingMode) 
  {
    if (logDiv === null)
    {
      logDiv = document.createElement('div');
      logDiv.id = 'log';
      logDiv.innerHTML = '<br />';
      document.body.appendChild(logDiv);
    }
    logDiv.innerHTML += msg + '<br />';
   // console.log(msg);
  }
}
function clearLog()
{
  if (testingMode) document.getElementById('log').innerHTML = '';
}
/*********************************/

//stage variables
var stageWidth = 15;
var stageHeight = 9;
var tileSize = 32;

//asset variables
var images = null;     //JSON object with all the images to be loaded (as sprites)

//gameplay objects
var map = null;        //The map of the current level
var player = null;     //The player's entity
var boss = null;       //The boss' entity
var ball = null;       //The ball's entity   - TODO: remove this reference

//global state and variables
var level = 1;                     //The number of the current level  - TODO: remove this, insert in the map objects
var levelFrame = 0;                //The current frame, counting from the start of the current level    - TODO: this probably should be somewhere else
var storyMode = false;             //True if there is a cutscene being played
var difficulty = {casual: false, hard: false};
var numberOfLevels = 5;
var lifeSprite = new Array(6);     //Sprites of the image that represents the players' life   - TODO: create a component for it
var bouncedCounter = 0;            //the score in that level                      TODO: this probably should be somewhere else
var bouncedCounterDisplay = null;  //an entity that displays the score            TODO: this probably should be somewhere else


function redefineCraftyKeys() {
  // at some point of browsers evolution, Crafty's code for handling key presses has stopped working.
  // this function redefines the key codes used on the game, based on current browsers (as of the year 2020)
  Crafty.keys.SPACE = ' ';
  Crafty.keys.ENTER = 'Enter';
  Crafty.keys.UP_ARROW = 'ArrowUp';
  Crafty.keys.DOWN_ARROW = 'ArrowDown';
  Crafty.keys.LEFT_ARROW = 'ArrowLeft';
  Crafty.keys.RIGHT_ARROW = 'ArrowRight';
  Crafty.keys.SHIFT = 'Shift';
  Crafty.keys.NUMPAD_0 = '0';
  Crafty.keys.W = 'W';
  Crafty.keys.A = 'A';
  Crafty.keys.S = 'S';
  Crafty.keys.D = 'D';
  Crafty.keys.P = 'P';
  Crafty.keys.C = 'C';
  Crafty.keys.w = 'w';
  Crafty.keys.a = 'a';
  Crafty.keys.s = 's';
  Crafty.keys.d = 'd';
  Crafty.keys.p = 'p';
  Crafty.keys.c = 'c';
  Crafty.keys['0'] = '0';
  Crafty.keys['1'] = '1';
  Crafty.keys['2'] = '2';
  Crafty.keys['3'] = '3';
  Crafty.keys['4'] = '4';
  Crafty.keys['5'] = '5';
  Crafty.keys['6'] = '6';
  Crafty.keys['7'] = '7';
  Crafty.keys['8'] = '8';
  Crafty.keys['9'] = '9';

}

window.onload = function ()
{
  Crafty.init(stageWidth*tileSize, stageHeight*tileSize, 30);
  redefineCraftyKeys();

  initializeCraftyComponents();

  //firefox does not support css' zoom, so I had to use scale in it
  //It behaves a bit different than zoom, thus the following adjustments were required
  var FIREFOX = /Firefox/i.test(navigator.userAgent);
  if (FIREFOX && !nozoom)
  {
    var craftyDiv = document.getElementById("cr-stage");
    craftyDiv.style.height='338px';
    craftyDiv.style.marginTop='150px';
    var optionsBar = document.getElementById("optionsBar");
    optionsBar.style.position='absolute';
    optionsBar.style.marginTop='10px';
  }

  Crafty.scene('loading', function ()
  {
    Crafty.background('rgb(30,30,30)');
    var loadingText = Crafty.e('2D, DOM, Text')
      .attr({ w: 480, h: 20, x: 0, y: 20 })
      .text('Loading...')
      .css({ 'text-align': 'center' });

    defineImages();
    loadAudioAssets();

    Crafty.load(getImagesToLoad(), function ()
    {
      //when everything is loaded, this will be executed:
      //btw, I'm not sure of what happens when something fails to load

      setupSpriteMaps();
      loadingText.destroy();

      if (testingMode){difficulty.hard=true; startLevel(5); Crafty.timer.simulateFrames(1400);}
      else
       Crafty.scene('introBeach');
    });
    

  });
  Crafty.scene('loading');   //actually runs the loading scene

  Crafty.scene('introBeach', function ()
  {
    Crafty.background('black');

    //creates the characters that will be animated in this intro
    player = Crafty.e('Player, player_sprite, 2D, DOM, Ape, Jumper')
      .attr({ x: -32, y: 180, w: 64, h: 64, z: 40 });  //define initial position
    boss = Crafty.e('2D, DOM, princess_sprite, Ape, Jumper')
      .attr({ x: 60, y: -80, w: 64, h: 64, z: 40});

    map = introBeach;
    createMap();
    
    playIntroScene1();
  });

  Crafty.scene('mainMenu', function ()
  {
    Crafty.background('black');
    Crafty.e('2D, DOM, Text, css_volleyTitle')
      .attr({ w: 480, h: 120, x: 10, y: 30 })
      .text('Volley')
      .css({ 'font-family': 'Courgette' })
      .css({ 'font-size': '90PX' })
      .rotation = -15;

      Crafty.e('2D, DOM, Text, css_levelTitle')
      .attr({ w: 480, h: 120, x: 80, y: 80 })
      .text('ZOMBIE')
      .css({ 'font-family': 'Creepster' })
      .css({ 'font-size': '90PX' })
      .css({ 'color': 'white' });

      Crafty.e('2D, DOM, Text, Keyboard, Blink, css_general')
      .attr({ w: 480, h: 20, x: 0, y: 240, blinkingRate: 10 })
      .text('Press SPACE to play')
      .css({'text-align': 'center' })
      .trigger('StartBlinking')
      .bind('KeyDown', function ()
      {
        if (this.isDown('SPACE') || this.isDown('ENTER'))
        {
          Crafty.scene('mainMenu2');
          Crafty.audio.play('heal');
        };
      });
      
      Crafty.audio.play('ball_win');
  });
  
  Crafty.scene('mainMenu2', function ()
  {
    Crafty.background('black');
    
    Crafty.e('2D, DOM, Text, Keyboard, css_general')
      .attr({ w: 220, h: 18, x: 120, y: 20 })
      .text('DIFFICULTY LEVEL')
      .css({'text-align': 'center' })
      .css({'font-family': 'Creepster' })
      .css({'font-size': '32px' })
      .css({'-webkit-text-stroke-width': '2px' })
      .css({'-webkit-text-stroke-color': 'green' });

    var selected = 0;
    var optionCasual = Crafty.e('2D, DOM, Text, Keyboard, css_general')
      .attr({ w: 180, h: 18, x: 140, y: 110 })
      .text('CASUAL')
      .css({'text-align': 'center' })
      .css({'font-size': '12px' })
      .css({'padding-top': '10px' })
      .css({'padding-bottom': '5px' })
      .css({'border': '3px yellow solid' })
      .css({'border-radius': '15px'});

    var optionHard = Crafty.e('2D, DOM, Text, css_general')
      .attr({ w: 180, h: 18, x: 140, y: 160 })
      .text('HARD')
      .css({'text-align': 'center' })
      .css({'font-size': '12px' })
      .css({'padding-top': '10px' })
      .css({'padding-bottom': '5px' })
      .css({'border': '3px black solid' })
      .css({'border-radius': '15px'});

    optionCasual.bind('KeyDown', function ()
    {
        if (    this.isDown('W') || this.isDown('w') || this.isDown('A')|| this.isDown('a')
             || this.isDown('S') || this.isDown('s') || this.isDown('D')|| this.isDown('d')
             || this.isDown('UP_ARROW') || this.isDown('DOWN_ARROW') || this.isDown('LEFT_ARROW') || this.isDown('RIGHT_ARROW') )
        {
          if (selected === 0)
          {
            optionCasual.css({'border-color': 'black' });
            optionHard.css({'border-color': 'yellow' });
          }
          else
          {
            optionCasual.css({'border-color': 'yellow' });
            optionHard.css({'border-color': 'black' });
          }
          selected = 1-selected;
        };
        if (this.isDown('SPACE') || this.isDown('ENTER'))
        {
          if (selected === 0)
          {
            difficulty.casual = true;
            difficulty.hard = false;
            numberOfLevels = 3;
          }
          else
          {
            difficulty.casual = false;
            difficulty.hard = true;
            numberOfLevels = 5;
          }
          startLevel(1);
        };
      });

    

  });

  Crafty.scene('round', function ()
  { 
    if (level === 1) playLevel1Intro();
    else if (level === 2) playLevel2Intro();
    else if (level === 3) playLevel3Intro();
    else if (level === 4) playLevel4Intro();
    else if (level === 5) playLevel5Intro();
    else
      playLevelIntro(level);
  });

  Crafty.scene('gameOver', function ()
  {

    //set-up an intro text, for while loading
    Crafty.background('black');
    Crafty.e('2D, DOM, Text, Keyboard, css_general')
      .attr({ w: 480, h: 20, x: 0, y: 80 })
      .text('Game Over')
      .css({ 'text-align': 'center' })
      .bind('KeyDown', function ()
      {
        if (this.isDown('SPACE') || this.isDown('ENTER'))
        {
          Crafty.scene('mainMenu'); //restart the fun!
        }
      });

   /*  Crafty.e('2D, DOM, Text, Keyboard, css_general')
      .attr({ w: 480, h: 20, x: 0, y: 120 })
      .text('Press SPACE to try it again')
      .css({ 'text-align': 'center' })
      .bind('KeyDown', function ()
      {
        if (this.isDown('SPACE') )
        {
          Crafty.scene('mainMenu'); //restart the fun!
        };
      }); */
      
    Crafty.audio.play('game_over');
  });
  
  Crafty.scene('win', function ()
  {
    //set-up an intro text, for while loading
    Crafty.background('black');
    Crafty.e('2D, DOM, Text, css_general')
      .attr({ w: 480, h: 20, x: 0, y: 80 })
      .text('You won!')
      .css({ 'text-align': 'center' });
    if (difficulty.casual)
    {
      Crafty.e('2D, DOM, Keyboard, Text, css_general')
        .attr({ w: 480, h: 20, x: 0, y: 120 })
        .text('Play it in HARD for new levels, magical items, and more')
        .css({ 'text-align': 'center' })
        .bind('KeyDown', function ()
        {
          if (this.isDown('SPACE') || this.isDown('ENTER'))
          {
            Crafty.scene('mainMenu'); //restart the fun!
          };
        });
    }
    else
    {

      Crafty.e('2D, DOM, Keyboard, Text, css_general')
        .attr({ w: 480, h: 20, x: 0, y: 120 })
        .text('Congratulations')
        .css({ 'text-align': 'center' })
        .bind('KeyDown', function ()
        {
          if (this.isDown('SPACE') || this.isDown('ENTER') )
          {
            Crafty.scene('mainMenu'); //restart the fun!
          };
        });
    }
      
    Crafty.audio.play('game_win');
  });
}

function loadAudioAssets()
{
  Crafty.audio.add('ouch', 'assets/sounds/32.ogg');
  Crafty.audio.add('shoot', 'assets/sounds/35.ogg');
  Crafty.audio.add('game_over', 'assets/sounds/garble1-1.ogg');
  Crafty.audio.add('zombie_die', 'assets/sounds/2.ogg');
  Crafty.audio.add('ball_hit', 'assets/sounds/15.ogg');
  Crafty.audio.add('ball_return', 'assets/sounds/16.ogg');
  Crafty.audio.add('ball_miss', 'assets/sounds/confusion.ogg');
  Crafty.audio.add('ball_win', 'assets/sounds/zap2.ogg');
  Crafty.audio.add('level_win', 'assets/sounds/heal.ogg');
  Crafty.audio.add('level_title', 'assets/sounds/32.ogg');
  Crafty.audio.add('heal', 'assets/sounds/24.ogg');
  Crafty.audio.add('lion', 'assets/sounds/4.ogg');
  Crafty.audio.add('water', 'assets/sounds/12.ogg');
  Crafty.audio.add('turtle', 'assets/sounds/7.ogg');
  Crafty.audio.add('armor', 'assets/sounds/8.ogg');
  Crafty.audio.add('alert', 'assets/sounds/39.ogg');
}

function changeBouncedCounter(amount)
{
  var bouncesRequired = map.bouncesRequired;
  if (difficulty.casual) bouncesRequired -= 10;

  if (amount === undefined) bouncedCounter++;   //default: add 1
  else bouncedCounter += amount;

  if (bouncedCounter >= bouncesRequired)
  {
    if (level < 5) playLevelEnding();
    else  playGameOver();
  }
  else if (bouncedCounter < 0)
  {
    player.trigger('Hurt');
    bouncedCounter = 0;
  }
  
  bouncedCounterDisplay.text(bouncedCounter + '/' + bouncesRequired);
}

function setupDefaultElements(level)
{
  Crafty.e('2D, DOM, lifeBg').attr({ x: 5, y: 5, z:2000 });
  lifeSprite[0] = Crafty.e('2D, DOM, lifeFg1').attr({ x: 5, y: 5, z:1900 });
  lifeSprite[1] = Crafty.e('2D, DOM, lifeFg2').attr({ x: 5+1*17, y: 5, z:1900 });
  lifeSprite[2] = Crafty.e('2D, DOM, lifeFg3').attr({ x: 5+2*17, y: 5, z:1900 });
  lifeSprite[3] = Crafty.e('2D, DOM, lifeFg4').attr({ x: 5+3*17, y: 5, z:1900 });
  lifeSprite[4] = Crafty.e('2D, DOM, lifeFg5').attr({ x: 5+4*17, y: 5, z:1900 });
  lifeSprite[5] = Crafty.e('2D, DOM, lifeFg6').attr({ x: 5+5*17, y: 5, z:1900 });

  bouncedCounterDisplay = Crafty.e('2D, DOM, Text')
    .attr({ x: 120, y: 10, w: 50, h: 20, z:2000 });

  //PLAYER
  player = Crafty.e('Player, player_sprite, 2D, DOM, Multiway, Collision, Ape, Shooter, GameManager, Blink, Hurtable, Jumper')
    .attr({ x: -100, y: 100, w: 64, h: 64, z: 500 })  //define initial position
    .multiway(4, { W: -90, S: 90, A: 180, D: 0, w: -90, s: 90, a: 180, d: 0 }) //define the keys for controlling this entity
    .collision(new Crafty.polygon
    (
      [20, 15], [40, 15],
      [40, 30], [20, 30]
    ));

  //BOSS
  boss = Crafty.e('2D, DOM, '+map.boss+'_sprite, Ape, Boss, Jumper')
    .attr({ x: stageWidth*32, y: 120, w: 64, h: 64, z: 500 , dX: -3})
    .collision(new Crafty.polygon
    (
      [20, 15], [40, 15],
      [40, 30], [20, 30]
    ));

}

function randomPositionInsideField()
{
  var origin = {x: 0, y: 0};
  
  //position INSIDE the player's field
  origin.x = Crafty.math.randomInt(0, map.playableAreaWidth)*tileSize;
  origin.y = Crafty.math.randomInt(0, stageHeight)*tileSize;

  var counter = 0;
  while (_closeToPlayer(origin) && counter < 10)   //use a counter too just to be sure it will end
  {
    origin.x = Crafty.math.randomInt(0, map.playableAreaWidth)*tileSize;
    origin.y = Crafty.math.randomInt(0, stageHeight)*tileSize;
    counter++;
  }

  return origin;
}
function _closeToPlayer(origin)
{
  var result = false;

  if ((origin.x >= player.x - tileSize) && (origin.x <= player.x + player.w + tileSize)
      && (origin.y >= player.y - tileSize) && (origin.y <= player.y + player.h + tileSize))
  {
    result = true;
  }
  return result;
}

function finishLevel()
{
  if ((difficulty.casual && level === 1) || (difficulty.casual && level === 3))   //if casual, skips levels 2 and 4
    level++;

  if(level === 5)
  {
    Crafty.scene('win');
  }
  else startLevel(level+1);
}

function startLevel(newLevel)
{
  level = newLevel;
  Crafty.scene('round');
}

function setupLevel(levelToCreate)
{
  if (levelToCreate === 1) map = map1;
  else if (levelToCreate === 2) map = map2;
  else if (levelToCreate === 3) map = map3;
  else if (levelToCreate === 4) map = map4;
  else if (levelToCreate === 5) map = map5;
  createMap();

  levelFrame = 0;
  bouncedCounter = 0;
  //if (testingMode) bouncedCounter = 19;


  setupDefaultElements(levelToCreate);
  if (difficulty.casual) bouncedCounterDisplay.text('0/' + (map.bouncesRequired - 10));
  else bouncedCounterDisplay.text('0/' + map.bouncesRequired);
  player.attr('life', 6);
}