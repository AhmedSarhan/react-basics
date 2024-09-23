import { Axios } from ".";

export const fetchCurrencies = async () => {
  const response = await Axios.get(`/currencies`);
  const { data } = response;
  console.log('currency data',data, Object.values(data.data));
  return Object.values(data?.data);
}