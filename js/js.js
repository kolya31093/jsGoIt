/*Created by Kolya on 10.02.2017.*/
// alert('Hello World!!!');
// var username = prompt('What is your name?', 'name');
// alert('hello '+username);
// ==========================================

// var year = prompt('What is year now?', 'year');
// year = (year != 2017)? 'you fell from the moon!!' : 'You right!!';
// alert(year);
// ==================================================================
// var num = prompt('Enter any integer', '123');
// if(num > 0){
//     alert(1);
// } else if(num < 0){
//     alert(-1);
// } else if(num == 0){
//     alert(0);
// }
// ==========================================================================
// var user = prompt('Enter login');
// console.log(user);
// if (user == 'admin') {
//     var pass = prompt('Enter password');
//     if(pass == 'password') {
//         alert('Welcome home!!');
//     } else {
//         alert('password wrong!!');
//     }
// } else if (user == null){
//     alert('Canseled')
// } else {
//     alert('Access denied');
// }
// ==============================================================================
// var a = 0, b = 2;
//
// // if (a + b >= 3) {
// //     result = 'Yep!';
// // } else {
// //     result = 'Noup!';
// // }
// (a + b >= 3)? alert('Yep!!') : alert('Noup!!');
// ===============================================================================
// var name = 'admin', text;
// var name = prompt('enter text');
// // if (name == 'admin') {
// //     text = 'Hi';
// // } else if (name == 'manager') {
// //     text = 'Hello';
// // } else if (name == '') {
// //     text = 'No login';
// // } else {
// //     text = '';
// // }
//
// var text = (name == 'admin')? 'hi' : (name == 'manager')? 'Hello' : (name == 0)? 'no Login' : '';
// alert(text);
// ====================================================================
// var a = 1;
// switch (a) {
//     case 1:
//     console.log('one')
//         break;
//     case 2:
//     case 3:
//         console.log('two');
//         console.log('three');
//         break;
//     default:
//         console.log('def');
// }
// ===================================================================

// do {
//     num = +prompt('Enter integer biggest 100');
// }while(num < 100 && num != 0)
// =============================================================natural digits
// for(var i = 2; i <= 10; i++){
//     var pro = true;
//
//     for (x = i - 1; x > 1; x--) {
//         if (i % x == 0) {
//             pro = false;
//         }
//
//     }
//     if (pro) {
//         console.log(i);
//     }
// }
// ===================================================chess desk
// function chess(size){
//     var x = '# ';
//     var y = ' #';
//     for(var i = 1; i <= size; i++){
//         var line = '';
//         if(i % 2 == 0){
//
//             for(var e = 1; e <= size; e++){
//                 line = line + x;
//             }
//             console.log(line);
//         } else {
//
//             for(var e = 1; e <= size; e++){
//                 line = line + y;
//             }
//             console.log(line);
//         }
//
//     }
// }
// chess(8);
// ==============================================  pow!!  ========================================
// function pow(num, pow) {
//     var sum = num;
//     for(var i = 2; i <= pow; i++){
//         sum = sum * num;
//     }
//     console.log(sum);
// }
// pow(9, 2);
// =================================================================================

// function lovefunc(flower1, flower2){
//     if((flower1 % 2 == 0  && flower2 != 0) ||  (flower1 % 2 != 0  && flower2 == 0)){
//         return true;
//     } else {
//         return false;
//     }
//  }
/* =============================================== recurtion =======================*/

// function  sumTo(n) {
//     if(n != 1){
//         return n + sumTo(n-1);
//
//     } else{
//         return 1
//     }
// }
// console.log(sumTo(100));
// ======================================================================================
// function randomInteger(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
// }
//
// alert( randomInteger(5, 10) );
// =====================================================================================
// function firstUp(str){
//     return str[0].toUpperCase() + str.substring(1);
// }
// console.log(firstUp('hello'));
// ===============================================================================
/*function spam(str){
 if(str.indexOf('sex') >= 0 || str.indexOf('spam') >= 0 || str.indexOf('Spam') >= 0 || str.indexOf('Sex') >= 0){
 var x =  true;
 } else{
 var x =  false;
 }
 console.log(x);
 }
 spam('get new Sex videos');
 =======================================================================================*/
// function crop(str){
//     if(str.length <= 20){
//         return str;
//     } else {
//         str = str.substr(0, 20);
//         str = str + '...';
//     }
//     return str;
// }
// console.log(crop('123456789012345678901'));
// ==================================================================================================
/*
 var user = {
 name: 'Sergey',
 surname: 'Petrov',
 age: 30
 }
 user.name = 'Andrey';
 console.log(user);
 delete user.name;
 console.log(user);

 var user1 = new Object();
 user1['name'] = 'Sergey';
 user1['surname'] = 'Petrov';
 user1['age'] = 30;
 user1['name'] = 'ANdrey';
 console.log(user1);
 delete user1['name'];
 console.log(user1);
 ==========================================isEmpty====================*/
// user = {
//     name: 'Sergey',
//     surname: 'Petrov',
//     age: 30
// }
// user1 = {}
// var count = 0;
// function isEmpty(obj) {
//     for(var key in obj){
//         count++
//     }
//     x = (count > 0)? false : true;
//     return x
// }
// console.log(isEmpty(user1));
// -----------------------||---------
//     user = {
//     name: 'Sergey',
//     surname: 'Petrov',
//     age: 30
// }
// user1 = {}
// var count = 0;
// function isEmpty(obj) {
//     for(var key in obj){
//         return false
//     }
//
//     return true;
// }
// console.log(isEmpty(user));
// ==========================================================================================
// var salary = {
//     junior: 1000,
//     middle: 2000,
//     senior: 3000,
//     lead: 5000,
// }
// function salaryCount(obj) {
//     var sum = 0;
//     for(var key in obj){
//         sum += obj[key];
//     }
//     return sum;
// }
// console.log(salaryCount(salary));
// ==================================== fibonachy ==========================================
// function fib(n) {
//     var num = 0;
//     for(var i = 0; i < n; i++){
//         num += i;
//     }
//     return num;
// }
// console.log(fib(3));
// -------------------||---work------------
// function fib(n) {
//     if(n == 1) return 0;
//     var a = 0,
//         b = 1;
//     var arr = [];
//
//     for (var i = 3; i <= n; i++) {
//         var c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// console.log(fib(1));
// ============================ Is ARRAY ================================

// var a = [1, 'q', 'w'];
// console.log(is_array(a));
// function is_array(mix) {
//     return ( mix instanceof Array );
// }
// ==================================================================================
// var a = [1, 'q', 'w', 'l'];
//
// function lastEl(arr) {
// //     return (arr.pop());
//     return(arr[arr.length - 1])
// }
// console.log(lastEl(a));
// ================================================================================
// var a = [1, 'q', 'w', 'l'];
//
// function lastEl(arr, last) {
//     arr.push(last);
//     return  arr;
// }
// console.log(lastEl(a, 'last'));
// ================================================================================
// var fruits = ['apple', 'orange', ];
// fruits.push('kiwi');
// fruits[fruits.length - 2] = 'pear';
// console.log(fruits.shift());
// fruits.unshift('apricot', 'peach');
// console.log(fruits);
// =================================random in array ===============================================
// var a = [1, 'q', 'w'];
// var b = [];
// function getRandomInt(a){
//     var max = a.length - 1;
//     return a[Math.floor(Math.random() * (max  + 1))] ;
// }
// console.log(getRandomInt(a));
// =================================random max min ===============================================

// function getRandomInt(min, max)
//                                 {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//                                 }
// =================================random max min ===============================================
// var arr = [1, 5, 'world', 2, 'hello!', 54, 'hi!!!'];
// arr.sort(function (a, b) {
//     if(+a && +b){
//         return a - b;
//     }else if(+a){
//         return -1;
//     }else{
//         return 1;
//     }
// });
// =================================take keys obj to array===============================================
// var obj = { name: 'vasya', age: 30, lan: 'php'}
// var k = Object.keys(obj);
// console.log(k);
// =================================insert word ino class ===============================================
// var obj = {
//     className: 'open menu'
// }
// function addClass(obj, str){
//
//     var arr = obj.className.split(' ');
//     if(arr.indexOf(str) >= 0){
//         return  obj.className;
//     }else{
//         obj.className = obj.className + ' ' + str;
//     }
//     return  obj.className
// }
// console.log(addClass(obj, '!!!'));
// =================================To camelcase ===============================================
// function toCameCase(str) {
//     str = str.split('-');
//     for(var i = 1; i < str.length; i++){
//         str1 = str[i].charAt(0).toUpperCase();
//
//         str2 = str[i].substr(1);
//         str[i] = str1 + str2;
//     }
//     str = str.join("");
//     return str;
// }
// console.log(toCameCase('list-style-image'));
// console.log(toCameCase('go-go-!!-up'));
// ================================= sum arguments ===============================================
// function  sumArg(a, b) {
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i];
// //       console.log(sum);
//     }
//     return sum;
// }
// console.log(sumArg(1, 2, 1, 6));
// ------------------------------- || -----------------------------------


// ========================================== Palindrom ======================================
// function reverseStr(str) {
//     return str.split(" ").join("").split("").reverse().join("");
// }
// console.log(reverseStr("anna"));
// ========================================== search in arra ======================================
// var a = [1, 'q', 'w', 9];
// function find(arr, val) {
//     var pos = arr.indexOf(val);
//     return (pos < 0)? -1: pos;
// }
// console.log(find(a, 9));
// ========================================== filterRange  ======================================
// function filterRange(arr, a, b) {
//     var res = [];
//     for (i = 0; i < arr.length; i++) {
//         if(a <= arr[i] && arr[i] <= b){
//             res.unshift(arr[i]);
//         }
//     }
//     return res;
// }
// var arr = [34, 45, 100, 10, 1, 0, 24, 8, 6]
// console.log(filterRange(arr, 0, 10));
// ========================================== method  map  ======================================
// var arr = ['i', 'LEarning', 'js', 'php', 'mysql'];
// var arrLength = [];
// arrLength = arr.map(function (arr) {
//     return arr.length;
// })
// console.log(arrLength);
// ========================================== date to day of week  ======================================
// function getWeekDay(date) {
//     var week_day = date.getDay();
//     switch (week_day){
//         case(0): day = 'вс';
//             break;
//         case(1): day = 'пн';
//             break;
//         case(2): day = 'вт';
//             break;
//         case(3): day = 'ср';
//             break;
//         case(4): day = 'чт';
//             break;
//         case(5): day = 'пт';
//             break;
//         case(6): day = 'сб';
//             break;
//     }
// //   console.log(week_day);
//     return day;
// }
//
// var date = new Date(2012,0,4); // 3 января 2012
// console.log( getWeekDay(date) );
// ========================================== date to day of week  ======================================
// var tasksCompleted = {
//     'Anna': 29,
//     'Serg': 35,
//     'Elena': 1,
//     'Anton': 100,
//     'vasya': 101
// };
// var better = 0;
// var better_work = '';
// for (var key in tasksCompleted){
//     if(tasksCompleted[key] > better){
//         better = tasksCompleted[key];
//         better_work = key;
//     }
// }
// console.log(better_work);
// ========================================== multiply all numric * 2 ======================================
// var image = {
//     width: 100,
//     height: 400,
//     title: 'Cool image'
// };
// function multiplyNumeric(image) {
//     for (var key in image){
// //       console.log(typeof(image[key]));
//         if (typeof(image[key]) == 'number'){
//             image[key] *= 2;
// //             console.log(image[key]);
//         }
//     }
// }
// multiplyNumeric(image);
// for (var key in image){
//     console.log(image[key));
// }
// // after
// image = {
//     width: 200,
//     height: 800,
//     title: 'Cool image'
// };
// ========================================== calculator =====================================
// var Obj ={};
// var i = 0;
// do {
//     i++;
//     Obj[i] =  prompt('Enter number');
// } while (Obj[i] != null)
// var sum = 0;
// for (var key in Obj) {
//         sum +=  +Obj[key];
// }
// console.log(sum);
// ========================================== delete property =====================================
// var obj = {
//     className: 'one open menu span div one'
// };
// function removeClass(obj, cls) {
//     arrCl = obj.className.split(' ');
//     var arrClean =arrCl.filter(function (item) {
//         return (item != cls);
//     });
//     arrClean = arrClean.join(' ');
//     obj.className = arrClean;
//     console.log(obj.className);
// }
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'one'); // без изменений
// removeClass(obj, 'blabla'); // без изменений
// ========================================== copy and sort array =====================================
// var arr = ['HTML', 'JavaScript', 'CSS'];
// var arrSorted  = arr.map(function (item) {
//     return item ;
// })
// var arrSorted = arrSorted.sort();
//
//
// console.log( arrSorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript
// ========================================== random sort arr =====================================
// var arr = [1, 2, 3, 4, 5];
// function randomSortArr() {
//     var rand = -1 + Math.random() * (1 + 1 + 1);
//     rand = Math.floor(rand);
//     console.log(rand);
//     return rand;
// }
// console.log(arr.sort(randomSortArr));
// ==========================================  sort object in arr by age =====================================

// var vasya = { name: 'Вася', age: 23 };
// var masha = { name: 'Маша', age: 18 };
// var vovochka = { name: 'Вовочка', age: 6 };
// var petro = { name: 'Petya', age: 16 };
//
// var people = [ vasya , masha , vovochka, petro ];
//
// function compareNumeric(people) {
//     for(var item_obj in people){
//     }
// }
// function compareNumeric(a, b) {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
// }
// console.log(people.sort(compareNumeric));
// // теперь people: [vovochka, masha, vasya]
// console.log(people[0].age) // 6




