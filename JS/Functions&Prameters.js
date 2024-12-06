// //fuctions binding all the code in one package and then using its copy for future
// //memory mgmt is easier compares to c++
// // console.log("P");
// // console.log("r");
// // console.log("a");
// // console.log("c");
// // console.log("h");
// // console.log("i");

// const myFun = function(){//1st way of declaring scope of a fun
// console.log("P");
// console.log("r");
// console.log("a");
// console.log("c");
// console.log("h");
// console.log("i");
// }
// function myFunction(){
//     console.log("P");
// console.log("r");
// console.log("a");
// console.log("c");
// console.log("h");
// console.log("i");
// }
// // console.log(myFunction());
// // console.log(myFun());

// // myFun // reference
// // myFun()//Function execution

// function addTwonumbers(number1,number2){//when you define the values inside the parenthesis during function def that type of values are called as parameters....
//     console.log(number1+number2);
    
// }
// addTwonumbers(3,5)//when you define the values inside the parenthesis during function call that type of values are called as arguements....

// // number1,number2=parameters
// // 3,5 = arguements

// function subTwoNumbers(Num1,Num2){
//     // let res= Num1-Num2
//     // return res;
//     return Num1-Num2
//     console.log("prachi");//Nothing will work after return
    
// }
// console.log("Result:",subTwoNumbers(9,8));


// function UserLogin(username){
//     return `${username} just logged in`
// }
// console.log(UserLogin('Prachi'));

//passing multiple values in function
function purchasing(...num){//this is also called rest operator 
    return num
}
console.log(purchasing(200,700,800));
function purchasing1(val1,val2,...num){//this is also called rest operator 
    return num
}
console.log(purchasing1(200,700,800));
//Functions with object

const user ={
    name :"Crystal",
    age : "5"
}
function myUser(anyobject){//instead of obj name write anyobject for accessing through function
console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`)
}
// myUser(user)

myUser({
    name :"Crystal",
    age : 5
})

const MyNewArr = [100,200,300]
function secondarr(GetArray){
   console.log(`${GetArray[1]} is the first element of array `);
   
}
secondarr(MyNewArr)
const MyNewArr1 = [100,200,300]
function secondarr1(GetArray1){
 return GetArray1[1]
   
}
// console.log(secondarr1(MyNewArr1));
console.log(secondarr1([100,200,300]));
