var dog= require("./dog");
var cat = require("./cat");
var mouse = require("./mouse");

var mouse = new mouse("Jerry");
var cat = new cat();
var dog = new dog();
//cat.eat(mouse);
try {
    cat.eat(dog);
} catch(error) {
    console.log("error when cat eat dog");
}

console.log(cat);



