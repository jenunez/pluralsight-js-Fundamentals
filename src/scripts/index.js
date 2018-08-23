
// REST PARAMETERS "...varNaeme"
function sendCars(...allCarsdIds) {
    allCarsdIds.forEach(id => console.log(id));
}

sendCars(100, 200, 555);

// Rest parameter are treated like array and should be the last variable
/*
function sendCars(day, ...allCarsdIds) {
    allCarsdIds.forEach(id => console.log(id));
}

sendCars('Monday',100, 200, 555);
*/

// Destructuring Arrays assign array values to variables
let carIds = [100, 200, 300];
let [car1, car2] = carIds;

console.log(car1, car2);

let [c1, c2, ...theRest] = carIds;
console.log(c1, c2, theRest);

let [, cc2, ...theRest2] = carIds;
console.log(cc2, theRest2);

// Destructuring Objects

let car = {id: 500, style: 'convertible'};
let {id, style} = car;
console.log(id, style);

let idd, sstyle;
//{idd, sstyle} = car; // ERROR 
({ idd, sstyle } = car);
console.log("<", idd, sstyle, ">");
