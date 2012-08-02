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

function playMagic(magicName)
{
  var cutscene = Crafty.e('2D, DOM, Cutscene');
  var magicAnimation = null;
  var magicNumber = 0;

  if (magicName === 'water') magicNumber = 1;
  else if (magicName === 'turtle') magicNumber = 2;

  cutscene
    .delay(10)
    .addScene({'action': function()
    {
      if (magicName === 'water')
      {
        magicAnimation = Crafty.e("2D, DOM, magic, SpriteAnimation")
          .attr({x:boss.x-28, y:boss.y-28, z: 2001})
          .animate('magic',    0, magicNumber, 15)
          .animate('magic', 20, 0);
      }
      else
      {
        magicAnimation = Crafty.e("2D, DOM, magic, SpriteAnimation")
          //.attr({x:70, y:70, z: 2001})
          .attr({x:player.x-28, y:player.y-28, z: 2001})
          .animate('magic',    0, magicNumber, 15)
          .animate('magic', 20, 0);
      }

    } })
    .delay(10)
    .addScene({'action': function()
    {
       Crafty.audio.play(magicName);
    } })
    .delay(40)
    .addScene({'action': function()
    {
      magicAnimation.destroy();

      if (magicName === 'lion')  destroyAllEnemies();
      else if (magicName === 'water')
      {
        if (map.boss === 'robot') changeBouncedCounter(7);      //water is bad for robots...
        else changeBouncedCounter(5);
      }
      else if (magicName === 'turtle') player.trigger('Hurt', true);
    } })

}


/*********************
 *   LEVEL 1         *
 *********************/
function playLevel1Intro()
{
  var princess = null;
  var cutscene = Crafty.e('2D, DOM, Cutscene');
  var tempEntity = new Array();

  cutscene
  .addScene({'action': function()
    {
      Crafty.background('black');

      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 480, h: 120, x: 80, y: 80 })
        .text('Level')
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);

    } })
  .delay(20)
  .addScene({'action': function()
    {
      Crafty.background('black');
      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 280, h: 120, x: 280, y: 80 })
        .text(level + ' / '+numberOfLevels)
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);
    } })
  .delay(80)
  .addScene({'action': function ()
  {
     setupLevel(level);

     princess = Crafty.e('2D, DOM, princess_sprite, Ape, Jumper')
      .attr({ x: stageWidth*32, y: 50, w: 64, h: 64, z: 500});
     princess.animate('walk_left', 20, -1);
     princess.x = stageWidth*32;

     player.animate('walk_right', 20, -1);
     player.x = -100;
     tempEntity[1].destroy();
     tempEntity[0].destroy();
     
     fadeIn();
  } })
  .addScene({
    'action': function (animation)
     {
       princess.x += -1;
       player.x += 1;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((princess.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.stop();
      player.stop();
      
      cutscene.enableSkipping();
    } })
  .addScene({'action': function()
    {

      showDialog('I hope you don\'t mind my brothers, they are a bit eccentric...', 180, 25);
    } })
  .delay(250)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('It\'s ok, I\'m not judgemental...', 70, 70);
    } })
  .delay(200)
  .addScene({'action': function()
    {
      princess.faceDown();
      hideDialog();
    } })
  .addScene({'action': function ()
  {
     boss.animate('walk_left', 20, -1);
     boss.x = stageWidth*32;

  } })
  .addScene({
    'action': function (animation)
     {
       boss.x += -1;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((boss.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.faceLeft();
      boss.stop();
    } })
  .addScene({'action': function()
    {
      showDialog('This is Baldric, my brother!', 180, 25);
    } })
  .delay(210)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog(' ... ', 70, 70);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('I\'ll let you two play. Have fun!', 180, 25);
    } })
  .delay(40)
  .addScene({'action': function()
    {
      princess.trigger('Jump');
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      princess.animate('walk_right', 20, -1);
    } })
  .addScene({
    'action': function (animation)
     {
       princess.x += 2;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return (princess.x > (stageWidth + 1)*tileSize );
     },
    'type': 'SELF_STOP'
  });

  if (level === 1)
  {
    if (!testingMode)
      playLevel1Interlude(cutscene);
  }

  cutscene
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .delay(20)
  .addScene({'action': function (animation)
  {
     hideDialog();
     princess.destroy();
     boss.x = 360;
     boss.faceLeft();
     player.faceRight();

     ball = Crafty.e('2D, DOM, orange, Collision, Ball')
    .attr({ x: 380, y: 120, z:1900 })
    .collision(new Crafty.polygon
    (
      [10, 10], [25, 10],
      [25, 20], [10, 20]
    ));

  } });

}


