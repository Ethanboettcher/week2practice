// create some variables
var ageRequiredToDrive = 16;
var currentAge = 14;
var canPersonDrive = currentAge >= ageRequiredToDrive;
    if(canPersonDrive) {
        console.log('This person can drive');
    }   else{
        console.log('This person cannot legally drive.');
    }

//if-else if -else Statemnt
//If a dozen of eggs costs $3 or more, we may only want to purchase one dozen.
//If they are less than $3 but greater than $2 per dozen, we may buy 2 dozen. 
//If they are less than $2, we may buy 3 dozen.
//And finally, If they are less than a dollar, we want to buy 4 dozen. 

var costOfEggs = .12;
var numberOfDozensOfEggsToPurchase = 0;
if(costOfEggs > 3){
    numberOfDozensOfEggsToPurchase = 1;
} else if(costOfEggs > 2){
    numberOfDozensOfEggsToPurchase = 2;
} else if(costOfEggs > 1){
    numberOfDozensOfEggsToPurchase = 3;
}else{
    numberOfDozensOfEggsToPurchase = 4;
}
console.log('I will buy ' + numberOfDozensOfEggsToPurchase + ' dozen eggs.');

//creat a switch statement
var grade = 'A';

switch(grade){
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case'C':
        console.log('70-79');
        break;
    case 'D':
        console.log('60-69');
        break;
        default:
           console.log('0-59');
}   

//loops

var cupsOfFlour = 0;
while (cupsOfFlour < 5){
    console.log('Scooping a cup of flour into the bowl');
    cupsOfFlour +=1;
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');
}

for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++){
    console.log('Scooping a cup of flour into the bowl');
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');
}

for (var i =0; i < 10; i++){
    console.log(i);
}

let y = 0;
do{
    y++;
    console.log(y);
}   while (y < 3);
