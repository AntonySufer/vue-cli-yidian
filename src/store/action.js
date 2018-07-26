import * as types from './mutation-types.js'

export default{
  showloader:({ commit }) => {
    commit( types.SHOWLOADING )
  },
  hideloader:({ commit }) => {
    commit( types.HIDELOADING )
  },
  showBar:({ commit }) => {
    commit( types.SHOWBAR )
  },
  hideBar:({ commit }) => {
    commit( types.HIDEBAR )
  },
  getUser:({ commit }) => {
    commit( types.GETUSERINFO )
  },
  setUser:({ commit }) => {
    commit( types.SETUSERINFO )
  },
}
