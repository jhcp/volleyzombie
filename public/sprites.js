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

/*
  modifications:
    - transparency added to CPhillips--whitheredtree.png
    - hp bar extracted from bar_hp_mp.xcf
    - glitch corrected in mage_walking_poses_sheet_copy
    - composition of the layers in male_spritesheet.xcf to create workerman.png
    - composition of BODY_skeleton.png with the accessories provided by Dethe Elza
    - merge of magic_firelion_big.png, magic_torrentacle.png and turtleshell_front.png (by Daniel Eddeland) to make magic.png

*/

function defineImages()
{
  images =
  {
    'baseTiles':
    [
      {'name': 'dirt', 'file': 'assets/images/ground/dirt.png'},
      {'name': 'dirt_night', 'file': 'assets/images/ground/dirt_night.png'},
      {'name': 'grass', 'file': 'assets/images/ground/grass.png'},
      {'name': 'grass_night', 'file': 'assets/images/ground/grass_night.png'},
      {'name': 'sand', 'file': 'assets/images/ground/sand.png'},
      {'name': 'lava_rock', 'file': 'assets/images/ground/lavarock.png'},
    ],
    'waterTiles':
    [
      {'name': 'water', 'file': 'assets/images/ground/water.png'},
      {'name': 'water_lava', 'file': 'assets/images/ground/lava.png'},
      {'name': 'water_grass', 'file': 'assets/images/ground/watergrass.png'},
      {'name': 'water_sand', 'file': 'assets/images/ground/sandwater.png'},
    ],
    'bossSprites':
    [
      {'name': 'baldric', 'file': 'assets/images/char/baldricfrontwalksheet_copy.png'},
      {'name': 'dark_mage', 'file': 'assets/images/char/mage_walking_poses_sheet_copy.png'},
      {'name': 'maskman', 'file': 'assets/images/char/maskman.png'},
      {'name': 'robot', 'file': 'assets/images/char/Armor2Walk.png'},
      {'name': 'princess', 'file': 'assets/images/char/princess.png'},
    ],
    'enemySprites':
    [
      {'name': 'zombie', 'file': 'assets/images/char/malesoldierzombie.png'},
      {'name': 'skeleton', 'file': 'assets/images/char/BODY_skeleton.png'},
      {'name': 'skeleton2', 'file': 'assets/images/char/BODY_skeleton2.png'},
    ],
    'smallMonstersSprites':
    [
      {'name': 'bat', 'file': 'assets/images/char/bat.png'},
      {'name': 'worm_big', 'file': 'assets/images/char/big_worm.png', 'w':35 , 'h': 50},
      {'name': 'eye_ball', 'file': 'assets/images/char/eyeball.png' , 'w':32 , 'h': 38},
      {'name': 'ghost', 'file': 'assets/images/char/ghost.png'      , 'w':40 , 'h': 46},
      {'name': 'pumpking', 'file': 'assets/images/char/pumpking.png', 'w':46 , 'h': 46},
      {'name': 'slime', 'file': 'assets/images/char/slime.png'},                           
      {'name': 'worm_small', 'file': 'assets/images/char/small_worm.png'},                 
      {'name': 'snake', 'file': 'assets/images/char/snake.png'},
    ],
    'player':
    {
      'body': 'assets/images/char/workerman_walkcycle2.png',
      'bullet': 'assets/images/char/Animated_Gear.png',
    },
    'other':
    {
      'hpBg': 'assets/images/ui/hp-bg.png',
      'hpFg': 'assets/images/ui/hp-fg.png',
      'dialog': 'assets/images/ui/scrollsandblocks.png',
      'ball': 'assets/images/Vegies.png',

      'graveyard': 'assets/images/tiles/gravestones.png',
      'spooky_tree': 'assets/images/tiles/CPhillips--whitheredtree.png',
      'tree_stump': 'assets/images/tiles/tree_stump.png',
      'barrel': 'assets/images/tiles/barrel.png',
      'laser': 'assets/images/tiles/Laserfence.png',
      'beach': 'assets/images/tiles/tileset01.png',
      'bucket': 'assets/images/tiles/buckets.png',
      'cup': 'assets/images/cup.png',
      'magic': 'assets/images/magic.png',
    }
  };
}


function getImagesToLoad()
{
  var toLoad = new Array();
  for (var i = 0; i < images.baseTiles.length; i++) toLoad.push(images.baseTiles[i].file);
  for (var i = 0; i < images.waterTiles.length; i++) toLoad.push(images.waterTiles[i].file);
  for (var i = 0; i < images.bossSprites.length; i++) toLoad.push(images.bossSprites[i].file);
  for (var i = 0; i < images.enemySprites.length; i++) toLoad.push(images.enemySprites[i].file);
  toLoad.push(images.player.body);toLoad.push(images.player.bullet);
  toLoad.push(images.other.hpBg);toLoad.push(images.other.hpFg);toLoad.push(images.other.ball);
  
  return toLoad;
}

