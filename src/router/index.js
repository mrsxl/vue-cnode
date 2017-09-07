/*
 路由配置
*/

const routes = [{
	path: '/',
	component: resolve => require(['../pages/index.vue'], resolve)
}, {
	path: '/topic/:topicId',
	name: 'topic',
	component: resolve => require(['../pages/topic.vue'], resolve)
}, ];

export default routes;