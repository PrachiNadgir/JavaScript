//reduce
const mynums = [1,2,3]
// const count = mynums.reduce(function(acc,currval){
//     console.log(`The value of accumulator is ${acc} and currentvalue is ${currval}`);
    
//     return acc+currval
// },0)
const count = mynums.reduce((acc,currval)=>{
    console.log(`The value of accumulator is ${acc} and currentvalue is ${currval}`);
    return acc+currval
},3)
console.log(count)

const ShoppingCart=[
    {
        itempurchased : "Mobile",
        price: 50000
    },
    {
        itempurchased : "Dress",
        price: 5000
    },
    {
        itempurchased : "books",
        price: 10000
    },
    {
        itempurchased : "Laptop",
        price: 70000
    },
    
    {
        itempurchased : "Refrigerator",
        price: 76000
    },
    
]
 



const myshoppingbill = ShoppingCart.reduce((acc, item) => acc + item.price, 0);
const totalItemsPurchased = ShoppingCart.reduce((acc) => acc+1, 0);

console.log(`Total Bill : ${myshoppingbill}`);
console.log(`Total Items Purchased: ${totalItemsPurchased}`);

