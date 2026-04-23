// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

// row - 5 
// col - 5

// for(let i=1;i<=5;i++){
//     let line = "";
//     for(let j=1;j<=5;j++){
//         line = line + "*";
//     }
//     console.log(line);
// }

// * 
// * * 
// * * * 
// * * * * 
// * * * * *

// let row = 5;
// let star = 0;
// for(let i=1;i<=row;i++){
//    star++;
//    let line = "";
//    for(let j=1;j<=star;j++){
//        line = line + "*";
//    }
//    console.log(line);
// }


//9.
// 1
// 23
// 456
// 78910

// let num =1;
// for(let i=1;i<=4;i++){//  i=1 1<=4 T || i=2 2<=4 T
//     let line = ""
//     for(let j=1;j<=i;j++){ // j=1 1<=2 T || j=2 2<=2 |j=3 3<=2
//       line = line +num; // line = 2 3
//       num++; // 2 // 3 // 4
//     }
//     console.log(line);
// }


//5.
// A
// AB
// ABC
// ABCD
// ABCDE

// ASCII :-  American standard code information interchange 

// A - 65 66 67
// a- 97 98 99
// 0 -48
let charCode = 65;
for(let i=1;i<=5;i++){// i=1 T || i=2 T
   let line = "";  // line // line
   for(let j=1;j<=i;j++){ // j=1 1<=2 T // j=2 2<=2 T
      line = line + String.fromCharCode(charCode); // line = A
      charCode++; // 66
   }
   console.log(line);
}
// A 
// B C
