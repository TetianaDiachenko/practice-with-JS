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

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red',
// 	}
// };

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

// // Counter in Object to know the length of its properties

// let counter = 0;
// for (let key in options) {
// 	counter++;
// }
// console.log(counter); // 4

// ======================= Methods in Object ================================

/* if we want to know the length of object 
we can use method Object.keys()
because it return an Array and it has property LENGTH
*/


// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red',
// 	}
// };

// console.log(Object.keys(options)); // [ 'name', 'width', 'height', 'colors' ]
// console.log(Object.keys(options).length); // 4

// Create methods in Object

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red',
// 	},
// 	makeTest: function() {
// 		console.log('Test');
// 	}
// };

// options.makeTest(); // Test (Run method makeTest)

// // Destructuring in Object

// const {border, bg} = options.colors;
// console.log(border); // black

// ======================= Tasks for working with objects ============================

// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		 languages: ['ukr', 'eng'],
// 		 programmingLangs: {
// 			  js: '20%',
// 			  php: '10%'
// 		 },
// 		 exp: '1 month'
// 	},
// 	// Create a new method that takes an object as an argument and returns a string in the required format.
// 	showAgeAndLangs: function(plan) {
// 		const lang = plan.skills.languages.map(language => language.toUpperCase()).join(' ');
// 		return `I am ${plan.age} and I speak languages: ${lang}`
// 	}
	
// };

// // A function that takes an object with all the data and returns a string with the experience.

// function showExperience(plan) {
// 		// const expect = personalPlanPeter['skills']['exp'];
// 			// return expect;
// 	const {exp} = plan.skills;
//  		return exp;
// }

// //A function that takes an object with all the data and returns a string in the required format.

// function showProgrammingLangs(plan) {
// 	const { programmingLangs } = plan.skills;
// 	let result = '';
	
// 	for (let lang in programmingLangs) {
// 		 result += `The ${lang} language is studied by ${programmingLangs[lang]}\n`;
// 	}
// 	return result;

// }

// console.log(showExperience(personalPlanPeter));  // 1 month
// console.log(showProgrammingLangs(personalPlanPeter)); // The js language is studied by 20% The php language is studied by 10%
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); // I am 29 and I speak languages: UKR ENG

// ======================= Arrays Methods ============================

// //Methods that change the array
// const arr = [1, 2, 3, 6, 8];
// // Delete the last element in array
// arr.pop(); 
// console.log(arr); // [ 1, 2, 3, 6 ] 

// // Add the last element to array
// arr.push(10);
// console.log(arr); // [ 1, 2, 3, 6, 8, 10 ]

// //Delete/add the first element in array = shift / ushift 
// // but rearly use because they change indexes of all elements in array
// arr.shift(); // [ 2, 3, 6, 10 ]
// console.log(arr); 

// arr.unshift(0); // [ 0, 2, 3, 6, 10 ]
// console.log(arr);  

// /* 
// [ 1, 2, 3, 6 ]
// [ 1, 2, 3, 6, 10 ]
// [ 2, 3, 6, 10 ]
// [ 0, 2, 3, 6, 10 ]
//  */

// Iterate over an array

// // with loop
// const arr = [1, 2, 3, 6, 8];
// for (let i = 0; i < arr.length; i++) {
// 	// console.log(arr[i]);
// }
// /* 
// 1
// 2
// 3
// 6
// 8
// */
// for of - use with break & continue
// const arr1 = [1, 2, 3, 6];
// for (let value of arr1) {
// 	console.log(value);  
// }
// //length - в масиві скаладається з останнього індекса + 1
// console.log(arr1.length); //4

// arr1[99] = 0
// console.log(arr1.length); // 100
// console.log(arr1); // [ 1, 2, 3, 6, <95 empty items>, 0 ]

// // forEch() - Iterate callback function inside with 3 parametres(item, index, arr)

// const numbers = [2, 3, 6];
// numbers.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} inside array ${numbers}`);	
// });
// /*
// 0: 2 inside array 2,3,6
// 1: 3 inside array 2,3,6
// 2: 6 inside array 2,3,6
// */