/*********************
 *   LEVEL 2         *
 *********************/
function playLevel2Intro()
{
  var princess = null;
  var cutscene = Crafty.e('2D, DOM, Cutscene');
  var tempEntity = new Array();

  cutscene
  .addScene({'action': function()
    {
      Crafty.background('black');

      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 480, h: 120, x: 80, y: 80 })
        .text('Level')
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);

    } })
  .delay(20)
  .addScene({'action': function()
    {
      Crafty.background('black');
      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 280, h: 120, x: 280, y: 80 })
        .text(level + ' / '+numberOfLevels)
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);
    } })
  .delay(80)
  .addScene({'action': function ()
  {
     setupLevel(level);

     princess = Crafty.e('2D, DOM, princess_sprite, Ape, Jumper')
      .attr({ x: stageWidth*32, y: 50, w: 64, h: 64, z: 500});
     princess.animate('walk_left', 20, -1);
     princess.x = stageWidth*32;

     player.animate('walk_right', 20, -1);
     player.x = -100;
     tempEntity[1].destroy();
     tempEntity[0].destroy();
     
     fadeIn();
  } })
  .addScene({
    'action': function (animation)
     {
       princess.x += -1;
       player.x += 1;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((princess.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.stop();
      player.stop();
      
      cutscene.enableSkipping();
    } })
  .addScene({'action': function()
    {
      showDialog('I almost got killed!! What\'s with all these monsters around here??!?!! ', 70, 70);
    } })
  .delay(220)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Hey, they\'re not "monsters", they are just our neighbors', 180, 25);
    } })
  .delay(250)
  .addScene({'action': function()
    {
      hideDialog();
      player.faceDown();
      showDialog(' ... ', 70, 70);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      player.faceRight();
      showDialog('Anyway, I\'m gonna let you play with my other brother. Good luck!', 180, 25);
    } })
  .delay(230)
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .addScene({'action': function ()
  {
     princess.animate('walk_right', 20, -1);
     boss.animate('walk_left', 20, -1);
     boss.x = stageWidth*32;

  } })
  .addScene({
    'action': function (animation)
     {
       boss.x += -1;
       princess.x += 2;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((boss.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.stop();
      boss.stop();
    } })
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .delay(20)
  .addScene({'action': function (animation)
  {
     hideDialog();
     princess.destroy();
     boss.x = 360;
     boss.faceLeft();
     player.faceRight();
     
     ball = Crafty.e('2D, DOM, orange, Collision, Ball')
    .attr({ x: 380, y: 120, z:1900 })
    .collision(new Crafty.polygon
    (
      [10, 10], [25, 10],
      [25, 20], [10, 20]
    ));

  } });

}




/*********************
 *   LEVEL 3         *
 *********************/
function playLevel3Intro()
{
  var cutscene = Crafty.e('2D, DOM, Cutscene');
  var tempEntity = new Array();

  cutscene
  .addScene({'action': function()
    {
      Crafty.background('black');

      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 480, h: 120, x: 80, y: 80 })
        .text('Level')
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);

    } })
  .delay(20)
  .addScene({'action': function()
    {
      Crafty.background('black');
      var thisLevel = 3;
      if (difficulty.casual) thisLevel = 2;
      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 280, h: 120, x: 280, y: 80 })
        .text(thisLevel + ' / '+numberOfLevels)
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);
    } })
  .delay(80)
  .addScene({'action': function ()
  {
     setupLevel(level);

     /* boss = Crafty.e('2D, DOM, princess_sprite, Ape, Jumper')
      .attr({ x: stageWidth*32, y: 50, w: 64, h: 64, z: 500}); */
     boss.animate('walk_left', 20, -1);
     boss.x = stageWidth*32;

     player.animate('walk_right', 20, -1);
     player.x = -100;
     tempEntity[1].destroy();
     tempEntity[0].destroy();
     
     fadeIn();
  } })
  .addScene({
    'action': function (animation)
     {
       boss.x += -1;
       player.x += 1;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((boss.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      boss.stop();
      player.stop();
      cutscene.enableSkipping();
    } })
  .addScene({'action': function()
    {
      showDialog('Now it\'s my turn to have fun. Let\'s play!', 180, 75);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Great!', 70, 70);
    } })
  .delay(160)
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .delay(20)
  .addScene({'action': function (animation)
  {
     hideDialog();
     ball = Crafty.e('2D, DOM, orange, Collision, Ball')
    .attr({ x: 380, y: 120, z:1900 })
    .collision(new Crafty.polygon
    (
      [10, 10], [25, 10],
      [25, 20], [10, 20]
    ));

  } });

}



/*********************
 *   LEVEL 4         *
 *********************/
function playLevel4Intro()
{
  var princess = null;
  var cutscene = Crafty.e('2D, DOM, Cutscene');
  var tempEntity = new Array();

  cutscene
  .addScene({'action': function()
    {
      Crafty.background('black');

      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 480, h: 120, x: 80, y: 80 })
        .text('Level')
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);

    } })
  .delay(20)
  .addScene({'action': function()
    {
      Crafty.background('black');
      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 280, h: 120, x: 280, y: 80 })
        .text(level + ' / '+numberOfLevels)
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);
    } })
  .delay(80)
  .addScene({'action': function ()
  {
     setupLevel(level);

     princess = Crafty.e('2D, DOM, princess_sprite, Ape, Jumper')
      .attr({ x: stageWidth*32, y: 50, w: 64, h: 64, z: 500});
     princess.animate('walk_left', 20, -1);
     princess.x = stageWidth*32;

     player.animate('walk_right', 20, -1);
     player.x = -100;
     tempEntity[1].destroy();
     tempEntity[0].destroy();
     
     fadeIn();
  } })
  .addScene({
    'action': function (animation)
     {
       princess.x += -1;
       player.x += 1;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((princess.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.stop();
      player.stop();
      cutscene.enableSkipping();
    } })
  .addScene({'action': function()
    {
      showDialog('Hey, why are we playing with an orange?', 70, 70);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Ahn, I just couldn\'t find a ball anywhere, so I took the first rounded thing I saw', 180, 25);
    } })
  .delay(270)
  .addScene({'action': function()
    {
      hideDialog();
      player.faceDown();
      showDialog(' ... ', 70, 70);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      player.faceRight();
      showDialog('Well, I\'ll let you play with my adopted brother. See you!', 180, 25);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .addScene({'action': function ()
  {
     princess.animate('walk_right', 20, -1);
     boss.animate('walk_left', 20, -1);
     boss.x = stageWidth*32;
     hideDialog();
  } })
  .addScene({
    'action': function (animation)
     {
       boss.x += -1;
       princess.x += 2;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((boss.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.stop();
      boss.stop();
    } })
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .delay(20)
  .addScene({'action': function (animation)
  {
     hideDialog();
     princess.destroy();
     boss.x = 360;
     boss.faceLeft();
     player.faceRight();

     ball = Crafty.e('2D, DOM, orange, Collision, Ball')
    .attr({ x: 380, y: 120, z:1900 })
    .collision(new Crafty.polygon
    (
      [10, 10], [25, 10],
      [25, 20], [10, 20]
    ));

  } });

}





/*********************
 *   LEVEL 5         *
 *********************/
function playLevel5Intro()
{
  var princess = null;
  var cutscene = Crafty.e('2D, DOM, Cutscene');
  var tempEntity = new Array();

  cutscene
  .addScene({'action': function()
    {
      Crafty.background('black');

      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 480, h: 120, x: 80, y: 80 })
        .text('Level')
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);

    } })
  .delay(20)
  .addScene({'action': function()
    {
      Crafty.background('black');
      var thisLevel = 5;
      if (difficulty.casual) thisLevel = 3;
      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 280, h: 120, x: 280, y: 80 })
        .text(thisLevel + ' / '+numberOfLevels)
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);
    } })
  .delay(80)
  .addScene({'action': function ()
  {
     setupLevel(level);

     princess = Crafty.e('2D, DOM, princess_sprite, Ape, Jumper')
      .attr({ x: stageWidth*32, y: 50, w: 64, h: 64, z: 500});
     princess.animate('walk_left', 20, -1);
     princess.x = stageWidth*32;

     player.animate('walk_right', 20, -1);
     player.x = -100;
     tempEntity[1].destroy();
     tempEntity[0].destroy();

     fadeIn();
  } })
  .addScene({
    'action': function (animation)
     {
       princess.x += -1;
       player.x += 1;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((princess.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.stop();
      player.stop();
      cutscene.enableSkipping();
    } })
  .addScene({'action': function()
    {
      player.trigger('Jump');
      showDialog('What\'s that? Is that lava?! Do you have LAVA in your garden??!?!', 70, 70);
    } })
  .delay(200)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Of course we do, don\'t you? It\'s great for the winter', 180, 25);
    } })
  .delay(250)
  .addScene({'action': function()
    {
      hideDialog();
      player.faceDown();
      showDialog(' ... ', 70, 70);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      player.faceRight();
      showDialog('Anyhow, it\'s getting late, so this is gonna be our last match, ok?', 180, 25);
    } })
  .delay(250)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Awwww... ok, then', 70, 70);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .addScene({'action': function ()
  {
     princess.animate('walk_right', 20, -1);
     boss.animate('walk_left', 20, -1);
     boss.x = stageWidth*32;
     hideDialog();
  } })
  .addScene({
    'action': function (animation)
     {
       boss.x += -1;
       princess.x += 2;
       //if (testingMode) { princess.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((boss.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.stop();
      boss.stop();
    } })
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .delay(20)
  .addScene({'action': function (animation)
  {
     hideDialog();
     princess.destroy();
     boss.x = 360;
     boss.faceLeft();
     player.faceRight();

     ball = Crafty.e('2D, DOM, orange, Collision, Ball')
    .attr({ x: 380, y: 120, z:1900 })
    .collision(new Crafty.polygon
    (
      [10, 10], [25, 10],
      [25, 20], [10, 20]
    ));

  } });

}