// ==========================================  palindrom =====================================
// function isPal(str) {
//     var str2 =  str.split(" ").join("").split("").reverse().join("").toLowerCase();
// //     console.log(str2);
//     str = str.split(" ").join("").toLowerCase();
// //     console.log(str);
//     return (str == str2)?true : false;
// }
// console.log(isPal("anna"));
//
// console.log(isPal('Anna')); // true
// console.log(isPal('А роза упала на лапу Азора')); //true
// console.log(isPal('Вася')); //false
// console.log(isPal('12321')); //true
// console.log(isPal('123212')); //false
// ==========================================  unique element of array =====================================
// function unique(arr) {
//     var result = [];
//
//     nextInput:
//         for (var i = 0; i < arr.length; i++) {
//             var str = arr[i]; // для каждого элемента
//             for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
//                 if (result[j] == str) continue nextInput; // если да, то следующий
//             }
//             result.push(str);
//         }
//
//     return result;
// }
//
// var strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];
//
// console.log( unique(strings) ); // кришна, харе, 8-()
// ----------------------------------|||||||||||--------------------------------
// function unique(arr) {
//     var obj = {};
//
//     for (var i = 0; i < arr.length; i++) {
//         var str = arr[i];
//         obj[str] = true; // запомнить строку в виде свойства объекта
//     }
//
//     return Object.keys(obj); // или собрать ключи перебором для IE8-
// }
//
// var strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];
//
// console.log(unique(strings) ); // кришна, харе, 8-()
// ========================================== sort unique element of array by frequency of use  =====================================
// var strings = ["open", "open", "open", "close",
//     "close", "red", "red", "footer", "header"
// ];
// var obj = new Object();
// var i = 1;
// var uniq = [];
// for(var key in strings){
// //   console.log(key);
//     if  (!obj[strings[key]]) {
//         obj[strings[key]] = 1
//     } else {
//         obj[strings[key]] += 1;
//     }
// }
// console.log((obj));
// for (var clName in obj){
//     uniq.push(clName);
// }
// uniq.sort(function(a, b){
//     return obj[b] - obj[a];
// });
// console.log(uniq);
// ========================================== delete anagrams dublicate =====================================
// function anClean(arr){
//     var obj = {};
//     var res = [];
//     arr.forEach(function (item, i, arr) {
//             var word = item.toLowerCase();
//         word = word.split('').sort().join('');
//         obj[word] = item;
//     })
//     // console.log(obj);
//     for (var key in obj) {
//         res.push(obj[key]);
//     }
//     return res;
// }
//     var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
//
// console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
// ========================================== Return the Missing Element  == Codewars ===================================

// function getMissingElement(arr) {
//     console.log(arr.sort());
//     for(var i = 0; i <= arr.length; i++) {
//         if(i != arr[i]) return i;
//     }
//
// }
// console.log(getMissingElement( [0,  5, 1, 3, 2, 9, 7, 6, 4] )); // returns 8
// console.log(getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] )); // returns 3
// ========================================== Add property to every object in array  == Codewars ===================================

// function addAnswer(arr) {
//     arr.forEach(function (item, i, arr) {
//
//         item.usersAnswer = null;
//     })
//     return arr;
// }
//
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// ========================================== Find Your Villain Name  == Codewars ===================================

// function villainName(date) {
//     var name = '';
//     var firstName = '';
//     var  lastName = '';
//
//     var month = date.getMonth();
//     switch (month){
//         case (0):firstName =  "The Evil";
//             break;
//         case (1): firstName = "The Vile";
//             break;
//         case (2): firstName = "The Cruel";
//             break;
//         case (3): firstName = "The Trashy";
//             break;
//         case (4): firstName = "The Despicable";
//             break;
//         case (5): firstName = "The Embarrassing";
//             break;
//         case (6): firstName = "The Disreputable";
//             break;
//         case (7): firstName = "The Atrocious";
//             break;
//         case (8): firstName =  "The Twirling";
//             break;
//         case (9): firstName = "The Orange";
//             break;
//         case (10): firstName = "The Terrifying";
//             break;
//         case (11): firstName = "The Awkward";
//                 break;
//     }
//
//     var day = date.getDate();
//     day %= 10;
//     switch (day){
//         case (0): lastName =  "Mustache";
//             break;
//         case (1): lastName = "Pickle";
//             break;
//         case (2): lastName = "Hood Ornament";
//             break;
//         case (3): lastName = "Raisin";
//             break;
//         case (4): lastName = "Recycling Bin";
//             break;
//         case (5): lastName = "Potato";
//             break;
//         case (6): lastName = "Tomato";
//             break;
//         case (7): lastName = "House Cat";
//             break;
//         case (8): lastName =  "Teaspoon";
//             break;
//         case (9): lastName = "Laundry Basket";
//             break;
//     }
//     var name = firstName + ' ' + lastName;
//     return name;
// }
// var date = new Date();
// console.log(villainName(date));
// --------------------------||||||||||------------------------------------------

// function getVillainName(birthday){
//     return "The " +
//         ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"]
//             [birthday.getMonth()] + ' ' +
//         ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"]
//             [(birthday.getDate()+'').substr(-1)];
// }
// var birthday = new Date();
// console.log(getVillainName(birthday));
// ==================================Use reduce() to calculate the sum of the values in an array==========================
// function sum(arr) {
//     // промежуточный результат передавать первым аргументом далее
//     var result = arr.reduce(function(sum, current) {
//         return sum + current;
//     }, 0);
//     return result;
// }
//
//     var someNumbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(sum(someNumbers));
// // ========================================== Take a Ten Minute Walk  == Codewars ===================================
// function isValidWalk(arr) {
//     var obj = {};
//         var time = arr.length;
//     arr.forEach(function (item, i, arr){
//         if (!obj[item]) {
//             obj[item ] = 1;
//         } else {
//             obj[item ] ++;
//         }
//     })
//     if (obj.n == obj.s && obj.w == obj.e && time == 10){
//         return true;
//     }else {
//         return false;
//     }
// }
//
//
//
//
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s', 'e','w', 'w', 'w']));
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','w']));
// // ========================================== Class work===================================
// var value = 1;
//
// function f (){
// //   console.log(111);
//
//     return function (){
//         return ++value;
//     };
//     console.log(111);
// }
// var counter = f();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// (function (){
//     return console.log(1+2);
// })();
// // ========================================== Class work Task 7.6===================================
// function add(a, b) {
//     return a + b
// }
// function mul(a, b) {
//     return a * b;
// }
// console.log(add(3,4)); //7
// console.log(mul(3,4));
// // ========================================== Class work Task 7.6===================================
// function idf() {
//     return function (a) {
//         return a;
//     }
// }
//
//
// var ret = idf();
// console.log(ret(123)); // 3
// console.log(ret(666)); // 3
// var z =  function identityf(a) {
//     return a;
// }
// console.log(z(555));
// // ========================================== Class work Task 7.8===================================
// var count = 0;
// function plus(x) {
//     return count += x;
// }
// console.log(plus(3));
// console.log(plus(4));
// // ========================================== Class work Task 7.9===================================

// function applyf(binary) {
//     return function(x) {
//         return function(y) {
//             return binary(x, y);
//         }
//     }
// }
// function add (x, y) {
//     return x + y;
// }
// function mul (x, y) {
//     return x * y;
// }
// //
// console.log(applyf(mul)(3)(4)); //12
// var addf = applyf(add);
// console.log(addf(3)(4)); //7
// // console.log(addf); //7
// var mulf = applyf(mul);
// console.log(mulf(3)(4)); //7
// // console.log(mulf); //7
// -------------------------||||||----------------------------
// function applyf(binary) {
//     return function(x) {
//         return function(y) {
//             return binary(x)(y);
//         }
//     }
// }
// function add (x) {
//     return function(y) {
//         return x + y;
//     };
// }
// function mul (x) {
//     return function(y) {
//         return x * y;
//     };
// }
//
// console.log(applyf(mul)(3)(4)); //12
// var addf = applyf(add);
// console.log(addf(3)(4)); //7
// // console.log(addf); //7
// var mulf = applyf(mul);
// console.log(mulf(3)(4)); //7
// // console.log(mulf); //7
// // ========================================== Closures and Scopes====codewars===============================

//     function createFunctions(x) {
//         var arr = [];
//
//         for(var i = 0; i < x; i++) {
//
//             ( function (i){
//                arr.push( function() {
//                    return i;
//                })
//             } )(i);
//         }
//         return arr;
//     }
// var callbacks = createFunctions(5); // create an array, containing 5 functions
// console.log(callbacks[3]())
// ------------------|||||--------------------
// function createFunctions(n) {
//     var callbacks = [];
//
//     for (let i=0; i<n; i++) {
//         callbacks[i] = (function() {
//             return i;
//         });
//     }
//
//     return callbacks;
// }
// var callbacks = createFunctions(5); // create an array, containing 5 functions
// console.log(callbacks[1]())
// // console.log(callbacks)
// // ========================================== Closures and Scopes====codewars===============================
//
// function createSecretHolder(secret) {
//     var obj = {
//         secretValue: secret,
//         getSecret:  function(){ return this.secretValue},
//         setSecret:  function(asd){ return this.secretValue = asd}
//     }
//
//     return obj;
//
// };
// -------------------|||||||||||------------------------
// function createSecretHolder(x) {
//     obj = {
//         secretValue: x,
//
//         getSecret: function(){
//             return this.secretValue;
//         },
//         setSecret: function(x){
//             return this.secretValue = x;
//         }
//     }
//
//     return obj;
// }
//
// -------------------|||||||||||------------------------
//
//
// function createSecretHolder(secret) {
//     return {
//         getSecret: function(){
//             return secret;
//         },
//         setSecret: function(v){
//             return secret = v;
//         }
//     }
//
// }
//
//
// obj = createSecretHolder(5)
// // console.log(obj.sayHi()); // returns 5
// console.log(obj.getSecret());
// console.log(obj.setSecret(2));
// console.log(obj.getSecret());
// // console.log(obj.setSecret(8));
// console.log(obj.secret);
// =========================    Lazily executing a function    ===========================================
// function make_lazy(func, ...rest) {
//     return function() {
//         return func(...rest);
// }
// }
// function add (a, b) {
//     return a + b;
// }
//
// var lazy_value = make_lazy(add, 2, 3);
// console.log(lazy_value());

// ========================= less 8.2   ===========================================
// var obj = {
//     a: 0,
//     b: 0,
//     read: function () {
//         // prompt('Enter numder');
//         this.a = +prompt('Enter numder');
//         this.b = +prompt('Enter numder');
//     },
//     sum: function () {
//         return console.log(this.sum = this.a + this.b);
//
//     },
//     mul: function () {
//         return console.log(this.mul = this.a * this.b);
//     }
//
// }
// obj.read();
// obj.sum();
// obj.mul();
// ========================= homework 8   chaining===========================================
// var ladder = {
//     step: 0,
//     up: function() { // вверх по лестнице
//         this.step++;
//         return this;
//     },
//     down: function() { // вниз по лестнице
//         this.step--;
//         return this;
//     },
//     showStep: function() { // вывести текущую ступеньку
//         console.log( this.step );
//     }
//
// };
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// ladder.up().up().down().up().up().down().showStep(); // 1
// ladder.up().up().down().up().up().showStep();
// ========================= homework 8   Calculator ===========================================
// function Calculator() {
//     this.result = 0;
//     this.calculate = function(str){
//         var arr = str.split(' ');
//         console.log(arr);
//         arr[0] = +arr[0];
//         arr[2] = +arr[2];
//         console.log(arr);
//
//         switch (arr[1]){
//             case ('+'): this.result = arr[0] + arr[2];
//                         break;
//             case ('-'): this.result = arr[0] - arr[2];
//                         break;
//             case ('*'): this.result = arr[0] * arr[2];
//                          break;
//             case ('/'): this.result = arr[0] / arr[2];
//                         break;
//         }
//         return this.result;
//     }
// }
// var calc = new Calculator();
// console.log(calc.calculate('6 - 3'))
// --------------------|||||------------------------------------------------
// function Calculator() {
//     this.result = 0;
//     this.addMethod = function(a, b) {
//         this[a] =  b;
//     }
//
//     this['+'] = function(a, b) {
//          return a + b;
//     };
//     this['-'] = function(a, b) {
//         return   a - b;
//     };
//     this.calculate = function(str) {
//         var arr = str.split(' ');
//         // console.log(arr);
//
//         arr[0] = +arr[0];
//         arr[2] = +arr[2];
//         // console.log(typeof(arr[0]));
//         // console.log(this[arr[1]]);
//         if (isNaN(arr[0]) || isNaN(arr[2])) {
//             return this.result ='error!!! NOT a NUMBER';
//         } else {
//             switch (arr[1]) {
//                 case ('+'):
//                     break;
//                 case ('-'):
//                     break;
//                 case ('*'):
//                     break;
//                 case ('**'):
//                     break;
//                 case ('/'):
//                     break;
//                 default:
//                     return this.result = 'error!!! Not a sign';
//             }
//             this.result = this[arr[1]](arr[0], arr[2]);
//             return this.result;
//         }
//     }
// }
// var calc = new Calculator();
// calc.addMethod('*', function(a, b) {
//     return this.result =  a * b;
// });
// calc.addMethod('/', function(a, b) {
//     return a / b;
// });
// calc.addMethod('**', function(a, b) {
//     return Math.pow(a, b);
// });
//
// console.log(calc.calculate('6 + 3'));
// console.log(calc.calculate('6 - 3'));
// console.log(calc.calculate('9 / 3'));
// console.log(calc.calculate('6 * 3'));
// console.log(calc.calculate('6 ** 3'));
// console.log(calc.calculate('jkgjh + 3'));
// console.log(calc.calculate('12 fh 3'));
// console.log(calc.calculate('6 ** rty3'));
// ============================= Object counter =====================================
// function Article() {
//     Article.count++;
//     Article.date = new Date();
//     // this.created = new Date();
//     Article.showStats = function(){
//         return console.log('count: ' + Article.count,'        date: ' + Article.date + '    ',Article.date );
//     }
// }
// Article.count = 0;
// new Article();
// new Article();
//
// Article.showStats(); // Всего: 2, Последняя: (дата)
//
// new Article();
//
// Article.showStats(); // Всего: 3, Последняя: (дата)
// ============================= Задание 3 (get/set свойства) =====================================
// function User(fullName) {
//     this.fullName = fullName;
//
//     Object.defineProperties(this, {
//
//         firstName: {
//
//             get: function() {
//                 return this.fullName.split(' ')[0];
//             },
//
//             set: function(newFirstName) {
//                 this.fullName = newFirstName + ' ' + this.lastName;
//             }
//
//         },
//
//
//     });
// }
// var vasya = new User('Александр Пушкин');
// Object.defineProperties(vasya,  {
//
//     lastName: {
//
//         get: function() {
//             return this.fullName.split(' ')[1];
//         },
//
//         set: function(newLastName) {
//             this.fullName = this.firstName + ' ' + newLastName;
//         }
//
//     }
//
// });
// // чтение firstName/lastName
// console.log( vasya.firstName ); // Александр
// console.log( vasya.lastName ); // Пушкин
// vasya.lastName = 'pupkin';
// console.log( vasya.fullName ); // Пушкин
// ============================= les 9 Перепишите суммирование аргументов=====================================


