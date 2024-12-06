//curly braces used in functions and control statements , loops those are called as scopes but used in object is not scope it is a object declaration
// { inside Block scope}
// outside global scope
let a =20
if(true){
    let a = 10
    const b = 20
    var c =30
}
//console.log(a,c);

function one()
{const username = "Prachi"
function two(){
    const pw = "123"
    //console.log(username)
}
//console.log(pw);
//two()
}
//one()
if(true){
    const name = "Prachi"
    if(true){
        const age = 5
        //console.log(name)
    }
    //console.log(age)
}
//console.log(name)
console.log(addone(4))
function addone(num){
    return num + 1
}
// console.log(addone(4))
console.log(addtwo(4))
function addtwo(num){
    return num + 2
}
// console.log(addtwo(4))
//declaring and holding a function into variable is called as hoisting
//declaring before intializing is not allowed


