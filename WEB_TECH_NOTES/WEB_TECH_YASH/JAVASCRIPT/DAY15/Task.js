let arr = [1,2,3,4,5,6,7,8,9]

let eventSum=0;
let oddSum = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        eventSum = eventSum+arr[i];
    }else{
        oddSum = oddSum+arr[i];
    }
}
console.log(eventSum);
console.log(oddSum);