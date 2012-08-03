#Volley Zombie - Game Design

## Overview
    The level is divided in two fields by a river. The left, bigger side is where the player character is. The right, smaller site, is where the boss is placed.
    The player can move in four directions + diagonals, shoot in four directions + diagonal, and jump. He has to jump and hit the ball with his head to return it to the boss. The goal is to return a given number of balls. When the player misses a ball, he looses 2 balls. If the boss miss a ball, the player wins 1 ball
    During the match, monsters will appear in the player's field. If the player is hit by a monster, it gets hurt and gets temporary invincibility. When the monster is hit by a bullet, it dies.
    During the matchs, magical items will appear in the player's field. These items will trigger an effect when got by a player


## Bosses
* Baldric
* Maskman
* Princess
* Robot
* Mage

## Magical Items
* Life potion
    * *Effect:* Increases the player' life by 1
    * *Image:* Cherry
* Destroy enemies
    * *Effect:* Destroy all monsters in the screen
    * *Image:* Potato, triggers the Fire Lion animation
* Increase score
    * *Effect:* Increases the score of the player by 5
        * If the boss is the Robot, then it increases additional + 2
    * *Image:* Weird blue vegie, triggers the Water Tentacle animation (in the boss)
* Protective shield
    * *Effect:*
        * Prevents the player from getting damage
        * Kills any monster touched by the player
    * *Duration:* 400 frames
    * *Image:* Water melon, triggers the Turtle Shield animation
* Armor
    * *Effect:* Adds an armor to the player
        * The armor prevents the player from loosing life
        * When the player is first hit, he looses a part of the armor and get temporary invencibility
        * When the player is hit for a second time, he looses the final piece of the armor and gets temporary invencibility. This is the end of the effect
    * *Duration:* After the player is hit twice, the effect is over
    * *Image:* Potato, triggers the Fire Lion animation

## Monsters
* Bat
    * *Speed:* 
    * ![mark](mark.jpg) *Movement:* circle around the player
    * *Origin:* in the outer borders of the playable field
* Eye Ball
    * *Speed:* 
    * *Movement:* follow the player
    * *Origin:* in the outer borders of the playable field
* Ghost
    * *Speed:* 
    * *Movement:* follow the player
    * *Origin:* in the outer borders of the playable field
* Pumpking
    * *Speed:* 
    * *Movement:* follow the player, but with largely reduced horizontal movement
    * *Origin:* in the outer borders of the playable field
* Skeleton
    * *Speed:* fast, but takes a long interval to recalculate the route
    * *Movement:* follow the player
    * *Origin:* in the outer borders of the playable field
* Slime
    * *Speed:* 
    * *Movement:* moves from right to the left
    * *Origin:* close to the river
* Snake
    * *Speed:* 
    * *Movement:* diagonal movement, from an edge to the other. More horizontal than vertical
    * *Origin:* 
* Worm (small)
    * *Movement:* stationary, very little movement
    * *Origin:* inside the playable field
* Worm (big)
    * *Movement:* stationary, very little movement
    * *Origin:* inside the playable field
* Zombie
    * *Speed:* slow
    * *Movement:* follow the player
    * *Origin:* in the outer borders of the playable field