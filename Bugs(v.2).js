// Lesson always create a backup file before making serious changes. //

//variable
var namespace = "http://www.w3.org/2000/svg";
var bug = [];
var x = 0;
var y = 0;
var moveX = [];
var moveY = [];
var maxLength = 0;

var bullet = [];
var bulletX = [];
var bulletY = [];
var bulletLength = 0;
var bulletSpeed = 3;
var i = 0;
var n = 0;
var placeHolder = [];

var radius = 200;
var lightIntensity = 0.6;
var lampX = 500;
var lampY = 245;
var luminosity = 100;
var killCount = 0;
var symbol = "life"; 
var beginning = true;
var enderGame = false;
var gameMode = "Normal";
var pauseStatus = 0;
var gameScore = 0;
var gameVersion = 1.1;
//variable

var arena = makeRect(0, 0, 1000, 450, "black");
var textLight = makeText("Luminosity: " + luminosity + ";", 30, 350, 20, "Special Elite", "white", 1);
var textKill = makeText("Kill Count: " + killCount + ";", 30, 380, 20, "Special Elite", "white", 1);
var textSymbol = makeText("Symbol: " + symbol + ";", 30, 410, 20, "Special Elite", "white", 1);
var versionText = makeText("Version " + gameVersion, 930, 443, 10, "Special Elite", "white", 1);
var light = makeCircle(lampX, lampY, radius, "yellow", lightIntensity);
var lamp = makeImage("Piskel Art/Lamp.png", (lampX - 109.5), (lampY - 125), 219, 330, 1);
var lightEnd = makeCircle(lampX, lampY, radius/3, "yellow", 0);
lightEnd.addEventListener("mouseenter", function(){symbol = "an idea";});
lightEnd.addEventListener("mouseleave", function(){symbol = "life";});

var gameOverText = "";

var startText1 = makeText("Lamplit Night", 318, 252, 50, "Special Elite", "white", 1);
startText1.addEventListener("mouseenter", function(){symbol = "an idea";});
startText1.addEventListener("mouseleave", function(){symbol = "life";});
var startText2 = makeText("Lamplit Night", 320, 250, 50, "Special Elite", "black", 1);
startText2.addEventListener("mouseenter", function(){symbol = "an idea";});
startText2.addEventListener("mouseleave", function(){symbol = "life";});
//bug[maxLength] = makeImage("Piskel Art/Gnat.png", 50, 60, 40, 32, 1);

//makeImage("Piskel Art/Firefly.png", 20, 20, 66, 39, 1);
if(!sessionStorage.cursorColor){
  sessionStorage.cursorColor = "red";
}
if(sessionStorage.cursorColor == "red"){ var cursor = makeImage("Piskel Art/Cursor1.png", 20, 20, 88, 52, 1); }
else if(sessionStorage.cursorColor == "green"){ var cursor = makeImage("Piskel Art/Cursor.png", 20, 20, 88, 52, 1); }
cursor.setAttribute("cursor", "pointer");
cursor.addEventListener("mouseenter", function(){symbol = "brainstorm ER";});
cursor.addEventListener("mouseleave", function(){symbol = "life";});

if(localStorage.easyScore){ var easySText = makeText("High Score: " + localStorage.easyScore + ";", 850, 82, 10, "Special Elite", "white", 1); }
var easyButton = makeRect(850, 90, 110, 30, "white", 1); //245
easyButton.setAttribute("cursor", "pointer");
easyButton.addEventListener("click", function(){gameMode="Easy"; startGame();});
easyButton.addEventListener("mouseenter", function(){easyText.setAttribute("fill", "white");});
easyButton.addEventListener("mouseleave", function(){easyText.setAttribute("fill", "black");});
var easyText = makeText("Easy", 874, 112, 25, "Special Elite", "black", 1);
easyText.setAttribute("cursor", "pointer");
easyText.addEventListener("click", function(){gameMode="Easy"; startGame();});

