/*
 路由配置
*/

const routes = [{
	path: '/',
	component: resolve => require(['../views/index.vue'], resolve)
}, {
	path: '/topic/:topicId',
	name: 'topic',
	component: resolve => require(['../views/topic.vue'], resolve)
}, ];

export default routes;