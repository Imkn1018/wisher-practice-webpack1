// --- ここから追加 ---
import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  wishesList: [],
};

export const wishesActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const wishesReducer = (state, action) => {
  switch (action.type) {
    case wishesActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case wishesActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        wishesList: action.payload.wishes,
      };
    default:
      throw new Error();
  }
}
// --- ここまで追加 ---
