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

function createEnemyComponents()
{
  /**************************************/
  // BOSS, the all powerful enemy
  // Provides: catch the ball
  /**************************************/
  Crafty.c('Boss',{init: function()
  {
      this.movement = { x: 0, y: 0 };
      this.target = { x: 0, y: 0 };
      this.attr('bounceCounter', 0)
      .bind('CatchTheBall', function (target)
      {
        this.target.x = target.x;
        this.target.y = target.y;

        //we calculate a movement vector of size 1, by dividing the distance vector for its size
        var distanceX = target.x - this.x;
        var distanceY = target.y - this.y;
        var distanceMod = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
        this.movement.x = (distanceX) / distanceMod * 8;     
        this.movement.y = (distanceY) / distanceMod * 8;

        this.trigger('NewDirection', this.movement);  //trigger a NewDirection event so that it can change it's moving animation (e.g., Ape)
      })
      .bind('EnterFrame', function ()
      {
        if (!storyMode)
        {
          var trigger = false;
          if (this.movement.x < 1 && this.movement.x > -1) this.movement.x = 0;
          if (this.movement.y < 1 && this.movement.y > -1) this.movement.y = 0;

          //we need to prevent it from moving beyond the target point
          if ( (this.movement.x > 0 && this.x < this.target.x - 20)
               || (this.movement.x < 0 && this.x > this.target.x - 20)  )
          {
            this.x += this.movement.x;
          }
          else
          {
            if (this.target.x != 0 && this.movement.x != 0)  //this prevents undue moviment in the start of the round
            {
              this.movement.x = this.target.x - 20 - this.x;
              if(this.movement.x != 0) trigger = true;
            }
          };
  
          if ( (this.movement.y > 0 && this.y < this.target.y - 15)
               || (this.movement.y < 0 && this.y > this.target.y - 15)  )
          {
            this.y += this.movement.y;
          }
          else
          {
            if (this.target.y != 0 && this.jumpState==='IDLE' && this.movement.y != 0)
            {
              this.movement.y = this.target.y - 15 - this.y;
  
              //if(this.movement.y != 0) trigger = true;
            }
          };
  
          if (this.movement.x === 0 && this.movement.y === 0)
          {
            this.faceLeft();
          }
          if (trigger) this.trigger('NewDirection', this.movement);
        }

      });
      return this;
    }});
    

  /**************************************/
  // ZOMBIE, for the generic enemy
  // Provides: catch the player
  /**************************************/
  Crafty.c('Zombie',{init: function()
  {
      this.movement = { x: 0, y: 0 };
      this.requires('Collision')
      .attr({calculateRouteCounter: 95, animationSpeed:100, nextThinking:100})
      .bind('EnterFrame', function ()
      {
        this.calculateRouteCounter++;      //this flag is a delay for the re-routing, because zombie' thinking ought to be a bit slow
        if (this.calculateRouteCounter > this.nextThinking)      //follow the player:
        {
          var randomNumber = Crafty.math.randomInt(1,10);
          //random movements: stop, move to a random position or follow the player
          if (Crafty.math.randomInt(1,10) > 9 || storyMode)
          {
            //stop
            this.movement.x = 0;
            this.movement.y = 0;
            this.nextThinking = 40;
          }
          else
          {
            var targetX, targetY;
            if (randomNumber > 7)
            {
              //targets a random position
              targetX = Crafty.math.randomInt(0, map.playableAreaWidth - 1)*tileSize + (tileSize/2);
              targetY = Crafty.math.randomInt(0, stageHeight-1)*tileSize + (tileSize/2);
            }
            else
            {
              //targets the player
              targetX = player.x;
              targetY = player.y;
            }

            //we calculate a movement vector of size 1, by dividing the distance vector for its size
            var distanceX = targetX - this.x;
            var distanceY = targetY - this.y;
            distanceMod = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

            
           /*  if(difficulty.casual)
            {
              this.movement.x = (distanceX) / distanceMod / 5;      //this division is just to slow down the zombie
              this.movement.y = (distanceY) / distanceMod / 5;
            }
            else */
            {
              this.movement.x = (distanceX) / distanceMod / 4;      //this division is just to slow down the zombie
              this.movement.y = (distanceY) / distanceMod / 4;
            }
            
            this.nextThinking = Crafty.math.randomInt(100,150);
          }

          this.calculateRouteCounter = 0;
          this.trigger('NewDirection', this.movement);  //trigger a NewDirection event so that it can change it's moving animation (e.g., Ape)
        }

        //the actual movement
        this.x += this.movement.x;
        this.y += this.movement.y;

      });
      return this;
    }});
    
  /**************************************/
  // SKELETON, not the He-Man's
  // Provides: catch the player
  /**************************************/
  Crafty.c('Skeleton',{init: function()
  {
      this.movement = { x: 0, y: 0 };
      this.requires('Collision')
      .attr({calculateRouteCounter: 175, animationSpeed:10, nextThinking:200})
      .bind('EnterFrame', function ()
      {
        this.calculateRouteCounter++;      //this flag is a delay for the re-routing
        if (this.calculateRouteCounter > this.nextThinking)      //follow the player:
        {
          //we calculate a movement vector of size 1, by dividing the distance vector for its size
          var distanceX = player.x - this.x;
          var distanceY = player.y - this.y;
          distanceMod = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
          this.movement.x = (distanceX) / distanceMod * 2;
          this.movement.y = (distanceY) / distanceMod * 2;
          
          this.nextThinking = Crafty.math.randomInt(180,220);

          this.calculateRouteCounter = 0;
          this.trigger('NewDirection', this.movement);  //trigger a NewDirection event so that it can change it's moving animation (e.g., Ape)
        }

        if (!storyMode)
        {
          if(this.x + this.movement.x <= map.playableAreaWidth * tileSize - tileSize /2)    //prevents the skeleton from going to the boss' field
          {
            this.x += this.movement.x;
          };
          this.y += this.movement.y;
          
        }

      });
      return this;
    }});
    
  /**************************************/
  // SMALLMONSTER, for... small monsters
  // Provides: moving animation
  /**************************************/
  Crafty.c('SmallMonster',
  {
  faceLeft: function() { this.stop(); this.sprite(0, 1); },
  faceRight: function() { this.stop(); this.sprite(0, 3); },
  faceUp: function() { this.stop(); this.sprite(0, 0); },
  faceDown: function() { this.stop(); this.sprite(0, 2); },

  init: function()
  {
    this.movement = { x: 0, y: 0 };
    this.attr('type', 'FAST')
    //setup animations
      .requires('SpriteAnimation, Collision, Grid')

      //set-up the animation frames
      .attr({animationSpeed: 5, storyMode: false})
      .animate('walk_up',    0, 0, 2)
      .animate('walk_left',  0, 1, 2)
      .animate('walk_down',  0, 2, 2)
      .animate('walk_right', 0, 3, 2)

      .attr({calculateRouteCounter: 175, animationSpeed:10, nextThinking:200})
      .bind('EnterFrame', function ()
      {
        this.calculateRouteCounter++;      //this flag is a delay for the re-routing
        if (this.calculateRouteCounter > this.nextThinking)      //follow the player:
        {
          if (this.type === 'PARKED')
          {
            var dice = Crafty.math.randomInt(1,6);
            switch (dice)
            {
              case 1: this.faceLeft();this.movement.x = 0; this.movement.y = 0;this.nextThinking = Crafty.math.randomInt(40,50);  break;
              case 2: this.faceRight();this.movement.x = 0; this.movement.y = 0;this.nextThinking = Crafty.math.randomInt(40,50);  break;
              case 3: this.faceDown();this.movement.x = 0; this.movement.y = 0;this.nextThinking = Crafty.math.randomInt(40,50);  break;
              case 4: this.faceUp();this.movement.x = 0; this.movement.y = 0;this.nextThinking = Crafty.math.randomInt(40,50);  break;
              default: this.movement.x = Crafty.math.randomNumber(-1,1)/3;
                       this.movement.y = Crafty.math.randomNumber(-1,1)/3;
                       this.trigger('NewDirection', this.movement);
                       this.nextThinking = Crafty.math.randomInt(140,170);
                       break;
            }
          }
          else if (this.type === 'SIDEWAYS')
          {
            this.movement.x = this.direction.x;
            this.movement.y = this.direction.y;
            this.trigger('NewDirection', this.movement);
            this.nextThinking = Crafty.math.randomInt(40,70);
          }
          else if (this.type === 'HORIZONTAL')
          {
            this.movement.x = -3;
            this.movement.y = Crafty.math.randomNumber(-2,2);
            this.trigger('NewDirection', this.movement);
            this.nextThinking = Crafty.math.randomInt(10,20);
          }
          else
          {
            //we calculate a movement vector of size 1, by dividing the distance vector for its size
            var distanceX = player.x - this.x;
            var distanceY = player.y - this.y;
            distanceMod = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
            this.movement.x = (distanceX) / distanceMod * 0.8;
            this.movement.y = (distanceY) / distanceMod * 0.8;
            
            this.nextThinking = Crafty.math.randomInt(180,220);
  
            if (this.type === 'LESS_HORIZONTAL')
            {
              this.movement.x /= 2;
            }
            this.trigger('NewDirection', this.movement);  //trigger a NewDirection event so that it can change it's moving animation (e.g., Ape)
          }
          this.calculateRouteCounter = 0;
        }

        if (!storyMode)
        {
          if (this.type === 'SIDEWAYS')
          {
            if(this.x <= -20)
            {
              this.x = -10;
              this.direction.x *= -1;
              this.calculateRouteCounter = 1000;
            }
            else if (this.x >= map.playableAreaWidth * tileSize - 20)
            {
              this.x = (map.playableAreaWidth * tileSize - tileSize /2) - 19;
              this.direction.x *= -1;
              this.calculateRouteCounter = 1000;
            }
            if(this.y <= -15)
            {
              this.y = -10;
              this.direction.y *= -1;
              this.calculateRouteCounter = 1000;
            }
            else if(this.y >= stageHeight * tileSize - tileSize * 2)
            {
              this.y = (stageHeight * tileSize - tileSize * 2) - 5;
              this.direction.y *= -1;
              this.calculateRouteCounter = 1000;
            }
          }
          else if (this.type === 'HORIZONTAL')
          {
            if(this.x <= -30)
            {
              this.destroy();
            }
          }

          if(this.x + this.movement.x <= map.playableAreaWidth * tileSize - tileSize /2)  //prevents the monster from going to the boss' field
          {
            this.x += this.movement.x;

          };
          this.y += this.movement.y;
        }

      })
      .bind('NewDirection', function (direction)                 //here we define which animation to play, according to the direction
      {
        if (Math.abs(direction.x) > Math.abs(direction.y) )      //this check is required for when the character is moving towards a target,
                                                                 //so that it can decide to play the vertical or the horizontal animation
        {
          if (direction.x < 0)
          {
	    if (!this.isPlaying('walk_left'))
	      this.stop().animate('walk_left', this.animationSpeed, -1);
	  }
	  if (direction.x > 0)
          {
	    if (!this.isPlaying('walk_right'))
	      this.stop().animate('walk_right', this.animationSpeed, -1);
	  }
        }
	else
        {
          if (direction.y < 0)
          {
            if (!this.isPlaying('walk_up'))
              this.stop().animate('walk_up', this.animationSpeed, -1);
          }
          if (direction.y > 0)
          {
            if (!this.isPlaying('walk_down'))
              this.stop().animate('walk_down', this.animationSpeed, -1);
          }
        }
        if(!direction.x && !direction.y)
        {
          this.stop();
        }
      });
    return this;
  }});
}

