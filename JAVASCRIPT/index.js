// DurgaShankar sir interview

// const a = 1;
// const b = 2;

// let A = { "key": 1 };
// let B = { "key": 1 };

// console.log(A == B, A === B);
// false false
// Explanation:
// Objects are compared by reference, not by value
// A and B are stored at different memory locations

// ---------------------------------------------------------
// 2) Swap without third variable
// let A = 1;
// let B = 2;

// A = A + B;
// B = A - B;
// A = A - B;

// console.log(A, B);
// in the case of the const variable it is not possible bcz reinitilization is not poss.

// ---------------------------------------

// Output of Async Code

// console.log("A");

// setTimeout(() => console.log("B"));

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// ---------------------------------------

// 4) Divisible by 3 (No if/else, no operators)
// Create a function which should return "yes" or "no" and take number as input.

// function check(num) {
//   return ["no", "yes"][num % 3 === 0 ? 1 : 0];
// }

// console.log(check(9));  // yes
// console.log(check(10)); // no

// =====================================

// This array will only have 3, 4, and 6.
// Sort that array with O(n) time complexity

// Input:  [4, 3, 3, 4, 4, 6, 3, 6, 4, 3]
// Output: [3, 3, 3, 3, 4, 4, 4, 4, 6, 6]

// let arr = [4, 3, 3, 4, 4, 6, 3, 6, 4, 3];

// let count3 = 0, count4 = 0, count6 = 0;

// for (let num of arr) {
//   if (num === 3) count3++;
//   else if (num === 4) count4++;
//   else count6++;
// }

// let result = [
//   ...Array(count3).fill(3),
//   ...Array(count4).fill(4),
//   ...Array(count6).fill(6)
// ];

// console.log(result);

// --------------------------------------

// let arr = [0,1,1,1,0,0,1,1,0,0,1];
// // Output :- [ 0, 0, 0, 0, 0,1, 1, 1, 1, 1, 1 ]

// let count0 = 0, count1 = 0;

// for (let num of arr) {
//   if (num === 0) count0++;
//   else count1++;
// }

// let result = [
//   ...Array(count0).fill(0),
//   ...Array(count1).fill(1),
  
// ];
// console.log(result);

// =============================================
// 6) Longest Repeated Substring
// let str = "aaaabbbbbbbbcccdd"

// let MaxChar = "";
// let MaxCount =0;

// let currentChar = str[0];
// let currentCount = 1;

// for(let i=0;i<str.length;i++){
//     if(str[i] === currentChar){
//         currentCount++;
//     }else{
//         if(currentCount > MaxCount){
//             MaxCount = currentCount;
//             MaxChar= currentChar;
//         }
//         currentChar = str[i];
//         currentCount =1;
//     }
// }

//  if(currentCount > MaxCount){
//             MaxCount = currentCount;
//             MaxChar= currentChar;
//         }
        
// console.log(MaxChar.repeat(MaxCount))

// ===================================

// Longest non-repeating substring
let input = "abcabccbb";

function longestString(str) {
    let set = new Set();
    let left = 0;
    let result = "";

    for (let right = 0; right < str.length; right++) {

        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        set.add(str[right]);

        if (right - left + 1 > result.length) {
            result = str.substring(left, right + 1);
        }
    }

    return result;
}

console.log(longestString(input)); // abc