// function sumArgs() {
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
//
// console.log( sumArgs(1, 2, 3) );
// ============================= les 9 Примените функцию к аргументам=====================================
//
// function applyAll(op, b, c) {
//     var op = arguments[0];
//     var arg = [].slice.call(arguments, 1);
//     return op.apply(null, arg);
// }
// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
//
// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//     return [].reduce.call(arguments, function(a, b) {
//         return a * b;
//     });
// }
//
// console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
// console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
// console.log( applyAll(Math.max, 2, -2, 3) ); // 3
// console.log( applyAll(Math.min, 2, -2, 3) ); // -2
// =============================  les 9 Unpacking Arguments codewars =====================================

// function spread(func, args) {
//     return [].reduce.call(args, func);
// }
//
// console.log( spread(function(x,y){return x+y}, [1,2]), 3 )
// ============================= les 9 Логирующий декоратор (1 аргумент) =====================================

// function work(a) {
//     /* ... */ // work - произвольная функция, один аргумент
// }
//
// function makeLogging(f, log) {
//    return function () {
//         log.push(arguments[0]);
//         return f.call(this, arguments[0]);
//    }
//
// }
//
// var log = [];
// work = makeLogging(work, log);
//
// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log
//
// for (var i = 0; i < log.length; i++) {
//     console.log('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
// }
// ============================= les 9 Логирующий декоратор (many аргумент) =====================================
// function work(a, b) {
//     console.log( a + b ); // work - произвольная функция
// }
//
// function makeLogging(f, log) {
//     return function () {
//         var arg = [].slice.call(arguments);
//         log.push(arg);
//         i++;
//         return f.apply(this, arguments);
//     }
//
// }
// var log = [];
// var i = 0;
// work = makeLogging(work, log);
//
// work(1, 2); // 3
// work(4, 5); // 9
// console.log(log);
// for (var i = 0; i < log.length; i++) {
//     var args = log[i]; // массив из аргументов i-го вызова
//     console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
// }

// ============================= les 9 Кеширующий декоратор =====================================

// function makeCaching(f) {
//     return function () {
//         var arg = arguments[0];
//         if (log_arr.indexOf(arg) >= 0) {
//             var index = log_arr.indexOf(arg);
//             return log_arr[index];
//         } else {
//             return  log_arr.push(f.call(this, arguments[0]));
//
//         }
//     }
// }
// var log_arr = [];
// f = makeCaching(f);
//
// var a, b;
//
// a = f(1);
// b = f(1);
// console.log( a == b ); // true (значение закешировано)
//
// b = f(2);
// console.log( a == b ); // false, другой аргумент => другое значение
// console.log( log_arr );
// ============================= les 10 Объект в массив =====================================
// var obj = {
//     person1Age: 20,
//     person1Name: 'Ivanov',
//     person2Age: 30,
//     person2Name: 'Petrov',
//     person3Age: 40,
//     person3Name: 'Sidorov'
// };
// function extract() {
//     for (key in obj) {
//         if (typeof(obj[key]) == 'number') {
//             numbers_arr.push(obj[key]);
//         } else if (typeof(obj[key]) == 'string') {
//             string_arr.push(obj[key]);
//         }
//     }
//     return 123;
// }
// var numbers_arr = [];
// var string_arr = [];
// extract(obj);
// console.log(numbers_arr);
// console.log(string_arr);
// var ages = [20,30,40];
// var names = ['Ivanov', 'Petrov', 'Sidorov'];
// ============================= les 10 Максимальное число в массиве =====================================
// function getMaxNumber(arr) {
//     var arr_max =  arr.sort(function(a,b) {
//         return b - a;
//     })
//     return arr_max[0];
// }
//
// console.log(getMaxNumber([1,30,40,2,7])); // 40
// console.log(getMaxNumber([1,15,-20,2,-7])); // 15
// ============================= les 10 task 3 =====================================
// function sortString(str) {
//     var arr = str.split('');
//     str = arr.sort();
//     return str.join('');
// }
// console.log(sortString('webmaABster'));  //abeemrstw
// ============================= les 10 task 4 =====================================
// function firstLtoUp(str) {
//     var arr = str.split(' ');
//     for (var i = 0; i < arr.length; i++) {
//         // console.log(arr[i].slice(0, 1).toUpperCase())
//         arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(' ');
// }
// console.log(firstLtoUp('quick brown fox'));  //abeemrstw
// ============================= les 10 task 5 =====================================
// function longestWord(str) {
//     var arr = str.split(' ');
//     arr = arr.sort(function(a,b) {
//         return b.length - a.length;
//     });
//     return arr[0];
// }
// console.log(longestWord('Web Development Tutorial koloboration'));  //abeemrstw
// ============================= les 10 task 6 =====================================
// function type(value) {
//     var result = typeof (value);
//     return result;
// }
// console.log(type('qwe'));
// console.log(type(123));
// console.log(type(1));
// console.log(type(true));
// console.log(type([1,2,123]));
// console.log(type({}));
// console.log(type(undefined));
// console.log(type(function () {}));
// ============================= les 10 revsrseStr=====================================
// function revsrseStr (str){
//     var arr = str.split(' ');
//     for (var i = 0; i < arr.length; i++) {
//         var arr_let = arr[i].split('');
//         for (var j = 0; j < arr_let.length; j++) {
//             if (arr_let[j] == arr_let[j].toUpperCase()) {
//                 arr_let[j] =  arr_let[j].toLowerCase();
//             } else {
//                 arr_let[j] =  arr_let[j].toUpperCase();
//             }
//         }
//         arr[i] = arr_let.join('');
//     }
//     return arr   .join(' ');
// }
// console.log(revsrseStr('AbA')); //5
// // ----------------------||||||||||||-----------------------------------
// function swap(str){
//     return str.replace(/[a-zA-Z]/g, function(c) {
//         return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
//     });
// }
// console.log(swap('AbA')); //5
// ============================= les 10Descending Order=====================================
// function descendingOrder(n) {
//     if (n <= 0) {
//         return 'error incorrect input';
//     }
//     var arr = n + '';
//     arr = arr.split('');
//     console.log(arr);
//     arr = arr.map(function (val) {
//         return +val;
//     });
//     console.log(arr);
//     arr = arr.sort(function(a,b){
//         return b - a;
//     });
//     console.log(arr);
//     // arr = arr.map(function (arr) {
//     //     return arr + '';
//     // });
//     // console.log(arr);
//
//     arr = arr.join('') ;
//     return +arr;
// }
// console.log(descendingOrder(132));
// -----------------------||||||||---------------------
//     function descendingOrder(n){
//         return parseInt(String(n).split('').sort().reverse().join(''))
//     }
// console.log(descendingOrder(132));
// ============================= les 10 Complete The Pattern #10 - Parallelogram =====================================

// function pattern(num){
//     var space = '';
//     var arr = [];
//     var result = ''
//     var number = '';
//     var space2 = '';
//     var k = 1;
//     for (var i = 0; i < num; i++) {
//         arr.push(space);
//         if (k > 9) k = 0;
//         number += k;
//         k++;
//     }
//
//     for (var i = 0; i < num; i++) {
//         if (i == num - 1) {
//             return result += arr.join(' ') + number +  space2 ;
//         }
//         result += arr.join(' ') + number +  space2 + '\n' ;
//         arr.pop();
//         space2 += ' ';
//     }
//
//     return result;
// }
// console.log(pattern(11));
// -------------------|||----------------------
//     function pattern(n) {
//         var i, line = '', lines = [];
//         for (i=1;i<=n;i++) line += i%10;
//         for (i=0;i<n;i++) lines.push(Array(n-i).join(' ')+line+Array(i+1).join(' '));
//         return lines.join("\n");
//     }
// ============================= les 10 Find Duplicates codewars =====================================
//почти работает
// function duplicates(arr) {
//     var res_arr = [];
//     var num_arr = [];
//     var str_arr = [];
//     var obj = {};
//     var obj2 = {};
//     arr.forEach(function(item, i, arr) {
//         if(typeof item == 'number'){
//             num_arr.push(item);
//         } else if(typeof item == 'string') {
//             str_arr.push(item)
//         }
//     });
//     // console.log(num_arr);
//     // console.log(str_arr);
//     num_arr.forEach(function (item, i, arr) {
//
//         if (obj[item] == undefined){
//             obj[item] = 0;
//         } else {
//             obj[item] = 1;
//         }
//
//     });
//     str_arr.forEach(function (item, i, arr) {
//
//         if (obj2[item] == undefined){
//             obj2[item] = 0;
//         } else {
//             var name = 'z' + item;
//             obj2[name] = item;
//         }
//     });
//     for (key in obj) {
//         if (obj[key] > 0) {
//             res_arr.push(key);
//         }
//     }
//     for (key in obj2) {
//         if (obj2[key] != 0) {
//             res_arr.push(obj2[key]);
//         }
//     }
//     // console.log(obj2)
//     return res_arr;
// }
// // -------------||----------------------------
// function duplicates(arr) {
//     var result = [];
//     arr.forEach(function(element, index) {
//         if(arr.indexOf(element, index + 1) > -1) {
//             if(result.indexOf(element) === -1) {
//                 result.push(element);
//             }
//         }
//     });
//     return result;
// }
//
// console.log(unique([1, 2, 4, 4, 3, 3, 1, 5, 5, 3, '5', 'z', 'z', '\1', '\4', '\1', '\4']));
// ============================= les 10 Gradually Adding Parameters codewars =====================================

// function add() {
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i] * (i + 1);
//     }
//     return sum;
// }
// console.log(add(3,4,5));

 // returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
// ============================= les 10 reverseIt codewars =====================================
// function reverseIt(data){
//     if (typeof data == 'number' || typeof data == 'string') {
//         data = data + '';
//         var arr = data.split('');
//
//         data = arr.reverse().join('');
//     }
//     if (!isNaN(+data)) return +data;
//     return data;
// } no work
// ----------------------work----------
// function reverseIt(data){
//     if(typeof data === 'string'){
//         return data.split("").reverse().join("");
//     }
//     if(typeof data === 'number'){
//         var a = +(data.toString().split("").reverse().join(""));
//         return a;
//     }
//     return data;
// }
// console.log(reverseIt(123));
// console.log(reverseIt('qwer'));
// console.log(reverseIt({}));
// console.log(reverseIt([]));
// console.log(reverseIt(2436.579998609502));
// ============================= les 10 Basic JS - Calculating averages codewars =====================================

// var Calculator = {
//     average: function() {
//        var middle = 0;
//         var sum = 0;
//         if (arguments[0]) {
//             for (var i = 0; i < arguments.length; i++) {
//                 sum += arguments[i];
//             }
//             middle = sum / arguments.length;
//         }
//         return middle;
//     }
// };
// console.log(Calculator.average(3,4,5)); //to return 4.
// console.log(Calculator.average());
// ============================= les 10 fibonachy   codewars =====================================
//
//     function fib(n) {
//         var arr = [];
//         var a = 0;
//         var b = 1;
//         if (n == undefined || n <= 0 ) return arr;
//         if (n == 1) {
//             return arr.push(a);
//         } else if (n == 2) {
//             return arr.push(a);
//         }
//         arr.push(a);
//         arr.push(b);
//
//         for (var i = 2; i < n; i++) {
//             var c = a + b;
//             a = b;
//             b = c;
//             arr.push(b);
//         }
//         return arr;
//     }
// console.log(fib(6));
// console.log(fib());
// console.log(fib(0));
// ---------------||||||||----------------
//     function fibonacci(n) {
//         if(n <= 0)
//             return [];
//         if(n == 1)
//             return [0];
//         var arr = [0, 1];
//         for(var i = 2; i < n; i++)
//             arr.push(arr[i - 2] + arr[i - 1]);
//         return arr;
//     }
// ============================= les 10 Detect Pangram   codewars =====================================
// function isPangram(string) {
//     var arr = [];
//     var alfabet = [];
//     var obj = {};
//     string = string.replace(/[^a-zA-Z]/gm, "");
//     string = string.toLowerCase();
//     console.log(string);
//     arr = string.split('');
//     arr.forEach(function(item, index, arr) {
//        obj[item] = 1;
//     });
//     console.log(obj);
//     for (var key in obj) {
//         alfabet.push(key);
//     }
//     console.log(alfabet);
//     if (alfabet.length == 26){
//         return true;
//     }
//     return false;
// }
// var string = "The ;;quick brown fox jumps 123over the lazy !dog.";
// // console.log(isPangram(string));
// console.log(isPangram('This is not a pangram.'));
// -------------|||||------------------------------------
//     function isPangram(str) {
//         var s = str.toLowerCase();
//         var letters = "zqxjkvbpygfwmucldrhsnioate";
//         for (var i = 0; i < 26; i++)
//             if (s.indexOf(letters.charAt(i)) == -1)
//                 return false;
//         return true;
//     }
// ============================= les 10 Multiples of 3 and 5  codewars =====================================
// function solution(number){
//     var arr = [];
//     for (var i = 0; i < number; i++) {
//         arr.push(i);
//     }
//
//     var arr = arr.filter(function(value) {
//         if(value % 3 == 0 || value % 5 == 0) return true;
//     });
//     var sum = arr.reduce(function(sum, current) {
//         return sum + current;
//     }, 0);
//     return sum;
// }
// console.log(solution(10));
// ============================= les 10 Count characters in your string  codewars =====================================
// function count (string) {
//     var obj =  {};
//     if (string) {
//         var arr = string.split('');
//         arr.forEach(function (item, ind, arr) {
//             if(obj[item]){
//                 obj[item] += 1;
//             } else {
//                 obj[item] = 1;
//             }
//         })
//     }
//     return obj;
// }
// console.log(count('aba'));
// console.log(count());
// ============================= les 10 Typer.js проверка типа codewars =====================================
// var typer = (function() {
//     return {
//         isUndefined: function (x) { return typeof x == "undefined" },
//         isFunction:  function (x) { return typeof x == "function" },
//         isNumber:    function (x) { return typeof x != "undefined" && typeof x.valueOf() == "number" && !isNaN(x.valueOf()) },
//         isString:    function (x) { return typeof x != "undefined" && typeof x.valueOf() == "string" },
//         isBoolean:   function (x) { return typeof x != "undefined" && typeof x.valueOf() == "boolean" },
//         isArray:     function (x) { return x instanceof Array },
//         isDate:      function (x) { return x instanceof Date },
//         isRegExp:    function (x) { return x instanceof RegExp },
//         isError:     function (x) { return x instanceof Error },
//         isNull:      function (x) { return x === null }
//     };
// }());
//
// console.log(typer.isString(1321));
// console.log(typer.isString('that\'s a string'));
// console.log(typer.isError());
// console.log(typer.isString([]));
// console.log(typer.isString({}));
// -------------|||-----------------------
// var typer = (function(toString) {
//     return {
//         isString: function(obj) { return toString.call(obj) === '[object String]'; },
//         isFunction: function(obj) { return toString.call(obj) === '[object Function]'; },
//         isDate: function(obj) { return toString.call(obj) === '[object Date]'; },
//         isRegExp: function(obj) { return toString.call(obj) === '[object RegExp]'; },
//         isBoolean: function(obj) { return toString.call(obj) === '[object Boolean]'; },
//         isError: function(obj) { return toString.call(obj) === '[object Error]'; },
//         isNumber: function(obj) { return toString.call(obj) === '[object Number]' && !isNaN(obj); },
//         isArray: function(obj) { return Array.isArray ? Array.isArray(obj) : toString.call(obj) === '[object Array]'; },
//         isNull: function(obj) { return obj === null; },
//         isUndefined: function(obj) { return obj === void 0; }
//     };
// }(Object.prototype.toString));

