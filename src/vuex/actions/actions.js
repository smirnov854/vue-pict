import axios from "axios";

export default {
  SET_LOGIN({commit},login){
    commit('INSERT_LOGIN',login)
  },
  SET_TOKEN({commit},token){
    commit('INSERT_TOKEN',token)
  },
  async GET_PICT_FROM_API({commit},page){
    let dataPromise = await axios.get('pictures?page='+page).then((response)=>response.data);
    await commit('PICTURES',dataPromise.data)
    return dataPromise
  },
  async GET_MY_PICT_FROM_API({commit},page){
    let dataPromise = await axios.get('user-pictures?page='+page).then((response)=>response.data);
    await commit('MY_PICTURES',dataPromise.data)
    return dataPromise
  },
  DO_LOGOUT({commit}){
     commit('LOGOUT')
  }
}