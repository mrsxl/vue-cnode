<template>
	<a class="comment-item">
		<div class="comment">
			<div class="commentItem-header">				
				<router-link :to="{name: 'user', params: {loginname: comment.author.loginname}}">
					<img :src="comment.author.avatar_url">
				</router-link>
				<div class="author-info">
					<h4>{{comment.author.loginname}}</h4>
					<time>{{formateTime(comment.create_at)}}</time>
				</div>
				<div class="floor">#{{floor}}</div>
			</div>
			<div class="commentItem-content markdown-body" v-html="comment.content"></div>
			<div class="commentItem-footer">
				<span :class="[comment.is_uped ? 'uped' : '']" @click="action('up')"><i class="iconfont icon-zan"></i>{{comment.ups.length === 0 ? '' : comment.ups.length}}</span>
				<span @click="action('reply')">回复</span>
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
      },
      floor: {
      	type: Number
      }
    },
    methods: {
      //格式化时间
      formateTime (time) {
        return formateTime(time);
      },
      action (type) {
      	this.$emit('action', {
      		type: type,
      		item: this.comment
      	})
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
				.uped {
					color: #69ddd3;
				}
			}
		}
	}
</style>