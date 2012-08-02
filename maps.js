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


/**************************************/
//     MAP 1
//
/**************************************/

var map1 =
{
  'playableAreaWidth': 9,
  'bouncesRequired': 25,
  'boss': 'baldric',
  'images':
  {
    'baseTile': 'dirt_night',
    'waterTile': 'water'
  },
  'tiles':
  [
    {'x': 9, 'y': 0, 'sprite': '_top_left'},
    {'x': 10, 'y': 0, 'sprite': '_top_right' },

    {'x': 9, 'y': 1, 'sprite': '_center_left'},
    {'x': 9, 'y': 2, 'sprite': '_center_left'},
    {'x': 9, 'y': 3, 'sprite': '_center_left'},
    {'x': 9, 'y': 4, 'sprite': '_center_left'},
    {'x': 9, 'y': 5, 'sprite': '_center_left'},
    {'x': 9, 'y': 6, 'sprite': '_center_left'},
    {'x': 9, 'y': 7, 'sprite': '_center_left'},
    
    {'x': 10, 'y': 1, 'sprite': '_center_right'},
    {'x': 10, 'y': 2, 'sprite': '_center_right'},
    {'x': 10, 'y': 3, 'sprite': '_center_right'},
    {'x': 10, 'y': 4, 'sprite': '_center_right'},
    {'x': 10, 'y': 5, 'sprite': '_center_right'},
    {'x': 10, 'y': 6, 'sprite': '_center_right'},
    {'x': 10, 'y': 7, 'sprite': '_center_right'},

    {'x': 9, 'y': 8, 'sprite': '_bottom_left'},
    {'x': 10, 'y': 8, 'sprite': '_bottom_right'},

    {'x': 6, 'y': 8, 'sprite': 'dirt_night_overlay1', 'type': 'GROUND'},
    {'x': 1, 'y': 3, 'sprite': 'rock_fragment_brown3', 'type': 'GROUND'},
    {'x': 4, 'y': 7, 'sprite': 'rock_fragment_brown2', 'type': 'GROUND'},
    {'x': 12, 'y': 1, 'sprite': 'tomb_stone', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 7, 'sprite': 'rock_fragment_brown1', 'type': 'GROUND'},
    {'x': 14, 'y': 7, 'sprite': 'rock_fragment_brown2', 'type': 'GROUND'},

    {'x': 6, 'y': 0, 'sprite': 'rock_small_brown2', 'type': 'ABC', h:10},
    {'x': 8, 'y': 1, 'sprite': 'bucket_full', 'type': 'GROUND'},

  ],
  'zombies':
  [
    500, 600, 700, 705, 710, 800, 805, 810, 815, 820, 850, 1000, 1100, 1400, 1405, 1410, 1415, 1420
  ]
};


/**************************************/
//     MAP 2
//
/**************************************/

var map2 =
{
  'playableAreaWidth': 9,
  'bouncesRequired': 25,
  'boss': 'maskman',
  'images':
  {
    'baseTile': 'grass',
    'waterTile': 'water_grass'
  },
  'tiles':
  [
    {'x': 9, 'y': 0, 'sprite': '_top_left'},
    {'x': 10, 'y': 0, 'sprite': '_top_right' },

    {'x': 9, 'y': 1, 'sprite': '_center_left'},
    {'x': 9, 'y': 2, 'sprite': '_center_left'},
    {'x': 9, 'y': 3, 'sprite': '_center_left'},
    {'x': 9, 'y': 4, 'sprite': '_center_left'},
    {'x': 9, 'y': 5, 'sprite': '_center_left'},
    {'x': 9, 'y': 6, 'sprite': '_center_left'},
    {'x': 9, 'y': 7, 'sprite': '_center_left'},
    
    {'x': 10, 'y': 1, 'sprite': '_center_right'},
    {'x': 10, 'y': 2, 'sprite': '_center_right'},
    {'x': 10, 'y': 3, 'sprite': '_center_right'},
    {'x': 10, 'y': 4, 'sprite': '_center_right'},
    {'x': 10, 'y': 5, 'sprite': '_center_right'},
    {'x': 10, 'y': 6, 'sprite': '_center_right'},
    {'x': 10, 'y': 7, 'sprite': '_center_right'},

    {'x': 9, 'y': 8, 'sprite': '_bottom_left'},
    {'x': 10, 'y': 8, 'sprite': '_bottom_right'},
    

    {'x': 9, 'y': 0, 'sprite': '_center_left'},
    {'x': 10, 'y': 0, 'sprite': '_inset_bottom_right'},
    {'x': 11, 'y': 0, 'sprite': '_bottom_right'},    
    
    {'x': 1, 'y': 7, 'sprite': 'rock_fragment_brown1', 'type': 'GROUND'},
    {'x': 3, 'y': 4, 'sprite': 'tomb_cross1', 'type': 'FULL_NAME', z:'+1'},
    {'x': 3, 'y': 5, 'sprite': 'tomb_cross2', 'type': 'ABC', 'h':10},
    {'x': 5, 'y': 8, 'sprite': 'rock_fragment_brown2', 'type': 'GROUND'},
    {'x': 12, 'y': 6, 'sprite': 'leaves2', 'type': 'GROUND'},
    {'x': 14, 'y': 1, 'sprite': 'leaves2', 'type': 'GROUND'},
    
    {'x': 13, 'y': 6, 'sprite': 'pascoa1', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 7, 'sprite': 'pascoa2', 'type': 'FULL_NAME'},
    {'x': 13, 'y': 8, 'sprite': 'pascoa3', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 6, 'sprite': 'pascoa4', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 7, 'sprite': 'pascoa5', 'type': 'FULL_NAME'},
    {'x': 14, 'y': 8, 'sprite': 'pascoa6', 'type': 'FULL_NAME'},
  ],
  'zombies':
  [
     10, 20, 100, 300, 400, 500, 800, 820, 850, 1000, 1100, 1400, 1405, 1410, 1415, 1420
  ]
};



