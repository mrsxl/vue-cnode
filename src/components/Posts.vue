<template>
	<router-link :to="{name: 'topic', params: {topicId: posts.id}}" class="posts">
		<h3 class="title" 
        :title="getTabInfo(posts.tab, posts.good, posts.top, false)"
        :class="getTabInfo(posts.tab, posts.good, posts.top, true)">{{posts.title}}</h3>
    <div class="content">
      <img :src="posts.author.avatar_url">
      <div class="info">
        <div>
          <span class="name">{{posts.author.loginname}}</span>
          <span class=""><i style="color:#80bd01;">{{posts.reply_count}}</i>/{{posts.visit_count}}</span>
        </div>
        <div>
          <time>发布于{{formateTime(posts.create_at)}}</time>
          <time>最近更新{{formateTime(posts.last_reply_at)}}</time>
        </div>
      </div>
    </div>
	</router-link>
</template>

<script>
  import { getTabInfo, formateTime } from '../utils'

	export default {
    props: {
      posts: {
        type: Object
      }
    },
    methods: {
      //获取不同tab的标题和样式类名
      getTabInfo (tab, good, top, isClass) {
        return getTabInfo(tab, good, top, isClass);
      },
      //格式化时间
      formateTime (time) {
        return formateTime(time);
      }
    }
  }
</script>

<style lang="less" scoped>
  .posts {
    display: inline-block;
    width: 100%;
  }
	h3 {
    font-size: 16px;
    color: #2c3e50;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  h3:before {
    content: attr(title);
    margin-right: 10px;
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 10px;
    
    color: #fff;    
  }
  .top:before {
    background: #80bd01;
  }
  .good:before {
    background: #4dc2c4;
  }
  .share:before {
    background: #42b983;
  }
  .job:before {
    background: #80bd55;
  }
  .ask:before {
    background: #80bd88;
  }
  .none:before {
    background: #ccc;
  }
  .content {
    display: flex;
    margin-top: 10px;

    img {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 50%;
    }
    .info {
      flex: 1;
    }
    .info div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      color: #34495e;

      span, time {
        flex: 1;
      }
      span:last-child, time:last-child {
        text-align: right;
      }
    }
    .info div:first-child {
      margin-bottom: 3px;
    }
  }
</style>