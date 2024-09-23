import { Axios } from ".";


export const convertCurrencies = async (fromCurrency, toCurrency, amount) => {
  console.log('fromCurrency', fromCurrency, toCurrency, amount);
  const response = await Axios.get(`/latest`, {
    params: {
      base_currency: fromCurrency,
      currencies: toCurrency,
    },
  });
  const { data } = response;
  const rate = data?.data?.[toCurrency];
  return rate * amount;
}