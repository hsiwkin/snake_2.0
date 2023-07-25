# Snake game

## TODO:
- block generating the same position for food two times in a row
- all game logic related objects should modify the game board
  which should be later used by a game drawing mechanism
  (triggered every frame in requestAnimationFrame loop) 
- input processing fixes:
  - queue direction commands (sometimes, when I change it fast some of them are lost)
- add gif to README
- connect it with heroku, add auto-deployment
- Refactor GameObject (snake does not need to have color info in it, food does)
