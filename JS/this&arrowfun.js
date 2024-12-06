const user = {
    name:"prachi",
    age:5,
    welcomemessage:function(){
        console.log(`Hi Iam ${this.name} nice to meet you`)
        // console.log(this);
        
    }
}
// user.welcomemessage()
// user.name="Sammy"
// user.welcomemessage()
// console.log(this);

//on browser the global context for "this" is window

// function food(){
//     const items = 6
//     // return items
//     console.log(this.items)
// }//this cannot be used in function
// food()

// const food = function(){
//     const items = 6
// //     // return items
//    console.log(this.items)
// }
// food()
// const chai =() =>{
//     username:"Prachi"
//     console.log(this)
// }
// chai()

// const addtwo = (a,b) => {
//     return a+b
// }
// console.log(addtwo(2,3))
//implicitly (without using return)
// const addtwo = (a,b) => (a+b)   //In curly braces you have to write return
//     //     return a+b
//     console.log(addtwo(2,3))
const addtwo = (a,b)=>({username:"Prachi"})//with and without curly braces
console.log(addtwo(2,3))