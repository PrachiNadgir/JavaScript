const coding = ["JS","RUST",'CPP','Ruby on Rails']
const values = coding.forEach( (item) => {
    console.log(item);
    return item  // so foreach loop didnt return any value
    
})
console.log(values);
//filter

const mynum =[1,2,3,4,5,6,7,8,9,10]
// const values= mynum.filter( (mynum ) => mynum > 4)//returning the number greater than 4
// console.log(values);
// const values= mynum.filter( (mynum ) => { return mynum > 4})//returning the number greater than 4
// console.log(values);
const mynums =[]
mynum.forEach( (num) => {
    if(num > 4){
        mynums.push(num)
    }

})
console.log(mynums);

//books
const books = [
    {
        title : "Book1",
        publish_year : 1998,
        genre : "horror",
        edition : 2001
    },
    {
        title : "Book2",
        publish_year : 1989,
        genre : "science",
        edition : 2004
    },
    {
        title : "Book3",
        publish_year : 2004,
        genre : "Fiction",
        edition : 2011
    },
    {
        title : "Book4",
        publish_year :1942,
        genre : "Detective",
        edition : 1989
    },
    {
        title : "Book5",
        publish_year : 2004,
        genre : "horror",
        edition : 2007
    },

]
console.log(books)


//-------------------------------------------------
const numbers = [2,4,6,8,10,12,14,16]
// const num = numbers.map( (num) => num+10 )
// console.log(num);

// const nums = []
// numbers.map((num)=>{
//     if(num>0){
//         nums.push(num+10)
//     }
// })
// console.log(nums)

//---chaining-multiple maps ,filters can be used
const counts = numbers.map((num)=>num*10).map((num)=>num-1).filter((num)=>num>=40)
console.log(counts)
 