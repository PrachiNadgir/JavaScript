const marvel_heros=["Thor","Black_widow","Hulk"];
const DC_Heros=["Wonder_Woman","Flash","Aquaman"];

//  marvel_heros.push(DC_Heros); returns the existing array with all the elements
// console.log(marvel_heros);
// const new_heros=marvel_heros.concat(DC_Heros);//returns new array with all the elements present in the existing array that's why here new_heros variable is used to store the new array
// console.log(new_heros);

const all_new_heros=[...marvel_heros,...DC_Heros]//Spread method
// console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[2,3,[0]]]
const AA = another_array.flat(Infinity);
// console.log(AA);

console.log(Array.isArray("Prachi"))//to check whether it is array or not
console.log(Array.from("Prachi"))//converting into array
console.log(Array.from({name:"prachi"}))//you have to specify key array or value array if not it will return empty array

let score1 = 100;
let score2 = 100;
let score3 = 100;
console.log(Array.of(score1,score2,score3))