// Methods of array: split, join
// Split - converts string to array

// const str = prompt('', ''); //open in browser window, where we write smth with commas
// const products = str.split(',').map(line => line.trim()); // convert these in items in array   // 
// products.sort(); // sorts as strings in alphabetical order
// console.log(products); 

// // join - convert array to string
// console.log(products.join('; ')); // convert these items from array to string with ;

// Sort in arrays
// const arrN = [2, 13, 26, 8, 10];
// arrN.sort();
// console.log(arrN); // [10, 13, 2, 26, 8]

// function compareNum(a, b) {
//     return a - b;          // from small to big
// }
// arrN.sort(compareNum); // sort numbers!!!
// console.log(arrN); // [ 2, 8, 10, 13, 26 ]

// 0 - the same
// 1 - true (a > b)
// -1 - false

// ======================= Search Algorithms in JavaScript============================

//Linear Search in JavaScript

// function LinearSearch(t,A) {  //t - the element we are looking for,
//     const n = A.length, i = 0;  // A - the array where we are looking for.
//     A[n] = t;
//     while (A[ i ] !== t) i++;
//     if (i < n) return i;
//     else return -1; // Output is the index of the element being searched for.
//                     // If the element being searched for is not in the array, then -1.
// }

// // Binary Search in JavaScript
// /* Binary search is a highly efficient algorithm for searching a sorted array. 
// It works by comparing the search key t with the middle element of the array A[k]. 
// If they are equal, the algorithm terminates. Otherwise, the same operation is 
// repeated recursively for the first half of the array if t<A[k], 
// and for the second if t>A[k]. */

// function BinarySearch(t,A) {
//     let i = 0, j = A.legth - 1, k;

//     while (i <= j) {
//         k = Math.floor((i + j)/2);
//         if (t === A[k]) return k;
//         else if (t < A[k]) j = k-1;
//         else i = k+1;
//     }
//     return -1;
// }

// //Optimized version of Binary Search

// function BinarySearch(t,A) {
//     let i = 0, j = A.length, k; // t - the element we are looking for,
//                                 // A is an ordered array in which we are searching.
//     while (i < j) {
//         k = Math.floor((i+j)/2);
//         if (t <= A[k]) j = k;
//         else i = k+1;
//     }
//     if (A[ i ] === t) return i; // Output is the index of the element being searched for.
//     else return -1;             // If the element being searched for is not in the array, then -1.
// }

// // Interpolation Search in JavaScript 
// /* Unlike binary search, which always compares the search key to the mean value of the sorted array 
// (and therefore always reduces the size of the problem by half), interpolation search takes 
// the value of the search key into account when determining the array element to compare with the key. 
// In a sense, the algorithm imitates searching for a name in a phone book.*/

// function InterpolationSearch(t, A) {       // t - the element we are looking for,
//     let mid, low = 0, high = A.length-1;   // A is an ordered array in which we are searching.
    
//     while (A[low] < t && A[high] > t) {
//         mid = low + Math.floor( ((t-A[low]) * (high-low))/(A[high]-A[low]) );
//         if (A[mid] < t) low = mid+1;
//         else if (A[mid] > t) high = mid-1;
//         else return mid;
//     }
//     if (A[low] === t) return low;              // Output is the index of the element being searched for.
//     else if (A[high] === t) return high;
//     else return -1;                            // If the element being searched for is not in the array, then -1.
// }

// Finding a Substring in JavaScript
/* It is necessary to determine the index i of the leftmost character of the first substring matching 
the pattern \mathsf{sub} in the text \mathsf{str}

(for example, if str = "Lorem ipsum" and sub = "ips", then i=6).

The simplest search algorithm consists of directly checking all possible offsets. 
The check consists of sequentially comparing the characters of the pattern \mathsf{sub} with 
the characters of the string \mathsf{str}; at the first detected mismatch of characters, 
the check stops and the outer loop variable is increased by 1. */

// function SubstringSerch(sub, str) { // sub - the substring we are looking for
//                                     // str - the string we are looking for
//     let i, j, n = sub.length,
//         N = str.length - n + 1;

