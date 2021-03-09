class Queue {
   constructor() {
     }
   add(num1,num2) {
     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
       console.log('please use arguments of type number')
       return
     }
     return num1 + num2
   }
  } 

 
   
