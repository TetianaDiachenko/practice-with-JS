// ===========Variables========================================================
// let userName = 'John';
// let userNumber = 25;
// userNumber = 24;

// ===========Data types=======================================================
// const storeName = 'Flowers';
// const storeDescription = {
//     'budget': 10000,
//     'employees': ['Ben', 'Anna', 'Kate'],
//     'products': {
//         'roses': 100,
//         'tulips': 60
//     },
//     'open': true
// }

// ===========Interaction with the user==========================================
//  alert('hi');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Are you 18 already?", "18");
// console.log(answer);

// const answers = [];
// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your last name?', '');
// answers[2] = prompt('How old are you?', '');

// document.write(answers); // Old command, which change everything on the page

// ===========Conditions=========================================================

// if (4 == 4) {
// 	console.log('Ok!');
// } else {
// 	console.log('Error');
// }

// const num = 50;
// if(num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Much');
// } else {
// 	console.log('Ok!');
// }

//ternary operator: (Condition) ? true : false,
// (num === 50) ? console.log('ok!') : console.log('Error');

// Switch for many conditions
// switch (num) {
// 	case 49: 
// 		console.log('False');
// 		break;
// 	case 100:
// 		console.log('False');
// 		break;
// 	case 51:
// 		console.log('TRUE');
// 		break;
// 	default:
// 		console.log('Not this time');
// 		break;	
// }
// ===========Operators=================================================================
// console.log('arr' + " - object"); //arr - object (string)
// console.log(4 + +" - object"); // NaN
// console.log(4 + +"5"); // 9 (number)

//+"5" - унарний +
// ++ increment
// -- decrement

// let incr = 10,
// 	 decr = 10;

// incr++;
// decr--;

// console.log(incr); // 11
// console.log(decr); // 9

// console.log(incr++); // 10
// console.log(decr--); // 10

// console.log(++incr); // 11
// console.log(--decr); // 9

// console.log(5 % 2); // 1 залишок
// = присвоєння
// == порівнює значення - нестроге порівняння
// === порівнює і значення і тип данних - строге порівняння

// console.log(2*4 == 8); // true
// console.log(2*4 === '8'); // false
 
// оператор заперечення ! - повертає зворотнє значення
// const isChecked = false,
// 		isClose = false;
// console.log(isChecked || !isClose); // true

// Оператор нестрогий НЕ ДОРІВНЮЄ != і строгий !==
// console.log(2 + 2 * 2 != '6'); // false
// console.log(2 + 2 * 2 !== '6'); // true


// ===========Logical operators=========================================================

// && - логічний оператор І, має бути і правда і правда, щоб було true
// і повертає перше false або останнє true
// || - логічний оператор АБО, має бути хоча б одне правдиве, щоб було true.
// Або повертає перше true або останнє false

// const hamburge = 5;
// const fries = null;
// if (hamburge && fries) {
// 	console.log('I am happy');	
// }
// console.log((hamburge && fries)); // null

// const hamburge = 2;
// const fries = 1;
// const cola = 0;
// if (hamburge === 3 && cola === 1 && fries) {
// 	console.log('We are happy!');	
// } else {
// 	console.log('We are leaving');
	
// }

// const hamburge = 3;
// const fries = 1;
// const cola = 0;
// console.log((hamburge === 3 && cola && fries)); // 0
// if (hamburge === 3 && cola === 1 && fries) {
// 	console.log('We are happy!');	
// } else {
// 	console.log('We are leaving');
// }

// console.log(1 && 0); // 0
// console.log(1 && 5); // 5
// console.log(null && 5); // null
// console.log(0 && 'sdfghfewawsedf'); // 0

// const hamburge = 3;
// const fries = 0;
// const cola = 0;
// if (hamburge || cola || fries) { // true
// 	console.log('We are ok!');	
// } else {
// 	console.log('We are leaving');
// }
// console.log((hamburge || cola || fries)); // 3

// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport || alexReport || samReport || mariaReport); // done

// const hamburge = 3;
// const fries = 3;
// const cola = 0;
// nuggets = 2;

// if (hamburge === 3 && cola === 2 || fries === 3 && nuggets) { // true
// 	console.log('We are ok!');	
// } else {
// 	console.log('We are leaving'); // We are ok
// }
// console.log((hamburge === 3 && cola === 2 || fries === 3 && nuggets)); // 2

// tasks for logical operators
// console.log( NaN || 2 || undefined );              // 2
// console.log( NaN && 2 && undefined );              // NaN
// console.log( 1 && 2 && 3 );                        //3
// console.log( !1 && 2 || !3 );                      // false
// console.log( 25 || null && !3 );                   //25
// console.log( NaN || null || !3 || undefined || 5); //5
// console.log( NaN || null && !3 && undefined || 5); //5
// console.log( 5 === 5 && 3 > 1 || 5);               // true


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
// if (hamburger === 3 && cola || fries === 3 && nuggets) {   // Done!
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
// if (hamburger || cola || fries === 3 || nuggets) { // Done!
//    console.log('Done!') 
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
// if (hamburger && cola || fries === 3 && nuggets) { // Nothing in the console
//    console.log('Done!')
// }

// ===========Сycles=========================================================

// function firstTask() {
// 	for (let i = 5; i < 11; i++) {
// 			console.log(i)
// 		}    	 
// }
// firstTask();      // 5 6 7 8 9 10

// function secondTask() {
//     for (let i = 20; i > 9; i--){
// 		if (i === 13){
// 			break;
// 		}
// 		console.log(i)  
// 	 }    
// }
// secondTask();   // 20 19 18 17 16 15 14

// function thirdTask() {
//     for (let i = 2; i <= 10; i++){
// 		if (i % 2 === 0){
// 			console.log(i);
// 		}
// 	 }
// }
// thirdTask();             // 2 4 6 8 10

// let i = 2;
// while (i <=16) {
// 	if (i % 2 === 0) {
// 		i++;
//       continue;
//     } else {
//         console.log(i);
//     }
// 	 i++;
// }                          // 3 5 7 9 11 13 15

// function fifthTask() {
// 	const arrayOfNumbers = [];

// 	for (let i = 5; i <= 10; i++){
// 		arrayOfNumbers.push(i);
// 	};
// 	console.log(arrayOfNumbers);
// 	return arrayOfNumbers;
// }
// fifthTask(); // [ 5, 6, 7, 8, 9, 10 ]

// Or
// function fifthTask() {
// 	const arrayOfNumbers = [];

// 	for (let i = 5; i < 11; i++) {
// 		 arrayOfNumbers[i - 5] = i;         // or!!! 5 - 5 = 0
// 	}

// 	console.log(arrayOfNumbers);
// 	return arrayOfNumbers;
// }

// fifthTask()  // [ 5, 6, 7, 8, 9, 10 ]



// ==================Loops*

// let num = 50;
// while (num < 55) {
// 	console.log(num); // 50 51 52 53 54
// 	num++;	
// }

// do {
// 	console.log(num); // 50 51 52 53 54 
// 	num++;
// }
// while (num < 55);

// for (let i = 0; i < 8; i++) {
// 	console.log(i);	         // 0 1 2 3 4 5 6 7
// }

// for (let i = 0; i < 8; i++) {
// 		console.log(num); // 50 51 52 53 54 55 56 57
// 		num++;
// }

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		break;
// 	}
// 	console.log(i); // 1 2 3 4 5
// }

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		continue;
// 	}
// 	console.log(i); // 1 2 3 4 5 7 8 9
// }

// Послідовність виконання циклів, від зовнішнього до внутрішього, який проходить до кінця
// for (let i= 0; i < 3; i++) {
// 	console.log('Количество итераций 1-го цикла:', i);
// 	for (j=0; j < 3; j++) {
// 		 console.log('Количество итераций 2-го цикла:', j)
// 		 for (let k = 0; k < 3; k++) {
// 			  console.log('Количество итераций 3-го цикла:', k)
// 		 }
// 	}
// }

