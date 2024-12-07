//for all -  array specific loop

//["","",""]
//[{},{},{}]

const arr= [1,2,3,4,5]
// for (const element of object) {
    
// }
// for (const num of arr) {
//     console.log(num);
// }

// const mystring = "Prachi"
// for (const num of mystring) {
//     console.log(num);
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     if (greet === ' ')
//        continue
//     console.log(greet)
// }
//maps
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Ger','Germany')
map.set('Fr','France')

// console.log(map);

// for (const [key,value] of map) {
//     console.log([key]+':-'+[value])
// }
//objects
const myobj = {
    game1 : "COD",
    game2 : "Battle of clans"
}
// for (const [key,value] of myobj) {
//     console.log(key + ':-'+ value);
    
// }

//using forin loop  for iterating the object
// for (const key in myobj) {
//     console.log(key +'-'+myobj[key]);
//     }

    // const programming = ["JS","RUST",'CPP','Ruby on Rails']
    // for (const num in programming) {
    //     console.log(programming[num]);
    // }

    // for (const key in map) {
    //     console.log(key)//for iterating the map use forof loop
    // }

    //foreach loop
    const coding = ["JS","RUST",'CPP','Ruby on Rails']
    // coding.forEach( function (item){
        // console.log(item)
    // })
    // coding.forEach( (item) => {
    //     console.log(item)
    // })
    // function printme(item){
    // console.log(item);}

    // coding.forEach(printme)

    // coding.forEach((item,index,Array) => {
    //     console.log(item,index,Array);
        
    // })

    const programming = [
        {
            language:"Javascript",
            file:"Js"
        },
        {
            language:"Java",
            file:"java"
        },
        {
            language:"Python",
            file:"py"
        },
    ]
    programming.forEach((item)=>{
        console.log(item.language+':'+item.file)
    })