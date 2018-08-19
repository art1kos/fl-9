var amount_money = prompt("Input amouny of money!",100);
var discount = prompt("Input discount in %", 100);
var price_discount = (amount_money - (amount_money * discount)/100).toFixed(2);
var saved_money = ((amount_money * discount)/100).toFixed(2);
var mess = "";

if(amount_money < 0 || 0 <= discount >=100){
	mess = "Invalid data";
}
else  {
	mess = "Price without discount:"+ amount_money + "\n" + "Discount:" + discount + "\n" + "Price with discount:" + price_discount + "\n" + "Saved:" + saved_money;
}

console.log(mess);