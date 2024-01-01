// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Too small");
//   case 4:
//     alert("Exactly!");
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Too small");
//   case 4:
//     alert("Exactly!");
//   case 5:
//     alert("Too big");
//   default:
//     alert("I don't know such values");
// }

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

// function showMessage() {
//   alert("Hello everyone!");
// }

// showMessage();

// function showMessage() {
//   let message = "Hello, I'm JavaScript!";

//   alert(message);
// }

// showMessage();

// alert(message);

// let userName = "John";

// function showMessage() {
//   let message = "Hello, " + userName;
//   alert(message);
// }

// showMessage();

// let userName = "John";

// function showMessage() {
//   userName = "Bob";

//   let message = "Hello, " + userName;
//   alert(message);
// }

// alert(userName);

// showMessage();

// alert(userName);

// let userName = "John";

// function showMessage() {
//   let userName = "Bob";

//   let message = "Hello, " + userName; // Bob
//   alert(message);
// }

// showMessage();

// alert(userName);

// function showMessage(from, text) {
//   alert(from + ": " + text);
// }

// showMessage("Ann", "Hello!");
// showMessage("Ann", "What's up?");

// function showMessage(from, text) {
//   from = "*" + from + "*";
//   alert(from + ": " + text);
// }

// let from = "Ann";

// showMessage(from, "Hello");

// alert(from);

// showMessage("Ann");

// function showMessage(from, text) {
//   alert(from + ": " + text);
// }

// // showMessage("Ann");

// showMessage("Ann", undefined);

// function showMessage(from, text = anotherFunction()) {}

// let text = "How";
// function showMessage(from, text) {
//   if (text === undefined) {
//     text = "no text given";
//   }

//   alert(from + ": " + text);
// }

// showMessage();

// let text = "";
// function showMessage(text) {
//   if (text === undefined) {
//     text = "empty message";
//   }
//   alert(text);
// }

// showMessage();

// function showMessage(from, text) {
//   text = text || "no text given";
// }
// alert(from + ": " + text);

// showMessage(hello);

// function showMessage(from, text) {
//     if (text === undefined) {
//       text = 'no text given';
//     }

//     alert( from + ": " + text );
//   }

// function showMessage(text) {
//   if (text === undefined) {
//     text = "empty message";
//   }
//   alert(text);
// }
// showMessage();

// function checkAge(age) {
//   if (age <= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = this.prompt("How old are you?", 18);

// if (checkAge(age) == true) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

// function showMovie(age) {
//   if (!checkAge(age)) {
//     return;
//   }

//   alert("Showing you the movie");
// }
// alert(showMovie());

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// alert(showPrimes());

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// let sayHi = function () {
//   alert("Hello");
// };

// let func = sayHi;

// func();
// sayHi();

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   alert("you agreed.");
// }

// function showCancel() {
//   alert("You canceled the execution.");
// }

// ask("Do you agree?", showOk, showCancel);

// function ask(question, yes, no){
//     if(confirm(question)) yes() else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution.");}
// );

// sayHi("John");

// function sayHi(name) {
//   alert(`Hello, ${name}`);
// }
// sayHi(2);

// let age = prompt("What is your age?", 18);

// if (age < 18) {
//   function welcome() {
//     alert("Greetings!");
//   }
// } else {
//   function welcome() {
//     alert("Hello!");
//   }
// }

// welcome();

// let age = 20;

// if (age < 18) {
//   welcome();

//   function welcome() {
//     alert("Hello!");
//   }

//   welcome();
// } else {
//   function welcome() {
//     alert("Greetings!");
//   }
// }

// welcome();

// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {
//   welcome = function () {
//     alert("Hello!");
//   };
// } else {
//   welcome = function () {
//     alert("Greetings!");
//   };
// }

// welcome();

// let age = prompt("What is your age?", 18);

// let welcome =
//   age < 18
//     ? function () {
//         alert("Hello");
//       }
//     : function () {
//         alert("Greetings!");
//       };

// welcome();

// let sum = (a, b) => a + b;

