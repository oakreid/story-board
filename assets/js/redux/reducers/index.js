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
  const { session, username, search_results } = action;
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
    // case "FCUF":
    //   $.ajax("/api/fcuf_articles", {
    //     method: "post",
    //     dataType: "json",
    //     contentType: "application/json; charset=UTF-8",
    //     data: JSON.stringify({user_id: state.session.user_id}),
    //     success: (resp) => {
    //       let new_state = _.assign({}, state, { current_user_favorites: resp.data.cuf });
    //       return new_state;
    //     }
    //   });
    // case "FAVORITE":
    //   $.ajax("/api/favorite", {
    //     method: "post",
    //     dataType: "json",
    //     contentType: "application/json; charset=UTF-8",
    //     data: JSON.stringify({
    //       article: {
    //         source: "Lifehacker.com",
    //         author: "David Murphy",
    //         title: "How to Buy a New (Not-AirPower) Charging Pad",
    //         description: "Bad news for Apple fans: AirPower is out. At least, Apple snuck that little announcement in right before the weekend to ensure that nobody would think the big cancellation was a hoax. Read more...",
    //         url: "https://lifehacker.com/how-to-buy-a-new-not-airpower-charging-pad-1833678393",
    //         image: "https://i.kinja-img.com/gawker-media/image/upload/s--Bv9n48Kn--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/rgksmgvhmidpugmmihga.jpg",
    //         user_id: state.session.user_id
    //       }
    //     }), // this is dummy data, replace with real data eventually
    //     success: (resp) => {
    //       return state; // nothing about the state changes
    //     }
    //   });
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
