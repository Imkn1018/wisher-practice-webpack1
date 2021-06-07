import React, {useEffect} from 'react'
import {useGetCompleteReviews} from "../../api/CompleteReviews";

export const CompleteReviews = ({match}) =>  {
  useEffect(() => {
        useGetCompleteReviews(match.params.wish_id)
        .then((data) => console.log(data))
        
    },[])
  return (
    <>
      <div>Helllo wishes</div>
      <div></div>
    </>
  )
}

