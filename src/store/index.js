import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import topic from './modules/topic'

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
  modules: {
  	topic
  }
})