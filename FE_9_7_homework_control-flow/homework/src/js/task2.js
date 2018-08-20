var play = confirm("Do you want to play game?","");
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var totalPrize = 0;
var game = true;
var success = true;
var range = 5;
var prizeOne = 10 ;
var prizeTwo = 5;
var prizeThree = 2;

if(!play){
	alert("You did not become a millionaire");
}else{
	while(game){
		var number = getRandomInt(0,range);
		console.log(number);
		for(var i = 3; i>0; i--){
			var userNumber = prompt("Enter a number [0;"+range+"] " + "\n" + "Atempts: " + i + "\n" + "Total prize is: " + totalPrize, "0");
			if(isNaN(userNumber)){
				alert("Bad input, please enter correct number")
				break;
			}
			if (userNumber == number){
				switch(i){
					case 3: totalPrize+=prizeOne;
					break;
					case 2:totalPrize+=prizeTwo;
					break;
					case 1:totalPrize+=prizeThree;
					break;
			}
			game = confirm("Do you want to continue a game?","");		
			if(game == false){
				alert("Your prize is " + totalPrize);
				totalPrize = 0 ;
				game = confirm("Do you want to try again?");
				range = 5;
				break;
			}
				range *= 2; 
				prizeOne *= 3;
				prizeTwo *= 3;
				prizeThree =(3*prizeThree) + 1;
				break;
			}else{
				if(i == 1){
					alert("Your prize is " + totalPrize);
					totalPrize = 0 ;
					game = confirm("Do you want to try again?");
					range = 5;
					break;
				}
			}
		}
	
	}
}
