import React, {useEffect,useReducer,useState} from 'react'
import {useGetWishes,useCreateWishes} from "../../api/Wishes";
import {useFormik} from "formik"
// import {
//   initialState,
//   wishesActionTyps,
//   wishesReducer,
// } from '../../reducers/Wishes';
import axios from "axios"

export const WishesNew = () =>  {
  const initialState = {
    id: null,
    user_id: null,
    category_id: ,
    wish_title: "",
    memo: "",
    wish_image_id: "",
    span: null,
    difficulty: null,
    isComplited: false,
    url: ""
    
    }

  const [wish, setWish] = useState(initialState)

  const handleInputChange = (e) =>  {
    const target = e.target;
    const value =  target.value;
    const name = target.name;
    setWish({ ...wish, [name]: value });
  }
  const onClickCreate = () => {
    var data = {
      wish_title: wish.wish_title,
    };

    axios.post('/api/v1/wishes', data)
    .then(resp => {
      setWish({
        id: resp.data.id,
        wish_title: resp.data.wish_title,
        isCompleted: resp.data.isCompleted
      });
      
    })
    .catch(e => {
      console.log(e)
    })
  };
  return (
    <>
     <div>New Wishes</div>
      <form >
        <label htmlFor="name">title</label>
        <input
          type="text"
          id="wish_title"
          name="wish_title"
          onChange={handleInputChange}
          value={wish.wish_title}
        />
        <button onClick={onClickCreate} >Create</button>
      </form>
      
    </>
    
  )
}