/*********************
 *   GAME OVER         *
 *********************/
function playGameOver()
{
  var princess = null;
  
   var maskman = Crafty.e('2D, DOM, maskman_sprite, Ape, Jumper')
     .attr({ x: 200+300, y: 160, w: 64, h: 64, z: 502});
   var baldric = Crafty.e('2D, DOM, baldric_sprite, Ape, Jumper')
    .attr({ x: 222+300, y: 180, w: 64, h: 64, z: 503});
   var robot = Crafty.e('2D, DOM, robot_sprite, Ape, Jumper')
    .attr({ x: 175+300, y: 180, w: 64, h: 64, z: 505});
   var cup = Crafty.e('2D, DOM, cup, Jumper')
    .attr({ x: 215+300, y: 170, w: 64, h: 64, z: 504});


  var cutscene = Crafty.e('2D, DOM, Cutscene');
  var tempEntity = new Array();

  cutscene
  .delay(30)
  .addScene({'action': function ()
  {
     Crafty('enemy').destroy();
     Crafty('Life').destroy();
     ball.destroy();

     princess = Crafty.e('2D, DOM, princess_sprite, Ape, Jumper, Boss')
      .attr({ x: stageWidth*32, y: 50, w: 64, h: 64, z: 500});
     princess.animate('walk_left', 20, -1);
     princess.x = stageWidth*32;

     player.stop();
     boss.stop();
     player.faceRight();
     boss.faceLeft();
  } })
  .addScene({
    'action': function (animation)
     {
       princess.x += -1;
     },
    'end': function (animation)
     {
       return ((princess.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      princess.stop();
      player.stop();
      cutscene.enableSkipping();
    } })
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Wow, you\'re very good!', 180, 25);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      boss.faceDown();
      showDialog('Indeed, we had tons of fun playing with you !', boss.x - 185, boss.y-40);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      player.faceRight();
      boss.faceLeft();
      showDialog('Well done!!', 180, 25);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Thanks! This was really something!', player.x+55, player.y-30);
      player.trigger('Jump');
    } })
  .delay(200)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Well, I should be going now...', player.x+55, player.y-30);
    } })
  .delay(200)
  .addScene({'action': function()
    {
      hideDialog();
      showDialog('Wait, before you go, please accept this gift from us', 180, 25);
    } })
  .delay(180)
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .addScene({'action': function ()
  {
      maskman.animate('walk_down', 20, -1);
      baldric.animate('walk_left', 20, -1);
      robot.animate('walk_left', 20, -1);
      princess.faceDown();
      
      boss.trigger('CatchTheBall', {x: 420, y: 130});
  } })
  .addScene({
    'action': function (animation)
     {
       maskman.x += -1;
       baldric.x += -1;
       robot.x += -1;
       cup.x += -1;
       //princess.x += 2;
     },
    'end': function (animation)
     {
       return ((maskman.x <= 360) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function (animation)
  {

     princess.faceLeft();//princess.trigger('CatchTheBall', {x: 380, y: 100});

     maskman.stop();
     baldric.stop();
     robot.stop();

     Crafty.audio.play('ball_win');
  } })
  .delay(200)
  .addScene({'action': function (animation)
  {
    fadeOut();
  } })
  .delay(50)
  .addScene({'action': function (animation)
  {
    finishLevel();
  } });

}


/*********************
 *GENERIC LEVEL INTRO*
 *********************/
function playLevelIntro(level)
{
  var cutscene = Crafty.e('2D, DOM, Cutscene');
  var tempEntity = new Array();

  cutscene
  .addScene({'action': function()
    {
      Crafty.background('black');

      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 480, h: 120, x: 80, y: 80 })
        .text('Level')
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);

    } })
  .delay(20)
  .addScene({'action': function()
    {
      Crafty.background('black');
      tempEntity.push(
      Crafty.e('2D, DOM, Text, css_levelTitle')
        .attr({ w: 280, h: 120, x: 280, y: 80 })
        .text(level + ' / '+numberOfLevels)
        .css({ 'font-family': 'Creepster' })
        .css({ 'font-size': '90PX' })
        .css({ 'color': 'white' }));
      Crafty.audio.play('level_title', 1, 0.5);
    } })
  .delay(80)
  .addScene({'action': function ()
  {
     setupLevel(level);

     boss.animate('walk_left', 20, -1);
     boss.x = stageWidth*32;

     player.animate('walk_right', 20, -1);
     player.x = -100;
     tempEntity[1].destroy();
     tempEntity[0].destroy();

     fadeIn();
  } })
  .addScene({
    'action': function (animation)
     {
       boss.x += -1;
       player.x += 1;
       if (testingMode) { boss.x += -5; player.x += 5;};
     },
    'end': function (animation)
     {
       return ((boss.x <= 320) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function()
    {
      boss.stop();
      player.stop();
    } });

  if (level === 1)
  {
    if (!testingMode) playLevel1Interlude(cutscene);
  }

  cutscene
  .addScene({'action': function()
    {
      hideDialog();
    } })
  .delay(20)
  .addScene({'action': function (animation)
  {
     hideDialog();
     ball = Crafty.e('2D, DOM, orange, Collision, Ball')
    .attr({ x: 320, y: 120, z:1900 })
    .collision(new Crafty.polygon
    (
      [10, 10], [25, 10],
      [25, 20], [10, 20]
    ));

  } });

}





//explains the main commands
function playLevel1Interlude(cutscene)
{
  cutscene.addScene({'action': function()
  {
    player.stop();
    boss.stop();
    showDialog('Use W, A, S and D to move', 180, 90);
  } })
  .delay(250)
  .addScene({'action': function()
  {
    hideDialog();
  } })
  .delay(20)
  .addScene({'action': function()
  {
    hideDialog();
    showDialog('Press SPACE to jump and hit the ball with your HEAD', 180, 90);
  } })
  .delay(250)
}

//explains the shooting commands
function playLevel1Interlude2()
{
  Crafty.e('2D, DOM, Cutscene')
  .addScene({'action': function()
  {
    player.stop();
    boss.stop();
    showDialog('Use the arrow keys to shoot those zombies!', 60, 40);
  } })
  .delay(200)
  .addScene({'action': function()
  {
    hideDialog();
  } })
  .delay(20)
}

function playLevelEnding()
{
  var cutscene = Crafty.e('2D, DOM, Cutscene');

  cutscene.addScene
  ({
    'action': function ()
     {
       Crafty.audio.play('level_win');

       //boss.animate('walk_up', 20, -1);
       boss.faceDown();
       player.animate('walk_left', 20, -1); fadeOut();
     }
  })
  .addScene({
    'action': function (animation)
     {
       player.x += -1;
       //boss.y   += -1;
     },
    'end': function (animation)
     {
       return ((player.x <= -32) );
     },
    'type': 'SELF_STOP'
  })
  .addScene
  ({
    'action': function (animation)
     {
       finishLevel();
     },
  });

}


/**************************
  the CUTSCENE component
  there are 2 types of scene:
    ONE_OFF - just the action method (no type nor end). Optionally, it may have a trigger. This scene happens only once
    SELF_STOP - the scene object contains an 'end' method, which decides whether this scene has finished

    additionally, a delay between scenes can be requested with the 'delay' method
***************************/
Crafty.c('Cutscene',
{
  addScene: function(scene)
  {
    this.storyScene.push(scene);

    return this;
  },
  delay: function(x)
  {
    this.addScene({type:'START_DELAY', amount:x});

    return this;
  },
  enableSkipping: function()
  {
    this.requires('Keyboard')
      .bind('KeyDown', function ()
      {
        if (this.isDown('SPACE'))
        {
          //this._skip();
          if (this.storyScene[this.currentScene].type === 'DELAY'
              && this.delayFrame > Crafty.frame() + 10
              && this.currentScene < this.storyScene.length - 1)
              //this.skip = true;
              this.currentScene++;

        }
      });

    return this;
  },
  _skip: function()
  {
    //this.currentScene = this.storyScene.length - 1;
    //if (this.storyScene[this.currentScene].type === 'START_DELAY')
    this.skip = true;

    return this;
  },
  init: function()
  {
    storyMode = true;

    this.attr({startFrame: Crafty.frame(), storyScene: new Array(), currentScene: 0,
               delayFrame: 0, skip: false})
    .bind('EnterFrame', function (frame)
    {
      if (this.currentScene < this.storyScene.length)   //if there still are scenes to play...
      {
          if (this.storyScene[this.currentScene].type === 'START_DELAY')
          {
              this.delayFrame = Crafty.frame() + this.storyScene[this.currentScene].amount;
              this.storyScene[this.currentScene].type = 'DELAY';
          }
          if (this.storyScene[this.currentScene].type === 'DELAY')
          {
           /*  if (this.skip )
            {
              this.currentScene++;
              this.skip = false;
            } */
            if (this.delayFrame <= Crafty.frame())
            {
              this.currentScene++;
            }
          }
          else if (this.storyScene[this.currentScene].trigger)
          {
            if (this.storyScene[this.currentScene].trigger())
            {
              this.storyScene[this.currentScene].action();
              if (!this.storyScene[this.currentScene].type ) this.currentScene++;  //this means it's a one-off frame
            }
          }
          else
          {
            this.storyScene[this.currentScene].action(this);

            if (!this.storyScene[this.currentScene].type ) this.currentScene++;  //this means it's a one-off frame
            else if (this.storyScene[this.currentScene].type === 'SELF_STOP')
            {
              if (this.storyScene[this.currentScene].end()) this.currentScene++;
            }
          }

      }
      else
      {
        //finish the cutscene


        if (Crafty('Cutscene').length <= 1)     //this prevents from unsetting story mode if there are other cutscenes playing
        {
          if(boss) boss.stop();

          if (player)
          {
            player.stop();

            /* // in order to prevent the user from moving the player character, at first I used to use the disableControl and enableControl methods
            // however, this showed to be buggy - it the user was pressing some keys when the control was enabled, the movement
            // would go crazy
            player.enableControl();   //known bug: if the player holds two keys or more, things go crazy
            Crafty.keydown = {};      //this prevent the problem from happenin when it's just one directional key (wasd) */
          }
          storyMode = false;
        }

        this.destroy();
      }

    });
    return this;
}});

var _fadeEnt = null;
function _getFade()
{
  if (_fadeEnt != null) _fadeEnt.destroy();

  _fadeEnt = Crafty.e("2D, DOM, Color")
    .color('black')
    .attr({w: stageWidth*32, h: stageHeight*32, z: 2000})
    .attr({alpha: 1.0, x: 0, y: 0});

  return _fadeEnt;
}

function fadeIn() {_getFade().alpha = 1; _fade(-0.1).addScene({'action': function (){_fadeEnt.alpha=0;}}); }
function fadeOut() {_getFade().alpha = 0; _fade(0.1).addScene({'action': function (){_fadeEnt.alpha=1;}}); }
function _fade(fadeStep)
{
  var cutscene = Crafty.e('2D, DOM, Cutscene');
  for (var i = 0; i <= 10; i++)
  {
    cutscene
      .addScene({'action': function ()
      {
        _fadeEnt.alpha += fadeStep;
      } })
      .delay(3);
  };

  return cutscene;
}