export const login = (login_form) => {
  return {
    type: "LOGIN",
    login_form
  }
}

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}

export const register = (login_form) => {
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
