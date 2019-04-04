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
