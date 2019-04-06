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
    case "LOGIN":
      return {
        ...state,
        session,
        username
      }
    case "LOGOUT":
      return {
        ...initialState,
        search_results: state.search_results
      }
    case "FCUF":
      return {
        ...state,
        current_user_favorites
      }
    case "FAVORITE":
      return state
    // case "UNFAVORITE":
    //   $.ajax("/api/unfavorite", {
    //     method: "post",
    //     dataType: "json",
    //     contentType: "application/json; charset=UTF-8",
    //     data: JSON.stringify({
    //       id: 1
    //     }), // get the id of the article to unfavorite
    //     success: (resp) => {
    //       return state;
    //     }
    //   });
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