// function firstTask() {
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	const result = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		result[i] = arr[i];
// 	}
// 	console.log(result);
// 	return result;
// }
// firstTask();            //  [3, 5, 8, 16, 20, 23, 50]

// function secondTask() {
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];

// 	for (let i = 0; i < data.length; i++){
// 		if(typeof(data[i]) === 'number') {
// 			data[i] = data[i] * 2;
// 		} else if (typeof(data[i]) === 'string') {
// 			data[i] = `${data[i]} - done`;
// 		}
// 	}
// 	console.log(data);	
// 	return data;
// }
// secondTask();  // [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function thirdTask() {
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	const result = [];

// 	// for (let i = 1; i <= data.length; i++){
// 	// 	result[i - 1] = data[data.length - i];
// 	// }

// 	for (let i = 0; i < data.length; i++){
// 		result[i] = data[data.length - (i + 1)];
// 	}

// 	console.log(result);
// 	return result;
// }
// thirdTask(); // [ 'Homework', 20, 'Shopping', 10, 5 ]

// ==================Loops ** Piramid
//     *
// 	***
//   *****
//  *******
// *********

// function createFigure() {
// 	const lines = 5;
// 	let result = '';

// 	for (let i = 0; i < lines; i++) {
// 		for(let j = 1; j < lines - i; j++) {
// 			result += " ";
// 		}
// 		for(let j = 0; j < 2 * i + 1; j++) {
// 			result += "*";
// 		}
// 		result +="\n";
// 	}

// 	console.log(result);
// 	return result;
// }
// createFigure();

// console.log("*".repeat(10));

// function createFigure() {
// 	const lines = 5;
// 	let result = '';

// 	for (let i = 0; i < lines; i++) {
// 		result += " ".repeat(lines - (i + 1));
// 		result += "*".repeat(2 * i + 1); 
// 		result +="\n";
// 	}

// 	console.log(result);
// 	return result;
// }
// createFigure();


// function createSq(lines) {
// 	let result = '';
// 	result += "* ".repeat(lines);
// 	result +="\n";
// 	for (let i = 0; i < lines - 2; i++) {
// 		result += "* ";
// 		result += "  ".repeat(lines - 2);
// 		result += "* ";
// 		result +="\n";
// 	}

// 	result += "* ".repeat(lines);
// 	result +="\n";

// 	console.log(result);
// 	return result;
// }
// createSq(12); 

// function createRect(width, height) {
// 	let result = '';

// 	result += "* ".repeat(width);
// 	result +="\n";
// 	for (let i = 0; i < height - 2; i++) {
// 		result += "* ";
// 		result += "  ".repeat(width - 2);
// 		result += "* ";
// 		result +="\n";
// 	}

// 	result += "* ".repeat(width);
// 	result +="\n";

// 	console.log(result);
// 	return result;
// }
// createRect(10, 5); 

// ===========Functions=========================================================

// Function declaration
// Ств. до початку виконання скрипта, можна викликати перед оголошенням
// let num = 20;
// function showMessage(text) {
// 	console.log(text);
// 	num = 10	// here if let = 10; 
// }
// showMessage("Hello!"); // Hello!
// console.log(num); // 10; here 20

// function calc(a, b) {
// 	return (a + b);
// 	console.log('dfgf'); //Unreachable code detected. після return код не виконується	
// }
// console.log(calc(4, 3)); // 7
// console.log(calc(5, 6)); // 11
// console.log(calc(10, 6)); // 16

// function ret() {
// 	let num = 50;
// 	// .... може бути багато коду
// 	return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);  // 50

// // Function expression
// // Ств. лише тоді, коли доходить потік коду, можна викликати лише після оголошення

