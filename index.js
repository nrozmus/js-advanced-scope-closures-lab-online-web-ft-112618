// // Calculates whether a given trip is within range.
// // For example, produceDrivingRange(10) returns a function
// // that will take two strings as arguments and returns a message
// // stating whether the trip is in range.
//
// function produceDrivingRange(blockRange) {
//   return function(startBlock, endBlock) {
//     let start = parseInt(startBlock)
//     let end = parseInt(endBlock)
//     let distancetoTravel = Math.abs(end - start)
//     let difference = blockRange - distancetoTravel
//
//     if (difference > 0) {
//       return `within range by ${difference}`
//     } else {
//       return `${Math.abs(difference)} blocks out of range`
//     }
//   }
// }
//
// // Returns a function that then calculates a tip.
//
// function produceTipCalculator(tipPercentage) {
//   return function(fareTotal)
//     return fareTotal * tipPercentage
// }
//
// function createDriver() {
//   let driverId = 0
//   return class {
//     constructor(name) {
//       this.id = ++driverId
//       this.name = name
//     }
//   }
// }
function produceDrivingRange( blockRange ) {
  return function ( startingBlock, endingBlock ) {

    let start = parseInt( startingBlock );
    let end = parseInt( endingBlock );
    let distanceToTravel = Math.abs( end - start );
    let difference = blockRange - distanceToTravel;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator( percentage ) {
  return function ( rideFare ) {
    return rideFare * percentage;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor( name ) {
      this.id = ++driverId
      this.name = name
    }
  }
}