<template>
	<a class="comment-item">
		<div class="comment">
			<img :src="comment.author.avatar_url"> 		
			<div class="content">
				<div class="commentItem-header">
					<h4>{{comment.author.loginname}}</h4>
					<div>#1</div>
				</div>
				<div class="commentItem-content markdown-body" v-html="comment.content"></div>
				<div class="commentItem-footer">
					<span><i class="iconfont icon-zan"></i>{{comment.ups.length === 0 ? '' : comment.ups.length}}</span><span>回复</span> <span>{{formateTime(comment.create_at)}}</span>
				</div>
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

			img {
	  		margin-right: 10px;
	      width: 40px;
	      height: 40px;
	      border: 1px solid #ccc;
	      border-radius: 50%;
	  	}
	  	.content {
	  		flex: 1;
				
				.commentItem-header {
					display: flex;

					* {
						flex: 1;
					}
					div{
						text-align: right;
					}
				}
				.commentItem-content {
					margin: 5px 0 10px;
				}	
				.commentItem-footer {
					font-size: 14px;
					line-height: 14px;
					color: #969896;

					span {
						margin-right: 15px;

						i {
							margin-right: 5px;
							font-size: 14px;
						}
					}
				}
	  	}
		}
	}
</style>