function createZombie(origin)
{
  Crafty.e('enemy, 2D, DOM, zombie_sprite, Ape, Zombie')
    .attr({ x: origin.x, y: origin.y, w: 64, h: 64, z: 40})
    .collision(new Crafty.polygon
      (
        [22, 11], [40, 11],
        [40, 45], [22, 45]
      ));
}

function createSkeleton(origin)
{
  var skeletonType = '';
  if (Crafty.math.randomInt(0,1) === 1) skeletonType = '2';
  Crafty.e('enemy, 2D, DOM, skeleton'+ skeletonType+'_sprite, Ape, Skeleton')
    .attr({ x: origin.x, y: origin.y, w: 64, h: 64, z: 40})
    .collision(new Crafty.polygon
      (
        [22, 11], [40, 11],
        [40, 45], [22, 45]
      ));
}
function createSmallMonster(origin, monsterType, movementType)
{
  var smallMonster = Crafty.e('enemy, 2D, DOM, '+monsterType+'_sprite, SmallMonster')
    .attr({ x: origin.x, y: origin.y, z: 40, type: movementType});
  if (movementType === 'SIDEWAYS')
  {
    var directionX = Crafty.math.randomNumber(1,2)/1.3;
    if (origin.x >= map.playableAreaWidth / 2) directionX *= -1;
    var directionY = Crafty.math.randomNumber(0.2,0.5);
    if (origin.y >= stageHeight / 2) directionY *= -1;
    smallMonster.attr('direction', {x: directionX, y: directionY});
  }
  
  //additional stuff for particular types of monsters
  if (monsterType === 'slime')
  {
    smallMonster
      .addComponent('Tween')
      .attr({alpha: 0.0})
      .tween({alpha: 1.0}, 100)
  }
  else if (monsterType === 'ghost')
  {
    /* smallMonster
      .addComponent('Blink')
      .attr('blinkingRate', Crafty.math.randomInt(20, 30))
      .trigger('StartBlinking'); */
  }
}