// ============================= les 11 JSON=====================================
// var obj = {
//     name: 'Vasya',
//     age: 28,
//     arr: [1,2,3,['qwe',9,'zzz'],'xxx'],
//     toJSON: function () {                       //функция которая описывает JSON.stringify();
//         return this.name + this.age;
//     }
// }
// var jStr =  JSON.stringify(obj);
// console.log(jStr);
// var JS = JSON.parse(jStr);
// console.log(JS);
// ============================= les 11 Timer =====================================
// var timerId = setTimeout(function () { return 111;}, 1000);
// console.log(timerId);
// var a = timerId;
// console.log(a);
// ============================= les 12 Timout =====================================
// function delay(func, time){
//     return function () {
//         var arg = arguments[0];
//         var ctx = this;
//         setTimeout(function(){
//             func.call(ctx, arg)
//         }, time)
//     }
//
// }
// function f(x) {
//     console.log(x);
// }
// var f1000 = delay(f, 1000);
// var f2000 = delay(f, 2000);
// console.log(f1000);

// f1000('test1');
// console.log(setTimeout(function () { console.log(111111);}, 1000));
// ============================= les 12  Timer =====================================


// function debounce(func, time){
//     var state = true;
//     return function () {
//         if(!state) return;
//         func.apply(this, arguments);
//         state = false;
//         setTimeout(function(){
//             state = true;
//         }, time);
//     }
//
// }
// function f(x) {
//     console.log(x);
// }
// var f1 = debounce(f, 1000);
// f1(000);
//  f1(121212);
// setTimeout(function(){f1(111)}, 1000);
// setTimeout(function(){f1(222)}, 2009);
// setTimeout(function(){f1(333)}, 0);
// ============================= les 12   =====================================
/*работа с массивом в котором функция;*/
// var arr = [1, function () { console.log('xxx');}, 234, 12, function () { return ['a', 'b', 'c']}];
// console.log(arr[1]());//xxx undefined
// console.log(arr[4]()[2]);//c
// ============================= les 12 HOMEWORK  =====================================
/*Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20,
    с интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых
каждые 100 мс в консоли появляется очередное число.*/
// function printNumbersInterval() {
// var x = 0;
//     var timerId = setInterval(function () {
//         console.log(x++);
//     }, 100);
//     setTimeout(function() {
//         clearInterval(timerId);
//         console.log( 'стоп' );
//     }, 2150);
// }
// printNumbersInterval();
// ============================= les 12 HOMEWORK  =====================================
/*Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс,
 но с использованием рекурсивного setTimeout вместо setInterval.*/
// function printNumbersTimeout20_100() {
//     var i = 1;
//     var timerId = setTimeout(function go() {
//         console.log(i);
//         if (i < 20) setTimeout(go, 100);
//         i++;
//     }, 100);
// }
//
// // вызов
// printNumbersTimeout20_100();
// ============================= les 12 HOMEWORK  =====================================
/*Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.*/
// function f(x) {
//     console.log(x);
// }
// function delay(f, time) {
//     return function(text) {
//         return setTimeout(function(){f.call(null, text)}, time);
//     }
// }
// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 3000);
//
// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
// ============================= les 12 HOMEWORK  =====================================
// var f = function(a) {
//     console.log(a)
// };
// var arg;
// function throttle(func, time){
//     var state = true;
//     return function () {
//          arg = arguments;
//         // console.log(arg);
//         if(!state) return;
//         func.apply(this, arguments);
//         state = false;
//         setTimeout(function(){
//             state = true;
//             func.apply(this, arg);
//
//         }, time);
//     }
//
// }
//
// // затормозить функцию до одного раза в 1000 мс
// var f1000 = throttle(f, 1000);
//
// f1000(1); // выведет 1
// f1000(2); // (тормозим, не прошло 1000 мс)
// f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется
// ----------------------------------------||||||||||||||----------------------------
// var f = function(a) {
//     console.log(a)
// };
//
// function throttle(func, ms) {
//
//     var isThrottled = false,
//         savedArgs,
//         savedThis;
//
//     function wrapper() {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//
//     return wrapper;
// }
// var f1000 = throttle(f, 1000);
//
// f1000(1); // выведет 1
// f1000(2); // (тормозим, не прошло 1000 мс)
// f1000(3); // (тормозим, не прошло 1000 мс)
// ============================= les 13 Classwork  =====================================
// function User() {
//     var firstName = 'petya',
//         surname
//     this.setFirstName = function() {
//        if (!arguments.length) return firstName;
//        firstName = arguments[0];
//        return firstName;
//     };
//     this.setSurname = function() {
//         if (!arguments.length) return surname;
//         surname = arguments[0];
//         return surname;
//     };
//     this.getFullName = function(){
//         return firstName + '  ' + surname;
//     }
// }
// var user = new User();
// // user.setFirstName('vasya');
// // console.log(user.setFirstName());
// user.setSurname('pupkin');
// // console.log(user.setSurname());
// console.log(user.getFullName());
// console.log(user);
// ============================= les 13 Classwork  =====================================
/*Добавить метод и свойство кофеварке
Улучшите готовый код кофеварки, который дан ниже:
добавьте в кофеварку публичный метод stop(), который будет останавливать кипячение (через clearTimeout).*/

// function CoffeeMachine(power) {
//     this.waterAmount = 0;
//
//     var WATER_HEAT_CAPACITY = 42;
//
//     var self = this;
//
//     function getBoilTime() {
//         // console.log( 'Кофе готово!' );
//         return self.waterAmount * WATER_HEAT_CAPACITY * 20 / power;
//     }
//
//     function onReady() {
//         console.log( 'Кофе готово!' );
//     }
//
//     this.run = function() {
//
//         timerId = setTimeout(onReady, getBoilTime());
//     };
//     this.stop = function() {
//         console.log( 'stop!!!');
//         clearTimeout(timerId);
//     }
//
// }
// var machine = new CoffeeMachine(1);
// machine.waterAmount = 3;
// machine.run();
// machine.stop();
// ============================= les 13 Homework  =====================================
/*Добавьте кофеварке геттер для приватного свойства power,
    чтобы внешний код мог узнать мощность кофеварки.*/

//     function CoffeeMachine(power, capacity) {
//         this.getPower = function() {
//             if (power <= 0) {
//                 throw new Error("Значение должно быть положительным");
//             }
//             return power;
//         };
//         this.setWaterAmount = function(amount) {
//             if (amount <= 0) {
//                 throw new Error("Значение должно быть положительным");
//             }
//             if (amount > capacity) {
//                 throw new Error("Нельзя залить воды больше, чем " + capacity);
//             }
//
//             waterAmount = amount;
//         };
//
//         this.getWaterAmount = function() {
//             return waterAmount;
//         };
//
//     }
// var machine = new CoffeeMachine(1, 500);
// console.log(machine.getPower());
// ============================= les 13 Homework Добавить публичный метод кофеварке =====================================
/*Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.*/

//     function CoffeeMachine(power, capacity) {
//         var waterAmount = 0;
//
//         var WATER_HEAT_CAPACITY = 4200;
//
//         function getTimeToBoil() {
//             return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//         }
//
//         this.setWaterAmount = function(amount) {
//             if (amount <= 0) {
//                 throw new Error("Значение должно быть положительным");
//             }
//             if (amount > capacity) {
//                 throw new Error("Нельзя залить больше, чем " + capacity);
//             }
//
//             waterAmount = amount;
//         };
//         this.addWater = function(water) {
//             if (water <= 0) {
//                 throw new Error("Значение должно быть положительным");
//             }
//             if (water + waterAmount > capacity) {
//                 throw new Error("Нельзя залить больше, чем " + capacity);
//             }
//
//             waterAmount += water;
//         };
//
//         function onReady() {
//             console.log( 'Кофе готов!' );
//         }
//
//         this.run = function() {
//             setTimeout(onReady, getTimeToBoil());
//         };
//
//     }
//
// // Вот такой код должен приводить к ошибке:
//
//     var coffeeMachine = new CoffeeMachine(100000, 400);
// coffeeMachine.addWater(200);
// coffeeMachine.addWater(100);
// // coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
// coffeeMachine.run();
// ============================= les 13 Homework Создать сеттер для onReady =====================================
/*Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.
Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде:*/
    // function CoffeeMachine(power, capacity) {
    //     var waterAmount = 0;
    //
    //     var WATER_HEAT_CAPACITY = 4200;
    //
    //     function getTimeToBoil() {
    //         return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    //     }
    //
    //     this.setWaterAmount = function(amount) {
    //         // ... проверки пропущены для краткости
    //         waterAmount = amount;
    //     };
    //
    //     this.getWaterAmount = function(amount) {
    //         return waterAmount;
    //     };
    //
    //     function onReady() {
    //         console.log( 'Кофе готов!' );
    //     }
    //     this.setOnReady = function(func){
    //         onReady = func;
    //         // if (timerId){
    //         //     clearTimeout(timerId)
    //         // }
    //         // setTimeout(onReady, getTimeToBoil());
    //
    //     }
    //
    //     this.run = function() {
    //         timerId = setTimeout(function(){onReady();}, getTimeToBoil());
    //     };
    //
    // }

// Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady, вот так:

//     var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(150);
//
// coffeeMachine.run();
// coffeeMachine.setOnReady(function onReady() {
//     var amount = coffeeMachine.getWaterAmount();
//     console.log( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
// });

/*P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.
    P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до,
    но и после запуска кофеварки, то есть чтобы функцию onReady можно было изменить
    в любой момент до её срабатывания.    Добавить метод isRunning*/
// ============================= les 13 Homework Добавить метод isRunning=====================================

/*Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
Для этого добавьте кофеварке публичный метод isRunning(),
который будет возвращать true, если она запущена и false, если нет.
Нужно, чтобы такой код работал:*/
/*function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(water) {
        if (water <= 0) {
                throw new Error("Значение должно быть положительным");
            }
            if (water + waterAmount > capacity) {
                throw new Error("Нельзя залить больше, чем " + capacity);
            }
        waterAmount = water;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        console.log( 'Кофе готов!' );
        this.cook = false;
    }
    this.setOnReady = function(func) {
        this.cook = false;
        onReady = func;

    }
    this.cook = false;
    this.run = function() {
         this.cook = true;
         timerId = setTimeout(function(){onReady();}, getTimeToBoil());
         // setTimeout(function(){return this.cook = false;;}, getTimeToBoil())
    };

        this.isRunning = function () {
            return this.cook ;
        }

}


    var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

    console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
    console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
    console.log( "После: " + coffeeMachine.isRunning() ); // После: false
});*/
// -----------------------------|||||||||-------------------------
// function CoffeeMachine(power, capacity) {
//     var waterAmount = 0;
//
//     var timerId;
//
//     this.isRunning = function() {
//         return !!timerId;
//     };
//
//     var WATER_HEAT_CAPACITY = 4200;
//
//     function getTimeToBoil() {
//         return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
//
//     this.setWaterAmount = function(amount) {
//         // ... проверки пропущены для краткости
//         waterAmount = amount;
//     };
//
//     this.getWaterAmount = function(amount) {
//         return waterAmount;
//     };
//
//     function onReady() {
//         console.log( 'Кофе готов!' );
//     }
//
//     this.setOnReady = function(newOnReady) {
//         onReady = newOnReady;
//     };
//
//     this.run = function() {
//         timerId = setTimeout(function() {
//             timerId = null;
//             onReady();
//         }, getTimeToBoil());
//     };
//
// }
//
// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(100);
//
// console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false
//
// coffeeMachine.run();
// console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
//
// coffeeMachine.setOnReady(function() {
//     console.log( "После: " + coffeeMachine.isRunning() ); // После: false
// });
// ============================= les 13 Homework Запускать только при включённой кофеварке=====================================
/*В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
В итоге должен работать такой код:*/
// function CoffeeMachine(power, capacity) {
//     var waterAmount = 0;
//
//     var timerId;
//
//     this.isRunning = function() {
//         return !!timerId;
//     };
//
//     var WATER_HEAT_CAPACITY = 4200;
//
//     function getTimeToBoil() {
//         return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
//
//     this.setWaterAmount = function(amount) {
//         // ... проверки пропущены для краткости
//         waterAmount = amount;
//     };
//
//     this.getWaterAmount = function(amount) {
//         return waterAmount;
//     };
//
//     function onReady() {
//         console.log( 'Кофе готов!' );
//     }
//
//     this.setOnReady = function(newOnReady) {
//         onReady = newOnReady;
//     };
//
//     this.run = function() {
//
//         if(on === undefined || on === false) {
//             return console.log('Machine is "OFF"');
//         } else {
//             timerId = setTimeout(function () {
//                 timerId = null;
//                 onReady();
//             }, getTimeToBoil());
//         }
//     };
//     var on;
//     this.enable = function() {
//          on  = true;
//
//     }
// }
//
//
//     var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.run(); // ошибка, кофеварка выключена!
//
// // А вот так – всё в порядке:
//
//     var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run(); // ...Кофе готов!
// -----------------------------------------------------||||||||||||--------------------
//     function Machine(power) {
//         this._enabled = false;
//
//         this.enable = function() {
//             this._enabled = true;
//         };
//
//         this.disable = function() {
//             this._enabled = false;
//         };
//     }
//
// function CoffeeMachine(power) {
//     Machine.apply(this, arguments);
//
//     var waterAmount = 0;
//
//     this.setWaterAmount = function(amount) {
//         waterAmount = amount;
//     };
//
//     function onReady() {
//         console.log('Кофе готов!');
//     }
//
//     this.run = function() {
//         if (!this._enabled) {
//             throw new Error("Кофеварка выключена");
//         }
//         setTimeout(onReady, 1000);
//     };
//
// }
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// // ============================= les 13 Homework Останавливать кофеварку при выключении=====================================
 /*   Когда кофеварку выключают – текущая варка кофе должна останавливаться.
    Например, следующий код кофе не сварит:*/
