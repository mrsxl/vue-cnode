<template>
	<div>
		<x-header style="background: linear-gradient(143deg, #4dc2c4,#69ddd3,#88e9d8,#69e1d4);">
			 	<span>{{activeTab.label}}</span>
	      <div  @click="showSideBar = true" slot="overwrite-left">
	      	<x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
	      </div>
		</x-header>
		<scroller height="-46" lock-x ref="scroller" :use-pullup="true"  v-model="scrollerStatus" @on-scroll="scroll" @on-pullup-loading="pullUp">
      <ul class="posts-list" >
        <li v-for="item in posts">
        	<Posts :posts="item"/>             
        </li>
      </ul>
      <div slot="pullup" :class="[showLoading ? 'loading' : 'load']">
        <load-more :tip="loadingText" background-color="transparent" v-if="showLoading"></load-more>
        <load-more :show-loading="false" background-color="transparent" :tip="loadingText" v-else></load-more>
      </div>
    </scroller>
		<div v-transfer-dom>
      <popup v-model="showSideBar" position="left" width="60%">
        <side-bar v-on:hide="hide"></side-bar>
      </popup>
    </div>
    <top :show="showBacktoTop" @click.native="backtoTop" />
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'	
	import { TransferDom, XHeader, Popup, Scroller, LoadMore } from 'vux'
	import SideBar from '../components/sideBar.vue'
	import Posts from '../components/posts.vue'
	import Top from '../components/backtoTop.vue'

	export default {
		directives: {
	    TransferDom
	  },
		components: {
			XHeader,
			Popup,
			Scroller,
			LoadMore,
			SideBar,
			Posts,
			Top
		},
		mounted() {
			if(this.topicList.all.data.length === 0) {
				this.getList();	
			}			
		},
		data () {
			return {
				showSideBar: false,
				showBacktoTop: false, //是否显示顶部组件
				currentScrollTop: 0,
				showLoading: false,
				loadingText: '上拉加载',
        scrollerStatus: {
          pullupStatus: 'default'
        }
			}
		},
		computed: {
			...mapGetters([
				'tabs',
				'topicList',
				'isLoading'
			]),
			//当前显示的tab 
			activeTab () {
				return this.tabs.find(item => item.isActive);
			},
			//帖子列表
			posts () {
				return this.topicList[this.activeTab.tab].data;
			}
		},
		methods: {
			//获取主题列表
			getList () {
				this.$store.dispatch('fetchTopicList');
			},
			//列表滚动
			scroll (pos) {
				this.currentScrollTop = pos.top;
				this.showBacktoTop = pos.top > 200;
			},
			//重置滚动
			reset () {
				let scrollTop = this.topicList[this.activeTab.tab].scrollTop;
				//重置滚动位置
				this.$nextTick(() => {
				  this.$refs.scroller.reset({top: scrollTop}, 1, 'ease')
				})
			},
			//隐藏侧边菜单
			hide () {				
				this.updateScrollTop();
				this.showSideBar = false;
			},
			//记录滚动位置
			updateScrollTop () {
				this.$store.dispatch('updateScrollTop', {
					tab: this.tabs.find(item => item.isActive).tab,
					scrollTop: this.currentScrollTop < 0 ? 0 : this.currentScrollTop
				});
			},
			//返回顶部
			backtoTop () {
				this.$refs.scroller.reset({top: 0});
				this.showBacktoTop = false;
			},
			//上拉加载
			pullUp () {
				this.showLoading = true;
				this.updateScrollTop();
				this.getList();
			}
		},
		watch: {
			posts (val) {
				let scrollTop = this.topicList[this.activeTab.tab].scrollTop;
				//重置滚动位置
				this.$nextTick(() => {
				  this.$refs.scroller.reset({top: scrollTop})
				})
			},
			isLoading (val) {
				if(!val) {
					this.scrollerStatus.pullupStatus = 'default';
				}
			}
		},
		beforeDestroy () {
			this.updateScrollTop();
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
	.weui-loadmore_line {
     margin-top: 1.5em; 
	}
	.loading div {
		margin-top: .5em;
	}
</style>