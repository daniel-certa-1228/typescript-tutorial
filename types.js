var my_name = "Dan";
var score_1 = 23;
var score_2 = 34.56;
var sum = score_1 + score_2;
console.log(sum); // 57.56
//Type assertion
var string = '1';
var string_2 = string;
console.log(string_2); // 1
// Type inference
var num = 2;
console.log("value of num: " + num);
// num = "12"; // cannot assign a string because the compiler INFERRED that num:string
//Variable Scope
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log("Static var: " + Numbers.sval); //static variable  
var obj = new Numbers();
console.log("Object num_val: " + obj.num_val);
