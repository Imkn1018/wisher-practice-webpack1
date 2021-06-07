import axios from "axios"

export const useGetCategories = () => {
  return axios.get(`/api/v1/categories`)
    .then(res => {
    return res.data
    })
  .catch((e) => console.error(e))
  
}