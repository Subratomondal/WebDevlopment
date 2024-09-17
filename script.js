// let and const are different , let makes a variable and const make a constant
// let and const are similar in few things:
// let and const both are from ES6
// let and const add themselves in window object
//..............................they are braces scope(can't be accessed outside the braces)

// Arrow functions

//basic fat arrow fnc
var fun= ()=>{};

// fat arrow function with one parameter
var b =(parameter)=>{};
b(13);

//fat arrow fnc with implicit return
var g =()=>12;
console.log(g());

//template literals backtick ``
console.log(`hey ${2+2} is 4 and ${2-2}`);

//default parameter
function abcd(a=0,b=0,c=0){
    console.log(a,b,c);
}
abcd(1,2,3);
abcd(1,2,2);
abcd(1);

//rest and spread
// spread ka matlab hai element ke saare values ko us jagah par bikher dena 
var a = [1,2,3,4,5,6,7,5];
var b = [...a];
// spread use hota hai copy ya fir us location par kisi aur ki values bikherne ke liye

//rest use hota hai jab aapko bache huye values ek variable mei daalne ho
function abcd(a,b,c,...d){
    console.log(a,b,c,d);
}
abcd(1,2,3,4,5,6);


//destructuring
//in case of array
var a =[1,2,3];
var [b,c,d]=a;
var[b,,d]=a;

//in case of object
var obj = {name :"Subrato", age:20};
var {age}=obj;

//try catch
console.log("hey");
try{
    console.log(hey);
}
catch(err){
    console.log(err);
}
console.log("Hey");
