function userCard(key){
	let balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];
	let date = new Date();
	let taxFee = 0.005;
	return {	
		getCardOptions: () => {
			return {
				balance,
				transactionLimit,
				historyLogs,
				key
			};
		},
		putCredits: (amount) => {
			balance += amount;
			historyLogs.push({
				operationType:'received credits',
				credits:amount,
				operationTime:date
			});
		},
		takeCredits: amount => {
			balance -= amount;
			historyLogs.push({
				operationType:'Withdraw of credits',
				credits:amount,
				operationTime:date
			});
		},
		setTransactionLimit: limit => {
			transactionLimit = limit;
			historyLogs.push({
				operationType:'Limit change',
				credits:limit,
				operationTime:date
			});
		},
		transferCredits: (amount,card) => {
			let sum = amount - amount * taxFee; 
			let user = userCard(card);
			if (amount <= balance && amount <= transactionLimit){
				user.putCredits(sum);
				balance -= amount;
			}else{
				console.log('Sorry u can`t do transer credits ')
			}
								
		}
	};
}

class UserAccount{
	constructor(name) {
		this.name = name;
		this.cards = [];
		this.max = 3;
		this.min = 0;
	}
	addCard(){
		if(this.cards.length < this.max){
			this.cards.push(userCard(this.cards.length + 1));
		}else{
			console.log('Sorry but u can`t have more than 3 cards')
		}
	}
	getCardByKey(key){
		if (this.cards.length > this.min) {
			return this.cards[key];
		}else{
			console.log('U have no cards at all')
		}
	}
}