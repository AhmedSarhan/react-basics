import { Axios } from ".";

export const convertCurrencies = async(fromCurrency, toCurrency, amount) => {

  const response = await Axios.get(`/latest?base_currency=${fromCurrency}&currencies=${toCurrency}`, {
    // params: {
    //   base_currency: fromCurrency,
    //   currencies: toCurrency
    // }
  })
  const rate = response?.data?.data?.[toCurrency]

  return rate * amount


}