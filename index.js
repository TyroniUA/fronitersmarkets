
import * as constants from "./constants.js";
const photoData = {
  weight: 560,
  accuracyError: 5,
  breed: "ANGUS",
  conformation: "R",
  fat: 4
};

const userInputData = {
  monthAge: 14,
  monthBreed: 3,
};


function calcPriceByKg(photoData) {
  const { weight, accuracyError, breed } = photoData;

  const weightRange = {
    min: weight - (weight * accuracyError / 100),
    max: weight + (weight * accuracyError / 100)
  };

  const averageWeight = (weightRange.min + weightRange.max) / 2;

  const minPrice = weightRange.min * constants.COW_BREEDS[breed].pricePerKg;
  const maxPrice = weightRange.max * constants.COW_BREEDS[breed].pricePerKg;

  return {
    minPrice: minPrice.toFixed(2),
    maxPrice: maxPrice.toFixed(2),
    averageWeight: averageWeight.toFixed(2),
    breed: breed
  };
}

function calcPrice(photoData, userInputData) {
  const { weight, accuracyError, breed, conformation, fat } = photoData;
  const { monthAge, monthBreed } = userInputData;


  const weightRange = {
    min: weight - (weight * accuracyError / 100),
    max: weight + (weight * accuracyError / 100)
  };

  const bodyFactor = constants.conformFatMatrix[conformation][fat];
  const ageFactor = calcAgeFactor(monthAge);
  const breedFactor = calcBreedFactor(monthBreed);
  let minPrice = (weightRange.min * constants.COW_BREEDS[breed].pricePerKg) * bodyFactor * ageFactor * breedFactor;
  let maxPrice = (weightRange.max * constants.COW_BREEDS[breed].pricePerKg) * bodyFactor * ageFactor * breedFactor;

  return {
    minPrice: minPrice.toFixed(2),
    maxPrice: maxPrice.toFixed(2)
  }

}

const calcAgeFactor = (monthAge) => {
  const ageDiff = monthAge - constants.MONTH_PRICE_REF;
  const adjustFactor = ageDiff > 0 ? ageDiff * -constants.MONTH_PRICE_FACTOR : ageDiff * constants.MONTH_PRICE_FACTOR;

  return (1 + adjustFactor);
}

const calcBreedFactor = (breedMonth) => {
  let adjustFactor = 0;

  if (breedMonth < 6) {
    adjustFactor = breedMonth * constants.BREED_MONTH_DISC
  } else if (monthBred === 6) {
    adjustFactor = 0;
  } else if (monthBred > 6) {
    adjustFactor = (monthBred - 6) * constants.BREED_MONTH_PREM;
  }

  return (1 + adjustFactor);
}

const enhancedCowPriceData = calcPrice(photoData, userInputData);
const priceByKg = calcPriceByKg(photoData);

console.log(`Weight range: ${priceByKg.minPrice}kg - ${priceByKg.maxPrice}kg`);
console.log(`Average weight: ${priceByKg.averageWeight}kg`);
console.log(`Breed: ${priceByKg.breed}`);
console.log(`Min Price: ${priceByKg.minPrice}`);
console.log(`Max Price: ${priceByKg.maxPrice}`);


console.log('Enhanced calculation:');
console.log(`Max Price: ${enhancedCowPriceData.maxPrice}`);
console.log(`Min Price: ${enhancedCowPriceData.minPrice}`);
