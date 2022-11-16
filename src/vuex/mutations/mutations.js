export default {
  INSERT_LOGIN: (state, login)=>{
    window.localStorage.setItem('login',login)
    window.localStorage.setItem('isUserLoggedIn','1')
    state.isUserLoggedIn = 1
    state.login = login
  },
  INSERT_TOKEN: (state, token)=>{
    window.localStorage.setItem('token',token)
    window.localStorage.setItem('isUserLoggedIn','1')
    state.isUserLoggedIn = 1
    state.token = token

  },
  PICTURES: (state, pictures)=>{
    state.pictures = pictures
  },
  MY_PICTURES: (state, pictures)=>{
    state.my_pictures = pictures
  },
  LOGOUT:(state)=>{
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('isUserLoggedIn')
    window.localStorage.removeItem('login')
    state.isUserLoggedIn = 0
    state.token = ''
    state.login = ''
  }
}
