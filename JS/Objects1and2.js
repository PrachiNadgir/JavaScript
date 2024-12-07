//singleton when object is created using constructor
//object literals-no singleton
//object.create -- constructor method for creation of object
const mySym = Symbol("Key1")
const JsUser={
    name : "Prachi",
    age : 5,
    [mySym]: "Mykey1",
    "full name":"Prachi Nadgir",//Always declare the symbol in square brackets
    email : "Prachi@google.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Thursday"]

}
//Accessing the obj elements
// console.log(JsUser.email);//1st way
// console.log(JsUser["email"]);//2nd way
// console.log(JsUser["full name"]);//if there is whitespace in the key
//accessing the symbol in object
//console.log(JsUser.mySym);
// console.log( JsUser[mySym]);
JsUser.email="Prachi11@yahoo.com";
//Object.freeze(JsUser);//lock the values cannot be changed by anyone
JsUser.email="Prachi11@gmail.com";
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello nice to meet you:");
    
}


JsUser.greeting1=function(){
    console.log(`Hello nice to meet you:${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting1());

//*************Objects part2**************

const gameStoreUser = new Object()//1 way of declaraing object,this is the singleton object
console.log(gameStoreUser);
const gameStore1 ={}//1 way of declaraing object,this is not singleton object
// console.log(gameStore1);

gameStoreUser.id = "123pp";
gameStoreUser.name="Crystal"
gameStoreUser.isLoggedIn=false

console.log(gameStoreUser);

const regularUser = {
    name:"Prachi",
    fullname: {
        UserFullName:{
        UserFirstName:"XYZ",
        UserMiddleName:"ABC",
        UserLastName:"PQR",
    }
}
}
//console.log(regularUser.fullname.UserFullName.UserFirstName);

const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "a",4 : "b"}
const obj3 = {5 : "a",6 : "b"}

// const newObjs = {obj1,obj2,obj3}
// console.log(newObjs);
// const obj4 = Object.assign({},obj1,obj2,obj3)//it ignores the duplicate key
// console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

//Info accessed from database
const user = [
    {
        id : "123",
        email : "xyz@bing.com"
    },
    {
        id : "123",
        email : "xyz@bing.com"
    },
    {
        id : "123",
        email : "xyz@bing.com"
    }
]
console.log(user[1].id)
// console.log(gameStoreUser)
// console.log(Object.keys(gameStoreUser))//datatype array
// console.log(Object.values(gameStoreUser))//datatype array
// console.log(Object.entries(gameStoreUser))//datatype array
// console.log(gameStoreUser.hasOwnProperty("isLoggedIn"))





