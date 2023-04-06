export const conformFatMatrix = {
  'E': [1.20, 1.45, 1.50, 1.55, 1.50, 1.40, 1.20],
  'U+': [1.10, 1.40, 1.55, 1.55, 1.40, 1.50, 1.10],
  'U-': [1.00, 1.30, 1.60, 1.60, 1.30, 1.40, 1.00],
  'R': [0.90, 1.20, 1.60, 1.60, 1.20, 1.30, 0.90],
  'O+': [0.80, 1.10, 1.20, 1.15, 1.10, 1.20, 0.80],
  'O-': [0.70, 1.00, 1.10, 1.05, 1.00, 1.10, 0.70],
  'P+': [0.60, 0.90, 1.00, 0.95, 0.90, 1.00, 0.60],
  'P-': [0.50, 0.80, 0.90, 0.85, 0.80, 0.90, 0.50],
};

export const COW_BREEDS = {
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

export const MONTH_PRICE_FACTOR = 0.00575;
export const BREED_MONTH_DISC = 0.01983;
export const BREED_MONTH_PREM = 0.0183;
export const MONTH_PRICE_REF = 36;