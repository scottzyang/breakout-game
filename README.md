# Breakout Game - Atari 1976
<i>Scott Yang - ACS 1320 JavaScript Foundations</i>

## Project overview:

This project is a recreation of the video game <i>Breakout</i>, released by Atari in 1976. 

This video game allows the user to control a paddle (via their keyboard arrows or mouse cursor) to deflect a moving ball towards a grid of bricks. Each brick in contact with the ball will be counted as a point. User is allowed 3 lives, and will decrement if the user fails to deflect the ball. 

The project was initially created utilizing a single `scripts.js` file to handle the logic and game functionality. Later iterations of the project required the conversion to `object oriented programming` through the creation of multiple classes to represent the many game objects. 

## Assignment Requirements:

For this assignment you will need to complete the following requirements:

Classes:
- `Sprite` - serves as parent class for game objects.
- `Ball` - renders and handles ball movement.
- `Paddle` - renders and handles paddle movement via event listeners.
- `Brick` - renders individual bricks.
- `Bricks` - populates an array of `Brick` instances and renders into a grid on gameboard.
- `Score` - renders and displays current points.
- `Lives` - renders and displays a lives count.
- `Game` - handles instantiation of all game objects and the `run` method to start the game. 

## Core Technologies/Principles Used
- `JavaScript`
- `HTML`
- `Object Oriented Programming`


