const calculateBowlingScore = rolls => {
  if (!Array.isArray(rolls)) {
    throw new Error('Not an array');
  }

  if (rolls.length < 12) {
    throw new Error('Invalid input');
  }

  let runningScore = 0;
  let numberOfFrames = 0;
  for (let index = 0; index < rolls.length;) {

    if (!Number.isInteger(rolls[index]) || (rolls[index] < 0 || rolls[index] > 10)) {
      throw new Error('Invalid element in array');
    }

    if (numberOfFrames == 9) {
      // open frame
      if (rolls[index] + rolls[index + 1] < 10) {
        runningScore += rolls[index] + rolls[index + 1];
      }

      else {
        runningScore += rolls[index] + rolls[index + 1] + rolls[index + 2];
      }

      if ((rolls.length - index) > 3) {
        throw new Error('Invalid number of frames');
      }

      break;
    }

    // spare or open case
    if (rolls[index] < 10) {

      // spare case
      if (rolls[index] + rolls[index + 1] == 10) {
        runningScore += rolls[index] + rolls[index + 1] + rolls[index + 2];
      }

      // open case
      else {
        runningScore += rolls[index] + rolls[index + 1];
      }

      numberOfFrames++;
      index += 2;
    }

    // strike case
    else if (rolls[index] == 10) {
      runningScore += rolls[index] + rolls[index + 1] + rolls[index + 2];
      numberOfFrames++;
      index++;
    }
  }

  return runningScore;
};

module.exports = { calculateBowlingScore };