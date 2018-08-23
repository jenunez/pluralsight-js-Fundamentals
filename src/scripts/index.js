function sendCars(...allCarsdIds) {
    allCarsdIds.forEach(id => console.log(id));
}

sendCars(100, 200, 555);


function sendCars2(day, ...allCarsdIds) {
    allCarsdIds.forEach(id => console.log(id));
}

sendCars2('Monday',100, 200, 555);
