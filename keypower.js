const moveMouse = () => {
  var robot = require("robotjs");

  //Get the mouse position, retuns an object with x and y.
  var mouse = robot.getMousePos();
  console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);

  //Move the mouse down by 100 pixels.
  robot.moveMouse(mouse.x, mouse.y + 100);
};

setInterval(() => {
  moveMouse();
}, 5000);
