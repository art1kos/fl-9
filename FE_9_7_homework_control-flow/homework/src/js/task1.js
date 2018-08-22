let login = prompt('Write your login', ''); 

if(!login){
	alert('Canceled!');
}else if(login.length < 4){
	alert('I don`t know any users havung name length less than 4 symbol');
}else if(login === 'User'){
	let password = prompt('Write your password', '');
	if(!password){
		alert('Canceled');
	}else if(password === 	'SuperUser'){
		let now = new Date();
		let h = now.getHours();
		if(h < 20){
			alert('Good day');
		}else{
			alert('Good evening');
		}

	}else{
		alert('Wrong password');
	}
}else{
	alert('I don`t know you');
}
