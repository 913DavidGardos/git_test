

const someObj = {
	protperty: 'Va;ues!',
	otherProperty: 55,
	"whats this...": function(){
		// do it!
		console.log("bro the function works");
	}
};

// function declaration
function square(number){
	return number * number;
}


// function invo
square(3)

// function object Constructor
function CarMaker(name, km, brand){
	this.name = name,
	this.km = km,
	this.brand = brand
}
// new instance 
newCar = new CarMaker("titit", 100, "toyota");

function ChangeCarName(car) {
	car.name = "Britney";
}

ChangeCarName(newCar);

// anonymous function

const CarMakerV2 = function(name, km, brand){
	this.name = name,
	this.km = km,
	this.brand = brand
}

carV2 = new CarMakerV2("v2", 22, "brand v2");

const KmChangerV2 = function(car){
	car.km = 99
}

KmChangerV2(carV2);
console.assert(carV2.km === 99, "car km is wrong");

// define function in an if statement mlol
// actually kind of cool

let gambleTonight;
let number = 2;

if(number === 1){
	gambleTonight = function(){
		console.log("Lets gambleee!");
	}
}else{
	gambleTonight = function(){
		console.log("No gambling ugh !");
	}
}

gambleTonight()


// CALLING FUNCTIONS

// hoisting basically means that this works

console.log(square(3));

function square(n){
	return n*n;
}

// nested functions yum

function addSquares(a, b){
	function square(x){ // this is the nested function my guess
		return x * x;
	}
	return square(a) + square(b);
}

console.log(addSquares(2, 3));
console.log(addSquares(32, 3));
console.log(addSquares(4, 5));


function outside(x) {
	function inside(y){
		return x + y;
	}
	return inside;
}

const fnInside = outside(3);

function getRandomBuff(player){
	function buffHp(player){
		player.hp++;
	}
	function debuffHp(player){
		player.hp--;
	}
	return debuffHp;
}

let Josh = {
	hp: 100
}

const fnBuffPlayer = getRandomBuff(Josh);
console.log(Josh.hp);
fnBuffPlayer(Josh);

console.log(Josh.hp);


function A(x){
	function B(y){
		function C(z){
			console.log(x+y+z);
		}
		C(3);
	}
	B(2);
}
A(1);


// closures
// The outer function defines a variable called "name"
const pet1 = function (name) {
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet1("Vivie");

console.log(myPet()); // "Vivie"


const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver





const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"



// default parameter
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5

function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


// arrow fnc


const a = ["hydrogen","helium","lithium","beryllium"];

const a2 = a.map(function(s){
	return s.length;
});

console.log(a2);

const a3 = a.map((s) => s.length);

console.log(a3);

function Person() {
  this.age = 0;

  setInterval(() => { this.age++;}, 1000);
}

const p = new Person();

const add7 = (x) => x+7;
console.log(add7(1));

const multiplyVersionMine = (x, y = 1) => x*y;
console.log(multiplyVersionMine(2));

const capitalize = (s) => { let result = s.toLowerCase(); let result2 = result.charAt(0).toLocaleUpperCase(); return result2 + result.substring(1, result.length);
; };

console.log(capitalize("BUNASZIUA"));
console.log(capitalize("BuNAuuuUA"));
console.log(capitalize("bUNASZIUA"));


const lastLetter = (s) => { return s.charAt(s.length - 1);};
console.log(lastLetter("Marlfgkjergd"));

// lets do some fizz buzz
//
//

// 1 -> usernumber
// multiples of three => Fizz
// multiples of five => Buzz
// for both => FizzBuzz

//let userIn = parseInt(prompt("Enter a number for FizzBuzz problem"));
let userIn = 1;
const multipleOfThree = (x) => { return x%3 === 0 ? true : false };
const multipleOfFive = (x) => { return x%5 === 0 ? true : false };
const fizzBuzz = (x) => {
	if(multipleOfThree(x) && multipleOfFive(x)){
		return "FizzBuzz";
	} else if (multipleOfFive(x)){
		return "Buzz";
	} else if (multipleOfThree(x)){
		return "Fizz";
	} else {
		return x;
	}
};

for(let i = 1; i <= userIn; i++){

	console.log(fizzBuzz(i));
}


// arrays

const arrayOF = ["jon", 1, true];
arrayOF.forEach(element => {
	console.log(element);
});

// cool array methods


console.log(arrayOF.toString());
console.log(arrayOF.at(1));
console.log(arrayOF[1]);
console.log(arrayOF.join(" padding "));
console.log(arrayOF);
console.log(arrayOF.pop());
console.log(arrayOF);
console.log(arrayOF.push("your M"));
console.log(arrayOF);
console.log(arrayOF.shift());
console.log(arrayOF);
console.log(arrayOF.unshift("Andrew"));

console.log(arrayOF);


const arrayComplex = [[1, [2], 1], [3, "pipo"], ["edu", 3, false], true];
const newArraySimple = arrayComplex.flat().flat();
console.log(newArraySimple);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "lemon", "kiwi");
//console.log(fruits);

fruits.splice(2, 2, "lemon", "kiwi");
console.log(fruits);


const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

window.onload = () => {
	const container = document.querySelector('#container');

	const content = document.createElement('div');
	content.classList.add('content');
	content.textContent = 'This is the glorious text-content!';

	container.appendChild(content);
}




