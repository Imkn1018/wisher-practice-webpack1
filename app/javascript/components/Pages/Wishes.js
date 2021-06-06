import React, {useEffect} from 'react'
import {useGetWishes} from "../../api/Wishes";

export const Wishes = () =>  {
  useEffect(() => {
        useGetWishes()
        .then((data) => console.log(data))
        
    },[])
  return (
    <>
      <div>Helllo wishes</div>
    </>
  )
}

