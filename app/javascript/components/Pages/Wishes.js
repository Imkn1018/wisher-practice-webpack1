import React, {useEffect,useReducer} from 'react'
import {useGetWishes} from "../../api/Wishes";

import {
  initialState,
  wishesActionTyps,
  wishesReducer,
} from '../../reducers/Wishes';

export const Wishes = () =>  {
  const [state, dispatch] = useReducer(wishesReducer, initialState)
  useEffect(() => {
    dispatch({ type: wishesActionTyps.FETCHING });
    useGetWishes()
    .then((data) => 
    dispatch({
    type: wishesActionTyps.FETCH_SUCCESS,
    payload: {
      wishes: data.wishes
    }
    })
    )
    },[])
  return (
    <>
      <div>Helllo wishes</div>
      <div></div>
      {
        state.wishesList.map(wish =>
          <div key={wish.id}>
            {wish.wish_title}
          </div>
        )
      }
    </>
  )
}