if(localStorage.normalScore){ var normalSText = makeText("High Score: " + localStorage.normalScore + ";", 850, 162, 10, "Special Elite", "white", 1); }
var normalButton = makeRect(850, 170, 110, 30, "white", 1); //378
normalButton.setAttribute("cursor", "pointer");
normalButton.addEventListener("click", function(){gameMode="Normal"; startGame();});
normalButton.addEventListener("mouseenter", function(){normalButton.setAttribute("fill", "#DCDCDC"); normalText.setAttribute("fill", "#DCDCDC");});
normalButton.addEventListener("mouseleave", function(){normalButton.setAttribute("fill", "white"); normalText.setAttribute("fill", "black");});
var normalText = makeText("Normal", 863, 192, 24, "Special Elite", "black", 1);
normalText.setAttribute("cursor", "pointer");
normalText.addEventListener("click", function(){gameMode="Normal"; startGame();});
normalText.addEventListener("mouseenter", function(){normalButton.setAttribute("fill", "#DCDCDC"); normalText.setAttribute("fill", "white");});
normalText.addEventListener("mouseleave", function(){normalButton.setAttribute("fill", "white"); normalText.setAttribute("fill", "black");});

if(localStorage.hardScore){ var hardSText = makeText("High Score: " + localStorage.hardScore + ";", 850, 242, 10, "Special Elite", "white", 1); }
var hardButton = makeRect(850, 250, 110, 30, "white", 1); //511
hardButton.setAttribute("cursor", "pointer");
hardButton.addEventListener("click", function(){gameMode="Hard"; startGame();});
hardButton.addEventListener("mouseenter", function(){hardButton.setAttribute("fill", "#808080"); hardText.setAttribute("fill", "#808080");});
hardButton.addEventListener("mouseleave", function(){hardButton.setAttribute("fill", "white"); hardText.setAttribute("fill", "black");});
var hardText = makeText("Hard", 876, 272, 24, "Special Elite", "black", 1);
hardText.setAttribute("cursor", "pointer");
hardText.addEventListener("click", function(){gameMode="Hard"; startGame();});
hardText.addEventListener("mouseenter", function(){hardButton.setAttribute("fill", "#808080"); hardText.setAttribute("fill", "white");});
hardText.addEventListener("mouseleave", function(){hardButton.setAttribute("fill", "white"); hardText.setAttribute("fill", "black");});

if(localStorage.insaneScore){ var insaneSText = makeText("High Score: " + localStorage.insaneScore + ";", 850, 322, 10, "Special Elite", "white", 1); }
var insaneButton = makeRect(850, 330, 110, 30, "white", 1); //645
insaneButton.setAttribute("cursor", "pointer");
insaneButton.addEventListener("click", function(){gameMode="Insane"; startGame();});
insaneButton.addEventListener("mouseenter", function(){insaneButton.setAttribute("fill", "black");});
insaneButton.addEventListener("mouseleave", function(){insaneButton.setAttribute("fill", "white");});
var insaneText = makeText("Insane", 864, 352, 24, "Special Elite", "black", 1);
insaneText.setAttribute("cursor", "pointer");
insaneText.addEventListener("click", function(){gameMode="Insane"; startGame();});
insaneText.addEventListener("mouseenter", function(){insaneButton.setAttribute("fill", "black"); insaneText.setAttribute("fill", "white");});
insaneText.addEventListener("mouseleave", function(){insaneButton.setAttribute("fill", "white"); insaneText.setAttribute("fill", "black");});

/*
makeImage("Piskel Art/Cursor.png", 250, 200, 44, 26, 1);
makeImage("Piskel Art/Cursor.png", 800, 400, 44, 26, 1);
makeImage("Piskel Art/Cursor.png", 700, 250, 22, 13, 1);
makeImage("Piskel Art/Cursor.png", 900, 50, 66, 39, 1);
*/

/*
canvas.addEventListener("mousemove", moveMouse);
function moveMouse(event){
  var pt = canvas.createSVGPoint()
  pt.x = event.clientX;
  pt.y = event.clientY;
  var svgPt = pt.matrixTransform(canvas.getScreenCTM().inverse());  
  cursor.remove();  
  cursor = makeImage("Piskel Art/Cursor.png", svgPt.x -34, svgPt.y-20, 66, 39, 1);
}

canvas.addEventListener("mouseleave", eraseMouse);
function eraseMouse(){
  cursor.remove();
}
*/

//canvas.addEventListener("click", startGame);

