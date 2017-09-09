import * as types from "../mutation-types";

const state = {
	tabs: [
		{tab: 'all', label: '全部', isActive: false},
		{tab: 'good', label: '精华', isActive: false},
		{tab: 'share', label: '分享', isActive: false},
		{tab: 'job', label: '招聘', isActive: true},
		{tab: 'ask', label: '问答', isActive: false},
	],
	topicLists: {
		all: {
			data: [],
			page: 1,
			scrollTop: 0
		},
		good: {
			data: [],
			page: 1,
			scrollTop: 0
		},
		share: {
			data: [],
			page: 1,
			scrollTop: 0
		},
		job: {
			data: [],
			page: 1,
			scrollTop: 0
		},
		ask: {
			data: [],
			page: 1,
			scrollTop: 0
		},
	}
};

const getters = {
	tabs: state => state.tabs
};

const mutations = {
	[types.SET_ACTIVE_TAB] (state, data) {
		state.tabs[data.current].isActive = false;
		state.tabs[data.new].isActive = true;
	}
};

export default {
	state,
	getters,
	mutations
}