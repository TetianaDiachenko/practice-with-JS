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

if (4 == 4) {
	console.log('Ok!');
} else {
	console.log('Error');
}

const num = 50;
if(num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Much');
} else {
	console.log('Ok!');
}

//ternary operator: (Condition) ? true : false,
(num === 50) ? console.log('ok!') : console.log('Error');

// Switch for many conditions
switch (num) {
	case 49: 
		console.log('False');
		break;
	case 100:
		console.log('False');
		break;
	case 51:
		console.log('TRUE');
		break;
	default:
		console.log('Not this time');
		break;	
}

