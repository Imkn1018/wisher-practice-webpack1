import axios from "axios"

export const useGetWishes = () => {
  return axios.get("/api/v1/wishes")
    .then(res => {
    return res.data
    })
  .catch((e) => console.error(e))
  
}