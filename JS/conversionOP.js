let score = 33
// console.log(typeof score); //You can write like this
// console.log(typeof (score));//or you can create mehthod
// Now let score in string dt and we want the score gets converted into number dt
// let score ="33"
// let ValueInNumber=Number(score);
// console.log(typeof ValueInNumber);
//lets see by using different values

let scores = "33acv";
let ValueInNumber=Number(scores);//Any datatype to Number conversion
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);//for null the value is 0 and for undefined the value is NaN and if boolean value is there then for true =1 and for false = 0
// If there is a value which cannot be converted into number then there NaN situation occurs
// 33 = 33; "33abc" = NaN true = 1; false = 0;  null = 0; undefined = NaN;

//Any datatype to Boolean conversion
let account = 1;
let isaccountBoolean = Boolean(account)
// console.log(typeof isaccountBoolean);
// console.log(isaccountBoolean);

//1 = true , 0 = false, "" =  false, "xyz" = true

//Any datatype to String conversion
let accounts = 47;
let isaccountsString = String(accounts)
// console.log(typeof isaccountsString);
// console.log(isaccountsString); // any num = string , any num ;  null = string, null ; undefined = string, undefined


// ***************operation*******************
let value = 4;
let negvalue = -value;
console.log(negvalue);
//Arithmetic op 
// console.log(2+2);//add
// console.log(2-2);//sub
// console.log(2*2);//mul
// console.log(2**3);//power
// console.log(2/2);//div
// console.log(2%2);//rem
let str1 = "hello";
let str2 = " guys";
console.log(str1 + str2);

// console.log("1"+2);//left associativity
// console.log(1+"2");//left associativity
// console.log("1"+2+2);//left associativity
// console.log(1+2+"2");//left associativity
// console.log(1+"2"+2);//left associativity

console.log(+true);
console.log(+"");

let num1,num2,num3;
num1 = num2 = num3 = 2+2
// console.table([num1,num2,num3]);


// let gamecounter = 100;
// //gamecounter++;
// ++gamecounter;
// console.log(gamecounter);


let x = 3;
const y = ++x;
console.log(x,y);
//if incremental or decremental is standalone then it returns the incremental or decremental value , else it returns the value as per standards
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
console.log(x2,y2);
// x2 is 4n; y2 is 3n



 