cursor.addEventListener("click", changeCursor);
function changeCursor(){
  if(sessionStorage.cursorColor == "red"){
    sessionStorage.cursorColor = "green";
    cursor.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Piskel Art/Cursor.png");
  }
  else if(sessionStorage.cursorColor == "green"){
    sessionStorage.cursorColor = "red";
    cursor.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Piskel Art/Cursor1.png");
  }
}

function pauseGame(){
  if(pauseStatus == 0){
    pauseStatus = 1;
    document.removeEventListener("click", shootBullet);
    beginning = true;  
  }
  else if(pauseStatus == 1){
    pauseStatus = 0;
    document.addEventListener("click", shootBullet);
    beginning = false;  
    animation();  
  }
}

function startGame(){
  easyButton.remove();
  easyText.remove();
  if(localStorage.easyScore){ easySText.remove(); }
  normalButton.remove();
  normalText.remove();
  if(localStorage.normalScore){ normalSText.remove(); }
  hardButton.remove();
  hardText.remove();
  if(localStorage.hardScore){ hardSText.remove(); }
  insaneButton.remove();
  insaneText.remove();
  if(localStorage.insaneScore){ insaneSText.remove(); }
  if(sessionStorage.cursorColor == "red"){ document.getElementById("canvas").style.cursor = "url('Piskel Art/Cursor1.png') 16 16, crosshair"; } 
  if(sessionStorage.cursorColor == "green"){ document.getElementById("canvas").style.cursor = "url('Piskel Art/Cursor.png') 16 16, crosshair"; } 
  cursor.remove();
  versionText.remove();  
  setTimeout(function(){ startText1.remove(); }, 1000);
  setTimeout(function(){ startText2.remove(); }, 1300);
  setTimeout(function(){ makeBug(1, 1); }, 1300);
  if(gameMode != "Insane"){  
    setTimeout(function(){ makeBug(1, 3); }, 1800);
    if(gameMode != "Easy"){ setTimeout(function(){ makeBug(1, 4); }, 3400); }
    setTimeout(function(){ makeBug(1, 2); }, 4400);
  }
  if(gameMode == "Easy"){ placeHolder[0] = 150; levelSpeed = 50; level = levelSpeed; }
  else if(gameMode == "Insane"){ placeHolder[0] = 10; radius = 205; }
  if(gameMode == "Normal"){ placeHolder[0] = 100; levelSpeed = 25; level = levelSpeed; }
  if(gameMode == "Hard"){ placeHolder[0] = 50; levelSpeed = 10; level = levelSpeed;}
  placeHolder[1] = luminosity;
  var time = 300;  
  if(luminosity > placeHolder[0]){
    for(placeHolder[1]; placeHolder[1] > placeHolder[0]; placeHolder[1]--){
      setTimeout(function(){
        luminosity -= 1;  
        textLight.innerHTML = "Luminosity: " + luminosity + ";";
        radius -= 1;  
        lightIntensity -= 0.003;
        light.setAttribute("r", radius);
        light.setAttribute("opacity", lightIntensity);  
      }, time);
      time += 10;  
    }
  }  
  else if(luminosity < placeHolder[0]){
    for(placeHolder[1]; placeHolder[1] < placeHolder[0]; placeHolder[1]++){
      setTimeout(function(){
        luminosity += 1;  
        textLight.innerHTML = "Luminosity: " + luminosity + ";";
        radius += 1;  
        lightIntensity += 0.003;
        light.setAttribute("r", radius);
        light.setAttribute("opacity", lightIntensity);  
      }, time);
      time += 10;  
    }
  }
  beginning = false;
  document.addEventListener("click", shootBullet);
  document.addEventListener("keypress", pauseGame);
  animation();    
} // more decorative

var level = 0;
var levelSpeed = 25;
function tellBugToCome(){
  if(gameMode != "Insane"){ 
    makeBug(1, 1);
    if(killCount === level){
      makeBug(2, 1);
      bulletSpeed += 0.5;        
      level += levelSpeed;
    }
  }
  else{ makeBug(1, 2); bulletSpeed += 0.1; }
} //more intuitive