//     for (i = 0; i < N; i++) {
//         j = 0;
//         while (j < n && sub.charAt(j) === str.charAt(i+j)) j++;
//         if (j === n) return i;
//     }                                // The output is the index of the 1st character of the substring.
//     return -1;                       // If the substring we are looking for is not in the string, then -1.
// }
// For example,
// SubstringSearch('ips', 'Lorem ipsum') = 6,
// SubstringSearch('dolor', 'Lorem ipsum') = -1.

// ======================= Tasks on working with arrays ============================
// /* Task 1
// Write a function showFamily that will take an array of strings and return a message in the desired format.
// showFamily(family) => 'The family consists of: Peter Ann Alex Linda'
// The names are automatically substituted from the array. 
// If the array is empty, then the message 'The family is empty' is displayed */

// const family = ['Peter', 'Ann', 'Alex', 'Linda']; 
// const emptyFamily = [];

// function showFamily(arr) {
//     const members = arr.join(' ');
//     if (arr.length === 0) {
//         console.log(`The family is empty`);
//     } else 
//         console.log(`The family consists of: ${members}`); 
// }
// showFamily(family); // The family consists of: Peter Ann Alex Linda
// showFamily(emptyFamily);  // The family is empty

/* Task 2
Write a function standardizeStrings that will take an array of strings and 
output these strings to the console in lowercase.
Example:
standardizeStrings(favoriteCities) will output to the console
lisbon
rome
milan
dublin
 */

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }
// standardizeStrings(favoriteCities);

/* Task 3
Write a function reverse that takes a string 
and returns that string in reverse order.*/

// const someString = 'This is some strange string';
// const arrTest = [1, 2, 3];

// function reverse(str) {
//     if (typeof str !== 'string') {
//         console.log('Error');
//     } else {
//         // console.log(str.split(' ').reverse().join(' ')); //string to arr - reverse - arr to string
//         console.log(str.split('').reverse().join('')); // revers every letter   
//     }

// }
// // reverse(someString); // string strange some is This
// reverse(someString); // gnirts egnarts emos si sihT
// reverse(arrTest); // Error

/* Task 4 
You need to create the main ATM function availableCurr, 
which takes two arguments: the first is an array with all available currencies 
from two banks at once (now let's imagine that they cannot be repeated), 
the second is an optional argument that specifies the currency 
that is currently out of stock in the ATM. If the array in the first argument is empty, 
the function returns the string 'No available currencies'. 
The function returns the string in the required format.

Example:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Returns the string:
Available currencies:
UAH
RUB
Note:
- CNY (yuan) has disappeared from the list of currencies, which means that this currency is out of stock
- After the currency: there is a line break \n, and after each currency too. This is important for tests
- Data for the first argument must come from two banks at once, first baseCurrencies, then additionalCurrencies in order
*/

const baseCurrencies = ['USD', 'EUR', 'UAH'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY', 'USD'];
const emptyCurrencies = [];

function concatArrays(arr1, arr2) {
    // const allArrs = arr1.concat(arr2); // if items in arrays are different
    // const allArrs = [... new Set(arr1.concat(arr2))]; // checking currencies from two banks to make sure they are not duplicates
    const allArrs = [... new Set([...arr1, ...arr2])];
    return allArrs; 
}

function availableCurr(arr, ...missingCurr) {

    if (arr.length === 0) {
        console.log('No available currencies');
        return
    } 
        
    // const filterArr = arr.filter( currency => currency !== missingCurr);
    const filterArr = arr.filter( currency => !missingCurr.includes(currency)); // chacking in arr missingCurr
    
    const result = `Available currencies: \n${filterArr.join('\n')}`;
return result;
    
};

const allCurrencies = concatArrays(baseCurrencies, additionalCurrencies);

// console.log(allCurrencies); // [ 'USD', 'EUR', 'UAH', 'RUB', 'CNY' ]
// console.log(availableCurr(emptyCurrencies)); // No available currencies 
console.log(availableCurr(allCurrencies, 'RUB','USD', 'EUR')); 
/* Available currencies: 
UAH
CNY*/

// This is test commit to delete later