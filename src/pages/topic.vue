<template>
	<div class="topic" :style="{height: clientHeight+'px'}">
		<header v-if="topic.title">
			<img :src="topic.author.avatar_url">
			<div class="info">
				<h4 class="topic-title">{{topic.title}}</h4>
				<time>最近更新 {{formateTime(topic.last_reply_at)}}</time>
			</div>
		</header>
		<div class="markdown-body topic-content" v-html="topic.content"></div>
		<div class="back" @click="back"><i class="iconfont icon-back"></i></div>
		<div class="reply"><i class="iconfont icon-news"></i>{{topic.reply_count}}</div>
		<to-top :show="showBacktoTop" @click.native="backtoTop"></to-top>
	</div>
</template>

<script>
	import { getClientHeight, formateTime } from '../utils'
	import { XHeader }from 'vux'
	import ToTop from '../components/backtoTop.vue'

	export default {
		components: {
			XHeader,
			ToTop
		},
		mounted () {
			this.getTopic();
			this.scroll();
			window.addEventListener('scroll', this.scroll);
		},
		data () {
			return {
				topic: {},
				showBacktoTop: false,
			}
		},
		computed: {
			clientHeight () {
				return getClientHeight();
			}
		},
		methods: {
			//获取帖子详情
			getTopic () {
				this.$http.get('/topic/'+this.$route.params.topicId).then(res => {
					if (res.data.success) {
						this.topic = res.data.data
					}
				})
			},
			//格式化时间
      formateTime (time) {
        return formateTime(time);
      },
      //返回
      back () {
      	this.$router.go(-1);
      },
      //返回顶部
      backtoTop () {
      	document.body.scrollTop = 0;
      },
      scroll () {
      	this.showBacktoTop = window.scrollY > 200;
      }
		},
		beforeDestroy () {
			window.removeEventListener("scroll", this.scroll, false);
		}
	}
</script>

<style lang="less" scoped>
	.topic {
		position: relative;
		background: #fff;

		header {
			display: flex;
			align-items: center;
			padding: 15px;
			color: #fff;
			background: linear-gradient(143deg, #4dc2c4,#69ddd3,#88e9d8,#69e1d4);

			img {
				width: 45px;
				height: 45px;
				border: 1px solid #ccc;
				border-radius: 50%;
				margin-right: 10px;
			}
			.info {
				flex: 1;

				.topic-title {
					font-size: 16px;
				}
				time {
					display: inline-block;
					margin-top: 10px;
					font-size: 12px;
				}
			}
		}
		.topic-content {
			padding: 15px;
			background: #fff;
		}
		.back {			
	    left: 15px;	
		}
		.reply {
	    right: 15px;
	    font-size: 10px;
		}
		.back, .reply {	 
			position: fixed;
	    bottom: 30px;       
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    width: 40px;
	    height: 40px;
	    background: rgba(51, 51, 51, 0.7);
	    color: #fff;
	    border-radius: 50%;

		}
	}
	
</style>