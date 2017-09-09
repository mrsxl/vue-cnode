import axios from 'axios'
import * as types from "./mutation-types"

axios.defaults.baseURL = "https://cnodejs.org/api/v1";

export const toogleTab = ({ commit }, data) => {
	commit(types.SET_ACTIVE_TAB, data);

	
}

export const fetchTopicList = ({ commit, state }) => {
	let activeTab = state.tabs.filter(({isActive}) => isActive)[0];

	axios.get('/topics', {
		params:{
			page: state.topicLists[activeTab.tab].page,
			tab: activeTab.tab,
			limit: 15,
			mdrender: true,
		}
	})
}