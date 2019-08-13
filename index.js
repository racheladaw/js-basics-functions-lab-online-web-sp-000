function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber > 42) {
    return streetNumber - 42;
  } else {
    return 42 - streetNumber;
  }
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function  distanceTravelledInFeet(startingBlock, endingBlock) {
  if (startingBlock > endingBlock) {
    return (startingBlock - endingBlock) * 264;
  } else {
    return (endingBlock - startingBlock) *264;
  }
}

function  calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination);
  if (distanceTravelled > 2500) {
    return "cannot travel that far";
  } else if (distanceTravelled > 2000) {
    return 25;
  } else if (distanceTravelled > 400) {
    return (distanceTravelled  - 400) * 0.02;
  } else {
    return 0;
  }
}