// const logger = function() {
// 	console.log("Hello");
// };
// logger();

// // Arrow function - Стрілочна функція
// // Не має контексту виклику (this)

// const calc = (a, b) => { return a + b };
// // або
// const calc = (a, b) => a + b;
// // або
// const calc = a => a + b;
// // або
// const calc = (a, b) => { 
// 	console.log('1');
// 	return a + b 
// };

// Functions tasks

// function sayHello(name) {
// 	return `Hello, ${name}!`;
// }
// console.log(sayHello('Nick'));

// function returnNeighboringNumbers(number) {
// 	// const result = [];
// 	// result[0] = --number;
// 	// result[1] = ++number;
// 	// result[2] = ++number;
// 	// return result;
// 	return [number - 1, number, number + 1];
// }
// console.log(returnNeighboringNumbers(5));

// // my variant

// function getMathResult(numb, prog) {
// 	let result = '';
// 	for (let i = 1; i <= prog; i++) {
// 		if (i === prog) {
// 			result += `${numb * i}`;
// 		} else {
// 			result += `${numb * i}---`;
// 		}
// 	}	
// 	if (typeof(prog) !== 'number' || prog <= 0) {
// 		return numb;
// 	}

// 	return result;
// }
// console.log(getMathResult(3, 10))

// //not my
/* 3) Create a function that will accept 2 arguments, both numbers. The first number is the base, the second number is how many times it is necessary to repeat this number in the progression. (See example below). The function should return a string (or a number in special cases, which will be discussed below) where these numbers follow the order separated by three hyphens "---". There should be none after the last number.

If the second argument is not a number, level or less than zero - then simply return the first argument. (We check using the typeof operator)

Calling the function getMathResult(5, 3) will give the answer 5---10---15 */

// function getMathResult(num, times) {
// 	if (typeof(times) !== 'number' || times <= 0) {
// 		 return num;
// 	}
// 	let str = '';

// 	// Result with array
// 	// let arr = [];
// 	// for (let i = 1; i <= times; i++) {
// 	// 	arr.push(num * i);		
// 	// }
// 	// return arr.join('---');

// 	for (let i = 1; i <= times; i++) {
// 		 if (i === times) {
// 			  str += `${num * i}`;
// 		 } else {
// 			  str += `${num * i}---`;
// 			  // str = str + num * i + "---"
// 		 }	
// 	}	
// 	return str;
// }
// console.log(getMathResult(10, 5)); // 10---20---30---40---50

// Arguments in functions

// function convert(amount) {
// 	console.log(28 * amount);
// }

// convert(500); // 14000 // Use 1 argument

// Use more arguments to make the function universal

// const usdCurr = 28;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// }
 
// convert(500, usdCurr); // 14000

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// }
 
// convert(500, usdCurr); // 14000
// convert(500, eurCurr); // 16000

// Return in functions

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);	
// } 
// const res = convert(500, usdCurr);

// promotion(res); // 12600

//Can end the function action with word return

// function test() {
// 	for(let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 3) return	
// 	}
// 	console.log('Done');	
// }
// test(); // 0 1 2 3

//Every function returns smth, so if nothing return it returns undefined

// function doNothing() {};
// console.log( doNothing() === undefined); // true


// =========== Methods and properties of string==================================

// length - property of string
// Methods: ToUpperCase(), toLowerCase() - returns new value

// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.length); // 4
// console.log(arr.length); // 3
// console.log(str[2]); // S
// console.log(str[2] = 'd'); // d
// console.log(str); // test - because we cannot do it like in arrays, we need methods

// const str2 = "teSt";
// console.log(str2.toUpperCase()); // TEST
// console.log(str2.toLowerCase()); // test
// console.log(str2); // teSt

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit")); // 5
// console.log(fruit.indexOf("q")); // -1

// Methods (3), which change the string: slice(2, 3);, substring(2, 3),

