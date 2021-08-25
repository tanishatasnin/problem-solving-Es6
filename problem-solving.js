// num-1:
// we can change the variable name by using let but its not possible for const 
let myName="kona";
myName="tanisha"
// console.log(myName)
const anotherName="kona-moni";
// anotherName="tanisha-tasnin";
// cant change the value
// console.log(anotherName);



// num-2 
// template string 
// 2.a: use variable 
const pera =`this is a peragraph .
a peragraph about myself.
i am kona...ohh shit i am tanisha.`
// console.log(pera);
const pera2="if you wants to play...i can teach you how to be a loser."
// console.log(pera2);
// 2.b: use object  property 
const pera3= `${pera}.i am a web developer.a junior web developer ${pera2}`;
// console.log(pera3);



// num-3 .arrow function
//  => 
// 3.a. with one parameter. will return the number after dividing by 5
const num = x =>x/5;

const num1 =num(20);
// console.log (num1);
// 3.b. with two parameters. will add two to each number and then multiply the result 
// way-1 
const numbers =(x,y)=> (x+2)*(y+2);
          const munums =numbers(3,4);
console.log(munums);
// way-2 
const nums =(a,b)=>{
               const result=(a+2)*(b+2);
               return result;
}
const mynums=nums(5,4);
console.log(mynums);
// 3.c. three parameters. will multiply all three parameters 
// way-1 
const value=(a,b,c)=>(a*b*c);
const nums2=value(1,2,3);
console.log(nums2);
// way-2 
const values =(a,b,c)=>{
               const multipy=(a*b*c);
               return multipy ;
}
const nums1=values(1,2,3);
console.log(nums1);

//3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
// make sure you return the result 
const numbers2 =(a,b)=>{
               const line1=(a+2);
               const line2=(b+2);
               const ans=line1*line2;
               return ans;
}
const mynum2=numbers2(10,3);
console.log(mynum2);

// num-4: [home work]: javascript function declaration vs arrow function


                                    // regular function 


//1.The first, usual way, is by using the function keyword.
// 2. the regular function can easily construct objects. 
// 3. arguments is a special array-like object containing the list of arguments with which the function has been invoked. 
// 4. return expression statement returns the result from a function.
// 5. The regular functions are the usual way to define methods on classes.


                                   // arrow function 

  
// 1.The arrow function doesn’t define its own execution context. 
// 2.an arrow function cannot be used as a constructor. 
// 3. no arguments special keyword is defined inside an arrow function. 
// 4. We can return values from the arrow function the same way as from a regular function, but with one useful exception. 
// 5.  We can use the arrow function as methods inside classes. 

// num-5 
// array of numbers. and then map to get each elements multiplied by 5. must use arrow function 
const array=[1,2,3,4,5];
const arrMultyplyBy5=array.map(x=>x*5);
console.log(arrMultyplyBy5);

//6. [challenging] numbers of array. get odd numbers by using filter with arrow function
const Numbers =[1,2,3,4,5,6,7,8,23,45,11,46] ;
const filterOdd =Numbers.filter(num=>num%2);
console.log(filterOdd);

// 7. [challenging] array of objects (e.g. products). use find to get the object with price 5000. 
const prouducts =[
               { name: 'i-phone', price: 500000},
    { name: 'mobile -phone', price: 5000  },
    { name: 'smart- phone', price: 3000 },
    { name: 'toy-phone', price: 30 },
    { name: 'samsung-phone', price: 300000 }
];
const find5000=prouducts.find(prouduct=>prouduct.price==5000);
console.log(find5000);

// 8.  You have an object. Now use destructing to create a simple variable of any property of the object. 
const myself = { id: 5800, name: 'tunir khalamoni', 
 phone: '01717555555555',
  address: 'Chandpur', };
  const {phone,name}=myself;
  console.log(myself);

//   9.
const company = {
               name: 'GP',
               ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
               web: {
                   work: 'website development',
                   employee: 22,
                   framework: 'react',
                   tech: {
                       first: 'html',
                       second: 'css',
                       third: 'js'
                   }
               },
           };
           const {  third } = company.web.tech;
           console.log(third);           

//            num-10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
// this function will take three parameters and will return the sum of all the three parameters.
// */

function total(a,b,c=7){
               sum=a+b+c;
               return sum ;
}
const mynumber =total(2,2);
console.log(mynumber);
