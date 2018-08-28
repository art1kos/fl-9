/*Task1*/
function typeOf(value){
	return typeof value;
}

/*Task2*/
function forEach (arr,fnctn) {
    for (let i = 0; i < arr.length; i++) {
        fnctn(arr[i]);
    }  
}
/*Task3*/
function getTransformedArray(arr,trans) {  
    let newArr = [];
    forEach(arr,function(i){
        newArr.push(trans(i));
    });
    return newArr;
}

/*Task4*/
function getFilteredArray(arr,predicateFunction) {  
    let newArr = [];
    forEach(arr,function(i){
        if (predicateFunction(i) === true) {
            newArr.push(i);
        }
    });
    return newArr;
}

/*Task5*/
function getAdultAppleLovers(arr){ 
    let newArr = getFilteredArray(arr,function(i){
        return i.age > 18;
    });
    let newArr1 = getFilteredArray(newArr,function(i){
        return i.favoriteFruit === 'apple'
    });    
    return getTransformedArray(newArr1,function(i){
        return i.name;
    }); 
}    
/*let arr = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 17,
    "eyeColor": "green",
    "name": "Weiss",
    "favoriteFruit": "banana"
  }
]
*/

/*Task6*/

function keys(object){
	let newArr = [];
	for(let key in object){
		if(object.hasOwnProperty(key)){
			newArr.push(key);
		}
	}
	return newArr;
}
/*Task7*/

function value(object){
	let newArr = [];
	for(let key in object){
		if(object.hasOwnProperty(key)){
			newArr.push(object[key]);
		}
	}
	return newArr;
}
/*Task8*/

function showFormattedDate(date){
	let monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	let day = date.getDate();
	let monthIndex = date.getMonth();
	let year = date.getFullYear();
	return 'It is ' + day + ' of ' + monthNames[monthIndex] + ', ' + year;
}
