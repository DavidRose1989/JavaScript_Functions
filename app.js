console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 0){
        for (let i = -1; i >= count; i--){
            if (i % 2 != 0){
            console.log(i);
            }
        }
    }   else{
        for (let i = 1; i <=count; i++ ){
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    
    }
}

printOdds(-20);
printOdds(15);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen= `Congrats ${userName}! You can drive!`;
    let belowSixteen= `Sorry ${userName}! You have to wait ${16 - age} year(s) until you can drive.!`;
    
    if (age > 16){
    console.log(aboveSixteen)
    }else{
    console.log(belowSixteen)
    }
}

checkAge(`David`, 15);

//Excercise 3
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x,y){
    if (x > 0 && y > 0){
        return 1;
    }   else if (x < 0 && y > 0){
    return 2;
    } else if (x < 0 && y < 0){
        return 3;
    }else if (x > 0 && y < 0) {
        return 4;
    }else if (x == 0 && y != 0){
        return `X Axis`;
    }else if (x != 0 && y == 0){
        return `Y Axis`;
    }else{
        return `Origin`;
    }
}
console.log(whichQuadrant(1,1));
console.log(whichQuadrant(-1,1));
console.log(whichQuadrant(-1,-1));
console.log(whichQuadrant(1,-1));
console.log(whichQuadrant(0,-1));
console.log(whichQuadrant(1,0));
console.log(whichQuadrant(0,0));

console.log("EXERCISE 4: Type of Triangle");

function isATriangle(x, y, z){ 
    return x + y > z && x + z > y && y + z > x
}

function checkTriangle (x, y ,z){
    let isValid = isATriangle (x,y,z);
    if (isValid) {
        if (x == y && y == z) {
            return `Equilateral`;
        }else if (x == y || y == z || x == z) {
            return `Isoceles`;
        }else{
            return `Scalene`;
        }
    }else{
    return `Not a valid triangle`;
    }
}
console.log(checkTriangle(2,3,4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1,2,2));
console.log(checkTriangle(1,1,2));

console.log("EXERCISE 5: Data Plan Status");

function dataUsageFeedback(planLimit, day, usage) {
    let periodLenght = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLenght;
    let remainingData = planLimit - usage;
    let remainingDays = periodLenght - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} day(s) used, ${periodLenght - day} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if ( currentAvg < projectedAvg ) {
        statusMsg = "UNDER";
    }else{
        statusMsg = "AT";
    }

    console.log(`You are EXCEEDING your average daily use (${currentAvg} GB/day), 
    continuing this high usage, you'll end up using ${
        planLimit - (usage +projectedUsage)
    } GB gtom your data limit.`);
}

dataUsageFeedback(50, 15, 25);