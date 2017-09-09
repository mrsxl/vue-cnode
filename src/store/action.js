import axios from 'axios'
import * as types from "./mutation-types"

axios.defaults.baseURL = "https://cnodejs.org/api/v1";

//更换当前活动的tab
export const toogleTab = ({ dispatch, commit, state }, data) => {
	commit(types.SET_ACTIVE_TAB, data);

	if (state.topic.topicLists[data.tab].data.length === 0) {
		dispatch('fetchTopicList');
	}
	
}

//请求主题列表
export const fetchTopicList = ({ commit, state }) => {
	let activeTab = state.topic.tabs.filter(({isActive}) => isActive)[0];

	axios.get('/topics', {
		params: {
			page: state.topic.topicLists[activeTab.tab].page,
			tab: activeTab.tab,
			limit: 15,
			mdrender: true,
		}
	}).then( res => {
		if (res.data.success) {
			commit(types.UPDATE_LIST, {tab: activeTab.tab, list: res.data.data});
		} else {
			//错误处理
		}
	}).catch( err => {
	  console.log(err);
	});
}

//记录当前活动列表的滚动位置
export const updateScrollTop = ({ commit }, data) => {
	commit(types.UPDATE_SCROLL_TOP, data)
}


