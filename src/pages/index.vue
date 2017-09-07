<template>
	<div>
		<x-header :right-options="{showMore: true}">
			 	<span>{{topic}}</span>
	      <div  @click="showSideBar = true" slot="overwrite-left">
	      	<x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
	      </div>
		</x-header>
		<scroller height="-46" lock-x ref="scroller" @on-scroll="scroll">
      <ul class="posts-list" >
        <li v-for="item in posts">
        	<Posts :posts="item"/>             
        </li>
      </ul>
    </scroller>
		<div v-transfer-dom>
      <popup v-model="showSideBar" position="left" width="60%">
        <side-bar></side-bar>
      </popup>
    </div>
    <to-top :show="showBacktoTop" @click.native="backtoTop"></to-top>
	</div>
</template>

<script>	
	import { TransferDom, XHeader, Popup, Scroller } from 'vux'
	import SideBar from '../components/SideBar.vue'
	import Posts from '../components/Posts.vue'
	import ToTop from '../components/backtoTop.vue'; 

	export default {
		directives: {
	    TransferDom
	  },
		components: {
			XHeader,
			Popup,
			Scroller,
			SideBar,
			Posts,
			ToTop
		},
		mounted() {
			this.getList();
		},
		data () {
			return {
				showSideBar: false,
				showBacktoTop: false,
				topic: '主页',
				posts: [],
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
			},
			//列表滚动
			scroll (pos) {
				this.showBacktoTop = pos.top > 200;
			},
			//返回顶部
			backtoTop () {
				this.$refs.scroller.reset({top: 0});
				this.showBacktoTop = false;
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