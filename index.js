// Code your solution here

// * `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.

// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.

// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

const drivers = [ {
    name: 'Bobby',
    name: 'Sammy', 
    name: 'Sally', 
    name: 'Annette', 
    name: 'Sarah', 
    name: 'Bobby' } ] 

function findMatching(drivers, name) {
    return drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase() })
};

function fuzzyMatch(drivers, name) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, name.legnth) === name.toLowerCase() })
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) { return driver.name === name })
}