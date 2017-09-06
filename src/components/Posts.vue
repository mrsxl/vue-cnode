<template>
	<a class="posts">
		<h3 class="title" title="置顶">{{posts.title}}</h3>
    <div class="content">
      <img :src="posts.author.avatar_url" @click="lg">
      <div class="info">
        <div>
          <span class="name">{{posts.author.loginname}}</span>
          <span class=""><i style="color:#80bd01;">{{posts.reply_count}}</i>/{{posts.visit_count}}</span>
        </div>
        <div>
          <time>6个月前</time>
          <time>4周前</time>
        </div>
      </div>
    </div>
	</a>
</template>

<script>
	export default {
    props: {
      posts: {
        type: Object
      }
    },
    methods: {
      lg() {
        console.log(this.posts)
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
    background: #80bd01;
    color: #fff;    
  }
  .content {
    display: flex;
    margin-top: 10px;

    img {
      margin-right: 10px;
      width: 40px;
      height: 40px;
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