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

export const resolvedLogin = (session, username) => {
  return {
    type: "LOGIN",
    session,
    username
  }
}

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}

export const resolvedRegister = (login_form) => {
  return {
    type: "REGISTER",
    login_form
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
  return {
    type: "NEWSAPI_SEARCH",
    search_bar
  }
}
