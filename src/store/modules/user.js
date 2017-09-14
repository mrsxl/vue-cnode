import * as types from "../mutation-types.js";

const state = {
	userInfo: null
};

const getters = {
	userInfo: state => state.userInfo
};

const mutations = {
	[types.SET_USER_INFO] (state, data) {
		sessionStorage.setItem('userInfo', JSON.stringify(data));
		state.userInfo = data;
	},
	[types.LOGOUT] (state) {
		sessionStorage.removeItem('userInfo');
		state.userInfo = null;
	}
};

export default {
	state,
	getters,
	mutations
}