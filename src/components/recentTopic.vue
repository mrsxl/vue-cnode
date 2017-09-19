<template>
	<router-link :to="{name: 'topic', params: {topicId: recent.id}}" class="topic-item">
		<img :src="recent.author.avatar_url">
		<div class="info">
			<h4 class="title">{{recent.title}}</h4>
			<div class="u-bottom">
				<span>{{recent.author.loginname}}</span>
				<span>{{formateTime(recent.last_reply_at)}}</span>
			</div>
		</div>
	</router-link>
</template>

<script>
	import { formateTime } from '../utils'

	export default {
		props: {
      recent: {
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
	.topic-item {
		display: flex;
		align-items: center;
		padding: 10px 15px;
		border-bottom: 1px solid #eee;
		color: #333;

		img {
			display: inline-block;
			margin-right: 10px;
      width: 40px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 50%;
		}

		.info {
			width: 85%;
			
			.title {
				color: #2c3e50;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    overflow: hidden;
			}
			.u-bottom {				
				display: flex;
				justify-content: space-between;
				width: 100%;
				margin-top: 5px;
				font-size: 13px;
				color: #777;
			}
		}
	}
</style>