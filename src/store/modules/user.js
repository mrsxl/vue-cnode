import * as types from "../mutation-types.js";

const state = {
	userInfo: null,
	token: ''
};

const getters = {
	userInfo: state => state.userInfo,
	token: state => state.token,
};

const mutations = {
	[types.SET_USER_INFO] (state, data) {
		sessionStorage.setItem('userInfo', JSON.stringify(data));
		state.userInfo = data;
		state.token = data.token;
	},
	[types.LOGOUT] (state) {
		sessionStorage.removeItem('userInfo');
		state.userInfo = null;
		state.token = '';
	}
};

export default {
	state,
	getters,
	mutations
}