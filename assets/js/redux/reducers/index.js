import { combineReducers } from 'redux';
import _ from 'lodash';

const initialState = {
  login_form: {username: "", password: ""},
  session: null,
  current_user_favorites: [],
  search_bar: ""
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOGIN":
      const { login_form } = action;
      $.ajax("/api/login", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(login_form),
        success: (resp) => {
          let new_state = _.assign({}, state, {session: resp.data});
          console.log(new_state)
          return new_state;
        }
      });
    case "LOGOUT":
      let new_state = _.assign({}, state, {session: null});
      return new_state;
    case "REGISTER":
      $.ajax("/api/register", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(state.login_form),
        success: (resp) => {
          let new_state = _.assign({}, state, {session: resp.data});
          return new_state;
        }
      });
    case "FCUF":
      $.ajax("/api/fcuf_articles", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({user_id: state.session.user_id}),
        success: (resp) => {
          let new_state = _.assign({}, state, { current_user_favorites: resp.data.cuf });
          return new_state;
        }
      });
    case "FAVORITE":
      $.ajax("/api/favorite", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({
          article: {
            source: "Lifehacker.com",
            author: "David Murphy",
            title: "How to Buy a New (Not-AirPower) Charging Pad",
            description: "Bad news for Apple fans: AirPower is out. At least, Apple snuck that little announcement in right before the weekend to ensure that nobody would think the big cancellation was a hoax. Read more...",
            url: "https://lifehacker.com/how-to-buy-a-new-not-airpower-charging-pad-1833678393",
            image: "https://i.kinja-img.com/gawker-media/image/upload/s--Bv9n48Kn--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/rgksmgvhmidpugmmihga.jpg",
            user_id: state.session.user_id
          }
        }), // this is dummy data, replace with real data eventually
        success: (resp) => {
          return state; // nothing about the state changes
        }
      });
    case "UNFAVORITE":
      $.ajax("/api/unfavorite", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({
          id: 1
        }), // get the id of the article to unfavorite
        success: (resp) => {
          return state;
        }
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer
});

export default rootReducer
