<template>
	<div>
		<x-header :left-options="{backText: ''}" style="background:linear-gradient(143deg,#4dc2c4,#69ddd3,#88e9d8,#69e1d4);" class="header">
			<div slot="overwrite-left" class="back" @click="back"></div>
			<span>评论 {{topic.reply_count}}</span>
		</x-header>
		<no-data :overwrite-img="true" v-if="topic !== '' && topic.replies.length === 0">
			<img src="../assets/img/news.png" slot="img">
			<span>还没有评论</span>
		</no-data>
		<scroller height="-90" lock-x ref="scroller" @on-scroll="scroll" class="scroller" v-else>
			<ul class="comments-list">
        <li v-for="(item, index) in topic.replies">
        	<comment-item :comment="item" :floor="index+1" v-on:action="action"></comment-item>      
        </li>
      </ul>
			
    </scroller>

    <top :show="showBacktoTop" @click.native="backtoTop"></top>
    <reply :reply="reply" v-on:cancel="cancelReply"></reply>
	</div>	
</template>

<script>
	import { XHeader, Scroller } from 'vux'
	import CommentItem from '../components/commentItem.vue'
	import Top from '../components/backtoTop.vue'
	import Reply from '../components/reply.vue'
	import NoData from '../components/noData.vue'
	import { mapGetters } from 'vuex'

	export default {
		components: {
			XHeader,
			Scroller,
			CommentItem,
			Top,
			Reply,
			NoData
		},
		mounted () {
			this.getComments();
		},
		data () {
			return {
				topic: '',
				showBacktoTop: false,
				reply: {}
			}
		},
		computed: {
			...mapGetters(['token'])
		},
		methods: {
			//获取帖子详情
			getComments () {
				this.$http.get('/topic/'+this.$route.params.topicId).then(res => {
					if (res.data.success) {
						this.topic = res.data.data
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
			},
			back () {
				this.$router.goBack();
			},
			action (item) {
				this.isLogin();
				if (item.type === 'ups') {
					
				} else {
					this.reply = item;
				}
				console.log(item);
			},
			cancelReply () {
				console.log(222);
				this.reply = {};
			},
			//判断是否登录，如果未登录转到登录页
			isLogin () {
				if (this.token === '') {
					this.$router.push({name: 'login', params: {redirect: encodeURIComponent(this.$route.path)}});
				}
			}
		}
	}
</script>

<style lang="less" scoped>
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
	.scroller {
		background: #fff;
	
		.comments-list {
			li {
		    padding: 10px 15px;
		    border-bottom: 1px solid #eee;
		    background: #fff;
		  }
		}
	}	
</style>


