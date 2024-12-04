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
console.log(typeof isaccountsString);
console.log(isaccountsString); // any num = string , any num ;  null = string, null ; undefined = string, undefined