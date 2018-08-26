let reverseNumber = (a) => {
    let b = a<0 ? '-' : '';      
    let str = Math.abs(a).toString(); 
    for (let i = str.length - 1; i >= 0; i--) {
        b += str[i];
    }
    return Number(b);
}
reverseNumber();