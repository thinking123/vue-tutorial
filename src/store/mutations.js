import {SIDEBAR , LOADING} from './mutation-types'

export default {
  [SIDEBAR](state , isShow){
    state.showSideBar = isShow
    // localStorage.setItem(showSideBar , showSideBar)
  },
  [LOADING](state , loading){
    state.loading = loading
  },

}
