<template>
	<div>
		<x-header>
			 	<span>{{activeTab.label}}</span>
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
        <side-bar v-on:hide="hide"></side-bar>
      </popup>
    </div>
    <top :show="showBacktoTop" @click.native="backtoTop" />
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'	
	import { TransferDom, XHeader, Popup, Scroller } from 'vux'
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
			SideBar,
			Posts,
			Top
		},
		mounted() {
			this.getList();
			if(this.topicList.all.data.length === 0) {
				this.$store.dispatch('fetchTopicList');	
			}			
		},
		data () {
			return {
				showSideBar: false,
				showBacktoTop: false, //是否显示顶部组件
				currentScrollTop: 0
			}
		},
		computed: {
			...mapGetters([
				'tabs',
				'topicList'
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

			},
			//列表滚动
			scroll (pos) {
				this.currentScrollTop = pos.top;
				this.showBacktoTop = pos.top > 200;
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
			}
		},
		watch: {
			posts (val) {
				let scrollTop = this.topicList[this.activeTab.tab].scrollTop;

				this.$nextTick(() => {
				  this.$refs.scroller.reset({top: scrollTop})
				})
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
</style>