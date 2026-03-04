// importamos la funcion de app js creada para realizar la suma
const{ sum,dollarFromEuros,dollarFromToyen,yenFromTopound }= require('./app.js');


//realizamos el primer test
test('adds 14 + 9 to equal 23',()=>{

// llamamos a la funcion con 2 numeros

let total= sum(14,9);

// nosotros realizamos un expect de lo que va dar y el resultado que queremos
expect(total).toBe(23);
});

test('One euro should be 1.07 dollars',()=>{


const usd=dollarFromEuros(40);

const expected= 40*1.07;

expect(usd).toBe(expected);



});

test('One dollar should be 156.5 yen',()=>{

const yen=dollarFromToyen(40);

const expected= 40*1.07*156.5;

expect(yen).toBe(expected);



});
test('156.5 yen should be 0.87 british pound',()=>{

const pound=yenFromTopound(40);

const expected= 40*1.07*156.5*0.87;

expect(pound).toBe(expected);



});