// alert(sum(1, 2));

// let sayHi = () => alert("Hello!");

// sayHi();

// let age = prompt("What is your age?", 18);

// let welcome = (age<18)?
// () => alert("Hello!"):
// () => alert("Greetings!");

// welcome();

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// alert(sum(1, 2));

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );

// alert("Hello");
// alert("World");

// alert("Hello");
// [1, 2].forEach(alert);

// let isBoss = confirm("Are you a boss");
// alert(isBoss);

// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// let str = "123";
// alert(typeof str);

// alert(Number("1z"));

// alert(Boolean(1));
// alert(Boolean(0));

// alert(Boolean("Hello"));
// alert(Boolean(""));

// let boss = confirm("are you boss");

// alert(boss);

// alert(Boolean("0"));
// alert(Boolean(""));

// let x = 1;

// x = -x;

// alert(x);

// let x = 1,
//   y = 3;

// alert(y - x);

// alert(8 % 4);

// alert(6 - "2");
// alert("6"/"2");

// let x = 1;
// alert( +x );

// alert(+true);
// alert(+"");

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert(a);
// alert(c);

// let a, b, c;

// a = b = c = 2 + 2;

// alert(a);
// alert(b);
// alert(c);

// let counter = 2;
// counter++;
// alert(counter);

// let counter = 1;
// let a = counter++;

// alert(a);

// let counter = 0;
// counter++;
// ++counter;
// alert(counter);

// let counter = 0;
// alert( ++counter );

// let a = (1 + 2, 3 + 4);

// alert(a);

// let a = 1,
//   b = 1;

// let c = ++a;
// let d = b++;

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b);

// alert(2 > 1);
// alert(2 == 1);
// alert(2 != 1);

// let result = 5 > 4;
// alert(result);

// alert("Z" > "A");

// alert("2" > 1);
// alert("01" == 1);

// let a = 0;
// alert( Boolean(a));

// let b = "0";
// alert( Boolean(b));

// alert(undefined > 0);

// let year = prompt(
//   "In which year was ECMAScript-2015 specification published?",
//   ""
// );
// if (year == 2015) {
//   alert("You are right");
//   alert("You're so smart!");
// }

// let year = prompt(
//   "In which year was the ECMAScript-2015 specification published?"
// );

// if (year == 2015) {
//   alert("You are right");
// } else {
//   alert("You are wrong?");
// }

// if (year < 2015) {
//   alert("too early");
// } else if (year > 2015) {
//   alert("too late");
// } else {
//   alert("you are wright");
// }

// alert(accessAllowed);

// let accessAllowed;
// let age = prompt("How old are you", "");

// if (age >= 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);
// prompt(accessAllowed);

// let accessAllowed = age > 18 ? true : false;

// let age = prompt("age?", 18);

// let message =
//   age < 3
//     ? "Hi, baby!"
//     : age < 18
//     ? "Hello"
//     : age < 100
//     ? "Greetings!"
//     : "What an unusual age!";

// alert(message);

// let company = prompt("Which company created JavaScript?", "");

