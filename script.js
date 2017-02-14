
  
var mainCanvas = document.getElementById('mainCanvas');
var start = document.getElementById('start');


//-- getting "tile" canvas elements in DOM --//
var canvas0 = document.getElementById("tileCanvas1");
var canvas1 = document.getElementById("tileCanvas2");
var canvas2 = document.getElementById("tileCanvas3");
var canvas3 = document.getElementById("tileCanvas4");
var canvas4 = document.getElementById("tileCanvas5");
var canvas5 = document.getElementById("tileCanvas6");
var canvas6 = document.getElementById("tileCanvas7");
var canvas7 = document.getElementById("tileCanvas8");
var canvas8 = document.getElementById("tileCanvas9");
var canvas9 = document.getElementById("tileCanvas10");
var canvas10 = document.getElementById("tileCanvas11");
var canvas11 = document.getElementById("tileCanvas12");
var canvas12 = document.getElementById("tileCanvas13");
var canvas13 = document.getElementById("tileCanvas14");
var canvas14 = document.getElementById("tileCanvas15");
var canvas15 = document.getElementById("tileCanvas16");
//-- END -- getting "tile" canvas elements in DOM --//

//-- array of all "tile" canvases --//
var canvases = document.querySelectorAll('canvas');
var canvasArray = [canvas0, canvas1, canvas2, canvas3, canvas4, canvas5, canvas6, canvas7, canvas8, canvas9, canvas10, canvas11, canvas12, canvas13, canvas14, canvas15];


// Github hosted images //
// RED TILE //
var redTileImage = new Image();
var redTile = document.createElement("canvas");
redTile.style.visibility = "hidden";
var ctxR = redTile.getContext("2d");
// var src = "https://raw.githubusercontent.com/jrleja0/tile-swapping-game-jrleja0/master/Image/covent_garden.jpg"
// var src = "file:///Users/jrleja/Documents/Tile%20App%202_4%20Colors/Abstraction_files/Red%20Tile.jpeg";
var srcR = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Red%20Tile.jpeg";

redTileImage.crossOrigin = "Anonymous";

redTileImage.onload = function() {
    redTile.width = redTileImage.width;
    redTile.height = redTileImage.height;
    ctxR.drawImage(redTileImage, 0, 0);
}

redTileImage.src = srcR;

// BLUE TILE //
var blueTileImage = new Image();
var blueTile = document.createElement("canvas");
blueTile.style.visibility = "hidden";
var ctxB = blueTile.getContext("2d");
var srcB = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Blue%20Tile.jpeg";

blueTileImage.crossOrigin = "Anonymous";

blueTileImage.onload = function() {
    blueTile.width = blueTileImage.width;
    blueTile.height = blueTileImage.height;
    ctxB.drawImage(blueTileImage, 0, 0);
}

blueTileImage.src = srcB;

// GREEN TILE //
var greenTileImage = new Image();
var greenTile = document.createElement("canvas");
greenTile.style.visibility = "hidden";
var ctxG = greenTile.getContext("2d");
var srcG = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Green%20Tile.jpeg";

greenTileImage.crossOrigin = "Anonymous";

greenTileImage.onload = function() {
    greenTile.width = greenTileImage.width;
    greenTile.height = greenTileImage.height;
    ctxG.drawImage(greenTileImage, 0, 0);
}

greenTileImage.src = srcG;

// YELLOW TILE //
var yellowTileImage = new Image();
var yellowTile = document.createElement("canvas");
yellowTile.style.visibility = "hidden";
var ctxY = yellowTile.getContext("2d");
var srcY = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Yellow%20Tile.jpeg";

yellowTileImage.crossOrigin = "Anonymous";

yellowTileImage.onload = function() {
    yellowTile.width = yellowTileImage.width;
    yellowTile.height = yellowTileImage.height;
    ctxY.drawImage(yellowTileImage, 0, 0);
}

yellowTileImage.src = srcY;
/////////////////////////////////
// END of Github hosted image //


//--//--//--//--//--//--//----//--//--//--//--//--//--//
//--//--//--//--//-- START FUNCTION --//--//--//--//--//

