class Calculator {
   constructor() {
     }
   add(num1,num2) {
     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
       console.log('please use arguments of type number')
       return
     }
     return num1 + num2
   }

   subtract(num1,num2) {
     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
       console.log('please use arguments of type number')
       return
     }
     return num1 - num2
   }

   multiply(num1,num2) {
     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
       console.log('please use arguments of type number')
       return
     }
     return num1 * num2
   }

   divide(num1,num2) {
     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
       console.log('please use arguments of type number')
       return
     }
     return num1 / num2
   }
  } 

//To test this program, initialize a new calculator using the code below
// let myCalculator = new Calculator
// let five = myCalculator.add(2,3)
// console.log(five) //5

 
   
