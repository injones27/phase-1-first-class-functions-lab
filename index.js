// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
    let firstDrivers = drivers.slice();
    firstDrivers.splice(2, 2);
    return firstDrivers
}

const returnLastTwoDrivers = function (drivers) {
    let lastDrivers = drivers.slice();
    lastDrivers.splice(0, 2);
    return lastDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(factor) {
    return function fareMultiplier(fare){
        let fareProduct = fare*factor;
        return fareProduct;
    }
}

const fareDoubler = function(factor){
    let fare = factor*2;
    return fare;
}

const fareTripler = function(factor){
    let fare = factor*3;
    return fare;
}

// function selectingDifferentDrivers(drivers, returnFirstTwoDrivers) {
//     let differentDrivers = returnFirstTwoDrivers(drivers)
//     return differentDrivers;
// }

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    let firstDrivers = drivers.slice();
    firstDrivers.splice(2, 2);
    return firstDrivers
}

const selectDifferentDrivers = function (drivers, returnlastTwoDrivers) {
    let lastDrivers = drivers.slice();
    lastDrivers.splice(0, 2);
    return lastDrivers
}
