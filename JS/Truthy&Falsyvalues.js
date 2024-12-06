const useremail = []
if(useremail){
    console.log("got the email");
    }
  else{
        console.log("no email");
        }
        //falsy values := false , 0 , -0 , null , undefined , "",BigInt 0n,NaN
        //truthy values := [],"xyz",{},function(){},"0",'false'," "
        //false == 0 -> true
        //false = '' -> true
        //0==''-> true

//if array is empty
if (useremail.length === 0){
console.log("Array is empty");
    
} 
//if object is empty
const myobj = {}
if (Object.keys(myobj).length===0){
    console.log("Object is empty");
    
}
const myfun = function(){}
if(myfun()===undefined){
    console.log("Function is empty");
}
//Nullish Coalescing Operator(??) null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = undefined ?? 10
val1=null??10??14
console.log(val1);

//ternary op
//condition ? true : false
const price = 100
 price > 100 ? console.log("less than 100"):console.log("more than 100");

