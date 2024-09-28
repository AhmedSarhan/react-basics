import { Axios } from ".";


export const getCurrencies = async () => {

 try {
   const response = await Axios.get('/currencies');

   return Object.values(response?.data?.data)

 } catch (error) {
   console.log('error', error.response)
   throw new Error(error.response.data.message)
   
  //  ErrorObj = { message: error.response.data.message}
  //  return []
 }
}