// company == "Netscape" ? alert("Right!") : alert("Wrong.");

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert("The office is closed.");
// }

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend){
//     alert( "The office is closed." );
// }

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert("The time is 12:30");
// }

// if (1 && 0) {
//   // evaluated as true && false
//   alert("won't work, because the result is falsy");
// }

// alert(1 && 0);
// alert(1 && 5);

// alert( null && 5);
// alert(0 && "no matter what");

// alert(null || 2 || undefined);

// let userName = prompt("Who's there?", "");

// if (userName === "Admin"){
//     let pass = prompt("password", "");
// }

// let user = "John";

// alert(user ?? "Anonymous");

// let user = "John";

// alert(user ?? "Anonymous");

// let i = 0;
// while (i<3){
//     alert(i);
//     i++;
// }

// let i = 3;
// while (i) {
//   alert(i);
//   i--;
// }

// let i = 0;
// while (i < 3) {
//   alert(i);
//   i++;
// }

// let i = 3;
// while (i) {
//   alert(i);
//   i--;
// }

// let i = 3;
// while (i) alert(i--);

// let i = 0;
// do{
//     alert(i);
//     i++;
// } while(i<3);

// for (let i = 0; i < 3; i++) {
//   alert(i);
// }

// let sum = 0;

// while (true) {
//   let value = +prompt("Enter a number", "");
//   if (!value) break;
//   sum += value;
// }
// alert("Sum: " + sum);

// let a = 2 + 2;

// switch (a) {
// }

// let a = 2 + 3;

// switch (a) {
//   case 3:
//     alert("Too Small");
//     break;

//   case 4:
//     alert("Exactly");
//     break;

//   case 5:
//     alert("Too Big");
//     break;

//   default:
//     alert("I don't know such values");
// }

// let a = "1";
// let b = 0;

// switch (+a) {
//     case b + 1;
//         alert("This runs, because +a is 1, exactly equals b+1");
// }

// let a = 3;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }

// let arg = prompt("Enter a value?");
// switch (arg) {
//   case "0":
//   case "1":
//     alert("One or zero");
// }

// function showMessage() {
//     alert("Hello everyone!");
// }

// function showMessage() {
//   alert("Hello everyone");
// }

// showMessage();
// showMessage();

// function showMessage() {
//   let message = "Hello, I'm JavaScript!";
//   alert(message);
// }
// showMessage();

// let userName = "John";

// function showMessage() {
//   let message = "Hello, " + userName;
//   alert(message);
// }
// showMessage();

// let userName = "John";

// function showMessage() {
//   userName = "Bob";

//   let message = "Hello, " + userName;
//   alert(message);
// }

// alert(userName);
// showMessage();
// alert(userName);

// let userName = "John";

// function showMessage() {
//   let userName = "Bob";

//   let message = "Hello, " + userName;
//   alert(message);
// }

// showMessage();

// alert(userName);

// function showMessage(from, text) {
//   alert(from + ": " + text);
// }

// showMessage("Ann", "Hello!");
// showMessage("Ann", "What's up?");

// function showMessage(from, text) {
//   from = "*" + from + "*";
//   alert(from + "");
// }

// function showMessage(from, text = "no text given") {
//   alert(from + ": " + text);
// }

// showMessage("Ann");

// function showMessage(from, text) {
//     text = text || 'no text givin';
// }

// function showMessage(text) {
//   if (text === undefined) {
//     text = "empty message";
//   }
//   alert(text);
// }

// showMessage(hello);

// function showCount(count) {
//   alert(count ?? "unknown");
// }

// showCount(0);
// showCount(null);
// showCount();

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(1, 2);
// alert(result);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// let age = prompt("How old are you?", 18);

// if (checkAge(age)) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

// function checkAge(age){
//     if(age >= 18){
//         return true;
//     }else{
//         return confirm("Do you have permission from your parents?");
//     }
// }

// let age = prompt("How old are you?", 18);

// if(checkAge(age)){
//     alert("Access granted");
// }else{
//     alert("Access denied");
// }

// function showMovie(age){
//     if( !checkAge(age)){

//     }
// }

// function doNothing() {
//   return;
// }
// alert(doNothing() === undefined);

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// function sayHi(){
//     alert('Hello');
// }

// let sayHi = function(){
//     alert('Hello');
// };

// function sayHi() {
//   alert("Hello");
// }
// alert(sayHi);

// function sayHi(){
//     alert('Hello');
// }

// let func = sayHi;

// func();
// sayHi();

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   alert("Yes agreed. ");
// }

// function showCancel() {
//   alert("You canceled the execution. ");
// }

// ask("Do you agree?", showOk, showCancel);

// function ask (question, yes, no){
//     if(confirm(question))
// }

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   alert(" You agreed. ");
// }

// function showCancel() {
//   alert("You canceled the execution. ");
// }

// ask("Do you agree?", showOk, showCancel);

// function ask(question, yes, no){
//     if(confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() {alert("You agreed.")},
//     function() {alert("You canceled the execution.")}
// );

// let sum = function (a, b) {
//   return a + b;
// };

// alert(sum(5, 2));

// let age = prompt("What is your age?", 18);

// // let welcome;

// if (age < 18) {
//   welcome = function () {
//     alert("Hello!");
//   };
// } else {
//   welcome = function () {
//     alert("Greetings!");
//   };
// }

// welcome();

// let double = (n) => n * 2;

// alert(double(3));

// let sayHi = () => alert("Hello!");
// sayHi();

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// alert(sum(1, 2));

// alert("There will be an error after this message")[(1, 2, 3)].forEach(alert);

// function hello(name) {
//   let phrase = `Hello, ${name}!`;

//   SyntaxError(phrase);
// }

// function say(phrase) {
//   alert(`**${phrase}**`);
// }

// let user = {
//   name: "John",
//   age: 30,
// };

// alert(user.name);
// alert(use.age);

// delete user.age;

// alert(user.age);

// let user = {};

// user["likes birds"] = true;

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = prompt("What do you wannt to know about the user?", "name");

// alert(user[key]);

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert(bag.apple);

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name);
// alert(user.age);

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