function createMonster(monsterType)
{
  if(!storyMode)
  {
    var origin = {x: 0, y: 0};
    var movementType = 'NORMAL';
    if (monsterType === 'worm_small' || monsterType === 'worm_big') movementType = 'PARKED';
    else if (monsterType === 'snake') movementType = 'SIDEWAYS';
    else if (monsterType === 'pumpking') movementType = 'LESS_HORIZONTAL';
    else if (monsterType === 'slime') movementType = 'HORIZONTAL';
    if(movementType === 'PARKED' || movementType === 'SIDEWAYS')
    {
      origin = randomPositionInsideField();
    }
    else if (monsterType === 'slime')
    {
      //position INSIDE the player's field
      origin.x = map.playableAreaWidth * tileSize - 20;
      origin.y = Crafty.math.randomInt(0, stageHeight)*tileSize;
    
      var counter = 0;
      while (_closeToPlayer(origin) && counter < 10)   //use a counter too just to be sure it will end
      {
        origin.y = Crafty.math.randomInt(0, stageHeight)*tileSize;
        counter++;
      }
    }
    else
    {
      //position OUTSIDE the player's field
      origin.x = Crafty.math.randomInt(-5, map.playableAreaWidth);
      if (origin.x < 0)
      {
        origin.x = -1;
        origin.y = Crafty.math.randomInt(-1, stageHeight);
      }
      else
      {
        origin.y = Crafty.math.randomInt(-1, 0);
        if (origin.y === 0) origin.y = stageHeight - 1;
      }
      
      origin.x *= tileSize;
      origin.y *= tileSize;
    }

    if (monsterType)
    {
      if (monsterType === 'zombie') createZombie(origin);
      else if (monsterType === 'skeleton') createSkeleton(origin);
      else
      {
        createSmallMonster(origin, monsterType, movementType);
      }
    }
    else
    {
      var enemyType = Crafty.math.randomInt(1, 10);
      if (enemyType > 8)
      {

      }
      else if (enemyType > 3)
      {
        Crafty.e('enemy, 2D, DOM, eye_ball_sprite, SmallMonster')
          .attr({ x: origin.x, y: origin.y, z: 40});
      }
      else
      {
        createZombie(origin);
      }
    }
  }
}

function destroyAllEnemies()
{
  Crafty('enemy').destroy();
}