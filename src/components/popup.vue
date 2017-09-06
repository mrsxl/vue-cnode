<template>
  <div>
    <x-header>
      <span class="topic-name">主页</span>
      <div slot="overwrite-left" @click="show8 = true">
         <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </div>
      <div slot="right">
        <i class="iconfont icon-yiwen"></i>
      </div>
    </x-header>
    <scroller height="-46" lock-x>
      <ul class="posts-list">
        <li>
          <a>
            <h3 class="title" title="置顶">饿了么大前端 Node.js 进阶教程</h3>
            <div class="content">
              <img src="https://avatars6.githubusercontent.com/u/2081487?v=4&s=120">
              <div class="info">
                <div>
                  <span class="name">追风少年</span>
                  <span class=""><i style="color:#80bd01;">1</i>/20</span>
                </div>
                <div>
                  <time>6个月前</time>
                  <time>4周前</time>
                </div>
              </div>
            </div> 
          </a>         
        </li>
        <!-- new -->
        <li>
          <h3 class="title" title="置顶">饿了么大前端 Node.js 进阶教程</h3>
          <div class="content">
            <img src="https://avatars6.githubusercontent.com/u/2081487?v=4&s=120">
            <div class="info">
              <div>
                <span class="name">追风少年</span>
                <span class=""><i style="color:#80bd01;">1</i>/20</span>
              </div>
              <div>
                <time>6个月前</time>
                <time>4周前</time>
              </div>
            </div>
          </div>          
        </li>
        <li>
          <h3 class="title" title="置顶">饿了么大前端 Node.js 进阶教程</h3>
          <div class="content">
            <img src="https://avatars6.githubusercontent.com/u/2081487?v=4&s=120">
            <div class="info">
              <div>
                <span class="name">追风少年</span>
                <span class=""><i style="color:#80bd01;">1</i>/20</span>
              </div>
              <div>
                <time>6个月前</time>
                <time>4周前</time>
              </div>
            </div>
          </div>          
        </li>
        <li>
          <h3 class="title" title="置顶">饿了么大前端 Node.js 进阶教程</h3>
          <div class="content">
            <img src="https://avatars6.githubusercontent.com/u/2081487?v=4&s=120">
            <div class="info">
              <div>
                <span class="name">追风少年</span>
                <span class=""><i style="color:#80bd01;">1</i>/20</span>
              </div>
              <div>
                <time>6个月前</time>
                <time>4周前</time>
              </div>
            </div>
          </div>          
        </li>
        <li>
          <h3 class="title" title="置顶">饿了么大前端 Node.js 进阶教程</h3>
          <div class="content">
            <img src="https://avatars6.githubusercontent.com/u/2081487?v=4&s=120">
            <div class="info">
              <div>
                <span class="name">追风少年</span>
                <span class=""><i style="color:#80bd01;">1</i>/20</span>
              </div>
              <div>
                <time>6个月前</time>
                <time>4周前</time>
              </div>
            </div>
          </div>          
        </li>
        <li>
          <h3 class="title" title="置顶">饿了么大前端 Node.js 进阶教程</h3>
          <div class="content">
            <img src="https://avatars6.githubusercontent.com/u/2081487?v=4&s=120">
            <div class="info">
              <div>
                <span class="name">追风少年</span>
                <span class=""><i style="color:#80bd01;">1</i>/20</span>
              </div>
              <div>
                <time>6个月前</time>
                <time>4周前</time>
              </div>
            </div>
          </div>          
        </li>
        <li>
          <h3 class="title" title="置顶">饿了么大前端 Node.js 进阶教程</h3>
          <div class="content">
            <img src="https://avatars6.githubusercontent.com/u/2081487?v=4&s=120">
            <div class="info">
              <div>
                <span class="name">追风少年</span>
                <span class=""><i style="color:#80bd01;">1</i>/20</span>
              </div>
              <div>
                <time>6个月前</time>
                <time>4周前</time>
              </div>
            </div>
          </div>          
        </li>  
        <!-- new -->
      </ul>
    </scroller>
    <!-- 23333 -->
    <div v-transfer-dom>
      <popup v-model="show8" position="left" width="80%">
        <div class="side">
          <header class="head"></header>
          <div class="topics">
            <ul>
              <li class="active"><i class="iconfont icon-yiwen"></i>全部</li>
              <li><i class="iconfont icon-yiwen"></i>精华</li>
              <li><i class="iconfont icon-yiwen"></i>分享</li>
              <li><i class="iconfont icon-yiwen"></i>招聘</li>
              <li><i class="iconfont icon-yiwen"></i>问答</li>
            </ul>
          </div>
          <footer>
            <ul>
              <li><i class="iconfont icon-yiwen"></i>消息</li>
              <li><i class="iconfont icon-yiwen"></i>关于</li>
            </ul>
          </footer>
        </div>
      </popup>
    </div>
    <!-- 2333 -->
  </div>
</template>

<script>
import { TransferDom, Popup, Group, Scroller, XHeader } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Group,
    Scroller,
    XHeader
  },
  data () {
    return {
      show8: false,
    }
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close.less';

.posts-list {
  li {
    margin-bottom: 5px; 
    padding: 10px 15px;
    //border-bottom: 1px solid #d9d9d9;
    background: #fff;

    h3 {
      font-size: 16px;
      color: #2c3e50;
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
  }
}

.side {
  position: relative;
  height: 100%;
  background: #fff;

  header {
    height: 20%;
    background: linear-gradient(143deg, #4dc2c4,#69ddd3,#88e9d8,#69e1d4);
  }
  .topics {
    margin-top: 5px;
  }
  li {
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: 0.4rem;
    color: #333;

    i {
      margin: 0 0.3rem;
    }
  }
  .active {
    background: #eee;
  }
  footer {
    border-top: 1px solid #eee;
  }
}
</style>