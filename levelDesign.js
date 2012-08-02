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

function levelDesign()
{
  if (level === 1)       //monsters logic for level 1:
  {
    if (difficulty.casual)
    {
      if (bouncedCounter >= 1)
      {
        if (levelFrame % 100 === 0)
        {
          createMonster('zombie');
        }
      }
      if (bouncedCounter >= 8)
      {
        if (levelFrame % 80 === 0)
        {
          createMonster('zombie');
        }
      }
      if (bouncedCounter >= 14)
      {
        if (levelFrame % 100 === 0)
        {
          createMonster('worm_small');
        }
      }
      if (bouncedCounter >= 20)
      {
        if (levelFrame % 100 === 0)
        {
          createMonster('bat');
        }
      }
    }
    else if (difficulty.hard)
    {
      if (bouncedCounter >= 1)
      {
        if (levelFrame % 50 === 0)
        {
          createMonster('zombie');
        }
      }
      if (bouncedCounter >= 8)
      {
        if (levelFrame % 80 === 0)
        {
          createMonster('zombie');
        }
      }
      if (bouncedCounter >= 14)
      {
        if (levelFrame % 100 === 0)
        {
          createMonster('worm_small');
        }
      }
      if (bouncedCounter >= 17)
      {
        if (levelFrame % 100 === 0)
        {
          createMonster('bat');
        }
      }
    }
  }
  else if (level === 2)       //monsters logic for level 2:
  {
    if (bouncedCounter >= 1)
    {
      if (levelFrame % 150 === 0)     //200
      {
        createMonster('snake');
      }
    }
    if (bouncedCounter >= 4)
    {
      if (levelFrame % 80 === 0)
      {
        createMonster('zombie');
      }
    }
    if (bouncedCounter >= 14)
    {
      if (levelFrame % 100 === 0)
      {
        createMonster('pumpking');
      }
    }
    if (bouncedCounter >= 22)
    {
      if (levelFrame % 100 === 0)
      {
        createMonster('zombie');
      }
    }
  }
  else if (level === 3)       //monsters logic for level 3:
  {
    if (bouncedCounter >= 0)
    {
      if (levelFrame % 80 === 0)     //50
      {
        createMonster('zombie');
      }
    }
    if (bouncedCounter >= 3 && bouncedCounter <= 20)
    {
      if (levelFrame % 80 === 0)
      {
        createMonster('eye_ball');
      }
    }
    if (bouncedCounter >= 16)
    {
      if (levelFrame % 100 === 0)
      {
        createMonster('zombie');
      }
    }
    if (bouncedCounter >= 18)
    {
      if (levelFrame % 25 === 0)     //50
      {
        createMonster('slime');
      }
    }
  }
  else if (level === 4)       //monsters logic for level 4:
  {
    if (bouncedCounter >= 0 && bouncedCounter <= 16)
    {
      if (levelFrame % 60 === 0)     //50
      {
        createMonster('bat');
      }
    }
    if (bouncedCounter >= 3 && bouncedCounter <= 20)
    {
      if (levelFrame % 80 === 0)
      {
        createMonster('zombie');
      }
    }
    if (bouncedCounter >= 16)
    {
      if (levelFrame % 70 === 0)
      {
        createMonster('pumpking');
      }
    }
    if (bouncedCounter >= 18)
    {
      if (levelFrame % 50 === 0)     //50
      {
        createMonster('worm_small');
      }
    }
    if (bouncedCounter >= 18)
    {
      if (levelFrame % 100 === 0)     //50
      {
        createMonster('bat');
      }
    }

  }
  else if (level === 5)       //monsters logic for level 5:
  {
    if (bouncedCounter >= 0 && bouncedCounter <= 4)
    {
      if (difficulty.casual)
      {
        if (levelFrame % 230 === 0)     //200
        {
          createMonster('skeleton');
        }
      }
      else
      {
        if (levelFrame % 150 === 0)     //200
        {
          createMonster('skeleton');
        }
      }
    }
    if (bouncedCounter >= 4 && bouncedCounter <= 14)
    {
      if (levelFrame % 65 === 0)
      {
        createMonster('zombie');
      }
    }
    if (bouncedCounter >= 5 && bouncedCounter <= 10)
    {
      if (levelFrame % 100 === 0)
      {
        createMonster('ghost');
      }
    }
    if (bouncedCounter >= 13 && bouncedCounter <= 20)
    {
      if (levelFrame % 130 === 0)
      {
        createMonster('worm_big');
      }
    }
    if (bouncedCounter >= 15 && bouncedCounter <= 21)
    {
      if (levelFrame % 90 === 0)
      {
        createMonster('snake');
      }
    }
    if (bouncedCounter >= 21)
    {
      if (levelFrame % 75 === 0)
      {
        createMonster('eye_ball');
      }
    }
    if (bouncedCounter >= 22 )
    {
      if (levelFrame % 120 === 0)
      {
        createMonster('skeleton');
      }
    }
    if (bouncedCounter >= 24)
    {
      if (levelFrame % 80 === 0)
      {
        createMonster('bat');
      }
    }
    if (bouncedCounter >= 25)
    {
      if (levelFrame % 90 === 0)
      {
        createMonster('slime');
      }
    }
    if (bouncedCounter >= 26)
    {
      if (levelFrame % 70 === 0)
      {
        createMonster('pumpking');
      }
    }
    if (bouncedCounter >= 28)
    {
      if (levelFrame % 55 === 0)
      {
        createMonster('eye_ball');
      }
    }
  }
  else
  {
    if (levelFrame % 50 === 0)
    {
      createMonster();
    }
  }

}