updateText();
function updateText(){
  if(enderGame === true){  
    textLight.remove();
    textKill.remove();
    textSymbol.remove();
    textLight = makeText("Luminosity: " + luminosity + ";", 30, 350, 20, "Special Elite", "white", 1);
    textKill = makeText("Kill Count: " + killCount + ";", 30, 380, 20, "Special Elite", "white", 1);
    textSymbol = makeText("Symbol: " + symbol + ";", 30, 410, 20, "Special Elite", "white", 1);
    //textSymbol.innerHTML = "Symbol: " + symbol + ";";  
  }
  else{
    textLight.innerHTML = "Luminosity: " + luminosity + ";";
    textKill.innerHTML = "Kill Count: " + killCount + ";";
    textSymbol.innerHTML = "Symbol: " + symbol + ";";   
  }   
  requestAnimationFrame(updateText);  
}

function animation(){
  if(enderGame === true){ makeBug(1, 1); }
  bulletLength = bullet.length;
  maxLength = bug.length;  
  for(n = 0; n < bulletLength; n++){
    if(bullet[n] === undefined){}  
    else if(!collides(bullet[n], arena)){ destroyBullet(); }
    else{ move(bullet[n], bulletX[n], bulletY[n]); }
    for(i = 0; i < maxLength; i++){
      if(bug[i] === undefined || bullet[n] === undefined){}  
      else if(collides(bullet[n], bug[i]) && bug[i].getAttribute("opacity") != 2){ destroyBullet(); setX(bug[i], getX(bug[i]) - (5 * moveX[i])); bug[i].setAttribute("opacity", 2); bug[i].setAttribute("transform", "translate(0 "  + (getY(bug[i]) + bug[i].getAttribute("height")/2) + ")  scale(1 -1) translate(0 " + (-1*(getY(bug[i]) + bug[i].getAttribute("height")/2)) + ")"); }  // so bug[i] can't be first? I spend 30 minutes just to know this :(
      else if(collides(bullet[n], bug[i]) && bug[i].getAttribute("opacity") == 2){ setX(bug[i], getX(bug[i]) - (5 * moveX[i])); }
    }  
  }
  for(i = 0; i < maxLength; i++){ 
    if(bug[i] !== undefined){  
      if(bug[i].getAttribute("opacity") == 2){ moveY[i] -= 0.2; }  
      if(enderGame === true){
        move(bug[i], moveX[i]*3, moveY[i]);
      }
      else{
        move(bug[i], moveX[i], moveY[i]);
      }  
      if(collides(bug[i], lightEnd) && bug[i].getAttribute("opacity") != 2){ lampHurted(); }
      else if(getY(bug[i]) < -100){ destroyBug() }
      else if(getX(bug[i]) > 1300 || getX(bug[i]) < -300){ killCount -= 1; destroyBug(); }  
    }
  }
  if(beginning === false){  
    requestAnimationFrame(animation);
  }
}

var posXneg = 0; 
function makeBug(bugType, amount){  
  for (i = 0; i < amount; i++){  
    maxLength = bug.length; // must not delete
    var type = Math.random();
    if(enderGame === true){ type = (Math.floor(Math.random()*2))*0.64; } 
      
    if(type < 0.20){ 
      x = 0 - Math.floor(Math.random() * 300);
      y = Math.floor(Math.random() * 450) + 1; 
     }
    else if(type < 0.35){ 
      x = Math.floor(Math.random() * 150);
      y = 450;    
    }  
    else if(type < 0.50){ 
      x = Math.floor(Math.random() * 150);
      y = -40;    
    }
    else if(type < 0.70){ 
      x = 1000 + Math.floor(Math.random() * 300);
      y = Math.floor(Math.random() * 450) + 1;  
    }    
    else if(type < 0.85){ 
      x = Math.floor(Math.random() * 150) + 850;
      y = 450;    
    }
    else if(type < 1.0){ 
      x = Math.floor(Math.random() * 150) + 850;
      y = -40;    
    }
      
    if(type < 0.5){ posXneg = 1; }
    else if(type < 1.0){ posXneg = -1; }
       
    if(bugType === 1){
      if(posXneg === 1){ bug[maxLength] = makeImage("Piskel Art/Gnat.png", x, y, 40, 32, 1); }
      else if(posXneg === -1){ bug[maxLength] = makeImage("Piskel Art/Gnat Mirrored.png", x, y, 40, 32, 1); }
      bug[maxLength].addEventListener("mouseenter", function(){symbol = "tiny trouble";});
    }
    else if(bugType === 2){  
      if(posXneg === 1){ bug[maxLength] = makeImage("Piskel Art/Firefly.png", x, y, 55, 32.5, 1); }
      else if(posXneg === -1){ bug[maxLength] = makeImage("Piskel Art/Firefly Mirrored.png", x, y, 55, 32.5, 1); }
      bug[maxLength].addEventListener("mouseenter", function(){symbol = "unexpected pitfall";});
      posXneg = posXneg * bulletSpeed;  
    }
    
    moveX[maxLength] = posXneg;
    moveY[maxLength] = posXneg * (y-lampY) / (x-lampX);     
    bug[maxLength].addEventListener("mouseleave", function(){symbol = "life";});  
  }
}

