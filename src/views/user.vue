<template>
	<div class="detail">
		<div class="user-info">
			<img :src="userInfo.avatar_url">
			<h4>{{userInfo.loginname}}</h4>
			<div class="u-bottom">
				<span>注册时间: {{formateTime(userInfo.create_at)}}</span>
				<span>积分: {{userInfo.score}}</span>
			</div>
		</div>
		<tab active-color="#69ddd3" custom-bar-width="80px" class="tab" v-model="tabIndex">
		  <tab-item>最近回复</tab-item>
		  <tab-item>最近发布</tab-item>
		</tab>
		<scroller lock-x ref="scroller" :height="height" class="scroller">
			<ul class="list" v-if="list.length">
				<li v-for="(item,index) in list" :keys="index">
					<recent-topic :recent="item" ></recent-topic>
				</li>				
			</ul>
			<no-data v-else>
				<span>没有内容</span>
			</no-data>
		</scroller>	
		<div class="back" @click="back"><i class="iconfont icon-back"></i></div>
	</div>
</template>

<script>
	import { XHeader, dateFormat, Tab, TabItem, Scroller } from 'vux'
	import RecentTopic from '../components/recentTopic.vue'
	import NoData from '../components/noData.vue'

	export default {
		components: {
			XHeader,
			Tab,
			TabItem,
			Scroller,
			RecentTopic,
			NoData
		},
		mounted () {
			this.getUser();
		},
		data () {
			return {
				userInfo: {},
				tabIndex: 0,
				height: '',
				list: []
			}
		},
		methods: {
			//获取用户信息
			getUser () {
				this.$store.dispatch('getUserInfo', this.$route.params.loginname).then( res => {
					this.userInfo = res.data.data;
					this.list = res.data.data.recent_replies;
					this.reset();
					//异步设置height,防止页面元素未加载完成导致获取的height不准确
					setTimeout(() => {
						this.height = this.getHeight();
					}, 500)
				});
			},
			getHeight () {
				let userInfoHeight = document.querySelector('.user-info').offsetHeight;
				let tabHeight = document.querySelector('.tab').offsetHeight;

				return -(userInfoHeight+tabHeight)+"";
			},
			//格式化时间
      formateTime (time) {
				return dateFormat(new Date(time), 'YYYY-MM-DD');
      },
      //重置滚动
			reset () {
				this.$nextTick(() => {
				  this.$refs.scroller.reset()
				})
			},
			back () {
				this.$router.goBack(-1);
			}
		},
		watch: {
			tabIndex (val) {
				if (val === 0) {
					this.list = this.userInfo.recent_replies;
				} else {
					this.list = this.userInfo.recent_topics;
				}
				this.reset();
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail {

		.header {
			.back {
				height: 15px;
		    width: 15px;
		    border: 1px solid #fff;
		    border-right: none;
		    border-bottom: none;
		    transform: rotate(-45deg);
			}
		}
		
		.user-info {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 10px;
			background: linear-gradient(143deg, #4dc2c4,#69ddd3,#88e9d8,#69e1d4);
			color: #fff;

			img {
				width: 100px;
				height: 100px;
				border-radius: 50%;
			}

			h4 {
				margin: 10px 0;
			}

			.u-bottom {
				display: flex;
				justify-content: space-between;
				width: 100%;
				font-size: 14px;
			}
		}
		
		.scroller {
			background: #fff;

			li {
				display: block;
				width: 100%;
			}
		}
		.back {	 
			position: fixed;
			left: 15px;
	    bottom: 30px;       
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    width: 40px;
	    height: 40px;
	    border-radius: 50%;
	    background: rgba(51, 51, 51, 0.7);
	    color: #fff; 
		}
	}
</style>