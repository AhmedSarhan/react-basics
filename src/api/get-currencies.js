import { Axios } from ".";


export const getCurrencies = async () => {

  const response = await Axios.get('/currencies');

  return Object.values(response?.data?.data)
}