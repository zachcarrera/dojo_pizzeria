function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
}

// pizza object created with pizzaOven()
var p1 = pizzaOven(
    "deep dish",
    "traditional",
    ["mozzarella"],
    ["pepperoni", "sausage"]
);

// pizza object created with pizzaOven()
var p2 = pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella", "feta"],
    ["mushrooms", "olives", "onions"]
);

// pizza object created with pizzaOven()
var p3 = pizzaOven(
    "thin crust",
    "marinara",
    ["mozzarella"],
    ["barbeque chicken"]
);

// pizza object created with pizzaOven()
var p4 = pizzaOven(
    "neapolitan",
    "marinara",
    ["mozzarella", "ricotta", "burrata"],
    ["sausauge", "bacon"]
);

// array of available crust types
var crustList = ["deep dish", "hand tossed", "thin crust", "neopolitan"];

// array of available sauce types
var sauceList = ["marinara", "traditional", "pesto"];

// array of available cheese types
var cheeseList = ["mozzarella", "feta", "ricotta", "burrata"];

// array of available topping types
var toppingsList = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "bacon",
    "onions",
    "bacon",
];

// a function that checks if a value is in a given array arr and returns a boolean
function doesContain(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return true;
    }
    return false;
}

// a function to choose a random integer between 0 and num - 1
function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

// a function that makes an array of random length and fills it randomly with values from sourceArray
// it uses doesContain() to make sure the same value does not get pushed to the new array more than once
function makeRandomArray(sourceArr) {
    // create a new empty array
    var arrNew = [];

    for (var i = 0; i < randomNumber(sourceArr.length) + 1; i++) {
        // randomly choose a value from sourceArr
        var value = sourceArr[randomNumber(sourceArr.length)];

        // only push value to arrNew if arrNew does not already have value in it
        if (!doesContain(arrNew, value)) {
            arrNew.push(value);
        }
    }
    return arrNew;
}

// a function to create a random pizza
function randomPizza() {
    var randPizza = {};
    randPizza.crustType = crustList[randomNumber(crustList.length)];
    randPizza.sauceType = sauceList[randomNumber(sauceList.length)];
    randPizza.cheeses = makeRandomArray(cheeseList);
    randPizza.toppings = makeRandomArray(toppingsList);

    return randPizza;
}

var randPizza1 = randomPizza();
console.log(randPizza1);