//     function Machine(power) {
//     this._enabled = false;
//
//     this.enable = function() {
//         this._enabled = true;
//     };
//
//     // this.disable = function() {
//     //     this._enabled = false;
//     //     if (!!taimerId) {
//     //         clearTimeout(taimerId);
//     //     }
//     // };
//
// }
//
// function CoffeeMachine(power) {
//     Machine.apply(this, arguments);
//
//     var waterAmount = 0;
//
//     this.setWaterAmount = function(amount) {
//         waterAmount = amount;
//     };
//
//     function onReady() {
//         console.log('Кофе готов!');
//     }
//     // var taimerId = 0;
//     this.run = function() {
//         if (!this._enabled) {
//             throw new Error("Кофеварка выключена");
//         }
//         taimerId = setTimeout(onReady, 1000);
//     };
//     this.disable = function() {
//         this._enabled = false;
//         if (!!taimerId) {
//             clearTimeout(taimerId);
//         }
//     };
// }
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable(); // остановит работу, ничего не выведет
// ------------------__________-|||||||-----------------------------
//     function Machine(power) {
//         this._enabled = false;
//
//         this.enable = function() {
//             this._enabled = true;
//         };
//
//         this.disable = function() {
//             this._enabled = false;
//         };
//     }
//
// function CoffeeMachine(power) {
//     Machine.apply(this, arguments);
//
//     var waterAmount = 0;
//     var timerId;
//
//     this.setWaterAmount = function(amount) {
//         waterAmount = amount;
//     };
//
//     function onReady() {
//         console.log('Кофе готов!');
//     }
//
//     var parentDisable = this.disable;
//     this.disable = function() {
//         parentDisable.call(this);
//         clearTimeout(timerId);
//     }
//
//     this.run = function() {
//         if (!this._enabled) {
//             throw new Error("Кофеварка выключена");
//         }
//         timerId = setTimeout(onReady, 1000);
//     };
//
// }
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable(); // остановит работу, ничего не выведет
// // ============================= les 13 Homework Унаследуйте холодильник=====================================
/*Создайте класс для холодильника Fridge(power), наследующий от Machine,
    с приватным свойством food и методами addFood(...), getFood():
Приватное свойство food хранит массив еды.
    Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
    Если холодильник выключен, то добавить еду нельзя, будет ошибка.
    Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.*/

    // function Machine(power) {
    //     this._power = power;
    //     this._enabled = false;
    //
    //     var self = this;
    //
    //     this.enable = function() {
    //         self._enabled = true;
    //     };
    //
    //     this.disable = function() {
    //         self._enabled = false;
    //     };
    // }
    //
    // function Fridge(power) {
    //     Machine.apply(this, arguments);
    //     this.volume = power / 100;
    //     var food = [];
    //
    //     this.addFood = function() {
    //         if(!this._enabled){
    //             throw new Error("Refregeratior OFF");
    //         }
    //         if (food.length + arguments.length > this.volume) {
    //             throw new Error(" it does not fit in Refrigerator");
    //         }
    //         for(var i = 0; i < arguments.length; i++){
    //             food.push(arguments[i]);
    //         }
    //         return
    //     };
    //     this.getFood = function() {
    //         // return food;
    //         return food.slice();
    //         // console.log( food );
    //     };
    //
    // }

// var fridge = new Fridge(500);
// fridge.addFood("котлета"); // ошибка, холодильник выключен

// создать холодильник мощностью 500 (не более 5 еды)
//    var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
// console.log(fridge.getFood());
// console.log(fridge.volume);

// Код использования холодильника без ошибок:
//
//     var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");
//
// var fridgeFood = fridge.getFood();
// console.log( fridgeFood ); // котлета, сок, варенье
//
// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");
//
// console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
// // ============================= les 13 Homework Добавьте методы в холодильник =====================================
/*Добавьте в холодильник методы:
    Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
Публичный метод removeFood(item), который удаляет еду item из холодильника.*/
//
// function Machine(power) {
//     this._power = power;
//     this._enabled = false;
//
//     var self = this;
//
//     this.enable = function() {
//         self._enabled = true;
//     };
//
//     this.disable = function() {
//         self._enabled = false;
//     };
// }
//
// function Fridge(power) {
//     Machine.apply(this, arguments);
//     this.volume = power / 100;
//     var food = [];
//
//     this.addFood = function() {
//         if(!this._enabled){
//             throw new Error("Refregeratior OFF");
//         }
//         if (food.length + arguments.length > this.volume) {
//             throw new Error(" it does not fit in Refrigerator");
//         }
//         for(var i = 0; i < arguments.length; i++){
//             food.push(arguments[i]);
//         }
//         return
//     };
//     this.getFood = function() {
//         // return food;
//         return food.slice();
//         // console.log( food );
//     };
//     this.filterFood = function (func) {
//         return  filterProducts = food.filter(func);
//     }
//
//     this.removeFood = function(item) {
//         if (typeof(item) == "object") {
//             var idx = food.indexOf(item);
//             if (idx != -1) food.splice(idx, 1);
//         }
//         if (typeof(item) == "string") {
//             for(var i = 0; i < food.length; i++) {
//                 if (food[i].title.indexOf(item) >= 0) {
//                     food.splice(i, 1);
//                 }
//             }
//         }
//     };
// }
//
//     // Код для проверки:
//     var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood({
//     title: "котлета",
//     calories: 100
// });
// fridge.addFood({
//     title: "сок",
//     calories: 30
// });
// fridge.addFood({
//     title: "зелень",
//     calories: 10
// });
// fridge.addFood({
//     title: "варенье",
//     calories: 150
// });
// console.log( fridge.getFood());
// console.log( fridge.getFood().length ); // 2
//
// fridge.removeFood("нет такой еды"); // без эффекта
// fridge.removeFood("варенье");
//
// console.log( fridge.getFood().length ); // 4
//
// var dietItems = fridge.filterFood(function(item) {
//     return item.calories < 50;
// });
// console.log( dietItems);
//
// dietItems.forEach(function(item) {
//     console.log( item.title ); // сок, зелень
//     fridge.removeFood(item);
// });
//
// console.log( fridge.getFood().length ); // 2
 // ============================= les 13 Homework Переопределите disable =====================================
/*Переопределите метод disable холодильника,
чтобы при наличии в нём еды он выдавал ошибку.*/

// function Machine(power) {
//     this._power = power;
//     this._enabled = false;
//
//     var self = this;
//
//     this.enable = function() {
//         self._enabled = true;
//     };
//
//     this.disable = function() {
//         if(food.length > 0) {
//             throw new Error(" it does not do it, because in refrigerator has food");
//         }
//         self._enabled = false;
//     };
// }
//
// function Fridge(power) {
//     Machine.apply(this, arguments);
//     this.volume = power / 100;
//     food = [];
//
//     this.addFood = function() {
//         if(!this._enabled){
//             throw new Error("Refregeratior OFF");
//         }
//         if (food.length + arguments.length > this.volume) {
//             throw new Error(" it does not fit in Refrigerator");
//         }
//         for(var i = 0; i < arguments.length; i++){
//             food.push(arguments[i]);
//         }
//         return
//     };
//     this.getFood = function() {
//         // return food;
//         return food.slice();
//         // console.log( food );
//     };
//     this.filterFood = function (func) {
//         return  filterProducts = food.filter(func);
//     }
//
//     this.removeFood = function(item) {
//         if (typeof(item) == "object") {
//             var idx = food.indexOf(item);
//             if (idx != -1) food.splice(idx, 1);
//         }
//         if (typeof(item) == "string") {
//             for(var i = 0; i < food.length; i++) {
//                 if (food[i].title.indexOf(item) >= 0) {
//                     food.splice(i, 1);
//                 }
//             }
//         }
//     };
// }
//
//     // Код для проверки:
//     var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("кус-кус");
// fridge.disable(); // ошибка, в холодильнике есть еда
// ------------------||||||||-------------
//     function Machine(power) {
//         this._power = power;
//         this._enabled = false;
//
//         var self = this;
//
//         this.enable = function() {
//             self._enabled = true;
//         };
//
//         this.disable = function() {
//             self._enabled = false;
//         };
//     }
//
// function Fridge(power) {
//     Machine.apply(this, arguments);
//
//     var food = []; // приватное свойство food
//
//     this.addFood = function() {
//         if (!this._enabled) {
//             throw new Error("Холодильник выключен");
//         }
//         if (food.length + arguments.length >= this._power / 100) {
//             throw new Error("Нельзя добавить, не хватает мощности");
//         }
//         for (var i = 0; i < arguments.length; i++) {
//             food.push(arguments[i]); // добавить всё из arguments
//         }
//
//     };
//
//     this.getFood = function() {
//         // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
//         return food.slice();
//     };
//
//     this.filterFood = function(filter) {
//         return food.filter(filter);
//     };
//
//     this.removeFood = function(item) {
//         var idx = food.indexOf(item);
//         if (idx != -1) food.splice(idx, 1);
//     };
//
//     var parentDisable = this.disable;
//     this.disable = function() {
//         if (food.length) {
//             throw new Error("Нельзя выключить: внутри еда");
//         }
//         parentDisable();
//     };
// }
//
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("кус-кус");
// fridge.disable(); // ошибка, в холодильнике есть еда
// ============================= les 14 Homework Алгоритм для поиска=====================================
// var head = {
//     glasses: 1
// };
//
// var table = {
//     pen: 3,
//     __proto__: head
// };
//
// var bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
//
// var pockets = {
//     money: 2000
// };
//
// pockets.__proto__ = bed;
// console.log(pockets.sheet);
// ============================= les 14 Homework Разница между вызовами=====================================
// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//     console.log( this.name );
// }
//
// var rabbit = new Rabbit("Rabbit");
//
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();
// ============================= les 14 Homework Добавить функциям defer =====================================
/*Добавьте всем функциям в прототип метод defer(ms),
который откладывает вызов функции на ms миллисекунд.
    После этого должен работать такой код:*/
// Function.prototype.defer = function (ms) {
//     return setTimeout(this, ms);
// }
//     function f() {
//         console.log( "привет" );
//     }
//
// f.defer(1000); // выведет "привет" через 1 секунду
// ============================= les 14 Homework Добавить функциям defer с аргументами =====================================
/*Добавьте всем функциям в прототип метод defer(ms),
который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.*/

//     Function.prototype.defer = function (ms) {
//         var f = this;
//         return function(){
//             var arg = arguments;
//             var context = this;
//               setTimeout(function () {
//                f.apply(context, arg)}, ms);
//         }
//     }
//
//     function f(a, b) {
//         console.log( a + b );
//     }
//
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// ============================= les 14 Homework Перепишите в виде класса =====================================
/*Есть класс CoffeeMachine, заданный в функциональном стиле.
Задача: переписать CoffeeMachine в виде класса с использованием прототипа.*/


//     function CoffeeMachine(power) {
//         this.__waterAmount = 0;
//
//         this.__WATER_HEAT_CAPACITY = 4200;
//
//         this.getTimeToBoil = function () {
//             return this.__waterAmount * this.__WATER_HEAT_CAPACITY * 80 / power;
//         }
//
//         this.run = function() {
//             setTimeout(function() {
//                 console.log( 'Кофе готов!' );
//             },  this.getTimeToBoil());
//         };
//
//         this.setWaterAmount = function(amount) {
//             this.__waterAmount = amount;
//         };
//
//     }
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();
// -------------------------||||||||||||||_-----------------------
// function CoffeeMachine(power) {
//     // свойства конкретной кофеварки
//     this._power = power;
//     this._waterAmount = 0;
// }
//
// // свойства и методы для всех объектов класса
// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
//
// CoffeeMachine.prototype._getTimeToBoil = function() {
//     return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
// };
//
// CoffeeMachine.prototype.run = function() {
//     setTimeout(function() {
//         console.log( 'Кофе готов!' );
//     }, this._getTimeToBoil());
// };
//
// CoffeeMachine.prototype.setWaterAmount = function(amount) {
//     this._waterAmount = amount;
// };
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();
// ============================= les 14 Homework Хомяки с __proto__ =====================================
/*Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ – "Hamster").
Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.
    Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.
    В чём дело? Как поправить?*/

//         function Hamster() {
//             this.food = [];
//         }
//
// Hamster.prototype.found = function(something) {
//     this.food.push(something);
// };
//
// // Создаём двух хомяков и кормим первого
// var speedy = new Hamster();
// var lazy = new Hamster();
//
// speedy.found("яблоко");
// speedy.found("орех");
//
// console.log( speedy.food.length ); // 2
// console.log( lazy.food.length ); // 2 (!??)
// ============================= les 14 Homework Класс "часы"=====================================
    /*Есть реализация часиков, оформленная в виде одной функции-конструктора. У неё есть приватные свойства timer, template и метод render.
    Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными*/
// function Clock(options) {
//     this._template = options.template;
// }
//
// Clock.prototype._render = function render() {
//     var date = new Date();
//
//     var hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//
//     var min = date.getMinutes();
//     if (min < 10) min = '0' + min;
//
//     var sec = date.getSeconds();
//     if (sec < 10) sec = '0' + sec;
//
//     var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);
//
//     console.log(output);
// };
//
// Clock.prototype.stop = function() {
//     clearInterval(this._timer);
// };
//
// Clock.prototype.start = function() {
//     this._render();
//     var self = this;
//     this._timer = setInterval(function() {
//         self._render();
//     }, 1000);
// };
// var clock = new Clock({
//     template: 'h:m:s'
// });
// clock.start();
// ============================= les 14 Homework Класс "расширенные часы" =====================================
/*Есть реализация часиков на прототипах. Создайте класс, расширяющий её,
добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval. Значение по умолчанию: 1000.
Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
    Исходный класс Clock менять нельзя.
    Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем при расширении Clock новыми опциями.*/
