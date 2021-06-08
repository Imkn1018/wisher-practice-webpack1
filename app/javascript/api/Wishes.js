import axios from "axios"
import {
  initialState,
  wishesActionTyps,
  wishesReducer,
} from '../reducers/Wishes';


export const useGetWishes = () => {
  return axios.get("/api/v1/wishes")
    .then(res => {
    return res.data
    })
  .catch((e) => console.error(e))
  
}

export const useCreateWishes = (newWish) => {
  return axios.post("/api/v1/wishes",newWish)
    .then(res => {
    return res.data
    // add history
    })
  .catch((e) => console.error(e)
  // add history
  )
  
}