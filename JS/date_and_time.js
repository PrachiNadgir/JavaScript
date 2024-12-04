//date represents a single moment from jan1 1970 to onwards

const myDate = new Date();
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate);

// const myCreatedDate=new Date(2024,11,4);
// const myCreatedDate=new Date(2024,11,4,24,0);
const myCreatedDate=new Date("2024-12-5");//YY-MM-DD
const myCreatedDate1=new Date("5-12-2024");//dd-mm-yy
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate1.toLocaleString());
// let timestamp = Date.now();
// console.log(timestamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000 ));

let newDate = new Date();
console.log(newDate.getMonth());

const date=newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(date);