// function ExtendedClock(options) {
//     Clock.apply(this, arguments);
//     this._precision = +options.precision || 1000;
// }
//
// ExtendedClock.prototype = Object.create(Clock.prototype);
//
// ExtendedClock.prototype.start = function() {
//     this._render();
//     var self = this;
//     this._timer = setInterval(function() {
//         self._render();
//     }, this._precision);
// };
//
// var clock = new ExtendedClock({
//     template: 'h:m:s',
//     precision : 2000
// });
// clock.start();
// ============================= les 14 Homework codewars color-ghost =====================================
// function Ghost() {
//     this.arr = ["white" , "yellow" , "purple" , "red"];
//         function getRandomInt(arr){
//             var max = arr.length - 1;
//             return arr[Math.floor(Math.random() * (max  + 1))] ;
//         }
//     this.color = getRandomInt(this.arr);
//     this.GetColor = function(){
//         return this.color;
//     }
// };
//
//
// ghost = new Ghost();
// // ghost.color //=> "white" or "yellow" or "purple" or "red"
//
//
// console.log(ghost.GetColor()); // => "white" or "yellow" or "purple" or "red"

// ============================= les 14 Homework codewars this-is-a-problem/javascript =====================================

//     function NameMe(first, last) {
//         this.firstName = first;
//         this.lastName = last;
//         this.name = this.firstName + ' ' + this.lastName;
//     }
//
// var n = new NameMe('John', 'Doe');
// console.log(n.firstName) //Expected: John
// console.log(n.lastName )//Expected: Doe
// console.log(n.name )//Expected: John Doe
// ============================= les 14 Homework codewars Object Oriented Piracy  =====================================

// function Ship(draft,crew) {
//     this.draft = draft;
//     this.crew = crew;
// }
// Ship.prototype.isWorthIt = function(){
//     return this.draft-(this.crew*1.5) > 20;
// }
//
// var titanic = new Ship(15,10);
// console.log(titanic.isWorthIt());
//
// var titanic = new Ship(30,5);
// console.log(titanic.isWorthIt());
// ============================= les 14 Homework codewars re-open-class =====================================
// String.prototype.myNewMethod = String.prototype.toUpperCase;
// console.log("abc".myNewMethod());
// ============================= les 14 Homework codewars Singleton Pattern =====================================
//
// var Singleton = new function() {
//     var instance;
//     // Конструктор
//     function Singleton() {
//         if ( !instance ){
//             instance = this;
//             console.log(instance);
//         } else {
//             console.log(instance);
//             return instance;
//         }
//
//     }
//
//     return Singleton;
// }
// var obj1 = new Singleton();
// var obj2 = new Singleton();
// console.log(obj1 === obj2); // => true
// console.log(obj1.test = 1);
// console.log(obj2.test); // => 1
// ============================= les 14 Homework codewars Array.prototype.reverse() =====================================
// Array.prototype.reverse = function() {
//    var arr = this;
//    var len = arr.length;
//    for (var i = len - 1; i >= 0; i--) {
//         arr.push(arr[i]);
//    }
//     arr.splice(0, len);
//    return arr;
// };
//  var arr = [1, 2, 3, 4];
// console.log(arr.reverse());
// ============================= les 14 Homework codewars Javascript Namespacing =====================================
// MyNamespace ={};
//  MyNamespace.MyClass = function(str) {
//     this.sayHello = function(){
//         return str;
//     };
// }
// var myObject = new MyNamespace.MyClass('Hello!');
//
// var phrase = myObject.sayHello(); // phrase should be 'Hello!'
// console.log(phrase);

// ============================= les 14 Homework codewars "this" is an other problem =====================================
// function NamedOne(first, last) {
//     this.firstName = first
//     this.lastName = last
// }
//
// NamedOne.prototype = {
//     get fullName() {
//         return this.firstName + ' ' + this.lastName
//     },
//     set fullName(v) {
//         var pair = v.split(' ')
//         if (pair.length == 2) {
//             this.firstName = pair[0]
//             this.lastName = pair[1]
//         }
//     }
// }
//
//
// var namedOne = new NamedOne("Naomi","Wang");
// // namedOne.fullName = namedOne.firstName + ' ' + namedOne.lastName;
// console.log(namedOne.firstName); // -> "Naomi"
// console.log(namedOne.lastName ); // -> "Wang"
// console.log(namedOne.fullName);  // -> "Naomi Wang"
//
// namedOne.firstName = "John";
// console.log(namedOne.firstName); // -> "John"
// namedOne.lastName = "Doe";
// console.log(namedOne.lastName ); // -> "Doe"
// console.log(namedOne.fullName);

// ============================= les 14 Homework codewars Extract Nested Object Reference =====================================
// return the nested property value if it exists,
// otherwise return undefined
// var obj = {
//     person: {
//         name: 'joe',
//         history: {
//             hometown: 'bratislava',
//             bio: {
//                 funFact: 'I like fishing.'
//             }
//         }
//     }
// };
// Object.prototype.hash = function(string) {
//     try{
//         return eval("(" +"this."+ string + ")");
//     }
//     catch(err){
//         return undefined;
//     }
// }
// console.log(obj['person']['name']);
// console.log(obj.hash('person.name')); // 'joe'
// // console.log(obj.'person.name');
//
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined
// -----------------|||||||||-------------------------
// Object.prototype.hash = function(string) {
//     let arr=string.split('.');
//     let tmp=this;
//     for(let i=0;i<arr.length&&tmp!==undefined;i++){
//         tmp=tmp[arr[i]];
//     }
//     return tmp;
// }
// ============================= les 14 Homework codewars new with apply =====================================
// function construct(Class /*, args */) {
//     var obj = Object.create(Class.prototype);
//     Class.apply(obj, Array.prototype.slice.call(arguments, 1));
//     return obj;
// }
// -----------------------|||||||||||||||||-------------------------
//     function construct(Class) {
//         var obj = Object.create(Class.prototype);
//         Class.apply(obj, Array.prototype.slice.call(arguments, 1));
//         return obj;
//     }
// ============================= les 14 Homework Поиск элементов =====================================
// 1
//     document.getElementById('age-table').getElementsByTagName('label');
// // 2
// document.getElementById('age-table').getElementsByTagName('td')[0];
// // в современных браузерах можно одним запросом:
// var result = document.querySelector('#age-table td');
// // 3
// document.getElementsByTagName('form')[1];
// // 4
// document.querySelector('form[name="search"]');
// // 5
// document.querySelector('form[name="search"] input')
// // 6
// document.getElementsByName("info[0]")[0];
// // 7
// document.querySelector('form[name="search-person"] [name="info[0]"]');
// Ниже находится документ с таблицей и формой.
/*Найдите (получите в переменную) в нём:
    Все элементы label внутри таблицы. Должно быть 3 элемента.
    Первую ячейку таблицы (со словом "Возраст").
Вторую форму в документе.
    Форму с именем search, без использования её позиции в документе.
    Элемент input в форме с именем search. Если их несколько, то нужен первый.
    Элемент с именем info[0], без точного знания его позиции в документе.
    Элемент с именем info[0], внутри формы с именем search-person.

    Используйте для этого консоль браузера, открыв страницу table.html в отдельном окне.*/
// ============================= les 14 Homework Дерево =====================================
/*Есть дерево из тегов <ul>/<li>.

Напишите код, который для каждого элемента <li> выведет:

Текст непосредственно в нём (без подразделов).
Количество вложенных в него элементов <li> – всех, с учётом вложенных.*/
// var lis = document.getElementsByTagName('li');
// for (i = 0; i < lis.length; i++) {
//     var x = lis[i].firstChild.data;
//     x = x.trim();
//
//     var arr = lis[i].getElementsByTagName('li')
//     console.log(`${x} :  ${arr.length}`);
//
// }
// ============================= les 14 Homework Дерево =====================================
// var a = document.createElement('a');
// a.setAttribute('class', 'button ');
// a.setAttribute('href', '/');
// a.setAttribute('type', 'button');
// a.innerHTML += 'Нажми меня';
// document.body.appendChild(a)
// a.style.cssText = "  -moz-border-radius: 8px;\
//     -webkit-border-radius: 8px;\
//     border-radius: 8px;\
//     border: 2px groove green;\
//     display: block;\
//     height: 30px;\
//     line-height: 30px;\
//     width: 100px;\
//     text-decoration: none;\
//     text-align: center;\
//     color: red;\
//     font-weight: bold\
//     ";
// // li2.insertAdjacentHTML("beforeEnd", "<li>3</li><li>4</li><li>5</li>");
// var p = document.getElementsByTagName('p');
// console.log(p[0].innerHTML);
// p[0].innerHTML += 'KOT';
// console.log(document.body.innerHTML);

// ============================= les 17 Homework Поставьте класс ссылкам =====================================
// Сделайте желтыми внешние ссылки, добавив им класс external.
//     Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.
//
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <meta charset="utf-8">
//     </head>
//
//     <body>
//
//     <style>
// .external {
//     background-color: yellow
// }
// </style>
//
// <a name="list">список</a>
//     <ul>
//     <li><a href="http://google.com" class="external">http://google.com</a></li>
// <li><a href="/tutorial">/tutorial.html</a></li>
//     <li><a href="local/path">local/path</a></li>
//     <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
// <li><a href="http://nodejs.org">http://nodejs.org</a></li>
// <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>
// </body>
//
// </html>
//
// var atr = document.body.querySelectorAll('ul li a');
// for (val of atr) {
// //   console.log(val.innerHTML);
//     var link = val.getAttribute('href');
//     console.log(link);
//     if (link.indexOf('http://') >= 0) {
//         val.classList.add('external');
//     }
// }
// ============================= les 17 Homework Получите пользовательский атрибут =====================================
// Получите div в переменную.
//     Получите значение атрибута "data-widget-name" в переменную.
//     Выведите его.
//
// <!DOCTYPE HTML>
// <html>
//
// <body>
//
// <div id="widget" data-widget-name="menu">Выберите жанр</div>
//
// <script>
// var d = document.body.children[0];
// // console.log(d.innerHTML);
// var atr = document.body.querySelectorAll('div[data-widget-name="menu"]')[0];
// // console.log(atr.innerHTML);
// console.log(d.getAttribute('data-widget-name'));
// </script>
//// </body>
//// </html>
// ============================= les 17 Homework Удаление элементов =====================================
// Напишите полифилл для метода remove для старых браузеров.
//     Вызов elem.remove():
// Если у elem нет родителя – ничего не делает.
//     Если есть – удаляет элемент из родителя.
//
// <!DOCTYPE HTML>
// <html>
//
// <body>
//
// <div>Это</div>
// <div>Все</div>
// <div>Элементы DOM</div>
//
// <script>
// function remove() {
//     if (this.parentElement) {
//         this.parentElement.removeChild(this);
//     }
// }
//
// var elem = document.body.children[0];
// elem.remove(); // <-- вызов должен удалить элемент
// var el = document;
// el.remove();
// </script>
//
// </body>
// </html>
// ============================= les 17 Homework insertAfter =====================================
// Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.
// <!DOCTYPE HTML>
// <html>
//
// <body>
//
// <div>Это</div>
// <div>Элементы</div>
//
//
// <script>
// var elem = document.createElement('div');
// elem.innerHTML = '<b>Новый элемент</b>';
// //    ----------no work
// //    function insertAfter(elem, refElem) {
// //        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
// //    }
// //    ----------no work
// //    function insertAfter(elem, refElem) {
// //        var parent = refElem.parentNode;
// //        var next = refElem.nextSibling;
// //        if (next) {
// //            return parent.insertBefore(elem, next);
// //        } else {
// //            return parent.appendChild(elem);
// //        }
// //    }
// function insertAfter(elem, refElem) {
//
//     if(refElem.parentNode.lastChild == document.body.lastChild)
//         document.body.insertBefore(elem, null);
//     document.body.insertBefore(elem, refElem.nextSibling.nextSibling);
// }
// var body = document.body;
//
// // вставить elem после первого элемента
// insertAfter(elem, body.firstChild); // <--- должно работать
//
// // вставить elem за последним элементом
// //    insertAfter(elem, body.lastChild); // <--- должно работать
// </script>
//
// </body>
//
// </html>
// ============================= les 17 Homework removeChildren =====================================
// Напишите функцию removeChildren, которая удаляет всех потомков элемента.
// <!DOCTYPE HTML>
// <html>
// <body>
// <table id="table">
//     <tr>
//     <td>Это</td>
//     <td>Все</td>
//     <td>Элементы DOM</td>
// </tr>
//
// </table>
//
// <ol id="ol">
//     <li>Вася</li>
//     <li>Петя</li>
//     <li>Маша</li>
//     <li>Даша</li>
//     </ol>
//
//     <script>
//     function removeChildren(elem) {
//         var child = elem.children ;
//         //elem.children[0].remove()
//         //console.log(child);
//         for (var i = child.length - 1; i >= 0 ; i--) {
//             console.log(child.length);
//             elem.removeChild(child[i]);
//         }
//     }
// removeChildren(table); // очищает таблицу
// removeChildren(ol); // очищает список
// table.innerHTML = 'weqrwer';
// </script>
// </body>
// </html>
// ============================= les 17 Homework Создать список =====================================
// Напишите интерфейс для создания списка.
//     Для каждого пункта:
//     Запрашивайте содержимое пункта у пользователя с помощью prompt.
//     Создавайте пункт и добавляйте его к UL.
//     Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
//
//     Все элементы должны создаваться динамически.
//
//     Если посетитель вводит теги – пусть в списке они показываются как обычный текст.
//
// var ul = document.createElement('ul');
// var li = ''
// do {
//     li = prompt('Enter text');
//     if (li == '' ) breack;
//     var liteg = document.createElement('li');
//     var text = document.createTextNode(li)
//     console.log(liteg.appendChild(text));
//     ul.appendChild(liteg);
//     console.log(document.body.appendChild(ul));
// }while( li !== null )
//
// console.log(li);
// -----------------------|||||||||||-------------
// var ul = document.createElement('ul');
// document.body.appendChild(ul);
//
// while (true) {
//     var data = prompt("Введите текст для пункта списка", "");
//
//     if (!data) {
//         break;
//     }
//
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(data));
//     ul.appendChild(li);
// }
// ============================= les 17 HomeworkСоздайте дерево из объекта =====================================

