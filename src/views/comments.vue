<template>
	<div>
		<x-header :left-options="{backText: ''}" style="background:linear-gradient(143deg,#4dc2c4,#69ddd3,#88e9d8,#69e1d4);" class="header">
			<div slot="overwrite-left" class="back" @click="back"></div>
			<span>评论 {{topic.reply_count}}</span>
		</x-header>
		<no-data :overwrite-img="true" v-if="replies.length === 0">
			<img src="../assets/img/news.png" slot="img">
			<span>还没有评论</span>
		</no-data>
		<scroller height="-90" lock-x ref="scroller" @on-scroll="scroll" class="scroller" v-else>
			<ul class="comments-list">
        <li v-for="(item, index) in replies">
        	<comment-item :comment="item" :floor="index+1" v-on:action="action"></comment-item>      
        </li>
      </ul>
			
    </scroller>

    <top :show="showBacktoTop" @click.native="backtoTop"></top>
    <reply :topic-id="$route.params.topicId" :reply="reply" v-on:hide="hideReply"></reply>
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
				reply: {},
				replies: []
			}
		},
		computed: {
			...mapGetters(['token', 'userInfo'])
		},
		methods: {
			//获取评论列表
			getComments () {
				this.$store.dispatch('getTopic', this.$route.params.topicId).then(res => {
					if(res.data.success) {
						this.replies = res.data.data.replies;
					}

					this.$nextTick(() => {
					  this.$refs.scroller.reset()
					})
				})
			},
			//点赞
			ups (item) {
				let index = this.replies.indexOf(item);
				this.$store.dispatch('ups', item.id).then(res => {
					if(res.data.success) {
						if (res.data.action === 'down') {
							let upIndex = this.replies[index].ups.indexOf(this.userInfo.id);
							if (upIndex >= 0) {
								this.replies[index].ups.splice(upIndex, 1);
							}
							this.replies[index].is_uped = false;
						} else {
							this.replies[index].is_uped = true;
							this.replies[index].ups.push(this.userInfo.id);
						}
					}
				}).catch(err => {
					this.$vux.toast.text(err.response.data.error_msg, 'center')
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
				if (item.type === 'up') {
					this.ups(item.item);
				} else {
					this.reply = item.item;
				}
			},
			//隐藏回复
			hideReply (params) {
				if (params.type === 'push') {
					let time = new Date();
					this.replies.push({
						id: params.id,
            author: {
                loginname: this.userInfo.loginname,
                avatar_url: this.userInfo.avatar_url
            },
            content: params.content,
            ups: [],
            create_at: time
					})

					this.$nextTick(() => {
					  this.$refs.scroller.reset()
					})
				}
				this.reply = {};
			},
			//判断是否登录，如果未登录转到登录页
			isLogin () {
				if (this.token === '') {
					this.$router.push({path: '/login', query: {redirect: encodeURIComponent(this.$route.path)}});
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


