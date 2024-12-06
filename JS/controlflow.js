//not all the parts of the code should be executed, it should but with some conditions

//if,if else

// if(3!=2){
//     console.log("hi");
//     }
//     else{
// console.log("Bye");}

// const score = 200
// if(score > 100){
//     var power_of_user = "Fly"
//     console.log(`The user has the power to ${power_of_user}`);
    
// }
// console.log(`The user has the power to ${power_of_user}`);

//implicit without using curly brackets
// const balance = 1000;
// if(balance > 1000) console.log("OK");
// console.log("Not OK");

//multiple checking condition nested else if 
// 

const isuserLoggedIn = true
const haddebitcard=true
const isuserloggedInFromgoogle = true
const isuserLoggedInFromEmail=false
if(isuserLoggedIn && haddebitcard){
    console.log("Allow to purchase course")
}
if(isuserloggedInFromgoogle || isuserLoggedInFromEmail){
    console.log("Allow to purchase course")
}
