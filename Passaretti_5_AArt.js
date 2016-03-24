var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,0,400);
var grr = ctx.createRadialGradient(75,50,5,90,60,100);
var grt = ctx.createLinearGradient(50,50,0,135);

//sky
grd.addColorStop(0,"#0000FF");
grd.addColorStop(1,"cyan");
ctx.fillStyle = grd;
ctx.fillRect(0,0,1000,600);

//house body
ctx.fillStyle = "#F000F0";
ctx.fillRect(200,400,200,200);

//grass
ctx.fillStyle = "#00FF00";
ctx.fillRect(0,600,800,200);

//door
ctx.fillStyle = "#A06020";
ctx.fillRect(300,500,50,100);

//tree stump
ctx.fillStyle = "#504001";
ctx.fillRect(550,490,45,110);

//tree leaves
ctx.beginPath();
ctx.arc(570,440,70,0,2*Math.PI);
ctx.stroke();
grt.addColorStop(1,"#00FF00");
grt.addColorStop(0,"#005500");
ctx.fillStyle = grt;
ctx.fill();

//sun
ctx.beginPath();
ctx.arc(70,70,70,0,2*Math.PI);
ctx.stroke();
grr.addColorStop(1,"#FFFF00");
grr.addColorStop(0,"white");
ctx.fillStyle = grr;
ctx.fill();

//roof
ctx.beginPath();
ctx.moveTo(400,200);
ctx.lineTo(400,400);
ctx.lineTo(200,400);
ctx.fillStyle = "#900090";
ctx.fill();

//fences
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(10,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(60,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(110,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(160,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(410,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(460,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(510,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(560,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(610,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(660,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(710,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(760,525,25,75);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(810,525,25,75);

//driveway
ctx.fillStyle = "#AAAAAA";
ctx.fillRect(275,600,100,100);

//sidewalk
ctx.fillStyle = "#7F7F7F";
ctx.fillRect(0,650,800,50);

//cloud
ctx.beginPath();
ctx.arc(570,100,60,0,2*Math.PI);
ctx.arc(480,90,70,0,2*Math.PI);
ctx.strokeStyle = "#FFFFFF";
ctx.stroke();
ctx.fillStyle = "#FFFFFF";
ctx.fill();

//window
ctx.fillStyle = "#00FFFF";
ctx.fillRect(225,490,50,50);
