let n:number = 5;

while(n>5){
    console.log("Entered while");
}

do {
    console.log("Entered do...while");
} while (n>5); 

//output is "Entered do...while" because the loop executed once before the conditional

//break statement
let i:number = 1;
while(i<=10) {
    if (i%5==0) {
        console.log ("The first multiple of 5 between 1 and 10 is : "+i) 
        break     //exit the loop if the first multiple is found 
    }
    i++
} //outputs 5 and exits the loop

//continue statement
let num:number = 0;
let count:number = 0;

for(num=0;num<=20;num++){
    if (num%2==0) {
        continue
    }
    count++
}
console.log("The count of odd values between 0 and 20 is: "+count)

