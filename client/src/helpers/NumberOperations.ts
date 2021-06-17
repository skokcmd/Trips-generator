/**
 * Function that generates random number
 * @param max max value
 * @return random value
 */
export const generateRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

/**
 * Function that will generate non-repeating number
 * @param numberToCompare unwanted number to be repeated
 * @param max max value
 * @return random non-repeating number
 */
export const generateNonRepeatingNumber = (
  numberToCompare: number,
  max: number
) => {
  let generatedNumber = generateRandomNumber(max);
  while (generatedNumber === numberToCompare) {
    generatedNumber = generateRandomNumber(max);
  }
  return generatedNumber;
};

/**
 * Function that checks if a numeric value is zero (placeId in our case)
 * @param num numeric value to check (id)
 * @returns boolean
 */
export const notNegative = (num: number) => {
  if (num > -1) {
    return false;
  }
  return true;
};
