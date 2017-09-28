<template>
	<div class="reply">
		<textarea placeholder="请输入评论" v-model="content"></textarea>
		<button :class="[content !== '' ? 'submit' : '']" @click="submit">发布</button>
		<div class="reply-to" v-if="Object.keys(reply).length !== 0">
			<div>
				<span>正在回复</span>
				<span>{{reply.author.loginname}}</span>
			</div>
			<button class="cancel" @click="cancelReply">取消回复</button>
		</div>
	</div>
</template>

<script>

	export default {
		props: {
			topicId: String,
			reply: Object
		},
		data () {
			return {
				content: '',
				show: false
			}
		},
		methods: {
			//发布评论
			submit () {
				if (this.content === '') {
					return;
				} else {
					let params = {
						topicId: this.topicId,
						reply: {
							content: this.content
						}						
					};
					if (Object.keys(this.reply).length > 0) {
						params.reply.content = `@${this.reply.author.loginname} ${this.content}`;
						params.reply['reply_id'] = this.reply.id;
					}
					this.$store.dispatch('reply', params).then(res => {
						if(res.data.success) {
							this.content = '';
							this.hide({
								type: 'push',
							  id: res.data.reply_id,
							  content: params.reply.content
							})
						}
					})
				}
			},
			//取消评论
			cancelReply () {
				this.hide({type: 'cancel'});
			},
			hide (params) {
				this.$emit('hide', params);
			}
		}
	}
</script>

<style lang="less" scoped>
	.reply {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 44px;
		border-top: 1px solid #eee;
		background: #fff;

		textarea {
			padding: 5px;
			width: 80%;
			height: 20px;
			border: none;
			border-radius: 5px;
			font-size: 14px;
			line-height: 1.4;
			background: #eee;
			color: #333;
			outline: none;
			resize: none;
		}

		button {
			width: 10%;
			height: 30px;
			//background: linear-gradient(143deg,#4dc2c4,#69ddd3,#88e9d8,#69e1d4);
			border: none;
			font-size: 14px;
			background: transparent;
			color: #69e1d4;
		}
		.submit {
			font-weight: 700;
			color: #4dc2c4;
		}
		.reply-to {
			position: fixed;
			bottom: 44px;
			left: 0;
			display: flex;
      justify-content: space-between;
      align-items: center;
			width: 100%;
			height: 35px;
			font-size: 14px;
			background: #f7f7f7;
			color: #bbb;
			
			div {
				margin-left: 10px;
			}

			.cancel {
				width: 20%;
				color: #bbb;
			}
		}
	}
</style>