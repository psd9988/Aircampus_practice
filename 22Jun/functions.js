// // function without parameters and without returning values: -



// function helloAircampusTeam(){
//   console.log( `Hello Aircampus Team`)
// }

// helloAircampusTeam()

// _____________________________________________________________________________


// function without parameters but with returning value: - 

// function helloMyName(){
//   let myname = (`Prashant`);
//   return (`Hello ${myname}`)
// }

// console.log(helloMyName())


// --------------------------------------------------------------------------

// function with parameters and returning value: -

// function sum(a,b){
//   return (a+b)
// }

// console.log(sum(25,5))


// ____________________________________________________________________________



// Functions which are known as arrow functions: -


// let hello = (greeting)=> greeting + ` Prashant`;

// console.log(hello(`Good Morning`));



// __________________________________________________________________________________



// 2nd Arrow function is mentioned below: -

// let sum = (a,b) => a+b;

// let sumof23and6 = sum(23,6)

// console.log(sumof23and6) 


// ____________________________________________________________________________


// //  IIFE function below: -

// // We need to wrap the function in parenthesis in order to create an IIFE function and take arguments next to it inside another parenthisis:- (Immediately Invoked Function Expression)IIFE

// let sumOf25And5 = (function sum(a,b){
//   return a+b;
// })(25,5);

// console.log(sumOf25And5)


// ____________________________________________________________________________

// // ternary operator: -

// let fname = 'Prashant';

// let greeting = fname == 'Prashant' ? 'Hello Prashant' : 'Hello World';

// console.log(greeting);


// 5==6 ? console.log('It is equal') : console.log('These are not equal');

// ____________________________________________________________________________

// for(let i = 1; i<=5; i++){
//   let star = '';
//   for(let j =1; j<=5; j++){
//     star = star + '*';
    
//    }console.log(star)
// }



// ____________________________________________________


// function recurFact(num){
//   if(num>0){
//     return num*recurFact(num-1);
//   }
//   else{
//     return 1;
//   }  
// }

// console.log(recurFact(5))

// // __________________________________________

// function facto(num,facts){
//   if(num>0){
//     facts = facts*num;
//     return facto(num-1,facts);
//   }else{
//     return facts;
//   }
// }


// console.log(facto(5,1))


// find the 12th digit of fibonacci series using recursion: -