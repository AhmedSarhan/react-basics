import { Axios } from ".";

export const convertCurrencies = async(fromCurrency, toCurrency, amount) => {

  return await Axios.get(`/latest?base_currency=${fromCurrency}&currencies=${toCurrency}`, {
    // params: {
    //   base_currency: fromCurrency,
    //   currencies: toCurrency
    // }
  })
  // return response
  // const rate = response?.data?.data?.[toCurrency]

  // return rate * amount


}