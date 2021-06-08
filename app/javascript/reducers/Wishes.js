// --- ここから追加 ---
import { REQUEST_STATE } from '../constants';
import { createContext,useReducer} from "react"

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  wishesList: [{
    id: null,
    wish_title: "",
    memo: "",
    wish_image_id: "",
    span: null,
    difficulty: null,
    isComplited: false,
    url: ""
    
    }]
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

export const Store = createContext({
  globalState: initialState,
  setGloabalState: () => null,
});

export const StoreProvider = ({ children }) => {
  const [globalState, setGloabalState] = useReducer(wishesReducer, initialState);
  return (
    <Store.Provider value={{ globalState, setGloabalState }}>
      {children}
    </Store.Provider>
  );
};

