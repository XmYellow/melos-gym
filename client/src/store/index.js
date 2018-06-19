import Vue from 'vue'
import Vuex from 'vuex'
import home from './../views/Home/home.store'

const state = {}
const getters = {}
const mutations = {}
const actions = {}

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    home
  }
})
export default store
