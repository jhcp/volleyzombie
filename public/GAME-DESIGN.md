# Volley Zombie - Game Design

## Overview

The level is divided in two sides by a river. The left, bigger side is where the player character is contained.
The right, smaller side, is where the boss is placed.

The player can move in four directions + diagonals (W, A, S, D), shoot in four directions + diagonals (arrow keys), 
and jump (SPACE or SHIFT). 
He has to jump and hit the ball with his head to return it to the boss. 
The goal is to return a certain number of balls, which varies depending on the stage and on the difficulty. 

When the player misses a ball, he looses point(s). If the boss missess a ball, the player wins 1 point.

During the match, monsters will appear in the player's field. When the monster is hit by a bullet, it dies.
If the player is hit by a monster, it gets hurt and gets temporary invincibility. If the player has zero points and
misses a ball, it gets hurt as well.

When life is depleted, it's game over.

During the matches, magical items will appear in the player's field. These items will trigger a special
effect when caught by a player (see below).

It is possible to pause by pressing P.

## Difficulty

The difficulty mode changes the following parameters:
 * number of points required to beat a stage
 * appearance rate of monsters
 * number of points lost when the player misses a ball (1 for casual, 2 for hard)
 * number of stages (hard mode has two extra stages: Maskman and Robot)
 * trophy (silver trophy for casual, gold trophy for hard)

## Bosses/stages (SPOILER ALERT!)

* Baldric
   * always targets the current position of the player
   * Monsters (casual): Zombie, Small Worm 
   * Monsters (hard): Zombie, Small Worm, Bat 
* Maskman (only on hard mode)
   * throws the ball at a repeating pattern (1 + 1)
   * Monsters (hard): Zombie, Snake, Pumpking
* Princess
   * always targets nearby the player's position
   * Monsters (casual): Zombie, Eye Ball
   * Monsters (hard): Zombie, Eye Ball, Slime
* Robot (only on hard mode)
   * throws the ball at a repeating pattern (2 + 3)
   * Monsters (hard): Zombie, Small Worm, Bat, Pumpking
* Mage
   * throws the ball at random, which is why it's so hard
   * Monsters (casual): Zombie, Skeleton, Ghost, Big Worm, Snake
   * Monsters (hard): Zombie, Skeleton, Ghost, Big Worm, Snake, Eye Ball, Slime, Pumpking

## Magical Items

* Cherry (Life potion)
    * *Effect:* Increases the player' life by 1
    * *Animation:* none
* Potato (Destroy enemies)
    * *Effect:* Destroy all monsters in the screen
    * *Animation:* Fire Lion
* Weird blue vegie (Increase score)
    * *Effect:* Increases the score of the player by 5
        * If the boss is the Robot, then it increases additional + 2, since it is less resistant to water
    * *Animation:* Water Tentacle (in the boss)
* Watermelon (Protective shield)
    * *Effect:*
        * Prevents the player from getting damage
        * Kills any monster touched by the player
    * *Duration:* 400 frames
    * *Animation:* Turtle Shield
* Carrot (Armor)
    * *Effect:* Adds an armor to the player
        * The armor prevents the player from loosing life
        * When the player is first hit, he looses a part of the armor and get temporary invencibility
        * When the player is hit for a second time, he looses the final piece of the armor and gets temporary
         invincibility. This is the end of the effect
    * *Duration:* After the player is hit twice, the effect is over
    * *Animation:* none

## Monsters

* Bat
    * *Speed:* 
    * *Movement:* follows the player
    * *Origin:* in the outer borders of the playable field
* Eye Ball
    * *Speed:* 
    * *Movement:* follows the player
    * *Origin:* in the outer borders of the playable field
* Ghost
    * *Speed:* 
    * *Movement:* follows the player
    * *Origin:* in the outer borders of the playable field
* Pumpking
    * *Speed:* 
    * *Movement:* follows the player, but with largely reduced horizontal movement
    * *Origin:* in the outer borders of the playable field
* Skeleton
    * *Speed:* fast, but takes a long interval to recalculate the target
    * *Movement:* follows the player
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
    
 ## Cheat code
 
 There is a cheat code for skipping a level, you just need to press a certain combination of two numeric keys.
 
 ## Known issues
 
 * the ball may be thrown in a position that is impossible for the player to hit it
 * a magic item may spawn in a position that is impossible for the player to reach
 * a monster may spawn over the player, which is an unfair hit
 * depending on the player's keyboard, if multiple keys are pressed it is not possible to jump. E.g., in my keyboard,
 I'm unable to jump when pressing the left, up, and right arrow keys simultaneously.
 * the player may get stuck with a constant movement, making the game impossible to continue