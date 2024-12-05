//array
//mixed datatype,indexing starts with 0,resizable
const myArr = [0,1,2,3,8];//declaration of array
const fruits=["Mango","Apple","Jackfruit"];

const myArr1=new Array(1,2,3,4);//declaration of array; automatically converted into square brakets
// console.log(myArr);
// console.log(fruits);
// console.log(myArr1);
// console.log(myArr1[0])

//Methods of Array
// myArr.push(3);//push
// // console.log(myArr);
// myArr.pop();
// // console.log(myArr);
// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(8));

const newarr=myArr.join();
// console.log(myArr);
// console.log( typeof newarr);
// console.log("1",myArr);
const Mynew = myArr.slice(1,3);
console.log(Mynew);
console.log(myArr);
// console.log("2",myArr);
const Mynew1 = myArr.splice(1,3);
console.log(Mynew1);
console.log(myArr);




