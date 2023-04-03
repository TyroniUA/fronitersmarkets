const CowBreeds = {
  ANGUS: { name: 'Angus', pricePerKg: 2.5 },
  HEREFORD: { name: 'Hereford', pricePerKg: 2.2 },
  HOLSTEIN: { name: 'Holstein', pricePerKg: 2.0 },
  JERSEY: { name: 'Jersey', pricePerKg: 2.7 },
  LIMOUSIN: { name: 'Limousin', pricePerKg: 3.0 },
  CHAROLAIS: { name: 'Charolais', pricePerKg: 2.8 },
  SIMMENTAL: { name: 'Simmental', pricePerKg: 2.3 },
  BRAHMAN: { name: 'Brahman', pricePerKg: 2.1 },
  GUERNSEY: { name: 'Guernsey', pricePerKg: 2.9 },
  BROWN_SWISS: { name: 'Brown Swiss', pricePerKg: 2.6 }
};

const photoData = {
  weight: 500, 
  accuracy: 5,
  breed: CowBreeds.ANGUS 
};

function calculateCowPrice(photoData) {
  const pricePerKg = photoData.breed.pricePerKg; 

  const weightRange = {
    min: photoData.weight - (photoData.weight * photoData.accuracy / 100),
    max: photoData.weight + (photoData.weight * photoData.accuracy / 100)
  };

  const averageWeight = (weightRange.min + weightRange.max) / 2;

  const minPrice = weightRange.min * pricePerKg;
  const maxPrice = weightRange.max * pricePerKg;

  return {
    minPrice: minPrice.toFixed(2),
    maxPrice: maxPrice.toFixed(2),
    averageWeight: averageWeight.toFixed(2),
    breed: photoData.breed
  };
}

const cowPrice = calculateCowPrice(photoData);
console.log(`Weight range: ${cowPrice.minPrice}kg - ${cowPrice.maxPrice}kg`);
console.log(`Average weight: ${cowPrice.averageWeight}kg`);
console.log(`Breed: ${cowPrice.breed.name}`);
console.log(`Min Price: ${cowPrice.minPrice}`);
console.log(`Max Price: ${cowPrice.maxPrice}`);
