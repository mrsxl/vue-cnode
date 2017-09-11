import * as types from "../mutation-types";

const state = {
	tabs: [
		{tab: 'all', label: '全部', icon: 'icon-all', isActive: true},
		{tab: 'good', label: '精华', icon: 'icon-good', isActive: false},
		{tab: 'share', label: '分享', icon: 'icon-share', isActive: false},
		{tab: 'job', label: '招聘', icon: 'icon-job', isActive: false},
		{tab: 'ask', label: '问答', icon: 'icon-ask', isActive: false},
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
	},
	scrollerStatus: {
    pullupStatus: 'default'
  }
};

const getters = {
	tabs: state => state.tabs,
	topicList: state => state.topicLists,
	scrollerStatus: state => state.scrollerStatus
};

const mutations = {
	[types.SET_ACTIVE_TAB] (state, data) {
		state.tabs[data.current].isActive = false;
		state.tabs[data.new].isActive = true;
	},
	[types.UPDATE_LIST] (state, data) {
		state.topicLists[data.tab].data = state.topicLists[data.tab].data.concat(data.list);
		state.topicLists[data.tab].page++;
	},
	[types.UPDATE_SCROLL_TOP] (state, data) {
		state.topicLists[data.tab].scrollTop = data.scrollTop;
	}
};

export default {
	state,
	getters,
	mutations
}