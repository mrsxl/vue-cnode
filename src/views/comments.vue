<template>
	<div>
		<x-header :left-options="{backText: ''}">
			<span>评论 {{topic.reply_count}}</span>
		</x-header>
		<scroller height="-46" lock-x ref="scroller" @on-scroll="scroll">
      <ul class="comments-list" >
        <li v-for="(item, index) in topic.replies">
        	<comment-item :comment="item" :floor="index+1"></comment-item>      
        </li>
      </ul>
    </scroller>
    <top :show="showBacktoTop" @click.native="backtoTop" />
	</div>	
</template>

<script>
	import { XHeader, Scroller } from 'vux'
	import CommentItem from '../components/commentItem.vue'
	import Top from '../components/backtoTop.vue'


	export default {
		components: {
			XHeader,
			Scroller,
			CommentItem,
			Top
		},
		mounted () {
			this.getComments();
		},
		data () {
			return {
				topic: {},
				showBacktoTop: false,
			}
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
			}
		}
	}
</script>

<style lang="less" scoped>
	.comments-list {
		li {
	    padding: 10px 15px;
	    border-bottom: 1px solid #eee;
	    background: #fff;
	  }
	}
</style>


