/*
 路由配置
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import * as types from '../store/mutation-types'

Vue.use(VueRouter)

VueRouter.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}

const router = new VueRouter({
	routes: [{
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
	}, ]
})

//页面刷新时，重新赋值userInfo
if(sessionStorage.userInfo) {
	store.commit(types.SET_USER_INFO, JSON.parse(sessionStorage.userInfo));
}

export default router;