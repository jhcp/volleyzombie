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
 
var introBeach =
{
  'images':
  {
    'baseTile': 'sand',
    'waterTile': 'water_sand'
  },
  'tiles':
  [
    {'x': 9, 'y': 0, 'sprite': '_inset_top_right', 'type': 'OBSTACLE'},

    {'x': 10, 'y': 0, 'sprite': '_top_right', 'type': 'OBSTACLE'},
    {'x': 10, 'y': 1, 'sprite': '_center_right', 'type': 'OBSTACLE'},
    {'x': 10, 'y': 2, 'sprite': '_center_right', 'type': 'OBSTACLE'},
    {'x': 10, 'y': 3, 'sprite': '_center_right', 'type': 'OBSTACLE'},
    {'x': 10, 'y': 4, 'sprite': '_center_right', 'type': 'OBSTACLE'},
    {'x': 10, 'y': 5, 'sprite': '_center_right', 'type': 'OBSTACLE'},
    {'x': 10, 'y': 6, 'sprite': '_inset_top_right', 'type': 'OBSTACLE'},
    {'x': 10, 'y': 7, 'sprite': '_center_center', 'type': 'OBSTACLE'},
    {'x': 10, 'y': 8, 'sprite': '_center_center', 'type': 'OBSTACLE'},

    //OCEAN

    {'x': 11, 'y': 0, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 1, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 2, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 3, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 4, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 5, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 6, 'sprite': 'water_sand_top_right', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 7, 'sprite': 'water_sand_center_right', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 8, 'sprite': 'water_sand_center_right', 'type': 'FULL_NAME'},

    {'x': 12, 'y': 0, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 12, 'y': 1, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 12, 'y': 2, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 12, 'y': 3, 'sprite': 'water_center_center_4', 'type': 'FULL_NAME'},
    {'x': 12, 'y': 4, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 12, 'y': 5, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 12, 'y': 6, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 12, 'y': 7, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 12, 'y': 8, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},

    {'x': 13, 'y': 0, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 1, 'sprite': 'water_center_center_2', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 2, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 3, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 4, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 5, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 6, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 7, 'sprite': 'water_center_center_3', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 8, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},

    {'x': 14, 'y': 0, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 1, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 2, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 3, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 4, 'sprite': 'water_center_center_4', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 5, 'sprite': 'water_center_center_2', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 6, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 7, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 8, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    
    {'x': 10, 'y': 2, 'sprite': 'sea_star', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 1, 'sprite': 'concha', 'type': 'FULL_NAME'},

    {'x': 9, 'y': 5, 'sprite': 'palm_tree1', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 6, 'sprite': 'palm_tree2', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 7, 'sprite': 'palm_tree3', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 8, 'sprite': 'palm_tree4', 'type': 'FULL_NAME'},
    {'x': 10, 'y': 5, 'sprite': 'palm_tree5', 'type': 'FULL_NAME'},
    {'x': 10, 'y': 6, 'sprite': 'palm_tree6', 'type': 'FULL_NAME'},
    {'x': 10, 'y': 7, 'sprite': 'palm_tree7', 'type': 'FULL_NAME'},
    {'x': 10, 'y': 8, 'sprite': 'palm_tree8', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 5, 'sprite': 'palm_tree9', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 6, 'sprite': 'palm_tree10', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 7, 'sprite': 'palm_tree11', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 8, 'sprite': 'palm_tree12', 'type': 'FULL_NAME'},
  ],
};

function playIntroScene1()
{

  var cutscene = Crafty.e('2D, DOM, Cutscene');
  cutscene
  .enableSkipping()
  .addScene({'action': function ()
   {
     player.x = -64;
     player.animate('walk_right', 20, 20);
     fadeIn();
   } })
  .addScene({
    'action': function (animation)
     {
       player.x += 1;
     },
    'end': function (animation)
     {
       return ((player.x >= 70) );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function ()
  {
       player.stop().animate('walk_down', 20, 1).stop();
  } })
  .delay(10)
  .addScene({'action': function ()
  {
       showDialog('Ah, nothing like spending some time on the beach after work...', 130, 160, 200);
  } })
  .delay(250)
  .addScene({'action': function ()
  {
        hideDialog();
        boss.animate('walk_down', 20, -1);
  } })
  .addScene({
    'action': function (animation)
     {
       boss.y += 1;
     },
    'end': function (animation)
     {
       return (boss.y >= 40 );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function ()
  {
       player.faceUp();
       boss.stop();
       showDialog('Hi! Do you like volleyball?', 120, 20);
  } })
  .delay(200)
  .addScene({'action': function ()
  {
       hideDialog();
  } })
  .delay(10)
  .addScene({'action': function ()
  {
       player.faceLeft();
  } })
  .delay(25)
  .addScene({'action': function ()
  {
       player.faceRight();
  } })
  .delay(25)
  .addScene({'action': function ()
  {
       player.faceUp();
  } })
  .delay(25)
  .addScene({'action': function ()
  {
       showDialog('Me?', 130, 180);
       player.trigger('Jump');
  } })
  .delay(120)
  .addScene({'action': function ()
  {
       hideDialog();
       player.faceUp();
       boss.stop();
       showDialog('Yes, do you like volleyball?', 120, 20);
  } })
  .delay(220)
  .addScene({'action': function ()
  {
       hideDialog();
  } })
  .delay(20)
  .addScene({'action': function ()
  {
       showDialog('Well, yes...', 130, 180);
  } })
  .delay(130)
  .addScene({'action': function ()
  {
       hideDialog();
       showDialog('Do you want to play with me and my brothers? You look so strong, athletic... ', 120, 20);

  } })
  .delay(270)
  .addScene({'action': function ()
  {
       hideDialog();
       player.faceDown();
  } })
  .delay(40)
  .addScene({'action': function ()
  {
       player.faceUp();
       showDialog('Ahn... thanks... yes... sure! I guess... ', 130, 180);
  } })
  .delay(200)
  .addScene({'action': function ()
  {
       hideDialog();
       boss.trigger('Jump');
       showDialog('Great, let\'s go!!', 120, 20);
  } })
  .delay(40)
  .addScene({'action': function ()
  {
       boss.trigger('Jump');
  } })
  .delay(160)
  .addScene({'action': function ()
  {
        hideDialog();
        boss.animate('walk_up', 20, -1);
  } })
  .addScene(
  {
    'action': function (animation)
     {
       boss.y += -1;
     },
    'end': function (animation)
     {
       return (boss.y <= -64 );
     },
    'type': 'SELF_STOP'
  })
  .addScene({'action': function ()
  {
       hideDialog();
       player.faceRight();
  } })
  .delay(40)
  .addScene({'action': function ()
  {
       player.faceUp();
  } })
  .delay(30)
  .addScene({'action': function ()
  {
       player.animate('walk_up', 2, -1);
  } })
  .addScene(
  {
    'action': function (animation)
     {
       player.y += -4;
       if (player.y === 0) fadeOut();
     },
    'end': function (animation)
     {
       return (player.y <= -64 );
     },
    'type': 'SELF_STOP'
  })
  .delay(20)
  .addScene({'action': function ()
  {
       Crafty.scene('mainMenu');
  } })
  ;

  //if(testingMode) cutscene._skip();
}

var dialog = null;
/* function showDialog(msg, x, y)
{
  Crafty.e('2D, DOM, dialogBg, dialog_top_left')
    .attr({ x: x, y: y, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_top_center')
    .attr({ x: x + tileSize, y: y, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_top_center')
    .attr({ x: x + tileSize*2, y: y, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_top_center')
    .attr({ x: x + tileSize*3, y: y, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_top_center')
    .attr({ x: x + tileSize*4, y: y, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_top_right')
    .attr({ x: x + tileSize*5, y: y, z:2000 });

  Crafty.e('2D, DOM, dialogBg, dialog_bottom_left')
    .attr({ x: x, y: y+tileSize, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_bottom_center')
    .attr({ x: x + tileSize, y: y+tileSize, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_bottom_center')
    .attr({ x: x + tileSize*2, y: y+tileSize, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_bottom_center')
    .attr({ x: x + tileSize*3, y: y+tileSize, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_bottom_center')
    .attr({ x: x + tileSize*4, y: y+tileSize, z:2000 });
  Crafty.e('2D, DOM, dialogBg, dialog_bottom_right')
    .attr({ x: x + tileSize*5, y: y+tileSize, z:2000 });

  dialog = Crafty.e('2D, DOM, Text, css_dialog')
    .attr({ w: 170, h: 120, x: x+10, y: y+15, z:2001 })
    .text(msg)
    .css({ 'class': 'dialog' });
}
function hideDialog()
{
  if (dialog) dialog.destroy();
  Crafty('dialogBg').destroy();
} */



function showDialog(msg, x, y)
{
  if (y < 10) y = 10; 

  var cutsceneDialog = Crafty.e('2D, DOM, Cutscene');
  cutsceneDialog
  .addScene({'action': function ()
   {
     Crafty.e('2D, DOM, dialogBg, dialog_closed_left, dialogBg1')
    .attr({ x: x, y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed_center, dialogBg1')
        .attr({ x: x + tileSize, y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed_center, dialogBg1')
        .attr({ x: x + tileSize*2, y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed_center, dialogBg1')
        .attr({ x: x + tileSize*3, y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed_center, dialogBg1')
        .attr({ x: x + tileSize*4, y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed_right, dialogBg1')
        .attr({ x: x + tileSize*5, y: y+tileSize/2, z:2000 });

   } })
   .delay(2)
  .addScene({'action': function ()
   {
      scroll2 = Crafty.e('2D, DOM, dialogBg, dialog_closed2_left, dialogBg2')
       .attr({ x: x,               y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed2_center, dialogBg2')
        .attr({ x: x + tileSize,   y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed2_center, dialogBg2')
        .attr({ x: x + tileSize*2, y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed2_center, dialogBg2')
        .attr({ x: x + tileSize*3, y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed2_center, dialogBg2')
        .attr({ x: x + tileSize*4, y: y+tileSize/2, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_closed2_right, dialogBg2')
        .attr({ x: x + tileSize*5, y: y+tileSize/2, z:2000 });


      Crafty('dialogBg1').each(function() { this.visible = false; });
   } })
   .delay(2)
  .addScene({'action': function ()
  {
      Crafty.e('2D, DOM, dialogBg, dialog_top_left, dialogBg3')
        .attr({ x: x, y: y, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_top_center, dialogBg3')
        .attr({ x: x + tileSize, y: y, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_top_center, dialogBg3')
        .attr({ x: x + tileSize*2, y: y, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_top_center, dialogBg3')
        .attr({ x: x + tileSize*3, y: y, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_top_center, dialogBg3')
        .attr({ x: x + tileSize*4, y: y, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_top_right, dialogBg3')
        .attr({ x: x + tileSize*5, y: y, z:2000 });
    
      Crafty.e('2D, DOM, dialogBg, dialog_bottom_left, dialogBg3')
        .attr({ x: x, y: y+tileSize, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_bottom_center, dialogBg3')
        .attr({ x: x + tileSize, y: y+tileSize, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_bottom_center, dialogBg3')
        .attr({ x: x + tileSize*2, y: y+tileSize, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_bottom_center, dialogBg3')
        .attr({ x: x + tileSize*3, y: y+tileSize, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_bottom_center, dialogBg3')
        .attr({ x: x + tileSize*4, y: y+tileSize, z:2000 });
      Crafty.e('2D, DOM, dialogBg, dialog_bottom_right, dialogBg3')
        .attr({ x: x + tileSize*5, y: y+tileSize, z:2000 });
        
      Crafty('dialogBg2').each(function() { this.visible = false; });
        
      dialog = Crafty.e('2D, DOM, Text, css_dialog, dialog')
        .attr({ w: 170, h: 120, x: x+10, y: y+15, z:2001 })
        .text(msg)
  } })
  ;

}
function hideDialog()
{
  //if (dialog)
  {
    var cutsceneDialog = Crafty.e('2D, DOM, Cutscene');
    cutsceneDialog
    .addScene({'action': function ()
    {
      //dialog.destroy();
      Crafty('dialog').destroy();
      Crafty('dialogBg2').each(function() { this.visible = true; });
      Crafty('dialogBg3').each(function() { this.visible = false; });
    } })
   .delay(2)
   .addScene({'action': function ()
    {
      Crafty('dialogBg1').each(function() { this.visible = true; });
      Crafty('dialogBg2').each(function() { this.visible = false; });
    } })
    .delay(2)
   .addScene({'action': function ()
    {
      Crafty('dialogBg1').each(function() { this.visible = false; });
      Crafty('dialogBg').destroy();
    } })

  }


}