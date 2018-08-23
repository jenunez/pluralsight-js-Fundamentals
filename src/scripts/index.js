
/*
// REST PARAMETERS "...varNaeme"
function sendCars(...allCarsdIds) {
    allCarsdIds.forEach(id => console.log(id));
}

sendCars(100, 200, 555);

// Rest parameter are treated like array and should be the last variable

function sendCars2(day, ...allCarsdIds) {
    allCarsdIds.forEach(id => console.log(id));
}

sendCars2('Monday',100, 200, 555);


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
*/

//SPREAD takes an array and break it a part into variables

function startCars(car1, car2, car3) {
    console.log(car1, car2, car3);
}

let carIds = [1,2,3];
startCars(...carIds);

function startCars2(car1, car2, car3, ...rest) {
    console.log(rest);
}

let carIds2 = [1,2,3,4,5,6];
startCars2(...carIds2);