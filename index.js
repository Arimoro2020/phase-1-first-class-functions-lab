function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}
    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num){
    return function (fairMultiplier){ return num * fairMultiplier; };

}


const fareDoubler = function (fairMultiplier){return 2 * fairMultiplier;};

const fareTripler = function (fairMultiplier){return 3 * fairMultiplier;};

function selectDifferentDrivers(arrayOfDrivers, myFunction){
    return myFunction(arrayOfDrivers);
}