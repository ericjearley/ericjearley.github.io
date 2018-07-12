/* Kinematics demo */

function init(){
	window.addEventListener("keydown",doKeyDown,false);
	timer=setInterval(draw,10);
	return timer;
}

var canvas = document.getElementById('demoCanvas');
var ctx = canvas.getContext('2d');
var timer;

/*define components*/
var pi = Math.PI;

var T1 = pi/6;
var T2 = T1 + pi/6
var L1 = 100;
var L2 = 100;
var R = 10;

var C1 = new Circle(L1*Math.cos(T1),L1*Math.sin(T1),R);
var C2 = new Circle(L1*Math.cos(T1)+L2*Math.cos(T1+T2),L1*Math.sin(T1)+L2*Math.sin(T1+T2),R);

ctx.fillStyle = '#FFFFFF';
ctx.strokeStyle = '#FFFFFF';
ctx.lineWidth = '10';

/*setup coordinate system*/
ctx.translate(250,250);

function doKeyDown(e){
	/*forward kinematics*/
	if(e.keyCode==65){//A
	T1 = T1+pi/30;
	}
	else if(e.keyCode==68){//D
	T1 = T1-pi/30;
	}
	if(e.keyCode==87){//W
	T2 = T2-pi/30;
	}
	else if(e.keyCode==83){//W
	T2 = T2+pi/30;
	}

	/*inverse kinematics*/
	var C2 = new Circle(L1*Math.cos(T1)+L2*Math.cos(T1+T2),L1*Math.sin(T1)+L2*Math.sin(T1+T2),R);
	if(e.keyCode==74){//J
		C2.x = C2.x - 8;
		if ((Math.pow(C2.x,2)+Math.pow(C2.y,2))>Math.pow(((L1+L2)),2)){
			C2.x = C2.x+8;
		}
		else{
			T2 = Math.acos((Math.pow(C2.x,2)+Math.pow(C2.y,2)-Math.pow(L1,2)-Math.pow(L2,2))/(2*L1*L2))*Math.sign(T2);
			T1 = -(Math.atan2(C2.y,C2.x)+Math.atan2((L2*Math.sin(T2)),(L1+L2*Math.cos(T2))));
		}
	}
	else if(e.keyCode==76){//L
		C2.x = C2.x + 8;
		if ((Math.pow(C2.x,2)+Math.pow(C2.y,2))>Math.pow(((L1+L2)),2)){
			C2.x = C2.x-8;
		}
		else{
			T2 = Math.acos((Math.pow(C2.x,2)+Math.pow(C2.y,2)-Math.pow(L1,2)-Math.pow(L2,2))/(2*L1*L2))*Math.sign(T2);
			T1 = -(Math.atan2(C2.y,C2.x)+Math.atan2((L2*Math.sin(T2)),(L1+L2*Math.cos(T2))));
		}
	}

	if(e.keyCode==73){//I
		C2.y = C2.y - 8;
		if ((Math.pow(C2.x,2)+Math.pow(C2.y,2))>Math.pow(((L1+L2)),2)){
			C2.y = C2.y+8;
		}
		else{
			T2 = Math.acos((Math.pow(C2.x,2)+Math.pow(C2.y,2)-Math.pow(L1,2)-Math.pow(L2,2))/(2*L1*L2))*Math.sign(T2);
			T1 = -(Math.atan2(C2.y,C2.x)+Math.atan2((L2*Math.sin(T2)),(L1+L2*Math.cos(T2))));
		}
	}
	else if(e.keyCode==75){//K
		C2.y = C2.y + 8;
		if ((Math.pow(C2.x,2)+Math.pow(C2.y,2))>Math.pow(((L1+L2)),2)){
			C2.y = C2.y-8;
		}
		else{
			T2 = Math.acos((Math.pow(C2.x,2)+Math.pow(C2.y,2)-Math.pow(L1,2)-Math.pow(L2,2))/(2*L1*L2))*Math.sign(T2);
			T1 = -(Math.atan2(C2.y,C2.x)+Math.atan2((L2*Math.sin(T2)),(L1+L2*Math.cos(T2))));
		}
	}

	/*bound angles*/
	if (T1>pi){
		T1 = T1-2*pi;
	} else if(T1<-pi){
		T1 = T1+2*pi;
	}
	
	if (T2>pi){
		T2 = T2-2*pi;
	} else if(T2<-pi){
		T2 = T2+2*pi;
	}
}

function draw(){
	/*T1 = T1+pi/360;
	T2 = T2-pi/180;*/
	ctx.clearRect(-250,-250,canvas.width,canvas.height);
	
	var C1 = new Circle(L1*Math.cos(T1),L1*Math.sin(T1),R);
	var C2 = new Circle(L1*Math.cos(T1)+L2*Math.cos(T1+T2),L1*Math.sin(T1)+L2*Math.sin(T1+T2),R);
	/*var C2 = new Circle(50,50,R);*/
	
	ctx.beginPath();
	ctx.arc(0,0,R,0,2*pi);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(C1.x,C1.y,R,0,2*pi);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(C2.x,C2.y,R,0,2*pi);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(C1.x,C1.y);
	ctx.stroke()
	
	ctx.moveTo(C1.x,C1.y);
	ctx.lineTo(C2.x,C2.y);
	ctx.stroke();
}

function Circle(x,y,r){
	this.x=x;
	this.y=-y;
}

function inverseKinematics(C){
}