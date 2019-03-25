//Create object
let car = {
    brand: 'bmw',
    color: 'white',
    cc: 350,
    isExamined: true
}

//Update property with dot
car.cc = 5000;
console.log(car);

//update property with square brackets and static text for key and value
car['color']='black';
console.log(car);

//update property with square brackets and variable for value
let result = false;
car['isExamined'] = result;
console.log(car);

//update property with square brackets and variable for key
let specialKey = 'brand';
car[specialKey] = 'Ferrari';
console.log(car);

//Combine static text an variable
let test = {
    key1: 'test1',
    key2: 'test7'
}

//update a property
let number = 2
test['key'+ number] = 'test' + number;
console.log(test);

//create a new property
number = 5
test['key'+ number] = 'test' + number;
console.log(test);

//Please create properties from 3 to 10 with for loop

for(i = 3; i<=10; i++){
    test['key'+i] = 'test'+i;
}

console.log(test);

//Shorthand for property definition
let name = 'orange';
let weight = 100;

let fruits = {
    //name: name,
    //weight: weight
    name,
    weight
}

console.log(fruits);

//Other data types clone
let brand = 'DCI';
let company = brand;

console.log(company);

brand = 'Google';
console.log(company);

//Objects clone
let brandO= {
    brand:'DCI'
}

let companyO = brandO;
console.log(companyO);

brandO.brand = 'Google';
console.log(companyO);

//mix sample for clone
let tech = {
    brand,
    company
}

console.log(tech);

//difference between == and === 
//compare other data types
let x = 2;
let y = '2';

console.log(x==y);
console.log(x===y);

// compare objects
//all objects are unique
let a = {};
let b = {};
console.log(a==b);

//compare clonned objects
//This is just one case for 2 objects to be equal
let c = a;
console.log(a==c);

//Constant for Objects and other datatyper
//constant string
const food = 'bread';
//food = 'soup';
console.log(food);

//constant object
const lunch = {
    fruit: 'apple'
}

//update property
lunch.fruit = 'banana';
console.log(lunch);

//re-set variable
/*lunch = {
    fruit: 'water meloon'
}
*/
console.log(lunch);