function shootBullet(event){
  var posXneg = 0;
  var pt = canvas.createSVGPoint();
  pt.x = event.clientX;
  pt.y = event.clientY;
  var svgPt = pt.matrixTransform(canvas.getScreenCTM().inverse());
  if(Math.round(svgPt.x) >= lampX){ posXneg = 1; }
  if(Math.round(svgPt.x) < lampX){ posXneg = -1; }
  
  bulletX.push(posXneg * bulletSpeed);
  bulletY.push((posXneg * bulletSpeed) * (lampY - Math.round(svgPt.y)) / (lampX - Math.round(svgPt.x)));
  if(sessionStorage.cursorColor == "red"){ bullet.push(makeImage("Piskel Art/Projectile1.png", lampX, lampY, 10, 10, 1)); }
  if(sessionStorage.cursorColor == "green"){ bullet.push(makeImage("Piskel Art/Projectile2.png", lampX, lampY, 10, 10, 1)); }
  bullet[bullet.length-1].addEventListener("mouseenter", function(){ symbol = "temporary solution"; });
  bullet[bullet.length-1].addEventListener("mouseleave", function(){ symbol = "life"; });  
}

function destroyBug(){  
  bug[i].remove(); 
  bug[i] = undefined;  
  killCount += 1;
  //textKill.innerHTML = "Kill Count: " + killCount + ";";  
  clearBug();
  i -= 1;  
  if(enderGame !== true){  
    tellBugToCome();  
  }
} //add more bug

function clearBug(){  
  bug.splice(i, 1);
  moveX.splice(i, 1);
  moveY.splice(i, 1);
  maxLength = bug.length;
}

function destroyBullet(){
  bullet[n].remove();
  bullet[n] = undefined;  
  clearBullet();
  n -= 1;  
} // special bullet

function clearBullet(){
  bullet.splice(n, 1);
  bulletX.splice(n, 1);
  bulletY.splice(n, 1);
  bulletLength = bullet.length;
}

function lampHurted(){
  luminosity -= 10;
  //textLight.innerHTML = "Lumisnosity: " + luminosity + ";";
  if(luminosity >= 0){ 
    radius -= 10;
    if(radius < 0){ radius = 0; }  
    light.setAttribute("r", radius);  
    lightIntensity -= 0.03;
    if(lightIntensity < 0){ lightIntensity = 0; }  
    light.setAttribute("opacity", lightIntensity);
  }   
  if(luminosity <= 0 && enderGame !== true){
    light.setAttribute("opacity", lightIntensity);
    enderGame = true;
    gameScore = killCount;  
    endGame();  
  }
  killCount -= 1;  
  destroyBug();  
}
    
