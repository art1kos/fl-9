var sideFirst = parseFloat(prompt("Enter first side of triangle", ""));
var sideSecond = parseFloat(prompt("Enter second side of triangle", ""));
var angle = parseFloat(prompt("Enter angle", ""));

var rad = (angle * Math.PI)/ 180;
var sideThird = Math.round(Math.sqrt(Math.pow(sideFirst,2) + Math.pow(sideSecond,2)-2*sideFirst*sideSecond*Math.cos(rad))*100)/100;
var P = sideFirst + sideSecond + sideThird;

var p = (sideFirst+sideSecond+sideThird)/2;
var square = Math.round(Math.sqrt(p*(p-sideFirst)*(p-sideSecond)*(p-sideThird))*100)/100;

mess = "";

if(sideFirst > 0 && sideSecond > 0 && angle > 0 && angle < 180){
	mess = "sideThird:"+ sideThird + "\n" + "Triangle square:"+ square + "\n" + "Triangle perimeter:"+ P + "\n";
}else{
	mess = "Invalid data";
}
console.log(mess);