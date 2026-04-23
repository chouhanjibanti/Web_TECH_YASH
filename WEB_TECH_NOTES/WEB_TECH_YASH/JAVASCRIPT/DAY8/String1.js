// let str = "debugshala"

// console.log(str[3]);
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// Method of String 
// 1. toUpperCase()
// 2. toLowerCase()
// 3. startsWith()
// 4. endsWith()
// 5. split() 
// 6. trim() = jeans
// 7. slice() - negatgive 
// 8. substring() - won't accept negative indexes.
// 9. replace()
// 10. indexOf()
// 11. repeat()
// 12. includes()
// 13. flat()

// let str1 = "deBUgsHAla";
// console.log(str1.toUpperCase());

// let str2 = "deBUgsHAla";
// console.log(str2.toLowerCase());

// let str3 = "my name is ram"
// console.log(str3.startsWith("hy"));

// let str4 = "my name is ram"
// console.log(str3.endsWith("ram"));

// let str5 = "debugshala indore"
// let sp = str5.split('')
// console.log(sp);

// let str6 = "       jeans"
// console.log(str6.trim());

// let str7 = "my name is lakhan"
// let rpl = str7.replace("lakhan","Ram")
// console.log(rpl);

// let str8 = "deugshala "
// let re = str8.repeat(6)
// console.log(re);

// let str9 = "debugshala"
// console.log(str9.indexOf('g'));

// let str10 = "my city name is indore"
// console.log(str10.includes("indore"));


// // slice :- extract the part of the String , but accept negative index also. 
// // subString :- extract the part of the String , wont accept negative

// let str11 = "debugshala";
// // let sl = str11.slice(2,5)
// let sl1 = str11.slice(-6)
// console.log(sl1);


// let str12 = "debugshala";
// let sub = str12.substring(-6,-1)
// console.log(sub);



// // we can get the index like 
// let str13 = "my yash"
// for(let i=0;i<str13.length;i++){
//     if(str13[i]== "y"){
//         console.log(i);
//     }
// }


// how to reverse String without inbulit methods like reverse

// let str = "indore";

// first way
// // let rev = str.split('').reverse().join('');
// // console.log(rev);

// second way
// let rev = "";
// for(let i=0;i<str.length;i++){
//    rev =  str[i]+rev; //     erodni
// }
// console.log(rev);

// third way 
// let str = "indore";
// let rev = "";
// for(let i=str.length-1;i>0;i--){ // 5>0  // 4 // 3
//    rev =  rev + str[i] //    erodni
// }
// console.log(rev);