/**************************************/
//     MAP 3
//
/**************************************/

var map3 =
{
  'playableAreaWidth': 8,
  'bouncesRequired': 25,
  'boss': 'princess',
  'images':
  {
    'baseTile': 'sand',
    'waterTile': 'water_sand'
  },
  'tiles':
  [
    {'x': 8, 'y': 0, 'sprite': '_top_left'},
    {'x': 9, 'y': 0, 'sprite': '_top_right'},

    {'x': 10, 'y': 0, 'sprite': '_center_left'},
    {'x': 10, 'y': 1, 'sprite': '_center_left'},
    {'x': 10, 'y': 2, 'sprite': '_center_left'},
    {'x': 10, 'y': 3, 'sprite': '_center_left'},
    {'x': 10, 'y': 4, 'sprite': '_center_left'},
    {'x': 10, 'y': 5, 'sprite': '_center_left'},
    {'x': 10, 'y': 6, 'sprite': '_center_left'},
    {'x': 10, 'y': 7, 'sprite': '_center_left'},
    {'x': 10, 'y': 8, 'sprite': '_center_left'},
    
    {'x': 9, 'y': 0, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 1, 'sprite': 'water_center_center_2', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 2, 'sprite': 'water_center_center_3', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 3, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 4, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 5, 'sprite': 'water_center_center_4', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 6, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 7, 'sprite': 'water_center_center', 'type': 'FULL_NAME'},
    {'x': 9, 'y': 8, 'sprite': 'water_center_center_3', 'type': 'FULL_NAME'},

    {'x': 8, 'y': 0, 'sprite': '_center_right'},
    {'x': 8, 'y': 1, 'sprite': '_center_right'},
    {'x': 8, 'y': 2, 'sprite': '_center_right'},
    {'x': 8, 'y': 3, 'sprite': '_center_right'},
    {'x': 8, 'y': 4, 'sprite': '_center_right'},
    {'x': 8, 'y': 5, 'sprite': '_center_right'},
    {'x': 8, 'y': 6, 'sprite': '_center_right'},
    {'x': 8, 'y': 7, 'sprite': '_center_right'},
    {'x': 8, 'y': 8, 'sprite': '_center_right'},

    {'x': 1, 'y': 8, 'sprite': 'rock_fragment_brown1', 'type': 'GROUND'},
    {'x': 6, 'y': 7, 'sprite': 'leaves2', 'type': 'GROUND'},
    {'x': 13, 'y': 2, 'sprite': 'concha', 'type': 'GROUND'},
    {'x': 12, 'y': 7, 'sprite': 'sea_star', 'type': 'GROUND'},

    {'x': 6, 'y': 4, 'sprite': 'palm_tree1', 'type': 'FULL_NAME', z:'+1'},
    {'x': 6, 'y': 5, 'sprite': 'palm_tree2', 'type': 'FULL_NAME', z:'+1'},
    {'x': 6, 'y': 6, 'sprite': 'palm_tree3', 'type': 'FULL_NAME', z:'+1'},
    {'x': 6, 'y': 7, 'sprite': 'palm_tree4', 'type': 'FULL_NAME'},
    {'x': 7, 'y': 4, 'sprite': 'palm_tree5', 'type': 'FULL_NAME', z:'+1'},
    {'x': 7, 'y': 5, 'sprite': 'palm_tree6', 'type': 'FULL_NAME', z:'+1'},
    {'x': 7, 'y': 6, 'sprite': 'palm_tree7', 'type': 'FULL_NAME', z:'+1'},
    {'x': 7, 'y': 7, 'sprite': 'palm_tree8', 'type': 'ABC', 'h':10},
    {'x': 8, 'y': 4, 'sprite': 'palm_tree9', 'type': 'FULL_NAME', z:'+1'},
    {'x': 8, 'y': 5, 'sprite': 'palm_tree10', 'type': 'FULL_NAME', z:'+1'},
    {'x': 8, 'y': 6, 'sprite': 'palm_tree11', 'type': 'FULL_NAME', z:'+1'},
    {'x': 8, 'y': 7, 'sprite': 'palm_tree12', 'type': 'FULL_NAME'},
    

  ],
  'zombies':
  [
     10, 20, 100, 300, 400, 500, 800, 820, 850, 1000, 1100, 1400, 1405, 1410, 1415, 1420
  ]
};