// const logg = "Hello world";
// console.log(logg.slice(6, 11)); // world
// console.log(logg.slice(0, 5)); // Hello
// console.log(logg.slice(6)); // world
// console.log(logg.slice(-5, -1)); // worl

// console.log(logg.substring(6, 11)); // world 
// console.log(logg.substr(6, 5)); // world 

// =========== Methods of Number==================================

// const num = 12.2;
// console.log(Math.round(num)); // 12 - round

// const test = "12.2px";
// console.log(parseInt(test)); // 12  - conver to the number
// console.log(parseFloat(test)); // 12.2 - convert to the number with .

// =========== Function calculate Volume And Area of Cube ===================

// function getCubeVolumeAndAria(side) {
//    const cubeVolume = side * side * side; 
//    const cubeAria = 6 * (side * side);

//    if (Number.isInteger(side) && side >= 0){
//        return `Volume of the cube: ${cubeVolume}, Aria of the cube: ${cubeAria}`;
//       } else {
//       return `An error occurred during calculation`;
// 	};
// };
// console.log(getCubeVolumeAndAria(5)); // Volume of the cube: 125, Aria of the cube: 150
// console.log(getCubeVolumeAndAria(15)); // Volume of the cube: 3375, Aria of the cube: 1350
// console.log(getCubeVolumeAndAria(15.5)); // An error occurred during calculation
// console.log(getCubeVolumeAndAria('15')); // An error occurred during calculation
// console.log(getCubeVolumeAndAria(-15)); // An error occurred during calculation

// // =========== Function getCoupeNumber ===================

// function getCoupeNumber(seat) {

// 	if (!Number.isInteger(seat) || seat < 0) {
// 		return 'Error. Please check if the seat number you entered is correct';
// 	}
// 	if (seat === 0 || seat > 36) {
// 		return 'There are no such seats in the carriage'
// 	}
// 	// if (seat >= 1 && seat <= 4) {
// 	// 	return 1;
// 	// };
// 	// if (seat >= 5 && seat <= 8) {
// 	// 	return 2;
// 	// };
// 	// if (seat >= 9 && seat <= 12) {
// 	// 	return 3;
// 	// };
// 	// if (seat >= 13 && seat <= 16) {
// 	// 	return 4;
// 	// };
// 	// if (seat >= 17 && seat <= 20) {
// 	// 	return 5;
// 	// };
// 	// if (seat >= 21 && seat <= 24) {
// 	// 	return 6;
// 	// };
// 	// if (seat >= 25 && seat <= 28) {
// 	// 	return 7;
// 	// };
// 	// if (seat >= 29 && seat <= 32) {
// 	// 	return 8;
// 	// };
// 	// if (seat >= 33 && seat <= 36) {
// 	// 	return 9;
// 	// };

//  	// return Math.ceil(seat / 4)
// 	 return Math.floor(seat / 4) + 1;
// };

// console.log(getCoupeNumber(33)); // 9
// console.log(getCoupeNumber(7)); // 2
// console.log(getCoupeNumber(300)); // There are no such seats in the carriage
// console.log(getCoupeNumber(0)); // There are no such seats in the carriage
// console.log(getCoupeNumber(7.7)); // Error. Please check if the seat number you entered is correct
// console.log(getCoupeNumber(-10)); // Error. Please check if the seat number you entered is correct
// console.log(getCoupeNumber('Hello')); // Error. Please check if the seat number you entered is correct

// =========== Function of minutes ===================
/* Create a function that takes an integer number of minutes 
and returns the time in the desired string format.*/

// function getTimeFromMinutes(minutes) {
	
// 	if (!Number.isInteger(minutes) || minutes < 0 || minutes > 600) {
// 		return 'Error, check the data';
// 	} else {
// 		let hours = Math.floor(minutes / 60);
// 		let remainingMinutes = minutes % 60; 
// 		return `It's ${hours} hours and ${remainingMinutes} minutes.`
// 	}
// }

