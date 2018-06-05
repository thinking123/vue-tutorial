import Vue from 'vue'
import Vuex from 'vuex'

// import giftCard from '../modules/giftCard/store/'
import data from './store'

Vue.use(Vuex)

const modules = {
  data
};


const store = new Vuex.Store({
  modules
})


export default store