/**************************************/
//     MAP 4
//
/**************************************/

var map4 =
{
  'playableAreaWidth': 8,
  'bouncesRequired': 25,
  'boss': 'robot',
  'images':
  {
    'baseTile': 'grass_night',
    'waterTile': 'water'
  },
  'tiles':
  [
    {'x': 8, 'y': 0, 'sprite': '_top_left'},
    {'x': 9, 'y': 0, 'sprite': '_top_right'},

    {'x': 8, 'y': 1, 'sprite': '_center_left'},
    {'x': 8, 'y': 2, 'sprite': '_center_left'},
    {'x': 8, 'y': 3, 'sprite': '_center_left'},
    {'x': 8, 'y': 4, 'sprite': '_center_left'},
    {'x': 8, 'y': 5, 'sprite': '_center_left'},
    {'x': 8, 'y': 6, 'sprite': '_center_left'},
    {'x': 8, 'y': 7, 'sprite': '_center_left'},
    
    {'x': 9, 'y': 1, 'sprite': '_center_right'},
    {'x': 9, 'y': 2, 'sprite': '_center_right'},
    {'x': 9, 'y': 3, 'sprite': '_center_right'},
    {'x': 9, 'y': 4, 'sprite': '_center_right'},
    {'x': 9, 'y': 5, 'sprite': '_center_right'},
    {'x': 9, 'y': 6, 'sprite': '_center_right'},
    {'x': 9, 'y': 7, 'sprite': '_center_right'},
    
    {'x': 8, 'y': 8, 'sprite': '_bottom_left'},
    {'x': 9, 'y': 8, 'sprite': '_bottom_right'},
    
    {'x': 0, 'y': 1, 'sprite': 'tomb1', 'type': 'ABC'},
    {'x': 0, 'y': 2, 'sprite': 'tomb2', 'type': 'ABC'},
    {'x': 0, 'y': 3, 'sprite': 'tomb3', 'type': 'ABC', 'h':10},
    {'x': 1, 'y': 1, 'sprite': 'tomb4', 'type': 'ABC'},
    {'x': 1, 'y': 2, 'sprite': 'tomb5', 'type': 'ABC'},
    {'x': 1, 'y': 3, 'sprite': 'tomb6', 'type': 'ABC', 'h':10},

    {'x': 2, 'y': 1, 'sprite': 'barrel_top', 'type': 'FULL_NAME', z:'+1'},
    {'x': 2, 'y': 2, 'sprite': 'barrel_bottom', 'type': 'ABC', h:15},
    
    {'x': 5, 'y': 4, 'sprite': 'tomb_stone', 'type': 'ABC', 'h':10},
    
   // {'x': 4, 'y': 1, 'sprite': 'laser_top', 'type': 'ABC'},
    {'x': 5, 'y': 0, 'sprite': 'laser_center', 'type': 'ABC'},
    {'x': 5, 'y': 1, 'sprite': 'laser_bottom', 'type': 'ABC', 'h':10},
    //{'x': 5, 'y': 1, 'sprite': 'laser_top', 'type': 'ABC'},
    {'x': 6, 'y': 0, 'sprite': 'laser_center', 'type': 'ABC'},
    {'x': 6, 'y': 1, 'sprite': 'laser_bottom', 'type': 'ABC', 'h':10},

    /* {'x': 6, 'y': 6, 'sprite': 'spooky_tree1', 'type': 'FULL_NAME', z:'+1'},
    {'x': 6, 'y': 7, 'sprite': 'spooky_tree2', 'type': 'ABC', 'h':10},
    {'x': 7, 'y': 6, 'sprite': 'spooky_tree3', 'type': 'FULL_NAME', z:'+1'},
    {'x': 7, 'y': 7, 'sprite': 'spooky_tree4', 'type': 'ABC', 'h':10}, */

    {'x': 6, 'y': 5, 'sprite': 'spooky_tree1', 'type': 'FULL_NAME', z:'+1'},
    {'x': 6, 'y': 6, 'sprite': 'spooky_tree2', 'type': 'FULL_NAME', z:'+1'},
    {'x': 6, 'y': 7, 'sprite': 'spooky_tree3', 'type': 'FULL_NAME'},
    {'x': 7, 'y': 5, 'sprite': 'spooky_tree4', 'type': 'FULL_NAME', z:'+1'},
    {'x': 7, 'y': 6, 'sprite': 'spooky_tree5', 'type': 'ABC'},
    {'x': 7, 'y': 7, 'sprite': 'spooky_tree6', 'type': 'ABC', 'h':10},
    {'x': 8, 'y': 5, 'sprite': 'spooky_tree7', 'type': 'FULL_NAME', z:'+1'},
    {'x': 8, 'y': 6, 'sprite': 'spooky_tree8', 'type': 'FULL_NAME', z:'+1'},
    {'x': 8, 'y': 7, 'sprite': 'spooky_tree9', 'type': 'FULL_NAME'},

    {'x': 4, 'y': 8, 'sprite': 'tree_stump', 'type': 'FULL_NAME'},
    {'x': 11, 'y': 1, 'sprite': 'rock_fragment_gray1', 'type': 'GROUND'},
    {'x': 13, 'y': 7, 'sprite': 'rock_small_gray1', 'type': 'GROUND'},
    

  ],
  'zombies':
  [
     10, 20, 100, 300, 400, 500, 800, 820, 850, 1000, 1100, 1400, 1405, 1410, 1415, 1420
  ]
};


