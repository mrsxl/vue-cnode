/*
 路由配置
*/

const routes = [{
	path: '/',
	component: resolve => require(['../views/index.vue'], resolve)
}, {
	path: '/login',
	name: 'login',
	component: resolve => require(['../views/login.vue'], resolve)
},{
	path: '/topic/:topicId',
	name: 'topic',
	component: resolve => require(['../views/topic.vue'], resolve)
}, {
	path: '/comment/:topicId',
	name: 'comment',
	component: resolve => require(['../views/comments.vue'], resolve)
}, ];

export default routes;