// console.log(getTimeFromMinutes(150)); // It's 2 hours and 30 minutes.
// console.log(getTimeFromMinutes(50)); // It's 0 hours and 50 minutes.
// console.log(getTimeFromMinutes(0)); // It's 0 hours and 0 minutes.
// console.log(getTimeFromMinutes(-150)); // Error, check the data
// console.log(getTimeFromMinutes(700)); // Error, check the data


// // ========================= Function findMaxNumber =====================

// /* Write a function that takes 4 numbers and returns the largest of them. 
// If one of the arguments is not a number or 
// there are less than 4 of them, 0 is returned. 
// Fractional numbers are allowed.*/

// function findMaxNumber(firstNum, secondNum, thirdNum, fourthNum) {
// 	if ( typeof(firstNum) !== 'number' || 
// 			typeof(secondNum) !== 'number' ||
// 			typeof(thirdNum) !== 'number' ||
// 			typeof(fourthNum) !== 'number' ||
// 			arguments.length !== 4
// 	) {
// 		return 0;
// 	} else {
// 		return Math.max(firstNum, secondNum, thirdNum, fourthNum)
// 	}
// }

// console.log(findMaxNumber(1, 5, 6.6, 11)); // 11
// console.log(findMaxNumber(1, 5, 6.6, 11, 12)); // 0
// console.log(findMaxNumber(1, 5, '6', '10')); // 0

// =========== Function of Fibonacci without recursion ===================

// function fib(num) {
// 	if (!Number.isInteger(num) || typeof(num) !== 'number' || num < 0) {
// 		return '';
// 	} else {
// 		let str = [];
// 		let a = 0;
// 		let b = 1;
// 		let next;

// 		for (let i = 0; i < num; i++) {
// 			str.push(a);
// 			next = a + b;
// 			a = b;
// 			b = next;
// 		}
// 		return str.join (' ')
// 	}
// }

// console.log (fib(4)); // 0 1 1 2
// console.log (fib(7)); // 0 1 1 2 3 5 8
// console.log (fib('7')); // ''
// console.log (fib(1)); // 0
// console.log (fib(0)); // ''

// =========== Callback Function===================

/* If don't use callback function, 
different functions can be done in different time, for ex.: */

// function first() {
// 	// do smth
// 	setTimeout(function() {
// 		console.log(1);
// 	}, 500);
// }

// function second() {
// 	console.log(2);
// }

// first(); 
// second(); 

// 2 
// 1

/* If we use callback function, 
it'll be done exactly after 
our previous function was done*/

// function learnJS(lang, callback) {
// 	console.log(`I learn ${lang}`);
// 	callback();
// }

// // the direct way to use callback function
// // learnJS('JavaScript', function() {
// // 	console.log(`I've learned the first lesson`);	
// // })

// // the separate way to use callback function
// function done() {
// 	console.log(`I've learned the first lesson`);
// }

// learnJS('JavaScript', done);

// ============================== Objects ======================================

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	}
};

// console.log(options.name); // test
// console.log(options['colors']['border']); //black

// delete options.name;

// console.log(options); // { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

// To iterate through the properties of an object use FOR ... IN

// for (let key in options) {
// 	console.log(`Property ${key} has a meaning ${options[key]}`); 
// }
/* Property name has a meaning test
Property width has a meaning 1024
Property height has a meaning 1024
Property colors has a meaning [object Object]*/

// for (let key in options) {
// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]) {
// 				console.log(`Property ${i} has a meaning ${options[key][i]}`); 
// 		}
// 	} else {
// 			console.log(`Property ${key} has a meaning ${options[key]}`); 
// 	}
// }

// /* Property name has a meaning test
// Property width has a meaning 1024
// Property height has a meaning 1024
// Property border has a meaning black
// Property bg has a meaning red*/

// Counter in Object to know the length of its properties

let counter = 0;
for (let key in options) {
	counter++;
}
console.log(counter); // 4