/**************************************/
//     MAP 5
//
/**************************************/

var map5 =
{
  'playableAreaWidth': 8,
  'bouncesRequired': 30,
  'boss': 'dark_mage',
  'images':
  {
    'baseTile': 'lava_rock',
    'waterTile': 'water_lava'
  },
  'tiles':
  [
    {'x': 8, 'y': 0, 'sprite': '_center_left'},
    {'x': 9, 'y': 0, 'sprite': '_center_right'},

    {'x': 8, 'y': 1, 'sprite': '_center_left'},
    {'x': 8, 'y': 2, 'sprite': '_center_left'},
    {'x': 8, 'y': 3, 'sprite': '_center_left'},
    {'x': 8, 'y': 4, 'sprite': '_center_left'},
    {'x': 8, 'y': 5, 'sprite': '_center_left'},
    {'x': 8, 'y': 6, 'sprite': '_center_left'},
    {'x': 8, 'y': 7, 'sprite': '_center_left'},
    
    {'x': 9, 'y': 1, 'sprite': '_center_right'},
    {'x': 9, 'y': 2, 'sprite': '_center_right'},
    {'x': 9, 'y': 3, 'sprite': '_center_right'},
    {'x': 9, 'y': 4, 'sprite': '_center_right'},
    {'x': 9, 'y': 5, 'sprite': '_center_right'},
    {'x': 9, 'y': 6, 'sprite': '_center_right'},
   
    {'x': 9, 'y': 7, 'sprite': '_inset_top_right'},
    {'x': 8, 'y': 8, 'sprite': '_center_left'},
    {'x': 9, 'y': 8, 'sprite': '_center_center_3'},
    {'x': 10, 'y': 7, 'sprite': '_top_right'},
    {'x': 10, 'y': 8, 'sprite': '_center_right'},
    
    
   /*  {'x': 0, 'y': 7, 'sprite': '_top_center'},
    {'x': 1, 'y': 7, 'sprite': '_top_right'},
    {'x': 0, 'y': 8, 'sprite': '_center_center_2'},
    {'x': 1, 'y': 8, 'sprite': '_inset_top_right'},
    {'x': 2, 'y': 8, 'sprite': '_top_center'},
    {'x': 3, 'y': 8, 'sprite': '_top_right'}, */

    {'x': 0, 'y': 7, 'sprite': 'water_lava_top_center', 'type': 'GROUND_OBSTACLE'},
    {'x': 1, 'y': 7, 'sprite': 'water_lava_top_right', 'type': 'GROUND_OBSTACLE'},
    {'x': 0, 'y': 8, 'sprite': 'water_lava_center_center_2', 'type': 'GROUND_OBSTACLE'},
    {'x': 1, 'y': 8, 'sprite': 'water_lava_inset_top_right', 'type': 'GROUND_OBSTACLE'},
    {'x': 2, 'y': 8, 'sprite': 'water_lava_top_center', 'type': 'GROUND_OBSTACLE'},
    {'x': 3, 'y': 8, 'sprite': 'water_lava_top_right', 'type': 'GROUND_OBSTACLE'},
    
    /* {'x': 6, 'y': 0, 'sprite': 'cross_wood', 'type': 'ABC'}, */
    {'x': 6, 'y': 2, 'sprite': 'water_lava_hole2', 'type': 'GROUND_OBSTACLE'},
    {'x': 12, 'y': 1, 'sprite': 'cross_wood', 'type': 'GROUND'},
    {'x': 13  , 'y': 1, 'sprite': 'cross_wood', 'type': 'GROUND'},
    {'x': 11, 'y': 5, 'sprite': 'rock_small_gray1', 'type': 'GROUND'},

  ],
  'zombies':
  [
     10, 20, 100, 300, 400, 500, 800, 820, 850, 1000, 1100, 1400, 1405, 1410, 1415, 1420
  ]
};


