import { SHOWLOADING,HIDELOADING,SHOWBAR,HIDEBAR,SETUSERINFO,GETUSERINFO } from './mutation-types.js'


const mutations = {
  [SHOWLOADING](state){
    state.showLoading = true;
  },
  [HIDELOADING](state){
    state.showLoading = false;
  },
  [SHOWBAR](state){
    state.showBar = true;
  },
  [HIDEBAR](state){
    state.showBar = false;
  },
  [GETUSERINFO](state,userInfo){
    state.getUser = userInfo;
  },
  [SETUSERINFO](state,){
    state.setUser = userInfo
  }
}

export default mutations

