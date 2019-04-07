import { combineReducers } from 'redux';
import _ from 'lodash';

const initialState = {
  username: "",
  session: null,
  current_user_favorites: [],
  search_bar: "",
  search_results: []
}

const reducer = (state=initialState, action) => {
  const { session, username, search_results, current_user_favorites } = action;
  switch(action.type) {
    case "LOGOUT":
      return {
        ...initialState,
        search_results: state.search_results
      }
    case "FCUF":
      return {
        ...state,
        session,
        username,
        current_user_favorites
      }
    case "NEWSAPI_SEARCH":
      return {
        ...state,
        search_results
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer
});

export default rootReducer