var start = function() {
    
  function rotate0(canvas, tileColor) {
    tileColor = this.tileColor || tileColor;
    canvas.style.display = "block";
    var cx = canvas.getContext("2d");
    //cx.clearRect(0, 0, canvas.width, canvas.height);   
    cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.width, canvas.height);
    return [canvas, tileColor];
  }  
    
    function rotate90(canvas, tileColor) {      
      tileColor = this.tileColor || tileColor;
      canvas.style.display = "block";
      var cx = canvas.getContext("2d"); 
      cx.save();
      cx.translate(canvas.width, 0);
      cx.rotate(90*Math.PI/180);    
      //cx.clearRect(0, 0, canvas.height, canvas.width);   
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.height, canvas.width);
      cx.restore();
      return [canvas, tileColor];
    }           
     
    function rotate180(canvas, tileColor) {  
      tileColor = this.tileColor || tileColor;
      canvas.style.display = "block";
      var cx = canvas.getContext("2d");
      cx.save();
      cx.translate(canvas.width, canvas.height);
      cx.rotate(180*Math.PI/180);
      //cx.clearRect(0, 0, canvas.width, canvas.height);   
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.width, canvas.height);
      cx.restore();
      return [canvas, tileColor];
    }
  
    function rotate270(canvas, tileColor) { 
      tileColor = this.tileColor || tileColor;
      canvas.style.display = "block";
      var cx = canvas.getContext("2d");
      cx.save();
      cx.translate(0, canvas.height);
      cx.rotate(270*Math.PI/180);
      //cx.clearRect(0, 0, canvas.height, canvas.width);   
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.height, canvas.width);
      cx.restore();
      return [canvas, tileColor];
    }

    function clearCanvas(canvas) {
      var cx = canvas.getContext("2d");
      cx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
  
  
///  
/// Calling Functions:
///     
  
  var tilePath0 = [canvas0, canvas4, canvas8, canvas12, canvas12, canvas13, canvas13, canvas9, canvas5, canvas1, canvas1, canvas0]
  var tilePath2 = [canvas2, canvas6, canvas10, canvas14, canvas14, canvas15, canvas15, canvas11, canvas7, canvas3, canvas3, canvas2];
  var tilePath8 = [canvas8, canvas9, canvas10, canvas11, canvas11, canvas7, canvas7, canvas6, canvas5, canvas4, canvas4, canvas8];
  
  
  // pathEditClock() creates a new clockwise path from the original counter-clockwise path.
  function pathEditClock(path, startIndex) {
    var newPath = [];
    //var startIndex = [path.length-3]
    for (var i = startIndex; i >= 0; i--)
        newPath.push(path[i]);
    for (var j = path.length-1; j > startIndex; j--)
        newPath.push(path[j]);
    return newPath;    
  }
  
  // pathEditCounter() creates a new counter-clockwise path from the original counter-clockwise path.
  function pathEditCounter(path, startIndex) {
    var newPath = [];
    for (var i = startIndex; i < path.length; i++)
      newPath.push(path[i]);
    for (var j = 0; j < startIndex; j++)
      newPath.push(path[j]);
    return newPath;
  }


  var tilePath1 = pathEditClock(tilePath0, 9);
  var tilePath3 = pathEditClock(tilePath2, 9);
  var tilePath12 = pathEditClock(tilePath0, 3);
  var tilePath13 = pathEditCounter(tilePath0, 6);
  var tilePath14 = pathEditClock(tilePath2, 3);
  var tilePath15 = pathEditCounter(tilePath2, 6);
  var tilePath4 = pathEditClock(tilePath8, 9);
  var tilePath7 = pathEditCounter(tilePath8, 6);
  var tilePath11 = pathEditClock(tilePath8, 3);
  

 function TileObj(path) {
   //this.tileColor = tileColor;     
   this.path = path;
   this.rotate0 = rotate0;
   this.rotate90 = rotate90;
   this.rotate180 = rotate180;
   this.rotate270 = rotate270;
 }
  
   
  function RedTileObj(path) {
    this.tileColor = redTile;    
    this.path = path;
  }
  
  function BlueTileObj(path) {
    this.tileColor = blueTile;
    this.path = path;
  }
  
  function GreenTileObj(path) {
    this.tileColor = greenTile;
    this.path = path;
  }
  
  function YellowTileObj(path) {
    this.tileColor = yellowTile;
    this.path = path;
  }
  
  RedTileObj.prototype = new TileObj();
  BlueTileObj.prototype = new TileObj();
  GreenTileObj.prototype = new TileObj();
  YellowTileObj.prototype = new TileObj();
       

  var red_1 = new RedTileObj(tilePath0);
  red_1.direction = "counterTop";
  red_1.rotate270(canvas0);
  
    
  var blue_1 = new BlueTileObj(tilePath1);
  blue_1.direction = "clockTop";
  blue_1.rotate90(canvas1);
  
  
  var red_2 = new RedTileObj(tilePath2);
  red_2.direction = "counterTop";
  red_2.rotate270(canvas2);
  
  
  var blue_2 = new BlueTileObj(tilePath3);
  blue_2.direction = "clockTop";
  blue_2.rotate90(canvas3);
    
    
  var red_3 = new RedTileObj(tilePath13);
  red_3.direction = "counterBottom";
  red_3.rotate90(canvas13);
  
    
  var blue_3 = new BlueTileObj(tilePath12);
  blue_3.direction = "clockBottom";
  blue_3.rotate270(canvas12);
  
  
  var red_4 = new RedTileObj(tilePath15);
  red_4.direction = "counterBottom";
  red_4.rotate90(canvas15);
  
  
  var blue_4 = new BlueTileObj(tilePath14);
  blue_4.direction = "clockBottom";
  blue_4.rotate270(canvas14);
  
  
  var yellow_1 = new YellowTileObj(tilePath8);    // 90  0  270 180
  yellow_1.direction = "counterLeft";
  yellow_1.rotate180(canvas8);
  
    
  var green_1 = new GreenTileObj(tilePath4);     // 90 180 270 0 
  green_1.direction = "clockLeft";
  green_1.rotate0(canvas4);
  
  
  var yellow_2 = new YellowTileObj(tilePath7);    // 270 180 90 0
  yellow_2.direction = "counterRight";
  yellow_2.rotate0(canvas7);
  
  
  var green_2 = new GreenTileObj(tilePath11);    // 270 0 90 180
  green_2.direction = "clockRight";
  green_2.rotate180(canvas11);
  
  
  
  // //
  // Animate Tiles
  // //
  
  // direction: clockTop = clockwise from top // clockBottom = clockwise from bottom // 
  //            counterTop = counter-clockwise from top // clockbottom = counter-clockwise from bottom //
  function animateTile(object, direction) {
      direction = object.direction || direction;
      var path = object.path; 
      var cyc = 0;  // cycle
      var rotateOrderArray = [];
      var tileColor = object.tileColor;
      if (direction === "clockTop") {
        rotateOrderArray = [object.rotate180, object.rotate270, object.rotate0, object.rotate90];
      }
      else if (direction === "clockBottom") {
        rotateOrderArray = [object.rotate0, object.rotate90, object.rotate180, object.rotate270];
      }    
      else if (direction === "counterTop") {
        rotateOrderArray = [object.rotate180, object.rotate90, object.rotate0, object.rotate270];
      }
      else if (direction === "counterBottom") {
        rotateOrderArray = [object.rotate0, object.rotate270, object.rotate180, object.rotate90];
      }      
      else if (direction === "clockLeft") {
        rotateOrderArray = [object.rotate90, object.rotate180, object.rotate270, object.rotate0];
      }
      else if (direction === "clockRight") {
        rotateOrderArray = [object.rotate270, object.rotate0, object.rotate90, object.rotate180];
      }    
      else if (direction === "counterLeft") {
        rotateOrderArray = [object.rotate90, object.rotate0, object.rotate270, object.rotate180];
      }
      else if (direction === "counterRight") {
        rotateOrderArray = [object.rotate270, object.rotate180, object.rotate90, object.rotate0];
      }
           
        var loop_animate_counter = setInterval(function() {
            if (cyc === 1 || cyc === 3 || cyc === 7 || cyc === 9)    // erase previous canvas at cyc = 1 3 7 9
              path[cyc-1].style.display = "none";
             
            if (cyc === 1 || cyc === 7) {
              rotate180(canvas0, blueTile);
              rotate180(canvas3, redTile);
              rotate0(canvas12, redTile);
              rotate0(canvas15, blueTile);              
            }                         
            if (cyc === 2 || cyc === 8) {
              canvas0.style.display = "none";
              canvas3.style.display = "none";
              canvas12.style.display = "none";
              canvas15.style.display = "none";                           
            }          
          
            if (cyc < 4)
              rotateOrderArray[0](path[cyc], tileColor);  // rot180
            else if (cyc > 3 && cyc < 6)
              rotateOrderArray[1](path[cyc], tileColor);   // rot270
            else if (cyc > 5 && cyc < 10)
              rotateOrderArray[2](path[cyc], tileColor);   // rot0
            else if (cyc > 9)
              rotateOrderArray[3](path[cyc], tileColor);  // rot90            
                    
            cyc = (cyc+1) % path.length;                 
        }, 2000);
    
  }
    

  
  function startAnimationsTopRow() {  
    animateTile(red_1);
    animateTile(blue_1);     
    animateTile(red_2);
    animateTile(blue_2);   
  }
  
  function startAnimationsBottomRow() {
    animateTile(red_3);
    animateTile(blue_3);
    animateTile(red_4);
    animateTile(blue_4);
  }
  
  function startAnimationsMiddleRows() {
    animateTile(yellow_1);
    animateTile(green_1);
    animateTile(yellow_2);
    animateTile(green_2);    
  }
  
  function startAnimations_All() {
    startAnimationsTopRow();
    startAnimationsBottomRow();
    startAnimationsMiddleRows();
  }
    
  startAnimations_All();
        
  
}  