function setupSpriteMaps()
{
  //base tiles
  for (var i = 0; i < images.baseTiles.length; i++)
  {
    var spriteNames = {};
    spriteNames[images.baseTiles[i].name + '1'] = [1, 3];
    spriteNames[images.baseTiles[i].name + '2'] = [0, 5];
    spriteNames[images.baseTiles[i].name + '3'] = [1, 5];
    spriteNames[images.baseTiles[i].name + '4'] = [2, 5];
    spriteNames[images.baseTiles[i].name + '_overlay1'] = [0, 0];
    spriteNames[images.baseTiles[i].name + '_overlay2'] = [0, 1];

    Crafty.sprite(32, images.baseTiles[i].file, spriteNames);
  };

  //water-like tiles
  for (var i = 0; i < images.waterTiles.length; i++)
  {
    var spriteNames = {};
    spriteNames[images.waterTiles[i].name + '_top_left'] = [0, 2];
    spriteNames[images.waterTiles[i].name + '_center_left'] = [0, 3];
    spriteNames[images.waterTiles[i].name + '_bottom_left'] = [0, 4];
    spriteNames[images.waterTiles[i].name + '_top_center'] = [1, 2];
    spriteNames[images.waterTiles[i].name + '_center_center'] = [1, 3];
    spriteNames[images.waterTiles[i].name + '_bottom_center'] = [1, 4];
    spriteNames[images.waterTiles[i].name + '_top_right'] = [2, 2];
    spriteNames[images.waterTiles[i].name + '_center_right'] = [2, 3];
    spriteNames[images.waterTiles[i].name + '_bottom_right'] = [2, 4];
    
    spriteNames[images.waterTiles[i].name + '_inset_bottom_right'] = [1, 0];
    spriteNames[images.waterTiles[i].name + '_inset_top_right'] = [1, 1];
    spriteNames[images.waterTiles[i].name + '_center_center_2'] = [0, 5];
    spriteNames[images.waterTiles[i].name + '_center_center_3'] = [1, 5];
    spriteNames[images.waterTiles[i].name + '_center_center_4'] = [2, 5];
    
    spriteNames[images.waterTiles[i].name + '_hole1'] = [0, 0];
    spriteNames[images.waterTiles[i].name + '_hole2'] = [0, 1];

    Crafty.sprite(32, images.waterTiles[i].file, spriteNames);
  };

  //boss sprites
  for (var i = 0; i < images.bossSprites.length; i++)
  {
    var spriteNames = {};
    spriteNames[images.bossSprites[i].name + '_sprite'] = [0, 0];
    Crafty.sprite(64, images.bossSprites[i].file, spriteNames);
  };

  //enemy sprites
  for (var i = 0; i < images.enemySprites.length; i++)
  {
    var spriteNames = {};
    spriteNames[images.enemySprites[i].name + '_sprite'] = [0, 0];
    Crafty.sprite(64, images.enemySprites[i].file, spriteNames);
  };
  
  //small monsters sprites
  for (var i = 0; i < images.smallMonstersSprites.length; i++)
  {
    var w = 32;
    if (images.smallMonstersSprites[i].w) w = images.smallMonstersSprites[i].w;
    var h = 32;
    if (images.smallMonstersSprites[i].h) h = images.smallMonstersSprites[i].h;

    var spriteNames = {};
    spriteNames[images.smallMonstersSprites[i].name + '_sprite'] = [0, 0];
    
    if ((w != 32) || (h != 32)) Crafty.sprite(w, h, images.smallMonstersSprites[i].file, spriteNames);
    else Crafty.sprite(w, images.smallMonstersSprites[i].file, spriteNames);
  };

  //player stuff
  Crafty.sprite(64, images.player.body,
  {
    player_sprite: [0, 0],
  });
  Crafty.sprite(32, images.player.bullet,
  {
    bullet_sprite: [0, 0]
  });

  // HP/Life stuff
  Crafty.sprite(32, images.other.hpBg,
  {
    lifeBg: [0, 0, 32, 106],
  });
  Crafty.sprite(17, images.other.hpFg,
  {
    lifeFg1: [0, 0],
    lifeFg2: [1, 0],
    lifeFg3: [2, 0],
    lifeFg4: [3, 0],
    lifeFg5: [4, 0],
    lifeFg6: [5, 0],
  });

  Crafty.sprite(32, images.other.dialog,
  {
    dialog_top_left:    [7, 7],
    dialog_top_center:  [8, 7],
    dialog_top_right:   [9, 7],
    dialog_center_left:    [7, 8],
    dialog_center_center:  [8, 8],
    dialog_center_right:   [9, 8],
    dialog_bottom_left:    [7, 9],
    dialog_bottom_center:  [8, 9],
    dialog_bottom_right:   [9, 9],
    
    dialog_closed_left:    [7, 5],
    dialog_closed_center:  [8, 5],
    dialog_closed_right:   [9, 5],
    dialog_closed2_left:    [7, 6],
    dialog_closed2_center:  [8, 6],
    dialog_closed2_right:   [9, 6],
    
    dialog_closed_left:    [7, 5],
    dialog_closed_center:  [8, 5],
    dialog_closed_right:   [9, 5],
  });
  Crafty.sprite(32, images.other.ball,
  {
    tomato: [0, 0],
    strawberry:	[1, 0],
    apple:	[2, 0],
    cherry: [10, 0],
    orange: [11, 0],
    potato: [1, 1],
    blue_veggie: [0, 2],
    watermelon: [0, 3],
    carrot: [3, 0],
  });
  

  Crafty.sprite(32, images.other.graveyard,
  {
    cross_stone: [0, 2],
    tomb_stone:  [1, 2],
    cross_wood:  [2, 2],
    tomb_cross1: [0, 0],
    tomb_cross2: [0, 1],
    tomb1: [3, 0],
    tomb2: [3, 1],
    tomb3: [3, 2],
    tomb4: [4, 0],
    tomb5: [4, 1],
    tomb6: [4, 2],
  });
  /* Crafty.sprite(38, 46, images.other.spooky_tree,
  {
    spooky_tree1: [0, 0],
    spooky_tree2: [0, 1],
    spooky_tree3: [1, 0],
    spooky_tree4: [1, 1],
  }); */
  Crafty.sprite(32, 32, images.other.spooky_tree,
  {
    spooky_tree1: [0, 0],
    spooky_tree2: [0, 1],
    spooky_tree3: [0, 2],
    spooky_tree4: [1, 0],
    spooky_tree5: [1, 1],
    spooky_tree6: [1, 2],
    spooky_tree7: [2, 0],
    spooky_tree8: [2, 1],
    spooky_tree9: [2, 2],
  });
  Crafty.sprite(32, images.other.tree_stump,
  {
    tree_stump: [0, 0],
  });
  Crafty.sprite(32, images.other.barrel,
  {
    barrel_top:    [1, 0],
    barrel_bottom: [1, 1]
  });
  Crafty.sprite(32, images.other.laser,
  {
    laser_top:    [0, 0],
    laser_center: [0, 1],
    laser_bottom: [0, 2]
  });
  Crafty.sprite(32, images.other.beach,
  {
    sea_star:    [5, 5],
    concha:      [6, 5],
    palm_tree1:   [5, 9],
    palm_tree2:   [5, 10],
    palm_tree3:   [5, 11],
    palm_tree4:   [5, 12],

    palm_tree5:   [6, 9],
    palm_tree6:   [6, 10],
    palm_tree7:   [6, 11],
    palm_tree8:   [6, 12],

    palm_tree9:    [7, 9],
    palm_tree10:   [7, 10],
    palm_tree11:   [7, 11],
    palm_tree12:   [7, 12],
    
    pascoa1:  [0, 8],
    pascoa2:  [0, 9],
    pascoa3:  [0, 10],
    pascoa4:  [1, 8],
    pascoa5:  [1, 9],
    pascoa6:  [1, 10],
    
    rock_small_gray1: [0, 0],
    rock_small_gray2: [3, 0],
    rock_fragment_gray1:  [1,0],
    rock_fragment_gray2:  [2,0],
    rock_fragment_gray3:  [4,0],

    rock_small_brown1: [0, 3],
    rock_small_brown2: [3, 3],
    rock_fragment_brown1:  [1,3],
    rock_fragment_brown2:  [2,3],
    rock_fragment_brown3:  [4,3],
    
    leaves1:  [7,0],
    leaves2:  [7,1],
  });
  Crafty.sprite(32, images.other.bucket,
  {
    bucket_empty: [0, 0],
    bucket_full:  [0, 1],
  });
  Crafty.sprite(128, images.other.magic,
  {
    magic: [0, 0],
    /*magic_water: [0, 1],
    magic_turtle: [0, 2],*/
  });
  Crafty.sprite(32, images.other.cup,
  {
    cup: [0, 0, 32, 64],
  });
}