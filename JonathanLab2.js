var scC = 1.8;
var xC = 170;
var yC = 250; 
var counter=0
function setup() 
{
   createCanvas(530, 800);
}
function draw()
{
   drawChampion(xC,yC,scC);
   if (counter<15)
{
	counter+=1
	xC-=1
}else if (counter>29){
	counter=0
} else {
	counter+=1
	xC+=1

}

}

function drawChampion(x,y,scaleC) 
{
background(255,254,242)
fill(106,175,217)
textSize(70)
textStyle(BOLD)
text("UN",30,80)
textSize(70)
text("HAMPION",90,145)
textSize(74)
textFont()
text("C",38,152)
noStroke()
push()
scale(scaleC)
translate(xC,yC)
//Right Arm
fill(59,32,3)
ellipse(56,-30,40)
pop()
push()
scale(scaleC)
translate(xC+79,yC-16)
fill(59,32,3)
rotate(-112*Math.PI/180)
arc(-10,0,70,12,0,PI)
rotate(100*Math.PI/180)
arc(-11,42,40,13,0,PI)
pop()
push()
scale(scaleC)
translate(xC,yC)
fill(59,32,3)
triangle(77,-27,75,30,96,25)
//Body
fill(59,32,3)
triangle(25,64,25,-6,55,-6)
rect(-26,-6,55,69)
stroke(59,32,3)
strokeWeight(10)
bezier(-25,59,-35,45,-25,25,-35,-25)
rect(-32,-44,90,35)
ellipse(-20,0,20)
arc(0,60,50,10,0,PI)
//R Arm Adjustment
rect(45,-21,30,49)
//Left arm
fill(59,32,3)
strokeWeight(2)
arc(-50,-27,30,3,0,PI)
arc(-78,-28,28,4,0,PI)
arc(-50,-48,30,3,PI,0)
arc(-78,-48,28,2,PI,0)
rect(-92,-47,58,19)
//Left glove
noStroke()
fill(211,67,1)
rect(-111,-48,18,22)
ellipse(-115,-33,29,30)
triangle(-92,-30,-102,-30,-102,-18)
rect(-112,-28,10,10)
fill(230)
ellipse(-105,-28,7,4)
fill(255)
ellipse(-110,-17,4)
//Right Shoe
fill(211,67,1)
rect(41,163,21,12,10)
rect(50,157,12,15)
arc(50,156,26,25,-PI/2,PI/2)
fill(59,32,3)
ellipse(48,148,13)
//Right Leg
fill(59,32,3)
arc(33,134,85,47,PI/2,PI)
pop()
push()
scale(scaleC)
translate(xC+40,yC+146)
rotate(36*Math.PI/180)
fill(59,32,3)
arc(0,0,30,20,PI,8*Math.PI/180)
pop()
push()
scale(scaleC)
translate(xC,yC)
fill(59,32,3)
triangle(32,138,31,158,52,156)
//Shorts
fill(71,118,203)
arc(0,65,60,20,-5*Math.PI/180,185*Math.PI/180)
pop()
push()
scale(scaleC)
translate(xC-43,yC+83)
rotate(135*Math.PI/180)
fill(71,118,203)
arc(0,0,50,10,0,PI)
rect(-25,-36,50,37)
pop()
push()
scale(scaleC)
translate(xC,yC)
fill(71,118,203)
rect(-13,68,42,66)
ellipse(-13,73,10)
triangle(28,64,28,134,31,134)
arc(28,93,18,50,-100*Math.PI/180,85*Math.PI/180)
ellipse(29,117,5)
stroke(255)
strokeWeight(2)
bezier(15,65,22,72,13,76,21,100)
bezier(21,100,18,110,26,117,19,133)
noStroke()
//Right Arm Adjustment
fill(255,254,242)
triangle(50,0,59,6,46,12)
//Right Glove
fill(211,67,1)
rect(25,12,20,21)
ellipse(20,20,35,26)
fill(59,32,3)
ellipse(19,15,8,3)
pop()
push()
scale(scaleC)
fill(59,32,3)
translate(xC+14,yC+10)
rotate(-20*Math.PI/180)
ellipse(0,0,5,12)
fill(211,67,1)
rotate(20*Math.PI/180)
ellipse(3,0,6)
fill(211,67,1)
ellipse(-4,2,6)
pop()
push()
scale(scaleC)
translate(xC,yC)
//head
fill(59,32,3)
ellipse(-3,-63,45)
triangle(-25,-49,-15,-49,-22,-60)
ellipse(0,-84,5)
ellipse(4,-83,5)
ellipse(8,-81,5)
ellipse(15,-75,4)
ellipse(17,-71,4)
ellipse(18,-69,3)
ellipse(-4,-85,5)
ellipse(-12,-83,5)
ellipse(-16,-81,4)
ellipse(-21,-60,12,10)
ellipse(-24,-62,5)
ellipse(-23,-68,6)
ellipse(-20,-77,5)
triangle(10,-48,10,-70,60,-48)
pop()
push()
scale(scaleC)
fill(59,32,3)
translate(xC+29,yC-61)
rotate(24*Math.PI/180)
arc(0,0,20,4,PI,0)
pop()
push()
scale(scaleC)
fill(59,32,3)
translate(xC+47,yC-53)
rotate(24*Math.PI/180)
arc(0,0,20,4,PI,0)

//Left Leg
pop()
push()
scale(scaleC)
translate(xC-61,yC+100)
rotate(45*Math.PI/180)
fill(59,32,3)
rect(0,0,30,21)
rotate(-45*Math.PI/180)
fill(59,32,3)
arc(4,50,10,32,-PI/2,PI/2)
rotate(-20*Math.PI/180)
arc(-15,18,20,20,140*Math.PI/180,-40*Math.PI/180)
rotate(20*Math.PI/180)
rect(-10,20,14,46)
triangle(-18,23,-10,23,-10,67)
pop()
push()
scale(scaleC)
translate(xC,yC)
//LeftShoe
fill(211,67,1)
rect(-90,167,35,12,10)
rect(-72,164,18,15)

}
