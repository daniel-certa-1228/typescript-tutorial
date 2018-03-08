let my_name:string = "Dan";
let score_1:number = 23;
let score_2:number = 34.56;
let sum:number = score_1 + score_2;
console.log(sum); // 57.56

//Type assertion
let string:string = '1';
let string_2:number = <number> <any> string;
console.log(string_2); // 1

// Type inference
let num = 2;
console.log("value of num: "+num);
// num = "12"; // cannot assign a string because the compiler INFERRED that num:string

//Variable Scope
let global_num = 12;
class Numbers {
    num_val = 13;
    static sval = 10;
    storeNum():void {
        let local_num = 14;
    }
}
console.log("Global num: "+global_num)  
console.log("Static var: "+Numbers.sval) //static variable  
let obj = new Numbers(); 
console.log("Object num_val: "+obj.num_val) 
