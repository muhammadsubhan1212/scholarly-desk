import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { currencies, exchangeRates, countryToCurrency, DEFAULT_CURRENCY } from '../data/currencies';

const STORAGE_KEY = 'as_currency';

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currencyCode, setCurrencyCode] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_CURRENCY;
    return localStorage.getItem(STORAGE_KEY) || null;
  });
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    if (currencyCode) {
      setDetected(true);
      return;
    }

    async function detect() {
      try {
        const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) });
        if (!res.ok) throw new Error('Geo lookup failed');
        const data = await res.json();
        const code = countryToCurrency[data.country_code] || DEFAULT_CURRENCY;
        setCurrencyCode(code);
        localStorage.setItem(STORAGE_KEY, code);
      } catch {
        setCurrencyCode(DEFAULT_CURRENCY);
      } finally {
        setDetected(true);
      }
    }

    detect();
  }, [currencyCode]);

  const changeCurrency = useCallback((code) => {
    setCurrencyCode(code);
    localStorage.setItem(STORAGE_KEY, code);
  }, []);

  const convert = useCallback(
    (amountUSD) => {
      const rate = exchangeRates[currencyCode || DEFAULT_CURRENCY] || 1;
      return Math.round(amountUSD * rate);
    },
    [currencyCode],
  );

  const formatPrice = useCallback(
    (amountUSD) => {
      const code = currencyCode || DEFAULT_CURRENCY;
      const info = currencies[code] || currencies.USD;
      const converted = Math.round(amountUSD * (exchangeRates[code] || 1));

      if (code === 'KRW' || code === 'PKR' || code === 'INR') {
        return `${info.symbol} ${converted.toLocaleString(info.locale)}`;
      }
      return new Intl.NumberFormat(info.locale, {
        style: 'currency',
        currency: code,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(converted);
    },
    [currencyCode],
  );

  const value = useMemo(
    () => ({
      currencyCode: currencyCode || DEFAULT_CURRENCY,
      currency: currencies[currencyCode || DEFAULT_CURRENCY] || currencies.USD,
      detected,
      changeCurrency,
      convert,
      formatPrice,
      allCurrencies: currencies,
    }),
    [currencyCode, detected, changeCurrency, convert, formatPrice],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
}
