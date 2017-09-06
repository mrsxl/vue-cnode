/*
 路由配置
*/

const routes = [{
	path: '/',
	component: resolve => require(['../pages/index.vue'], resolve)
}, {
	path: '/test',
	component: resolve => require(['../components/popup.vue'], resolve)
}, ];

export default routes;