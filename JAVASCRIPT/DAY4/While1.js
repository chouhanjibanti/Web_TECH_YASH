// While Loop :- 

// Syntax :- 
// init
// while (condition) {
//    // statement
//    incre/ decre    
// }

// 1. Print the digits from this number 8765
// let num = 8765;
// while(num>0){ // 8765>0 // 876>0 // 87>0 // 8>0 // 0>0
//   let digit =  num%10; // 8765%10= 5 // 876%10= 6 // 87%10 = 7 // 8%10 = 8
//   console.log(digit); // 5 // 6 // 7 // 8
//   num=Math.floor(num/10)  ; // 8765/10 = 876  // 876/10 = 87/10 = 8/10 = 0
// }

//3. print the sum of the extract  digit from this number  98742
//4. Find the largest digit in a given number using a while loop.  input number =  45732
//5. Count the number of digits in a number using a while loop. input number = 34543
//6. Calculate the factorial of a number using a while loop. input number = 10

// let num = 98742;
// let sum =0;
// while(num>0) {
//  let digit = num%10;// 98742%10 -> 2
//  sum = sum+digit; // sum = 0+2 = 2 // sum = 2+4= 6
//  num = Math.floor(num/10)
// }
// console.log(sum);


// print the sqaure of the extract digit.
//4. Find the largest digit in a given number using a while loop.  input number =  45732
//5. Find the smallest digit in a given number using a while loop.  input number =  45732

// let num = 4573;
// let max = 0;

// while(num>0) {
//   let digit =  num%10; // 3
//   if(digit>max) { // 3>0 // 7>3 // 5>7 // 4>7
//       max = digit; // 3 // 7
//   }
// num =  Math.floor(num/10);
// }
// console.log(max);


// let num = 4573;
// let min = 9;

// while(num>0) {
//   let digit =  num%10; // 3
//   if(digit<min) { // 3>0 // 7>3 // 5>7 // 4>7
//       min = digit; // 3 // 7
//   }
// num =  Math.floor(num/10);
// }
// console.log(min);



//5. Count the number of digits in a number using a while loop. input number = 34543

// let num = 34543;
// let count=0;
// while (num>0) { // 34543>0 // 3454>0 // 345>0 // 34>0 // 3>0 //0>0
//       count++; // 1 // 2 // 3 // 4 // 5
//       num = Math.floor(num/10) // 34543/10 = 3454/10 = 345/10 = 34/10 = 3/10 = 0
// }
// console.log(count);


//6. Calculate the factorial of a number using a while loop. input number = 10
// let fact = 1;
// let num = 10;
// while (num>0) { // 10>0 // 9>0
//     fact = fact*num; // fact = 1*10 = 10
//     num--; // 9
// }
// console.log(fact);



// Basic Question -> for loop , while loop 
// 1. prime number // 2 , 3  , 5 , 7, 11 ,13 , 17
// 2. Armstrong number // 153  1*1*1 = 1   5*5*5 = 125  3*3*3 = 1+125+27 = 153
// 3. perfect number // 6 -> 1 +2+3 = 6  =>  14 -> 1+2+7 => 10 => 28 -> 1+2+4+7+14= 28
// 4. Write a program to check if a given number is a palindrome.

// prime number :- number divide itself or 1 .
// let num = 2;
// let count=0;
// for(let i=2;i<=num;i++){// i=2 2<=4 T || i=3 3<=4 T || i=4 4<=4 T || i=5 5<=4 F
//    if(num%i==0){ // 4%2==0 T // 4%3==0 F // 4%4==0
//      count++; // 1 // 2
//    }
// }
// if(count==1){ // 2==1
//     console.log(num+" Number is prime");
// }else{
//     console.log(num+ " Number is not prime");
// }


// 3. perfect number // 6 -> 1 +2+3 = 6  =>  14 -> 1+2+7 => 10 => 28 -> 1+2+4+7+14= 28



// Example 6 :- 1+2+3 = 6
// 28 -> 1+2+4+7+14 = 28


// let num = 7;
// let sum = 0;
// for(let i=1;i<=num/2;i++){ // i=1 1<=3 T // i=2 2<=3 T // i=3 3<=3 T // i=4 4<=3 F
//     if(num%i==0){ // 6%1==0 T|| 6%2==0 T  || 6%3==0 T
//         sum = sum +i; // sum = 0+1 = 1 || sum = 1+2 = 3 || sum = 3+3 = 6
//     }
// }
// if(sum==num){ // 6==6
//     console.log(num+" number is perfect");
// }
// else{
//     console.log(num +" number is not perfect ");
// }


// ArmStrong number 
// Palindrome number 

// Armstrong :- 153 -> 1*1*1+5*5*5+3*3*3 = 1+125+27 = 153
// let num = 154;
// let n1 = num;
// let sum =0;
// while(num>0) {
//      let digit = num%10;
//     sum = sum +digit*digit*digit;
//     num = Math.floor(num/10)//0
// }
// if(n1==sum){
//   console.log(n1+" It is Armstrong number");
// }else{
//     console.log(n1+" It is not armStrong number");
// }

// Palindrome number 
// Example 131

// let num = 135;
// let n1 = num;
// let rev = 0;
// while (num>0) {
//    let digit = num%10;// 131 - 1 // 13 - 3 // 1
//    rev = (rev*10) + digit // rev = 0+1 =1  // rev = 10+3= 13 // rev = 130+1 = 131
//    num = Math.floor(num/10)// 131- 13 - 1 //0
// }
// if(n1==rev){
//     console.log(n1+ " it is palidrome");
// }else{
//     console.log(n1+" It is not palindrome");
// }


// Star Pattern 
// hoisting 
// Functions 


