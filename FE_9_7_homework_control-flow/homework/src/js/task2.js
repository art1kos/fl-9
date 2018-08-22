let play = confirm('Do you want to play game?','');
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let totalPrize = 0;
let game = true;
let range = 5;
let prizeOne = 10 ;
let prizeTwo = 5;
let prizeThree = 2;
let range_x = 2;
let three = 3
let one = 1;
if(!play){
	alert('You did not become a millionaire');
}else{
	while(game){
		let number = getRandomInt(0,range);
		console.log(number);
		for(let i = 3; i>0; i--){
			let userNumber = prompt('Enter a number [0;'+range+'] ' + '\n' + 'Atempts: ' + i + 
				'\n' + 'Total prize is: ' + totalPrize, '0');
			if(isNaN(userNumber)){
				alert('Bad input, please enter correct number')
				break;
			}
			if (userNumber === number){
				switch(i){
					case one: totalPrize+=prizeOne;
					break;
					case 2:totalPrize+=prizeTwo;
					break;
					case 3:totalPrize+=prizeThree;
					break;
					default: 
					break;
			}
			game = confirm('Do you want to continue a game?','');		
			if(game === false){
				alert('Your prize is ' + totalPrize);
				totalPrize = 0 ;
				game = confirm('Do you want to try again?');
				let range = 5;
				console.log(range);
				break;
			}
				range *= range_x; 
				prizeOne *= three;
				prizeTwo *= three;
				prizeThree = three * prizeThree + one;
				break;
			}else{
				if(i === one){
					alert('Your prize is ' + totalPrize);
					totalPrize = 0 ;
					game = confirm('Do you want to try again?');
					let range = 5;
					console.log(range);
					break;
				}
			}
		}
	
	}
}
