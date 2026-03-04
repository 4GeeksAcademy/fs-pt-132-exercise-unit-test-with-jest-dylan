// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const dollarFromEuros=eur=>{
let exchange= eur*oneEuroIs["USD"];
return exchange;


}
const dollarFromToyen=dollar=>{

let exchange=dollarFromEuros(dollar)*oneEuroIs["JPY"];
return exchange;
}
const yenFromTopound=yen=>{

let exchange=dollarFromToyen(yen)*oneEuroIs["GBP"];
return exchange;
}
console.log(yenFromTopound(40));
console.log(dollarFromToyen(40));
console.log(dollarFromEuros(40));
// Just a console log for ourselves
console.log(sum(7,3));
// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum,dollarFromEuros,dollarFromToyen,yenFromTopound};


