// function routePairs(maxTravelDist, forwardRouteList, returnRouteList) {
//   // Write your code here
//   let result = [];
//   let obj = {}
//   let smallestDiff = maxTravelDist;
//   // let storage = [];

//   for (let i = 0; i < forwardRouteList.length; i++) {
//       let id = forwardRouteList[i][0]
//       let distance = forwardRouteList[i][1]
//       if (distance < maxTravelDist) {
//         obj[distance] = id;
//       }
//   }
//   for (let j = 0; j < returnRouteList.length; j++) {
//     let id = returnRouteList[j][0]
//     let distance = returnRouteList[j][1]
//     let complement = maxTravelDist - distance
//     if (obj[complement]) {
//       result.push([obj[complement], id])
//     }
//   }

//   return result;
// }

// // maxtravelDist = integer
// // forwardRouteList = [[id, dist], [id, dist]]
// // return = [[id, dist], [id, dist]]
// function routePairs(maxTravelDist, forwardRouteList, returnRouteList) {
//   const result = []
//   const returningDist = new Map()

//   for (let [id,dist] of forwardRouteList) {
//     const diff = maxTravelDist - dist
//     returningDist.set(diff, id)
//   }
//   for (let [id,dist] of returnRouteList){
//   if (returningDist.has(dist)) {
//     result.push([returningDist.get(dist),id])
//   }
//   }
//   console.log(returningDist);
//   return result
// }


// // buildingCount = [2, 1, 2, 2, 1]
// // routerloc = [3, 1]
// // routerRange = [1, 2]
// // returns number of buildings fully served
// function getServedBuildings(buildingCount, routerLocation, routerRange) {
//   // Write your code here
//   let routers = {};
//   let buildings = {};

//   for (let i = 0; i < routerLocation.length; i++) {
//     let negativeDistance = routerLocation[i] - routerRange[i]
//     let positiveDistance = routerLocation[i] + routerRange[i]
//     routers[routerLocation[i]] = [(negativeDistance >= 0 ? negativeDistance : 0), (positiveDistance <= buildingCount.length ? positiveDistance : buildingCount.length)];
//   }

// }

// const solution = (a, signs, b, c) => {

// }


// for (let i = 0; i < string.length; i++) {
//   let current = string[i]
//   if (array[i].includes(current)){
//     obj[current] += 1
//   }
// }


// function fizzBuzz(n) {
//   // Write your code here
//   if(n % 15 === 0) {
//       return "FizzBuzz";
//   } else if (n % 3 === 0) {
//       return "Fizz";
//   } else if (n % 5 === 0) {
//       return "Buzz";
//   } else {
//       return n;
//   }
// }

// console.log(fizzBuzz(15))

function sortBinaryNumbers(bitArrays) {
  // Write your code here
  // Input is an array of arrays; indices are where the 1s are from the right;
  // Goal is to return an array of indices in descending order of binary number value
  
  let storage = [];
  let previousTotal = 0;
  for (let i = 0; i < bitArrays.length; i++) {
      let currentTotal = 0;
      for (let j = 0; j < bitArrays[i].length; j++) {
          currentTotal += bitArrays[i][j];
      }
      storage.push([currentTotal, i]);
  }
  storage.sort(function(a, b) {
    return b[0] - a[0]
  })
  
  let result = [];

  for (let i = 0; i < storage.length; i++) {
    result.push(storage[i][1]);
  }

  return result;
}

console.log(sortBinaryNumbers([[1, 2], [0, 2], [2, 3]]))