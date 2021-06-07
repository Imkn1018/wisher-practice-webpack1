import axios from "axios"

export const useGetCompleteReviews = (wishId) => {
  return axios.get(`/api/v1/wishes/${wishId}/complete_reviews`)
    .then(res => {
    return res.data
    })
  .catch((e) => console.error(e))
  
}