function endGame(){
  if(gameMode == "Easy" && !localStorage.easyScore){localStorage.easyScore = gameScore;}
  if(gameMode == "Normal" && !localStorage.normalScore){localStorage.normalScore = gameScore;}
  if(gameMode == "Hard" && !localStorage.hardScore){localStorage.hardScore = gameScore;}
  if(gameMode == "Insane" && !localStorage.insaneScore){localStorage.insaneScore = gameScore;}
  else if(gameMode == "Easy" && gameScore > Number(localStorage.easyScore)){localStorage.easyScore = gameScore;}
  else if(gameMode == "Normal" && gameScore > Number(localStorage.normalScore)){localStorage.normalScore = gameScore;}
  else if(gameMode == "Hard" && gameScore > Number(localStorage.hardScore)){localStorage.hardScore = gameScore;}
  else if(gameMode == "Insane" && gameScore > Number(localStorage.insaneScore)){localStorage.insaneScore = gameScore;}  
  setTimeout(function(){
    gameOverText = makeText("Lost", 0, 245, 30, "Special Elite", "black", 1);
    gameOverText.setAttribute("transform", "translate(510, -5) rotate(-10) scale(-1, 1)");
    gameOverText.addEventListener("mouseenter", function(){ symbol = "hope"; });
    gameOverText.addEventListener("mouseleave", function(){ symbol = "life"; });  
    lightEnd.removeEventListener("mouseenter", function(){ symbol = "an idea"; });
    lightEnd.addEventListener("mouseenter", function(){ symbol = "hope"; });  
  }, 5000);    
  setTimeout(function(){gameOverText.setAttribute("opacity", 0);}, 7200);  
  setTimeout(function(){gameOverText.setAttribute("transform", "translate(460, 10) scale(1, 1)");}, 8000);
  setTimeout(function(){lostFlicker(1);}, 8020);  
  setTimeout(function(){gameOverText.addEventListener("click", restartGame); lightEnd.addEventListener("click", restartGame); lightEnd.setAttribute("cursor", "pointer"); gameOverText.setAttribute("cursor", "pointer");
document.addEventListener("keypress", restartGame);}, 12000);  
} // make Crtl + R = restart or use click

function lostFlicker(offOn){
  if(offOn === 1){
    gameOverText.setAttribute("opacity", 1);
    setTimeout(function(){lostFlicker(0);}, Math.floor(Math.random() * 5000));  
  }
  else if(offOn === 0){
    gameOverText.setAttribute("opacity", 0);
    setTimeout(function(){lostFlicker(1);}, Math.floor(Math.random() * 300) + 200);  
  }
}

function restartGame(){
  setTimeout(function(){beginning = true; enderGame = false; arena = makeRect(0, 0, 1000, 450, "black"); document.removeEventListener("click", shootBullet);
 }, 200);
  setTimeout(function(){arena.remove();}, 500);
  setTimeout(function(){arena.remove(); lamp.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Piskel Art/Lamp Out.png"); arena = makeRect(0, 0, 1000, 450, "black");}, 1000);
  setTimeout(function(){arena.remove();}, 1300);
  setTimeout(function(){arena.remove(); arena = makeRect(0, 0, 1000, 450, "black");}, 1600);  
  setTimeout(function(){arena.remove();}, 1800);
  setTimeout(function(){arena.remove(); arena = makeRect(0, 0, 1000, 450, "black");}, 1900);  
  setTimeout(function(){arena.remove(); arena = makeRect(0, 0, 1000, 450, "white");}, 2050);  
  setTimeout(function(){location.reload();}, 2222);  
}

// DO NOT EDIT CODE BELOW THIS LINE!

function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"));
  } else {
    return parseFloat(shape.getAttribute("cx"));
  }  
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"));
  } else {
    return parseFloat(shape.getAttribute("cy"));
  }   
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x);
  } else {
    shape.setAttribute("cx", x);
  } 
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y);
  } else {
    shape.setAttribute("cy", y);
  } 
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"));
    var y = parseFloat(shape.getAttribute("y"));
    shape.setAttribute("x", x + dx);
    shape.setAttribute("y", y + dy);
  } else {
    var cx = parseFloat(shape.getAttribute("cx"));
    var cy = parseFloat(shape.getAttribute("cy"));
    shape.setAttribute("cx", cx + dx);
    shape.setAttribute("cy", cy + dy);
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", fill);
  circle.setAttribute("opacity", opacity);
  
  var canvas = document.getElementById("canvas");
  canvas.appendChild(circle);
  return circle;
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", fill);
  rect.setAttribute("opacity", opacity);
  
  var canvas = document.getElementById("canvas");
  canvas.appendChild(rect);
  return rect;
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse");
  ellipse.setAttribute("cx", cx);
  ellipse.setAttribute("cy", cy);
  ellipse.setAttribute("rx", rx);
  ellipse.setAttribute("ry", ry);
  ellipse.setAttribute("fill", fill);
  ellipse.setAttribute("opacity", opacity);
  
  var canvas = document.getElementById("canvas");
  canvas.appendChild(ellipse);
  return ellipse;
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", stroke);
  line.setAttribute("stroke-width", strokeWidth);
  line.setAttribute("opacity", opacity);
  
  var canvas = document.getElementById("canvas");
  canvas.appendChild(line);
  return line;
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline");
  polyline.setAttribute("points", points);
  polyline.setAttribute("stroke", stroke);
  polyline.setAttribute("stroke-width", strokeWidth);
  polyline.setAttribute("opacity", opacity);
  polyline.setAttribute("fill", "none");
  
  var canvas = document.getElementById("canvas");
  canvas.appendChild(polyline);
  return polyline;
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon");
  polygon.setAttribute("points", points);
  polygon.setAttribute("opacity", opacity);
  polygon.setAttribute("fill", fill);
  
  var canvas = document.getElementById("canvas");
  canvas.appendChild(polygon);
  return polygon;
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text");
  text.innerHTML = message;
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("font-size", fontSize);
  text.setAttribute("font-family", fontFamily);
  text.setAttribute("fill", fill);
  text.setAttribute("opacity", opacity);
  
  var canvas = document.getElementById("canvas");
  canvas.appendChild(text);
  return text;
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image");
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);
  image.setAttribute("x", x);
  image.setAttribute("y", y);
  image.setAttribute("width", width);
  image.setAttribute("height", height);
  image.setAttribute("opacity", opacity);
  
  var canvas = document.getElementById("canvas");
  canvas.appendChild(image);
  return image;
}

