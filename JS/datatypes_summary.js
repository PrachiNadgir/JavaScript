//primitive (call by value) its actual location is  is not called , its copy is called and any changes is commited in copy of its not on its actual location
// 7 types - Number,String,Symbol,BigInt,null,undefined,boolean

// reference(non primitive) - arrays,objects,functions

// question?
// is JS dynamically typed or statically typed
const temp = null;
console.log(temp);
const value = 100.6;
console.log(value);

//symbol- unique
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id===anotherid);


// const bigNumber = 45678999000009725345n
console.log(typeof bigNumber);

const myArray = ["abc","cde","efg"];//array
const myObj={name:"Prachi",age:5};//object
const myFunction = function(){
    console.log("hello world");
    
}//function
console.log(myArray);
console.log(myObj);
console.log(myFunction);
console.log(typeof temp);
console.log(typeof myFunction);//returns function but it is called obj function
console.log(typeof myArray);//returns object
console.log(typeof myObj);//returns object
console.log(typeof id);//returns object


// ***************************************************
/*Two types of memory - stack , heap
stack(primitive)  heap(non primitive)
whenever you declare a variable in primtive type , you get the copy of value
whenever you declare a variable in non primtive type , you get the original variable*/

let name1="prachi";
let name2 = name1;
name2 = "rashi"
console.log(name1);
console.log(name2);

let my={email:"xyz@yahoo.com",
    upi:"xyz@axl"
}
let my1=my
my1.email="xyz@gmail.com";
console.log(my1.email);
console.log(my.email);



