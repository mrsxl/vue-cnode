<template>
  <div id="app">
  	<transition :name="transitionName">
  		<router-view class="view"></router-view>
  	</transition>    
  </div>
</template>

<script>
	export default {
	  name: 'app',
	  data () {
	  	return {
	  		transitionName: 'slide-right'
	  	}
	  },
    watch: {
      '$route' (to, from) {
        //监听路由变化时的状态为前进还是后退
        let isBack = this.$router.isBack;

        if (isBack) {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }

        this.$router.isBack = false;
      }
    }
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	@import './assets/css/github.markdown.css';

	body {
	  background-color: #fbf9fe;
	}
	.view {
	  transition: all 1.2s cubic-bezier(.55,0,.1,1);
	}
	.slide-left-enter, .slide-right-leave-active {
    opacity: 0.5;    
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0.5;
    transform: translate(-100%, 0);
  }
</style>
