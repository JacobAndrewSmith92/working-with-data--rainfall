// const RainfallDatabase = {
//     "1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
//     "1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
//     "1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
//     "1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
//     "1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
//   }

//stores rainFalldatabase on the browser
localStorage.setItem("rainfall", JSON.stringify(RainfallDatabase))
//recalls and uses rainfallDatabase on the browser
const RainfallDatabase = JSON.parse(localStorage.getItem("rainfall"))
// removes data from browser
// localStorage.removeItem("rainfall")

const monthsGreaterThan6 = RainfallDatabase["1949"].filter( r => r >= 6.0)
    // rainfall => { // (rainfall => rainfall => 6.0) Other way to write this if statement
    //     if (rainfall >= 6.0) {
    //         return true
    //     }
    // }


const averageRainfall_1952 = RainfallDatabase["1952"].reduce(
    (total, thisMonth) => total + thisMonth
) / RainfallDatabase["1952"].length

//toFixed turns the integer to a string with 2 value places
//parseFloat returns that item back to a number

console.log(parseFloat(averageRainfall_1952.toFixed(2))); 



console.log(averageRainfall_1952)

const total_RainFall_1951 = RainfallDatabase["1951"].reduce((first, second) => {
    const total = first + second
  })





// const RainfallDatabase = [_1948, _1949, _1950, _1951, _1952]
// Find out how much total rain has fallen over last 10 years
// Lambda Function: Function passing to another function
// const allRainfall = RainfallDatabase.reduce(
//   function(currentSet, nextSet) {
//     return currentSet.concat(nextSet)
//   }
// ).reduce(
//   function(total, monthlyRainfall) {
//     return total + monthlyRainfall
//   }
// )
// console.log(allRainfall);