// Напишите функцию, которая создаёт вложенный список UL/LI (дерево) из объекта.
//
// <div id="container"></div>
//
//     <script>
// var data = {
//     "Рыбы": {
//         "Форель": {},
//         "Щука": {}
//     },
//
//     "Деревья": {
//         "Хвойные": {
//             "Лиственница": {},
//             "Ель": {}
//         },
//         "Цветковые": {
//             "Берёза": {},
//             "Тополь": {}
//         }
//
//     }
// };
//
// function createTree(container, obj) {
//     container.appendChild(createTreeDom(obj));
// }
//
// function createTreeDom(obj) {
//     // если нет детей, то рекурсивный вызов ничего не возвращает
//     // так что вложенный UL не будет создан
//     if (isObjectEmpty(obj)) return;
//
//     var ul = document.createElement('ul');
//
//     for (var key in obj) {
//         var li = document.createElement('li');
//         li.innerHTML = key;
//
//         var childrenUl = createTreeDom(obj[key]);
//         if (childrenUl) li.appendChild(childrenUl);
//
//         ul.appendChild(li);
//     }
//
//     return ul;
// }
//
//
// function isObjectEmpty(obj) {
//     for (var key in obj) {
//         return false;
//     }
//     return true;
// }
//
// var container = document.getElementById('container');
// createTree(container, data);
// </script>
//
// </body>
//
// </html>
// -------------|||||||||||||-------------
// <!DOCTYPE html>
// <html>
//
// <head>
// <meta charset="utf-8">
//     </head>
//
//     <body>
//
//     <div id="container"></div>
//
//     <script>
// var data = {
//     "Рыбы": {
//         "Форель": {},
//         "Щука": {}
//     },
//
//     "Деревья": {
//         "Хвойные": {
//             "Лиственница": {},
//             "Ель": {}
//         },
//         "Цветковые": {
//             "Берёза": {},
//             "Тополь": {}
//         }
//
//     }
// };
//
// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
// }
//
// function createTreeText(obj) { // отдельная рекурсивная функция
//     var li = '';
//     for (var key in obj) {
//         li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }
//     if (li) {
//         var ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
// }
//
// var container = document.getElementById('container');
// createTree(container, data);
// </script>
// </body>
//
// </html>
// ============================= les 17 Homework Создать календарь в виде таблицы =====================================
/*Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).
    Календарь должен быть таблицей, где каждый день – это TD. У таблицы должен быть заголовок с названиями дней недели, каждый день – TH.
    Синтаксис: createCalendar(id, year, month).
    Такой вызов должен генерировать текст для календаря месяца month в году year, а затем помещать его внутрь элемента с указанным id.
    Например: createCalendar("cal", 2012, 9) сгенерирует в <div id=„cal“></div> следующий календарь:*/

// function createCalendar(id, year, month) {
//     var tr = document.createElement('tr');
//     var tr2 = document.createElement('tr');
//     var tbody = document.createElement('tbody');
//     var table = document.createElement('table');
//     var div = document.createElement('div');
//     div.setAttribute('id', id);
// //     tr.innerHTML =  '<th >Sun</th><th>Mon</th> <th>Tuу</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>';
//     tr.innerHTML =  '<th>Mon</th> <th>Tuу</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th >Sun</th>';
//
//     var d = new Date(year, month, 1);
//     tbody.innerHTML += tr.outerHTML ;
//     var day = d.getDay();
//     var i  = day - 1 ;
//     if (i == -1) i = 6;
//     console.log(i);
//     var tr3 = ''
//     for (var k = 0; k < i ; k++) {
//         tr3 += '<td></td>';
//     }
//     while(d.getMonth() == month){
//         var tr2 = document.createElement('tr');
//         if (i) tr2.innerHTML += tr3;
//         for (i ; i < 7; i++) {
//             if (d.getMonth() != month) {continue;}
//             var date = d.getDate();
//             tr2.innerHTML += '<td>' + date + '</td>';
//             date++;
//             d.setDate(date)
//         }
//         i  = 0;
//         tbody.innerHTML += tr2.outerHTML ;
//     }
//     var newLi = document.createElement('li');
//     newLi.innerHTML = 'Привет, мир!';
//     table.appendChild(tbody);
//
//     div.appendChild(table);
//
//     document.body.appendChild(div);
// }
// createCalendar("cal", 2017, 3)
// --------------------------||||||-------------------------
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <style>
// table {
//     border-collapse: collapse;
// }
//
// td,
//     th {
//     border: 1px solid black;
//     padding: 3px;
//     text-align: center;
// }
//
// th {
//     font-weight: bold;
//     background-color: #E6E6E6;
// }
// </style>
// <meta charset="utf-8">
//     </head>
//
//     <body>
//
//
//     <div id="calendar"></div>
//
//     <script>
//     function createCalendar(id, year, month) {
//         var elem = document.getElementById(id);
//
//         var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
//         var d = new Date(year, mon);
//
//         var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
//
//         // заполнить первый ряд от понедельника
//         // и до дня, с которого начинается месяц
//         // * * * | 1  2  3  4
//         for (var i = 0; i < getDay(d); i++) {
//             table += '<td></td>';
//         }
//
//         // ячейки календаря с датами
//         while (d.getMonth() == mon) {
//             table += '<td>' + d.getDate() + '</td>';
//
//             if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
//                 table += '</tr><tr>';
//             }
//
//             d.setDate(d.getDate() + 1);
//         }
//
//         // добить таблицу пустыми ячейками, если нужно
//         if (getDay(d) != 0) {
//             for (var i = getDay(d); i < 7; i++) {
//                 table += '<td></td>';
//             }
//         }
//
//         // закрыть таблицу
//         table += '</tr></table>';
//
//         // только одно присваивание innerHTML
//         elem.innerHTML = table;
//     }
//
// function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
//     var day = date.getDay();
//     if (day == 0) day = 7;
//     return day - 1;
// }
//
//
//
// createCalendar("calendar", 2012, 9)
// </script>
//
// </body>
//
// </html>
// -------------||||||||les 17 Homework Создать часики ||||||||------------------
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <meta charset="utf-8">
//     <style>
// .hour {
//     color: red
// }
//
// .min {
//     color: green
// }
//
// .sec {
//     color: blue
// }
// </style>
// </head>
//
// <body>
//
// <div id="clock">
//     <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
//     </div>
//
//     <script>
// var timerId;
//
// function update() {
//     var clock = document.getElementById('clock');
//     var date = new Date();
//
//     var hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//     clock.children[0].innerHTML = hours;
//
//     var minutes = date.getMinutes();
//     if (minutes < 10) minutes = '0' + minutes;
//     clock.children[1].innerHTML = minutes;
//
//     var seconds = date.getSeconds();
//     if (seconds < 10) seconds = '0' + seconds;
//     clock.children[2].innerHTML = seconds;
// }
//
// function clockStart() {
//     setInterval(update, 1000);
//     update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает
// }
//
// clockStart();
// </script>
//
// </body>
//
// </html>
// ============================= les 17 Homework Отсортировать таблицу =====================================
//     Строк в таблице много: может быть 20, 50, 100… Есть и другие элементы в документе.
//     Как бы вы предложили отсортировать содержимое таблицы по полю Возраст? Обдумайте алгоритм, реализуйте его.
//
// <!DOCTYPE HTML>
// <html>
//
// <body>
// <!DOCTYPE HTML>
// <html>
//
// <body>
// <table>
// <tbody>
//
// <tr>
// <td>Вася</td>
// <td>Петров</td>
// <td>Александрович</td>
// <td>10</td>
// </tr>
// <tr>
// <td>Петя</td>
// <td>Иванов</td>
// <td>Петрович</td>
// <td>15</td>
// </tr>
// <tr>
// <td>Владимир</td>
// <td>Ленин</td>
// <td>Ильич</td>
// <td>9</td>
// </tr>
// </table>
// </tbody>
// <script>
// function makeTable() {
//     var tableHolder = document.getElementById('table-holder');
//
//     var contents = '<thead><th>Имя</th><th>Фамилия</th><th>Отчество</th><th>Возраст</th></thead>';
//     contents += '<tbody>';
//     for (var i = 0; i < 100; i++) {
//         contents += "<tr><td> ... </td><td>Разные</td><td>Данные</td><td>" + ((i + 50) % 30) + "</td></tr>";
//     }
//     contents += '</tbody>';
//
//     tableHolder.innerHTML = '<table>' + contents + '</table>';
// }
//
// /* перенести элементы в массив, отсортировать его и перевставить */
// function sort1() {
//     var tbody = document.getElementsByTagName('tbody')[0];
//     var rows = [];
//
//     for (var i = tbody.children.length - 1; i >= 0; i--) {
//         var child = tbody.removeChild(tbody.children[i]);
//         rows.push(child);
//     }
//
//     rows.sort(function(a, b) {
//         return a.lastChild.innerHTML - b.lastChild.innerHTML;
//     })
//
//     for (var i = 0; i < rows.length; i++) {
//         tbody.appendChild(rows[i]);
//     }
//
// }
//
// /* скопировать ссылки в массив, отсортировать его и перевставить */
// function sort2() {
//     var tbody = document.getElementsByTagName('tbody')[0];
//     var rows = [];
//
//     for (var i = 0; i < tbody.children.length; i++) {
//         rows.push(tbody.children[i]);
//     }
//
//     rows.sort(function(a, b) {
//         return a.lastChild.innerHTML - b.lastChild.innerHTML;
//     })
//
//     for (var i = 0; i < rows.length; i++) {
//         tbody.appendChild(rows[i]);
//     }
//
// }
//
//
// /* создать массив из значений и ссылок, отсортировать, перевставить
//  doRemove = предварительно вынуть из документа
//  */
// function sortOpt(doRemove) {
//     var tbody = document.getElementsByTagName('tbody')[0];
//     var table = tbody.parentNode;
//     if (doRemove) table.removeChild(tbody);
//
//     var rows = [];
//     for (var i = 0; i < tbody.children.length; i++) {
//         var elem = tbody.children[i];
//         rows.push({
//             value: elem.lastChild.innerHTML,
//             elem: elem
//         });
//     }
//
//     rows.sort(function(a, b) {
//         return a.value - b.value;
//     });
//
//     for (var i = 0; i < rows.length; i++) {
//         tbody.appendChild(rows[i].elem);
//     }
//
//     if (doRemove) table.appendChild(tbody);
// }
//
//
// function bench(f, elem) {
//     var sum = 0;
//     for (var i = 0; i < 100; i++) {
//         makeTable();
//         var d = new Date;
//         f();
//         sum += new Date - d;
//     }
//     elem.innerHTML = sum + 'мс';
// }
//
//
// function benchMake(elem) {
//     var sum = 0;
//     for (var i = 0; i < 100; i++) {
//         var d = new Date;
//         makeTable();
//         sum += new Date - d;
//     }
//     elem.innerHTML = sum + 'мс';
// }
// </script>
//
// </body>
//
// </html>
//
// </body>
//
// </html>
// ============================= les 17 Homework  Создать уведомление =====================================
// Напишите функцию showNotification(options), которая показывает уведомление, пропадающее через 1.5 сек.
// function showNotification(options) {
//     var p = document.createElement('div');
//     p.setAttribute('class', options.className);
//     p.style.position = 'absolute';
//     p.style.top = options.top + 'px';
//     p.style.right = options.right + 'px';
//     p.style.color = 'red';
//     p.innerHTML = options.html;
//     console.log(p.outerHTML);
//     document.body.appendChild(p);
// //   document.body.firstElementChild.setAttribute('hidden', 'true');
//     setTimeout(function(){ p.setAttribute('hidden', 'true')},
//         1500);
// }
//
// showNotification({
//     top: 10,
//     right: 10,
//     html: "Привет",
//     className: "welcome"
// });
// -------------|||||||||||---------------------------

