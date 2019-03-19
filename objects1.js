
// Create an empty object
let userEmptyFirst = new Object(); //ok  
let userEmptySecond = {};          // better

//Create first filled object

// Best case for define an object
let userDataFirst = {
    name: 'Bülent',
    age: '33'
};

let userDataSecond = {name: 'Bülent', age: '33'}; // Object

let userArray = ['Bülent','33']; // Array


//Insert new property to object

let userDataForInsert = {
    name: 'Bülent',
    age: '33',
    'last name': 'Kayici'
}

console.log(userDataForInsert);

userDataForInsert.adress = 'Dusseldorf';

console.log(userDataForInsert);

//key :lastName   value: your last name -> insert to object
//log to console

userDataForInsert.lastName = 'Kayici';
console.log(userDataForInsert);

//delete operation
delete userDataForInsert.lastName;
console.log(userDataForInsert);

//call specific member of object
console.log('Name of the user is ' + userDataForInsert.name);

//Extra
//key :last name   value: your last name -> insert to object
//log to console

//This does not work
//console.log('Last name of the user is ' + 
//            userDataForInsert.'last name');

//Square brackets work
console.log('Last name of the user is ' + 
            userDataForInsert['last name']);

//Call different members of object together
console.log('Full name of the user is ' +
            userDataForInsert.name + 
            ' ' +
            userDataForInsert['last name']);

// call with vaiable name
let askedKey = prompt('type the key and see the value!');

//Does work. Because askedKey is variable.
alert(userDataForInsert[askedKey]);

// Does not work. Because there is no key with 'askedKey' name
alert(userDataForInsert.askedKey);


/* ------------------Task--------------------*/
/* 1)Create an object with these keys and values and
    name it foods.

    key     |    value
    name    |    banana
    color   |    yellow
    calori  |    276
    isFamous|    true

    2) log to the console whole object

    3) Ask to user which property would like to see
       (you can use promt)
       when page is opened, a promt window should appear and ask
       for key. Afterwords you should show alert windows with value
       of that key.

    4) Create a button and connect number 3 to this butto

    5) put a button to HTML file. When someone click show a new
        promt and ask which property would like to add.
        Afterwords insert the property to your object.
        !!!It should support space named keys.

    6) One more button for delete some properties. You can use 
        promt and ask the key for delete.

*/
//Step 1:
let foods = {
    name: 'banana',
    color: 'yellow',
    calori: 276,
    isFamous: true
}

//step 2:
console.log(foods);

//Step 4:
function showFoods(){
    //Step 3:
    let ask = prompt(Object.keys(foods) + '\n\ntype the key and see the value for foods!');
    alert(foods[ask]);
}

//step 5:
function addFood(){
    let keyForFood = prompt('What is your new key');
    let valForFood = prompt('What is your new value');
    foods[keyForFood] = valForFood;
    console.log(foods);
    alert(JSON.stringify(foods));//Extra
}

//Step 6:
function deleteFood(){
    let ask = prompt(Object.keys(foods) + '\n\ntype the key and delete the value from foods!');
    delete foods[ask];
    console.log(foods);
}


/*-------------------------------Task-2---------------------------------*/
/*
    1) Create 3 objects with the same keys but different values to 
    store your jokes and answer.

    2) Log to console yor objects or

    3) Create an array to store your objects
        !!! you can use arrayName.push(objectName);
        and log to the console yor array

Challange:
    1) Ask how many jokes will be created
        Create a varaible and save the number of jokes.

    2) Create an object to store your jokes and answers.

    3) Create an array to store your objects

    4) Create a for loop and run it until variable(count of jokes).

    5) Create a new for loop to create joke cards on html.

    jokes = [
        {question: 'What did the Buddhist ask the hot dog vendor?', 
        answer:“Make me one with everything.”},

        {question: 'You know why you never see elephants hiding up in trees?', 
        answer:“ecause they’re really good at it.”},

    ];

*/    

/*
let joke1 = {
    question:'What did the Buddhist ask the hot dog vendor?',
    answer: 'Make me one with everything.'
}

let joke2 = {
    question:'You know why you never see elephants hiding up in trees?',
    answer: 'Because they’re really good at it.'
}

let joke3 = {
    question:'What is red and smells like blue paint?',
    answer: 'Red paint.'
}

//console.log(joke1);
console.log(joke2);
console.log(joke3);

let question = prompt('What is the question');
let answer = prompt('What is the answer');

joke1['question'] = question;
joke1['answer'] = answer;

console.log(joke1);
*/

function createJokeObject () {
    let question = prompt('What is question');
    let answer = prompt('What is answer');

    return {'question': question, 'asnwer': answer};
}

let jokeArray = [];

//jokeArray.push(createJokeObject());
//jokeArray.push(createJokeObject());
//jokeArray.push(createJokeObject());

let count = prompt('How many jokes would you like to create?');
count = parseInt(count);

for(i=1;i<=count; i++){
    jokeArray.push(createJokeObject());
}

console.log(jokeArray);