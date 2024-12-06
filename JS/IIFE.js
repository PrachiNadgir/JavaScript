//******Immediately invoked function expression******(IIFE)
//if you had written a function you have to immediately execute it and for this there are many ways
//why we want the function which is going to execute immediately?
//-we dont want to pollute the global scope
// -to remove the global scope pollution we use IIFE

(function chai(){//Named IIFE
    console.log("DB")
  })();//IIFE syntax
  
  ( (name) => { //Un-named IIFE
      console.log(`Db ${name} `)
  })("Prachi")

  