<template>
	<a class="comment-item">
		<div class="comment">
			<!-- <img :src="comment.author.avatar_url"> 		
			<div class="content">
				<div class="commentItem-header">
					<h4>{{comment.author.loginname}}</h4>
					<div>#1</div>
				</div>
				<div class="commentItem-content markdown-body" v-html="comment.content"></div>
				<div class="commentItem-footer">
					<span><i class="iconfont icon-zan"></i>{{comment.ups.length === 0 ? '' : comment.ups.length}}</span><span>回复</span> <span>{{formateTime(comment.create_at)}}</span>
				</div>
			</div> -->
			<div class="commentItem-header">
				<img :src="comment.author.avatar_url">
				<div class="author-info">
					<h4>{{comment.author.loginname}}</h4>
					<time>{{formateTime(comment.create_at)}}</time>
				</div>
				<div class="floor">#1</div>
			</div>
			<div class="commentItem-content markdown-body" v-html="comment.content"></div>
			<div class="commentItem-footer">
				<span><i class="iconfont icon-zan"></i>{{comment.ups.length === 0 ? '' : comment.ups.length}}</span><span>回复</span>
			</div>
		</div>
	</a>
</template>

<script>
	import { formateTime } from '../utils'

	export default {
		props: {
      comment: {
        type: Object
      }
    },
    methods: {
      //格式化时间
      formateTime (time) {
        return formateTime(time);
      }
    }
	}
</script>

<style lang="less" scoped>
	.comment-item {
		display: inline-block;
		width: 100%;
		
		.comment {
			display: flex;
			flex-direction: column;

			.commentItem-header {
				display: flex;
				align-items: center;

				img {
					margin-right: 15px;
		      width: 40px;
		      height: 40px;
		      border: 1px solid #ccc;
		      border-radius: 50%;
				}
				.author-info {
					flex: 2;

					h4 {
						color: #444;
					}
					time {
						font-size: 14px;
						color: #969896;
					}
				}
				.floor {
					flex: 1;
					align-self: flex-start;
					text-align: right;
					color: #80bd01;
				}
			}
			.commentItem-content {
				margin-top: 10px;
				color: #474747;
			}	
			.commentItem-footer {
				text-align: right;
				font-size: 14px;
				line-height: 14px;
				color: #969896;

				span:first-child {
					margin-right: 20px;
				}

				i {
					margin-right: 5px;
					font-size: 14px;
				}
			}
		}
	}
</style>