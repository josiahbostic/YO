var grey = 1
var mycolor = (205,56,211)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
  GA = createButton('Colour Change 1');
  GA.position(20, 20);
	GA.size(70,70);
  GA.mousePressed(ChangeColour);
  Gb = createButton('Grey Scale');
  Gb.position(50,120);
	Gb.size(70,70);
  Gb.mousePressed(Changegrey);

}

function draw() {
	fill(mycolor);
  ellipse(200,200,100,50);
	ellipse(500,500,100,50);

}

function ChangeColour(){
	if(grey){
  mycolor = color(random(255), random(255),random(255))}
	else{
	mycolor = color(random(255))}
	
}

function Changegrey(){
	if (grey == true){
		grey = false; 
	} else {
		grey = true;
	}
}
