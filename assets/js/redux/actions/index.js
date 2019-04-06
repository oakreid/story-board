export const login = (login_form) => {
  return (dispatch, getState) => {
    $.ajax("/api/login", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(login_form),
      success: (resp) => {
        dispatch(resolvedLogin(resp.data, login_form.username))
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

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}

export const fcuf = (session) => {
  return {
    type: "FCUF",
    session
  }
}

export const favorite = (session) => {
  return {
    type: "FAVORITE",
    session
  }
}

export const unfavorite = () => {
  return {
    type: "UNFAVORITE"
  }
}

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

const resolvedLogin = (session, username) => {
  return {
    type: "LOGIN",
    session,
    username
  }
}

const resolvedSearch = (search_results) => {
  return {
    type: "NEWSAPI_SEARCH",
    search_results
  }
}
