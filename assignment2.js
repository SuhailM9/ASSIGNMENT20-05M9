var readlineSync = require("readline-sync");
let limit=parseInt(readlineSync.question('Enter a Limit : '))
let sum=0
for(i=1;i<=limit;i++){
  if(i%2 !==0){
    sum=sum+i
  }
}
console.log("Sum of Odd Numbers :",sum);