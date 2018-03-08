console.log("TEST");
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello, wolrd.");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