function collides(rect1, rect2) {
  if(rect1.hasAttribute("width")){
    var centerX = getX(rect1) + parseFloat(rect1.getAttribute("width"))/2;
    var centerY = getY(rect1) + parseFloat(rect1.getAttribute("height"))/2;
  }
  if(rect1.hasAttribute("r")){
    var centerX = getX(rect1);
    var centerY = getY(rect1);
  }
  if(rect2.hasAttribute("width")){  
    return (centerX > getX(rect2) && 
            centerX < getX(rect2) + parseFloat(rect2.getAttribute("width")) &&
           centerY > getY(rect2) &&
           centerY < getY(rect2) + parseFloat(rect2.getAttribute("height")));
  }
  if(rect2.hasAttribute("r")){  
    return (centerX > getX(rect2) - parseFloat(rect2.getAttribute("r")) && 
            centerX < getX(rect2) + parseFloat(rect2.getAttribute("r")) &&
           centerY > getY(rect2) - parseFloat(rect2.getAttribute("r")) &&
           centerY < getY(rect2) + parseFloat(rect2.getAttribute("r")));
  }
}

//console accessible by Ctrl + Shift + J

console.log("Game Library:");
console.log("");
console.log("   Gnat (little trouble)");
console.log("     -  They are slow, easy to hit, but come in waves. Kill one, another take their place. Good luck.");
console.log("");
console.log("   Firefly (unexpected pitfall)");
console.log("     -  They are fast, but not much more than that. They were meant to be helpful, but you know what? I just want to make our lives worse.");
console.log("");
console.log("   Shooter (brainstorm ER)");
console.log("     -  Aim and shoot. It is really simple, but don't expect homing projectile.");
console.log("");
console.log("   Lamp (an idea)");
console.log("     -  This is the base. Please don't let troubles push you down. Rise up and face the challenges in life.");
console.log("");
console.log("Hidden Mechanics:");
console.log("   Pause: Press any button on the keyboard.");
console.log("");
console.log("   Cursor Color: Simple change it at the beginning of the game. Ps: You have to change it every time the game reload.");
console.log("");
console.log("   Spawn Rate: The faster you slay bugs the more they spawn. Don't rush too much.");
console.log("");
console.log("   Restart: To restart click on the lamp after losing.");
console.log("");
console.log("");
console.log("");
console.log("Final Note: Have fun playing and enjoy your life. Thank You.");