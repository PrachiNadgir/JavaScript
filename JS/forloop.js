//loops or iterations
//for
// for (let i = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//const array = [1,2,3,4,5]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     //console.log(element)
    
// }
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
//     if(element==5){
//         console.log("5 is a good no");
//     }
//     // console.log(element)
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop : ${i}`)
//     for (let j = 1; j <=10 ; j++) {
//         //console.log(`Inner loop : ${j} and ${i}`)
//         console.log(j+'x'+2+'='+i*j)
        
//     }
    
//}

for (let index = 1; index <= 20; index++) {
    if (index == 6){
        console.log("6 is detected");
        continue;}
    console.log(`the value of i is ${index}`)
    
}