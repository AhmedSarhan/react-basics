import { Axios } from ".";


export const getCurrencies = async () => {

  const response = await Axios.get('/currenciez');

  return Object.values(response?.data?.data)
}