const name = "Prachi";//declarartion of string 1 way
const age = 5
console.log(name + age + "value");//this is the outdated way for joining the string
//instead of that use string interpolation
console.log(`My name is ${name} i am ${age} years old:`)//method can be used
const name1 = new String('Prachi')//declarartion of string 2 way
console.log(name1)
console.log(name1[0]);
console.log(name1.__proto__);

console.log(name1.length)
console.log(name1.toUpperCase());
console.log(name1.charAt(2));//default 1st letter it will return of index 0
console.log(name1.indexOf('c'));//default -1 will be returned(empty)
const mystring = name1.substring(0,4);
console.log(mystring);
const anotherstring = name1.slice(0,4);//it can take neg values also
console.log(anotherstring);
// const strings = Object(anotherstring);
// console.log(strings);

const stringone = "     prachi    "
console.log(stringone);
console.log(stringone.trim());

const url = "https//:www.yahoo.com/prachi%20"
console.log( url.replace('%20','-'));

console.log(url.includes('prachi'))


const string2 = new String('Prachi-100-Nadgir')
console.log(string2.split('-'));

//Go and check string methods on browser and mdm documentation