// alert(obj.for + obj.let + obj.return);

// let obj = {
//   0: "test",
// };

// alert(obj["0"]);
// alert(obj[0]);

// let obj = {};
// obj.__proto__ = 5;
// alert(obj.__proto__);

// let user = {};

// alert( user.noSuchProperty === undefined );

// let user = { name: "John", age: 30 };

// alert("age" in user);
// alert("blabla" in user);

// let user = { age: 30 };

// let key = "age";
// alert(key in user);

// let obj = {
//   test: undefined,
// };

// alert(obj.test);
// alert("test" in obj);

// let user = {
//   name: "John",
//   age:30,
//   isAdmin : true
// };

// for(let key in user){
//     alert(key);

//     alert(user[key]);
// }

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   // keys
//   alert(key); // name, age, isAdmin
//   // values for the keys
//   alert(user[key]); // John, 30, true
// }

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   alert(key);
//   alert(user[key]);
// }

// let code = {
//   49: "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",

//   "+1": "USA",
// };

// for (let code in codes) {
//   alert(+code);
// }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA",
// };

// for (let lol in codes) {
//   alert(+lol); // 49, 41, 44, 1
// }

// let schedule = {};

// alert(isEmptu(schedule));

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// let message = "Hello!";
// let phrase = message;

// let user = { name: "John" };

// let admin = user;

// alert(admin);

// let user = { name: "John" };

// let admin = user;

// alert(user.name);

// admin.name = "Pete";

// alert(user.name);

// let a = {};
// let b = {};

// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it

// alert(user.name);

// let user = {
//     name: "John"
// }

// let admin = user;
// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = marry(
//   {
//     name: "John",
//   },
//   {
//     name: "Ann",
//   }
// );

// let user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = function () {
//   alert("Hello");
// };

// user.sayHi();

// let user = {
//   name: "John",
//   age: 30,
// };

// function sayHi() {
//   alert("Hello!");
// }

// user.sayHi = sayHi;

// user.sayHi();

// user = {
//   sayHi: function () {
//     alert("Hello");
//   },
// };

// user = {
//   sayHi() {
//     alert("Hello");
//   },
// };

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" is the "current object"
//     alert(this.name);
//   },
// };

// user.sayHi();

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert(user.name); // "user" instead of "this"
//   },
// };

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert(user.name); // leads to an error
//   },
// };

// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi();

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert(this.name);
// }
// user.f = sayHi;
// admin.f = sayHi;

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name);
// alert(user.isAdin);

// function User(name){
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name);
// alert(user.isAdmin);

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name);
// alert(user.isAdmin);

// function BigUser() {
//   this.name = "John";
//   return { name: "Godzilla" };
// }
// alert(new BigUser().name);

// function User(name) {
//   this.name = name;

//   this.sayHi = function () {
//     alert("My name is: " + this.name);
//   };
// }

// let john = new User("John");

// john.sayHi();

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
