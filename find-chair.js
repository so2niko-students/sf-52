function meeting(conferenceArray, chairsNeeded) {
  let myChairs = 8 - chairsNeeded;
  const output = [];
  let calculatedChairs;
  let summedChairsFound = 0;

  if (myChairs == 8) {
    return "Game on!";
  }

  conferenceArray.forEach(function (room) {
    if (myChairs >= 8) {
      return output; //'break'-statement
    }

    calculatedChairs = Math.max(room[1] - room[0].length, 0); //avoids negative chairs being calculated
    summedChairsFound += calculatedChairs;

    myChairs += calculatedChairs;
    output.push(calculatedChairs);
  });

  console.log(summedChairsFound, " ", chairsNeeded);
  if (summedChairsFound < chairsNeeded) {
    return "Not enough";
  } else {
    return output;
  }
}

console.log(
  meeting(
    [
      ["XXX", 3],
      ["XXXXX", 6],
      ["XXXXXX", 9],
    ],
    4
  )
);
// ---> [0, 1, 3]

console.log(
  meeting(
    [
      ["XXX", 1],
      ["XXXXXX", 6],
      ["X", 2],
      ["XXXXXX", 8],
      ["X", 4],
      ["XXX", 1],
    ],
    5
  )
);
// ---> [0, 0, 1, 2, 2]

console.log(
  meeting(
    [
      ["XX", 2],
      ["XXXX", 6],
      ["XXXXX", 4],
    ],
    0
  )
);
//---> 'Game On'

console.log(
  meeting(
    [
      ["XX", 2],
      ["XXXX", 6],
      ["XXXXX", 4],
    ],
    4
  )
);
//---> 'Not enough!'
