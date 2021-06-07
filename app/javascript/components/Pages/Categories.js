import React, {useEffect} from 'react'
import {useGetCategories} from "../../api/Categories";

export const Categories = () =>  {
  useEffect(() => {
        useGetCategories()
        .then((data) => console.log(data))
        
    },[])
  return (
    <>
      <div>Helllo wishes</div>
      <div></div>
    </>
  )
}