function createMap()
{
  //places the base tiles
  for (var i = 0; i < stageWidth; i++)
  {
    for (var j = 0; j < stageHeight; j++)
    {
      groundNumber = Crafty.math.randomInt(1, 20);
      if (groundNumber === 20) groundNumber = 2;
      else if (groundNumber > 17) groundNumber = 3;
      else if (groundNumber > 11) groundNumber = 4;
      else groundNumber = 1;
      Crafty.e('2D, DOM, ' + map.images.baseTile + groundNumber)
        .attr({ x: i * 32, y: j * 32, z:1 });
        
      if (testingMode_tilesGrid)
      {
         Crafty.e('2D, DOM, Text')
        .attr({ x: i * 32, y: j * 32, w: 32,h:32, z:2 })
        .text(i + ', '+j)
        .css('font-family', 'arial')
        .css('font-size', '8px')
        .css('color', 'black')
        .css('border','black 0.5px dashed');
      }
    }
  };

  //load the other tiles of the map
  for (var i = 0; i < map.tiles.length; i++)
  {

    if (map.tiles[i].type === 'FULL_NAME')
    {
      var manualZ = 0;
      if (map.tiles[i].z === '+1') manualZ = 1;
      Crafty.e('2D, DOM, ' + map.tiles[i].sprite)
        .attr({ x: map.tiles[i].x*32, y: map.tiles[i].y*32, z:100+(map.tiles[i].y + manualZ)*32 });
    }
    else if (map.tiles[i].type === 'ABC')
    {
      var obstacle = Crafty.e('2D, DOM, ' + map.tiles[i].sprite + ', Obstacle, Collision' )
        .attr({ x: map.tiles[i].x*32, y: map.tiles[i].y*32, z:100+map.tiles[i].y*32 });
        if (map.tiles[i].h)
        {
          obstacle.collision(new Crafty.polygon
          (
            [0, 0], [obstacle.w, 0],
            [obstacle.w, map.tiles[i].h], [0, map.tiles[i].h]
          ));
        }
    }
    else if (map.tiles[i].type === 'GROUND')
    {
      Crafty.e('2D, DOM, ' + map.tiles[i].sprite)
        .attr({ x: map.tiles[i].x*32 + Crafty.math.randomInt(-16,16), y: map.tiles[i].y*32 + Crafty.math.randomInt(-16,16), z:11 });
    }
    else if (map.tiles[i].type === 'GROUND_OBSTACLE')
    {
      var obstacle = Crafty.e('2D, DOM, ' + map.tiles[i].sprite + ', Obstacle, Collision')
        .attr({ x: map.tiles[i].x*32, y: map.tiles[i].y*32, z:11 });
      obstacle.collision(new Crafty.polygon
          (
            [0, -20], [obstacle.w-10, - 20],
            [obstacle.w-10, obstacle.h - 30], [0, obstacle.h - 30]
          ));
    }
    else
    {
      Crafty.e('2D, DOM, ' + map.images.waterTile + map.tiles[i].sprite)
        .attr({ x: map.tiles[i].x*32, y: map.tiles[i].y*32, z:10 });
    }
  }
  
 // if (difficulty.casual) map.bouncesRequired = 15;
}