export const currencies = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', locale: 'en-AU' },
  NZD: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', locale: 'en-NZ' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', locale: 'de-DE' },
  CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA' },
  PKR: { code: 'PKR', symbol: 'Rs', name: 'Pakistani Rupee', locale: 'en-PK' },
  KRW: { code: 'KRW', symbol: '₩', name: 'South Korean Won', locale: 'ko-KR' },
  AED: { code: 'AED', symbol: 'AED', name: 'UAE Dirham', locale: 'ar-AE' },
  SAR: { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal', locale: 'ar-SA' },
  MYR: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', locale: 'ms-MY' },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', locale: 'en-SG' },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
};

/**
 * Rates relative to USD (base price is stored in USD).
 * In production, fetch live rates from an API.
 */
export const exchangeRates = {
  USD: 1,
  GBP: 0.79,
  AUD: 1.53,
  NZD: 1.67,
  EUR: 0.92,
  CAD: 1.36,
  PKR: 278.5,
  KRW: 1320,
  AED: 3.67,
  SAR: 3.75,
  MYR: 4.47,
  SGD: 1.34,
  INR: 83.5,
};

export const countryToCurrency = {
  US: 'USD',
  GB: 'GBP',
  AU: 'AUD',
  NZ: 'NZD',
  DE: 'EUR',
  FR: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  NL: 'EUR',
  IE: 'EUR',
  CA: 'CAD',
  PK: 'PKR',
  KR: 'KRW',
  AE: 'AED',
  SA: 'SAR',
  MY: 'MYR',
  SG: 'SGD',
  IN: 'INR',
};

export const DEFAULT_CURRENCY = 'USD';
