<template>
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
</template>

<style lang="less" scoped>
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
	    height: 40px;
	    line-height: 40px;
	    font-size: 16px;
	    color: #333;

	    i {
	      margin: 0 10px;
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