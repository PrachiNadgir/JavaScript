const accountID = 1001
let accountemail = "crystal10@gmail.com"
var accountpassword = "12345"
accountcity = "solapur"

let accountstate;

accountemail="xyz@yahoo.com"
countpassword="123"

// accountID = 1002 this is not allowed

console.log(accountID)
// Instead of doing this we can use table([]) for printing multiple values
console.table([accountID,accountemail,accountpassword,accountstate])

// const , let and var are keywords which are used as  assigning the values in the memory 
// const value cannot be changed
// Why let is introduced?
//  if some one uses any variable_name with var keyword in the scope (i.e {})and the value in it if it changed in the scope then that variable value changes in whole code that's why let is introduced so that the value will be changed within the scope not in the whole program..
// /The best practice is not to use var keyword bcoz of block scope and functional scope
// Without using any keyword it is possible to declare the variable but it is not a good practice
//  if you didnt assigned the value to variable then js identify it as undefined