// ============================= les 17 Homework  Поместите мяч в центр поля =====================================
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <style>
// #field {
//     width: 200px;
//     border: 10px groove black;
//     background-color: #00FF00;
//     position: relative;
// }
//
// #ball {
//     position: absolute;
//
// }
// </style>
// </head>
//
// <body>
// <div id="field">
//     <img src="https://js.cx/clipart/ball.svg" width="40" height="40" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
// </div>
// </body>
//
// </html>
//
// var ball = document.getElementById('ball');
// var field = document.getElementById('field');
// var width_field = field.clientWidth;
// var width_ball = ball.offsetWidth;
// width_field = width_field / 2;
// width_ball = width_ball / 2;
// width_field = width_field - width_ball;
// ball.style.left = width_field + 'px';
//
// console.log(width_ball);
// var height_field = field.clientHeight;
// var height_ball = ball.offsetWidth;
// height_field = height_field / 2;
// height_ball = height_ball / 2;
// height_field = height_field - height_ball;
// ball.style.top = height_field + 'px';
// ============================= les 17 querySelector CSS ==!!!!!!  ===================================
// var elements = document.querySelector('div[id="field"]');
// console.log(elements.outerHTML);
// li.firstElementChild.firstChild.data = i + 1 +'' ;
// ============================= les 20 Введение в браузерные события =====================================
// Создайте меню, которое раскрывается/сворачивается при клике:
//
//     <!DOCTYPE HTML>
// <html>
//
// <head>
// <meta charset="utf-8">
//     </head>
//
//     <body>
//
//
//     <p id="header">▶Сладости (нажми меня)!</p>
// <ul id="list">
//     <li>Торт</li>
//     <li>Пончик</li>
//     <li>Пирожное</li>
//     </ul>
//
//
//     <style>
// #list {
//     display: none;
// }
// </style>
//     <script>
// function hiden () {
//     if (list.style.display == 'block'){
//         list.style.display = '';
//         var text = header.innerHTML.slice(1);
//         var open_list = '▶' + text;
//         header.innerHTML = open_list;
//         return;
//
//     }
//     list.style.display = 'block';
// //   console.log(header.innerHTML.slice(1));
//     var text = header.innerHTML.slice(1);
//     var open_list = '▼' + text;
//     header.innerHTML = open_list;
// }
// header.addEventListener("click", hiden);
// console.log(text);
// var open = '▼';
// var closed = '▶';
//     </script>
// </body>
//
// </html>
// ============================= les 20 Введение в браузерные события =====================================
// Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия.
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <link rel="stylesheet" type="text/css" href="messages.css">
//     <meta charset="utf-8">
//     </head>
//
//     <body>
//
//     Кнопка для удаления:
//     <button class="remove-button">[x]</button>
//
//     <div>
//     <div class="pane">
//     <h3>Лошадь</h3>
//     <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
// </div>
// <div class="pane">
//     <h3>Осёл</h3>
//     <p>Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. Все одомашненные ослы относятся к африканским ослам.</p>
// </div>
// <div class="pane">
//     <h3>Корова, а также пара слов о диком быке, о волах и о тёлках. </h3>
// <p>Коро́ва — самка домашнего быка, одомашненного подвида дикого быка, парнокопытного жвачного животного семейства полорогих. Самцы вида называются быками, молодняк — телятами, кастрированные самцы — волами. Молодых (до первой стельности) самок называют
// тёлками.
// </p>
// </div>
// </div>
// <script>
// // var button = document.getElementsByClassName('remove-button');
// var button = document.querySelector('.remove-button');
// // console.log(button.outerHTML);
// function close (e){
//     this.parentNode.style.display = 'none';
// //   console.log('!!!!');
// }
// button.style.float = 'right';
//
// var div_all = document.querySelector('div');
// function add_button() {
//     for (var i = 0; i < div_all.children.length ; i++){
//         var batton_clone = button.cloneNode(true);
//         batton_clone.addEventListener("click", close);
//         div_all.children[i].insertBefore(batton_clone, div_all.children[i].children[0]);
//     }
// }
// add_button();
// button.parentNode.removeChild(button);
// document.body.removeChild(document.body.firstChild)
// </script>
// <style>
// body {
//     margin: 10px auto;
//     width: 400px;
// }
//
// h3 {
//     margin: 0;
//     padding-bottom: .3em;
//     font-size: 1.1em;
// }
//
// p {
//     margin: 0;
//     padding: 0 0 .5em;
// }
//
// .pane {
//     background: #edf5e1;
//     padding: 10px 20px 10px;
//     border-top: solid 2px #c4df9b;
// }
//
// .remove-button {
//     font-size: 110%;
//     color: darkred;
//     right: 10px;
//     width: 24px;
//     height: 24px;
//     border: none;
//     background: transparent;
// }
// </style>
// </body>
//
// </html>
// ============================= les 20 Введение в браузерные события «Карусель» =====================================
// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// <head>
// <meta charset="utf-8">
//     <link rel="stylesheet" href="style.css">
//     </head>
//
//     <body>
//
//     <!-- ваша верстка виджета, ваши стили -->
//
// <button class="arrow" style=" float: left;">⇦</button>
// <button class="arrow" style=" float: right;">⇨</button>
//
// <div id = "container">
//     <ul>
//     <li><img src="https://js.cx/carousel/1.png"></li>
//     <li><img src="https://js.cx/carousel/2.png"></li>
//     <li><img src="https://js.cx/carousel/3.png"></li>
//     <li><img src="https://js.cx/carousel/4.png"></li>
//     <li><img src="https://js.cx/carousel/5.png"></li>
//     <li><img src="https://js.cx/carousel/6.png"></li>
//     <li><img src="https://js.cx/carousel/7.png"></li>
//     <li><img src="https://js.cx/carousel/8.png"></li>
//     <li><img src="https://js.cx/carousel/9.png"></li>
//     <li><img src="https://js.cx/carousel/10.png"></li>
//     </ul>
//     </div>
//
//     <style>
// .arrow {
//     padding: 0;
//     background: #ddd;
//     border-radius: 15px;
//     border: 1px solid gray;
//     font-size: 24px;
//     line-height: 24px;
//     color: #444;
//     display: block;
//     position: relative;
//     top: 50px;
// }
//
// .arrow:focus {
//     outline: none;
// }
//
// .arrow:hover {
//     background: #ccc;
//     cursor: pointer;
// }
//
// ul {
//     height: 130px;
//     width: 9999px;
//     margin: 0;
//     padding: 0;
//     /* margin-left: -260px; */
//     list-style: none;
//     /* убрать между inline-block li лишние пробелы, которые есть в HTML */
//     /* http://davidwalsh.name/remove-whitespace-inline-block */
//
//     font-size: 0;
// }
//
// ul img {
//     width: 130px;
//     height: 130px;
//     /* по умолчанию inline, но в ряде браузеров это даст лишнее пространство вокруг элементов */
//
//     display: block;
// }
//
// ul li {
//     /* если в HTML между элементами <li>..</li> есть пробелы, то они будут видны на странице,
//      чтобы их избежать, нужно либо писать <li>..</li><li>..</li> вплотную, либо не ставить закрывающие </li> */
//
//     display: inline-block;
// }
// #container {
//     width: 260px;
//     height: 130px;
//     overflow: hidden;
//     margin: 10px auto;
//     /* padding-left: -360px; */
//     background-color: gray;
//     border-radius: 20px;
// }


// </style>
// <script>
// // этот код помечает картинки цифрами, для удобства разработки
// // его можно убрать, если не нужен
// var lis = document.getElementsByTagName('li');
// for (var i = 0; i < lis.length; i++) {
//     lis[i].style.position = 'relative';
//     var span = document.createElement('span');
//     span.style.cssText = 'position:absolute;left:0;top:0';
//     span.innerHTML = i + 1;
//     lis[i].appendChild(span);
// }
// </script>
//
// <script>
// var button = document.getElementsByClassName('arrow');
// var left = button[0];
// var right = button[1];
// // console.log(left.outerHTML);
// var ul = document.querySelector('ul');
// var margin_ul = 0;
// function leaf (){
//     if (this.innerHTML == '⇦') {
//         if (margin_ul == 0) return;
//         margin_ul += 260;
//         ul.style.marginLeft = margin_ul + 'px';
//         return margin_ul;
//     } else {
//         if (margin_ul <= -1040) return;
//         margin_ul += -260;
//         ul.style.marginLeft = margin_ul + 'px';
//         return margin_ul;
//     }
// }
// left.addEventListener("click", leaf);
// right.addEventListener("click", leaf);
// console.log(container.offsetWidth);.
// </script>
// </body>
//
// </html>
// ============================= les 20 Введение в браузерные события === Передвигать мяч по полю =====================================

// Сделайте так, что при клике по полю мяч перемещался на место клика.
//
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <meta charset="utf-8">
//     <style>
// #field {
//     width: 200px;
//     height: 150px;
//     border: 10px groove black;
//     background-color: #00FF00;
//     position: relative;
//     overflow: hidden;
// }
//
// #ball {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     margin-left: -20px;
//     margin-top: -20px;
// }
// </style>
// </head>
//
// <body style="height:2000px">
//
//     Кликните на любое место поля, чтобы мяч перелетел туда.
// <br> Мяч никогда не вылетит за границы поля.
//
//
// <div id="field">
//     <img src="https://js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
// </div>
//
// <script>
// field.onclick = function(event) {
//
//     var top = event.clientY + field.clientTop - field.offsetTop - ball.offsetWidth/2 ;
//
//     if (top < 20) top = 20;
//
//     if (top >  field.clientHeight - ball.offsetWidth/2 ) {
//         top =  field.clientHeight - ball.offsetWidth/2;
//
//     }
//     var left = event.clientX - ball.offsetHeight/2;
//     if (left < 20) left = 20;
//
//     if (left >  field.clientWidth - ball.offsetWidth/2) {
//         left = field.clientWidth - ball.offsetWidth/2;
//     }
//
//     ball.style.top = top + 'px';
//     ball.style.left = left + 'px';
//     </script>
//     </body>
//
//     </html>
// ============================= les 20 Скрытие сообщения с помощью делегирования ===  =====================================
// Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.
//     Используйте делегирование событий. Один обработчик для всего.
//     В результате, должно работать вот так(кликните на крестик):
//
//
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <link rel="stylesheet" href="messages.css">
//     <meta charset="utf-8">
//     </head>
//
//     <body>
//
//     <div id="messages-container">
//     <div class="pane">
//     <h3>Лошадь</h3>
//     <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
// <button class="remove-button">[x]</button>
//     </div>
//     <div class="pane">
//     <h3>Осёл</h3>
//     <p>Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. Все одомашненные ослы относятся к африканским ослам.</p>
// <button class="remove-button">[x]</button>
//     </div>
//     <div class="pane">
//     <h3>Корова, а также пара слов о диком быке, о волах и о тёлках. </h3>
// <p>Коро́ва — самка домашнего быка, одомашненного подвида дикого быка, парнокопытного жвачного животного семейства полорогих. Самцы вида называются быками, молодняк — телятами, кастрированные самцы — волами. Молодых (до первой стельности) самок называют
// тёлками.
// </p>
// <button class="remove-button">[x]</button>
//     </div>
//     </div>
//     <script>
// var container = document.getElementById('messages-container');
//
// container.onclick = function(event) {
//         if (!event.target.classList.contains('remove-button')) return;
//
//         event.target.parentNode.hidden = !event.target.parentNode.hidden;
//     }
//     </script>
//     <style>
//     body {
//     margin: 10px auto;
//     width: 470px;
// }
//
// h3 {
//     margin: 0;
//     padding-bottom: .3em;
//     padding-right: 20px;
//     font-size: 1.1em;
// }
//
// p {
//     margin: 0;
//     padding: 0 0 .5em;
// }
//
// .pane {
//     background: #edf5e1;
//     padding: 10px 20px 10px;
//     border-top: solid 2px #c4df9b;
//     position: relative;
// }
//
// .remove-button {
//     position: absolute;
//     font-size: 110%;
//     top: 0;
//     color: darkred;
//     right: 10px;
//     display: block;
//     width: 24px;
//     height: 24px;
//     border: none;
//     background: transparent;
//     cursor: pointer;
// }
// </style>
//
//
//
// </body>
//
// </html>
// ============================= les 20  делегирования ===exercise 2  =====================================
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <style>
// .tree span:hover {
//     font-weight: bold;
// }
//
// .tree span {
//     cursor: pointer;
// }
// </style>
// <meta charset="utf-8">
//     </head>
//
//     <body>
//
//     <ul class="tree">
//     <li>Животные
//     <ul>
//     <li>Млекопитающие
//     <ul>
//     <li>Коровы</li>
//     <li>Ослы</li>
//     <li>Собаки</li>
//     <li>Тигры</li>
//     </ul>
//     </li>
//     <li>Другие
//     <ul>
//     <li>Змеи</li>
//     <li>Птицы</li>
//     <li>Ящерицы</li>
//     </ul>
//     </li>
//     </ul>
//     </li>
//     <li>Рыбы
//     <ul>
//     <li>Аквариумные
//     <ul>
//     <li>Гуппи</li>
//     <li>Скалярии</li>
//     </ul>
//
//     </li>
//     <li>Морские
//     <ul>
//     <li>Морская форель</li>
// </ul>
// </li>
// </ul>
// </li>
// </ul>
//
// <script>
// var tree = document.getElementsByTagName('ul')[0];
//
// var treeLis = tree.getElementsByTagName('li');
//
// /* wrap all textNodes into spans */
// for (var i = 0; i < treeLis.length; i++) {
//     var li = treeLis[i];
//
//     var span = document.createElement('span');
//     li.insertBefore(span, li.firstChild);
//     span.appendChild(span.nextSibling);
// }
//
// /* catch clicks on whole tree */
// tree.onclick = function(event) {
//         var target = event.target;
//
//         if (target.tagName != 'SPAN') {
//             return;
//         }
//
//         /* now we know the SPAN is clicked */
//         var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
//         if (!childrenContainer) return; // no children
//
//         childrenContainer.hidden = !childrenContainer.hidden;
//     }
//     </script>
//
//     </body>
//
//     </html>
// ============================= les 20  делегирования ===exercise 3 Сортировка таблицы  =====================================
// Сделать сортировку таблицы при клике на заголовок.
//
// <!DOCTYPE HTML>
// <html>
//
// <head>
// <meta charset="utf-8">
//     <style>
//     th {
//     cursor: pointer;
// }
//
// th:hover {
//     background: yellow;
// }
// </style>
// </head>
//
// <body>
//
// <table id="grid">
//     <thead>
//     <tr>
//     <th data-type="number">Возраст</th>
//     <th data-type="string">Имя</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//     <td>5</td>
//     <td>Вася</td>
//     </tr>
//     <tr>
//     <td>2</td>
//     <td>Петя</td>
//     </tr>
//     <tr>
//     <td>12</td>
//     <td>Женя</td>
//     </tr>
//     <tr>
//     <td>9</td>
//     <td>Маша</td>
//     </tr>
//     <tr>
//     <td>1</td>
//     <td>Илья</td>
//     </tr>
//     </tbody>
//     </table>
//
//     <script>
// // сортировка таблицы
// // использовать делегирование!
// // должно быть масштабируемо:
// // код работает без изменений при добавлении новых столбцов и строк
//
// var grid = document.getElementById('grid');
//
// grid.onclick = function(e) {
//     if (e.target.tagName != 'TH') return;
//
//     // Если TH -- сортируем
//     sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
// };
//
// function sortGrid(colNum, type) {
//     var tbody = grid.getElementsByTagName('tbody')[0];
//
//     // Составить массив из TR
//     var rowsArray = [].slice.call(tbody.rows);
//
//     // определить функцию сравнения, в зависимости от типа
//     var compare;
//
//     switch (type) {
//         case 'number':
//             compare = function(rowA, rowB) {
//                 return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//             };
//             break;
//         case 'string':
//             compare = function(rowA, rowB) {
//                 return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//             };
//             break;
//     }
//
//     // сортировать
//     rowsArray.sort(compare);
//
//     // Убрать tbody из большого DOM документа для лучшей производительности
//     grid.removeChild(tbody);
//
//     // добавить результат в нужном порядке в TBODY
//     // они автоматически будут убраны со старых мест и вставлены в правильном порядке
//     for (var i = 0; i < rowsArray.length; i++) {
//         tbody.appendChild(rowsArray[i]);
//     }
//
//     grid.appendChild(tbody);
//
// }
// </script>
//
// </body>
//
// </html>
// ============================= les 20  делегирования ===exercise  =====================================



























































