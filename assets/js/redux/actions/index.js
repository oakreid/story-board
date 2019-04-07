export const login = (login_form) => {
  return (dispatch, getState) => {
    $.ajax("/api/login", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(login_form),
      success: (resp) => {
        dispatch(fcuf(resp.data, login_form.username))
    }
  })
}};

export const register = (login_form) => {
  return (dispatch, getState) => {
  $.ajax("/api/register", {
    method: "post",
    dataType: "json",
    contentType: "application/json; charset=UTF-8",
    data: JSON.stringify(login_form),
    success: (resp) => {
      dispatch(login(login_form))
    }
  })
}};

export const favorite = (article, session, username) => {
  return (dispatch, getState) => {
    $.ajax("/api/favorite", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(article),
        success: (resp) => {
          dispatch(fcuf(session, username))
        }
      });
    }
  };

export const unfavorite = (id, session, username) => {
  return (dispatch, getState) => {
    $.ajax("/api/unfavorite", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(id), // get the id of the article to unfavorite
        success: (resp) => {
          dispatch(fcuf(session, username));
        }
      });
    }
  };

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}

const fcuf = (session, username) => {
  const { user_id } = session;
  return (dispatch, getState) => {
    $.ajax("/api/fcuf_articles", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({user_id}),
      success: (resp) => {
        dispatch(resolvedFCUF(session, username, resp.data.cuf))
      }
    });
  }
};

export const newsapi_search = (search_bar) => {
  return (dispatch, getState) => {
    $.ajax("/api/newsapi_search", {
        method: "post",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify({
          search_phrase: search_bar
        }),
        success: (resp) => {
          dispatch(resolvedSearch(resp.data.sr))
        }
      })
    }
}

const resolvedSearch = (search_results) => {
  return {
    type: "NEWSAPI_SEARCH",
    search_results
  }
}

const resolvedFCUF = (session, username, current_user_favorites) => {
  return {
    type: "FCUF",
    session,
    username,
    current_user_favorites
  }
}
