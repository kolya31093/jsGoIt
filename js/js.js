/**
 * Created by Kolya on 10.02.2017.
 */
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
// var x = '# ';
// var y = ' #';
//
// for(var i = 1; i <= 8; i++){
//     var line = 0;
//     if(i % 2 == 0){
//
//         for(var e = 1; e <= 8; e++){
//             line = line + x;
//         }
//
//     } else {
//
//         for(var e = 1; e <= 8; e++){
//             line = line + y;
//         }
//
//     }
// }
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

function lovefunc(flower1, flower2){
    if((flower1 % 2 == 0  && flower2 != 0) ||  (flower1 % 2 != 0  && flower2 == 0)){
        return true;
    } else {
        return false;
    }
}































