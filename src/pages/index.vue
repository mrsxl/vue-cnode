<template>
	<div>
		<x-header :right-options="{showMore: true}" @on-click-more="showTab = true">
			 	<span>{{topic}}</span>
	      <div  @click="showSideBar = true" slot="overwrite-left">
	      	<x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
	      </div>
		</x-header>
		<scroller height="-46" lock-x ref="scroller">
      <ul class="posts-list" >
        <li v-for="item in posts">
        	<Posts :posts="item"/>             
        </li>
        <!-- new -->
        <!-- new -->
      </ul>
    </scroller>
		<div v-transfer-dom>
      <popup v-model="showSideBar" position="left" width="60%">
        <side-bar></side-bar>
      </popup>
    </div>
	</div>
</template>

<script>	
	import { TransferDom, XHeader, Popup, Scroller } from 'vux'
	import SideBar from '../components/SideBar.vue'
	import Posts from '../components/Posts.vue'

	export default {
		directives: {
	    TransferDom
	  },
		components: {
			XHeader,
			Popup,
			Scroller,
			SideBar,
			Posts
		},
		mounted() {
			this.getList();
		},
		data () {
			return {
				showSideBar: false,
				showTab: false,
				topic: '主页',
				posts: [],
				menus: [{
					label: '主页',
					value: 'topics'
				},{
					label: '问答',
					value: 'ask'
				},{
					label: '分享',
					value: 'share'
				},{
					label: '招聘',
					value: 'job'
				},{
					label: '精华',
					value: 'good'
				}]
			}
		},
		methods: {
			//获取主题列表
			getList () {
				this.$http.get('/topics', {
					params:{
						page: 1,
						tab: 'all',
						limit: 10,
						mdrender: true,
					}
				}).then(res => {
					if (res.data.success) {
						this.posts = res.data.data
					}

					this.$nextTick(() => {
					  this.$refs.scroller.reset()
					})
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.posts-list {
	  li {
	    margin-bottom: 5px; 
	    padding: 10px 15px;
	    background: #fff;

	  }
	}
</style>