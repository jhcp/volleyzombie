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

function initializeCraftyComponents()
{
  /**************************************/
  // APE, for human-like characters
  // Provides: walking animation
  /**************************************/
  Crafty.c('Ape',
  {
  faceLeft: function() { this.stop(); this.sprite(0, 1+this.armor*4); },
  faceRight: function() { this.stop(); this.sprite(0, 3+this.armor*4); },    //this.stop().animate('walk_right', 20, 1).updateSprite(); this.stop();
  faceUp: function() { this.stop(); this.sprite(0, 0+this.armor*4); },
  faceDown: function() { this.stop(); this.sprite(0, 2+this.armor*4); },

  init: function()
  {
    //setup animations
    this.requires('SpriteAnimation, Collision, Grid')

      //set-up the animation frames
      .attr({animationSpeed: 5})
      .animate('walk_up',    1, 0, 8)
      .animate('walk_left',  1, 1, 8)
      .animate('walk_down',  1, 2, 8)
      .animate('walk_right', 1, 3, 8)
      .animate('walk_up_armor1',    1, 4, 8)
      .animate('walk_left_armor1',  1, 5, 8)
      .animate('walk_down_armor1',  1, 6, 8)
      .animate('walk_right_armor1', 1, 7, 8)
      .animate('walk_up_armor2',    1, 8, 8)
      .animate('walk_left_armor2',  1, 9, 8)
      .animate('walk_down_armor2',  1, 10, 8)
      .animate('walk_right_armor2', 1, 11, 8)

      .attr('armor', 0)
      .bind('NewDirection', function (direction)                 //here we define which animation to play, according to the direction
      {
        this.attr('myDirection', direction);
        if(!storyMode)
        {
          if (Math.abs(direction.x) > Math.abs(direction.y) )      //this check is required for when the character is moving towards a target,
                                                                   //so that it can decide to play the vertical or the horizontal animation
          {
            if (direction.x < 0)
            {
               if (this.armor === 0)
               {
                 if (!this.isPlaying('walk_left')) this.stop().animate('walk_left', this.animationSpeed, -1);
               }
               else if (this.armor === 1)
               {
                 if (!this.isPlaying('walk_left_armor1')) this.stop().animate('walk_left_armor1', this.animationSpeed, -1);
               }
               else if (this.armor === 2)
               {
                 if (!this.isPlaying('walk_left_armor2')) this.stop().animate('walk_left_armor2', this.animationSpeed, -1);
               }
  	    }
  	    else if (direction.x > 0)
            {
  	       if (this.armor === 0)
               {
                 if (!this.isPlaying('walk_right')) this.stop().animate('walk_right', this.animationSpeed, -1);
               }
               else if (this.armor === 1)
               {
                 if (!this.isPlaying('walk_right_armor1')) this.stop().animate('walk_right_armor1', this.animationSpeed, -1);
               }
               else if (this.armor === 2)
               {
                 if (!this.isPlaying('walk_right_armor2')) this.stop().animate('walk_right_armor2', this.animationSpeed, -1);
               }
  	    }
          }
  	  else
          {
            if (direction.y < 0)
            {
              if (this.armor === 0)
               {
                 if (!this.isPlaying('walk_up')) this.stop().animate('walk_up', this.animationSpeed, -1);
               }
               else if (this.armor === 1)
               {
                 if (!this.isPlaying('walk_up_armor1')) this.stop().animate('walk_up_armor1', this.animationSpeed, -1);
               }
               else if (this.armor === 2)
               {
                 if (!this.isPlaying('walk_up_armor2')) this.stop().animate('walk_up_armor2', this.animationSpeed, -1);
               }
            }
            if (direction.y > 0)
            {
              if (this.armor === 0)
               {
                 if (!this.isPlaying('walk_down')) this.stop().animate('walk_down', this.animationSpeed, -1);
               }
               else if (this.armor === 1)
               {
                 if (!this.isPlaying('walk_down_armor1')) this.stop().animate('walk_down_armor1', this.animationSpeed, -1);
               }
               else if (this.armor === 2)
               {
                 if (!this.isPlaying('walk_down_armor2')) this.stop().animate('walk_down_armor2', this.animationSpeed, -1);
               }
            }
          }
          if(!direction.x && !direction.y)
          {
            if (this.isPlaying('walk_left') || this.isPlaying('walk_left_armor1') || this.isPlaying('walk_left_armor2')) this.faceLeft();
            else if (this.isPlaying('walk_right') || this.isPlaying('walk_right_armor1') || this.isPlaying('walk_right_armor2')) this.faceRight();
            else if (this.isPlaying('walk_up') || this.isPlaying('walk_up_armor1') || this.isPlaying('walk_up_armor2')) this.faceUp();
            else if (this.isPlaying('walk_down') || this.isPlaying('walk_down_armor1') || this.isPlaying('walk_down_armor2')) this.faceDown();
          }
        }
      })
    return this;
  }});

  /**************************************/
  // SHOOTER, for playable entities that shoot something (multi-directional)
  // Actually, it's just for the player
  // Provides: shooting feast and jumping trigger!
  /**************************************/
  Crafty.c('Shooter',             //TODO: split the shooting from the other player behaviors
  {
  shoot: function(horizontalSpeed, verticalSpeed)
  {
    this.shootCounter = 0;

    Crafty.e('2D, DOM, Collision, bullet_sprite, Bullet')
      .attr({ x: this.x+32-10, y: this.y+32-10, w: 32, h: 32, z: 30,
              dX: horizontalSpeed*2, dY: verticalSpeed *2})
      ;//.animate('spin', 10, -1);  //it's not worthy to shoot it, it goes pass too quickly.
    Crafty.audio.play('shoot', 1, 0.1);
  },

  init: function()
  {
    this.requires('Keyboard')
      .attr('shootCounter', 0)         //we use a shootCounter to prevent continual shooting when the player is pressing a key
      .bind('EnterFrame', function ()
      {
        if (!storyMode)
        {
          //shooting action
          this.shootCounter++;
          if (this.shootCounter > 5)
          {
            if (this.isDown('UP_ARROW') && this.isDown('RIGHT_ARROW')) this.shoot(5, -5);
            else if (this.isDown('DOWN_ARROW') && this.isDown('RIGHT_ARROW')) this.shoot(5, 5);
            else if (this.isDown('UP_ARROW') && this.isDown('LEFT_ARROW')) this.shoot(-5, -5);
            else if (this.isDown('DOWN_ARROW') && this.isDown('LEFT_ARROW')) this.shoot(-5, 5);
            else if (this.isDown('UP_ARROW')) this.shoot(0,-5);
            else if (this.isDown('RIGHT_ARROW')) this.shoot(5, 0);
            else if (this.isDown('DOWN_ARROW')) this.shoot(0, 5);
            else if (this.isDown('LEFT_ARROW')) this.shoot(-5, 0);
          }
        }

        var hitEnemy = this.hit('enemy');
        if(hitEnemy)
        {
          if (!storyMode)
          {
            if (this.invincible)
            {
              hitEnemy[0].obj.destroy();
              Crafty.audio.play('zombie_die');
            }
            else this.trigger('Hurt');
          }
        }
      })
      .bind('KeyDown', function ()
      {
        if (!storyMode)
        {
          //this.shootCounter = 1000;     //resets the shootCounter, so that the player can shoot again repeatedly
  
          if (this.isDown('SPACE') && this.jumpState === 'IDLE')
          {
            this.trigger('Jump');
          }
          else if (this.isDown('SHIFT') && this.jumpState === 'IDLE')
          {
            this.trigger('Jump');
          }
          else if (this.isDown('NUMPAD_0') && this.jumpState === 'IDLE')
          {
            this.trigger('Jump');
          }
        }
      })
      .bind('Moved', function(from)                   //this is triggered by the Multiway component
      {
        this.z = 113+this.y; //log(this.z + ' - ' + Crafty(Crafty('tomb6')[0]).z    );
        if (storyMode)  //prevents movement while in storyMode
        {
          this.attr({x: from.x, y:from.y});
        }
        else
        {
          if (this.jumpState != 'IDLE')
          {
            this.attr({ y:from.y});
          }

          {
            if(this.x <= -20 || this.x >= map.playableAreaWidth * tileSize - tileSize /2)
            {
              this.attr({x: from.x});   
            };
            if(this.y <= -15 || this.y - this.currentJump >= stageHeight * tileSize - tileSize * 2)
            {
              this.attr({y: from.y});
            };
            
            if(this.hit('Obstacle'))
            {
              this.attr({x: from.x, y:from.y});
            }

            var potion = this.hit('Life');
            if(potion)
            {
              if (potion[0].obj.potionType === 'LIFE') this.trigger('Heal');
              else if (potion[0].obj.potionType === 'INVINCIBLE')
              {
                playMagic('turtle');
              }
              else if (potion[0].obj.potionType === 'BALLS')
              {
                playMagic('water');
              }
              else if (potion[0].obj.potionType === 'ARMOR')
              {
                this.armor = 2;
                this.faceDown();
                Crafty.audio.play('armor');
              }
              else
              {
                playMagic('lion');
              }

              potion[0].obj.destroy();
            }
          }
        }
      });

      return this;
    }});

  /**************************************/
  // BALL, it's our volley ball
  // Provides: moving and collision
  /**************************************/
  Crafty.c('Ball',{init: function()
  {
    this.movement = { x: 0, y: 0 };
    this.requires('Collision')
    .attr('direction', 'RIGHT')
    .bind('EnterFrame', function ()
    {
      if(!storyMode)
      {
        //the actual movement
        if ( difficulty.casual)
        {
          this.x += this.movement.x*0.9;
          this.y += this.movement.y*0.9;
        }
        else if (level === 5)
        {
          this.x += this.movement.x*1.2;
          this.y += this.movement.y*1.2;
        }
        else
        {
          this.x += this.movement.x*1.2;
          this.y += this.movement.y*1.2;
        }

        //ball curve adjustment
        if (this.state === 'UP')
        {
          //this.y -= 1;
          //this.currentJump += 1;
        }
        if (this.state === 'DOWN')
        {
          //this.y += 1;
          //this.currentJump -= 1;
        }
      }

      //BALL COLLISION:

      //hit floor or roof
      if (this.y <= -50 || this.y >= stageHeight * tileSize +50 || this.x <= -50 || this.x >= stageWidth * tileSize + 50)
      {
        if (!storyMode)
        {
          //change the bounce counter, according to whom missed the ball (player or computer)
          if (this.direction === 'LEFT')
          {
            if (difficulty.casual) changeBouncedCounter(-1);
            else changeBouncedCounter(-2);
            Crafty.audio.play('ball_miss');
          }
          else
          {
            changeBouncedCounter();
            Crafty.audio.play('ball_win');
          }

          //reset the ball
          this.x = boss.x;
          this.y = boss.y;
          this.direction = 'RIGHT';
        }
      }

      if(this.hit('Boss'))
      {
        if (this.direction === 'RIGHT')
        {
          this.direction = 'LEFT';   //this means that the ball will go from the boss to the player
  
          var targetX = player.x;
          var targetY = player.y;
  
          switch (level)
          {
            case 2:
              if (boss.bounceCounter % 2 === 0)
              {
                targetY = 40;
              }
              else
              {
                targetY = 200;
              }
              break;
            case 3:
              targetX += Crafty.math.randomInt(-50, 50);
              targetY += Crafty.math.randomInt(-50, 50);
              break;
            case 4:
              if (boss.bounceCounter % 5 < 3)
              {
                targetY = 40;
              }
              else
              {
                targetY = 200;
              }
              break;
            case 5:
              var targetX = Crafty.math.randomInt(0, map.playableAreaWidth)*tileSize;
              var targetY = Crafty.math.randomInt(1, stageHeight-1)*tileSize;
              break;
          }
          //we calculate a movement vector of size 1, by dividing the distance vector for its size
          var distanceX = targetX - this.x;
          var distanceY = targetY - this.y;
          distanceMod = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
          this.movement.x = (distanceX) / distanceMod * 4;      //this multiplication is just to speed up the movement
          this.movement.y = (distanceY) / distanceMod * 4;
          
          boss.attr('jumpState', 'JUMP_UP');
          boss.attr('currentJump', 0);
          
          boss.bounceCounter++;
          Crafty.audio.play('ball_return');
        }
      }
      if(this.hit('Player'))
      {
        if ( this.direction === 'LEFT' && ( player.jumpState === 'JUMP_UP' || player.jumpState === 'JUMP_DOWN' ) )
        {
          this.direction = 'RIGHT';   //this means that the ball will go from the player to the boss

          //randomly define a target for the ball
          if (level === 3) var targetX = Crafty.math.randomInt(map.playableAreaWidth + 2, stageWidth-1)*tileSize + (tileSize/2);   //level 3 is different because it have a lager river
          else var targetX = Crafty.math.randomInt(map.playableAreaWidth + 1, stageWidth-1)*tileSize + (tileSize/2);
          var targetY = Crafty.math.randomInt(0, stageHeight-1)*tileSize + (tileSize/2);
//          Crafty.e('2D, DOM, Color').color('red').attr({x: targetX, y: targetY, w: 5, h: 5, z: 200});

          //we calculate a movement vector of size 1, by dividing the distance vector for its size
          var distanceX = targetX - this.x;
          var distanceY = targetY - this.y;
          distanceMod = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
          this.movement.x = (distanceX) / distanceMod * 4;    //this multiplication is just to speed up the movement
          this.movement.y = (distanceY) / distanceMod * 4;

          boss.trigger('CatchTheBall', {x: targetX, y: targetY});   //tell the boss about the new target of the ball

          changeBouncedCounter();
          Crafty.audio.play('ball_hit');
        }
      }

    });
    return this;
  }});

  /**************************************/
  // BULLET, for anything you shoot
  // Provides: move... and spin (frame animation)!
  /**************************************/
  Crafty.c('Bullet',{init: function()
  {
    this.requires('SpriteAnimation')
    .animate('spin', 0, 0, 4)
    .requires('Collision')
    .collision(new Crafty.polygon
    (
      [10, 10], [20, 10],
      [20, 20], [10, 20]
    ))
    .bind('EnterFrame', function ()
    {
      //hit floor or roof
      if (this.y <= 0 || this.y >= stageHeight * tileSize)
        this.destroy();
      if (this.x <= 0 || this.x >= stageWidth * tileSize)
        this.destroy();

      this.x += this.dX;
      this.y += this.dY;

      var hitZombie = this.hit('enemy');
      if(hitZombie)
      {
        //hitZombie[0].obj.addComponent('Tween').tween({alpha: 0.0}, 50);
        hitZombie[0].obj.destroy();
        this.destroy();
        Crafty.audio.play('zombie_die');
      }
     /*  var hitSkeleton = this.hit('Skeleton');
      if(hitSkeleton)
      {
        //hitZombie[0].obj.addComponent('Tween').tween({alpha: 0.0}, 50);
        hitSkeleton[0].obj.destroy();
        this.destroy();
        Crafty.audio.play('zombie_die');
      } */
    });

      return this;
  }});

  Crafty.c('Blink', {
    init:function()
    {
      this.attr({blink: false, alpha: 1, 'blinkingRate': 3})
      .bind('EnterFrame', function(frame)
      {
         if(frame.frame % this.blinkingRate === 0 && this.blink)
         {
           this.visible = !this.visible;
         }
      })
      .bind('StartBlinking',function(frame)
      {
        this.blink = true;
      })
      .bind('StopBlinking',function(frame)
      {
        this.blink = false;
        this.visible = true;
      });
      
      return this;
    }
  });

  Crafty.c('Hurtable', {
    init:function()
    {
      this.attr({hurtState: 'OK', hurtCounter: 0, invincible: false})
      .bind('EnterFrame', function()
      {
        this.hurtCounter++;
        if (this.hurtCounter > 100)
        {
          this.hurtState = 'OK';
          this.invincible = false;
          this.trigger('StopBlinking');
        }
      })
      .bind('Hurt', function (invincibleItem)
      {
        if (invincibleItem)
        {
          this.hurtCounter = -300;  //so that it keeps invincible for more time
          this.invincible = true;
        }
        else if(this.hurtState === 'OK')
        {
          if (this.armor > 0)
          {
            this.armor--;
            Crafty.audio.play('armor');
            this.faceDown();    //just to update the sprite
            this.hurtCounter = 0;
          }
          else
          {
            if (this.life > 0)
            {
              this.life--;
              if (this.life <= 0)
              {
                if (!testingMode_immortal) 
                  Crafty.scene('gameOver');
              }
              else
              {
                if (this.life === 1) Crafty.audio.play('alert');
                else Crafty.audio.play('ouch');
                for(var i = 6; i > this.life; i--)     //update the life display
                {
                  lifeSprite[i-1].visible=false;
                };
                this.hurtCounter = 0;
              }
            }
          }
        }

        this.hurtState = 'HURT';
        this.trigger('StartBlinking');

      })
      .bind('Heal', function ()
      {
        Crafty.audio.play('heal');

        if (this.life < 6) this.life++;
        for(var i = 0; i < this.life; i++)
        {
          lifeSprite[i].visible=true;
        };

      });

      return this;
    }
  });
  
    Crafty.c('Jumper', {
    init:function()
    {
      this.attr('jumpState', 'IDLE')
      .attr('currentJump', 0)
      .bind('EnterFrame', function()
      {
        //jumping action
        if (this.jumpState === 'JUMP_UP')
        {
          this.y -= 5;
          this.currentJump += 5;
          if (this.currentJump >= 15) this.attr('jumpState', 'JUMP_DOWN');

/*           if(this.hit('Obstacle'))
          {
            this.y += 5;
            this.jumpSate = 'IDLE';
          } */
        }
        else if (this.jumpState === 'JUMP_DOWN')
        {
          this.y += 5;
          this.currentJump -= 5;
          if (this.currentJump <= 0)
          {
            this.attr('jumpState', 'IDLE');

            if(this.hit('Obstacle'))
            {
              this.y -= 5;
              this.jumpSate = 'IDLE';
            }
          }
        }
      })
      .bind('Jump', function()
      {
        this.attr({jumpState: 'JUMP_UP', currentJump: 0} );
      });
      
      return this;
    }
  });


  /**************************************/
  // GAMEMANAGER, for handling general and level-related stuff
  // Provides: move... and spin (frame animation)!
  /**************************************/
  Crafty.c('GameManager',{init: function()
  {
    this.attr('shootExplained', false)
    .attr('nextZombie', 0)
    .bind('EnterFrame', function (frame)
    {
      //add new enemies and potions
      if (!storyMode)
      {
        levelFrame++;

        if ((level === 1) && (!this.shootExplained) && (Crafty('enemy').length >= 5))
        {
           this.shootExplained = true;
           playLevel1Interlude2();
        }
        if (levelFrame % 520 === 0)     //creates life potion
        {
           var dice = Crafty.math.randomInt(0,6);
           if (dice > player.life)
           {
             var origin = randomPositionInsideField();
             if (origin.y >= (stageHeight*tileSize - 50)) origin.y = stageHeight*tileSize - 51;
             Crafty.e('2D, DOM, Life, cherry, Collision').attr(
             {
               x: origin.x + Crafty.math.randomNumber(-10,10)           //uses random number for a random displacement
               , y: origin.y + Crafty.math.randomNumber(-10,10)
               , z:1000, potionType:'LIFE'
             });
           }
        }
        if ((level != 1) && (!difficulty.casual) && (levelFrame % 600 === 0))
        {
           var dice = Crafty.math.randomInt(0,4);
           if (dice === 0)
           {
             var origin = randomPositionInsideField();
             if (origin.y >= (stageHeight*tileSize - 50)) origin.y = stageHeight*tileSize - 51;
             Crafty.e('2D, DOM, Life, potato, Collision').attr(
             {
               x: origin.x + Crafty.math.randomNumber(-10,10)           //uses random number for a random displacement
               , y: origin.y + Crafty.math.randomNumber(-10,10)
               , z:1000, potionType:'LION'
             });
           }
           else if (dice === 1)
           {
             var origin = randomPositionInsideField();
             if (origin.y >= (stageHeight*tileSize - 50)) origin.y = stageHeight*tileSize - 51;
             Crafty.e('2D, DOM, Life, watermelon, Collision').attr(
             {
               x: origin.x + Crafty.math.randomNumber(-10,10)           //uses random number for a random displacement
               , y: origin.y + Crafty.math.randomNumber(-10,10)
               , z:1000, potionType:'INVINCIBLE'
             });
           }
           else if (dice === 2)
           {
             var origin = randomPositionInsideField();
             if (origin.y >= (stageHeight*tileSize - 50)) origin.y = stageHeight*tileSize - 51;
             Crafty.e('2D, DOM, Life, blue_veggie, Collision').attr(
             {
               x: origin.x + Crafty.math.randomNumber(-10,10)           //uses random number for a random displacement
               , y: origin.y + Crafty.math.randomNumber(-10,10)
               , z:1000, potionType:'BALLS'
             });
           }
           else if (dice === 3)
           {
             var origin = randomPositionInsideField();
             if (origin.y >= (stageHeight*tileSize - 50)) origin.y = stageHeight*tileSize - 51;
             Crafty.e('2D, DOM, Life, carrot, Collision').attr(
             {
               x: origin.x + Crafty.math.randomNumber(-10,10)           //uses random number for a random displacement
               , y: origin.y + Crafty.math.randomNumber(-10,10)
               , z:1000, potionType:'ARMOR'
             });
           }
        }

        if (Crafty('enemy').length <= 30 || (!difficulty.casual && Crafty('enemy').length <= 40))
        levelDesign();
      }
    })
     .bind('KeyDown', function ()
    {
      if (this.isDown('P') || this.isDown('p') )
      {
        //storyMode = !storyMode;
        Crafty.pause();
      };

      //cheat:
      if (this.isDown('5') && this.isDown('6'))
      {
        finishLevel();
      }
      else if(testingMode)
      {
        if (this.isDown('0'))
        {
          level = 1; Crafty.scene('mainMenu');
        }
        if (this.isDown('9'))
        {
          level = 1; Crafty.scene('introBeach');
        }
        if (this.isDown('8'))
        {
          level = 1; Crafty.scene('mainMenu2');
        }
        if (this.isDown('1'))
        {
          startLevel(1);
        }
        if (this.isDown('2'))
        {
          startLevel(2);
        }
        if (this.isDown('3'))
        {
          startLevel(3);
        }
        if (this.isDown('4'))
        {
          startLevel(4);
        }
        /* if (this.isDown('5'))
        {
          startLevel(5);
        } */
        if (this.isDown('C') || this.isDown('c'))
        {
          player.armor = (player.armor + 1)%3;
          player.faceDown();
        }
      }

    })
    ;
      return this;
  }});

  createEnemyComponents();
}
