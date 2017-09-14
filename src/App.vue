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
	  		transitionName: 'slide-left'
	  	}
	  },
	  beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      console.log(isBack);
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
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
		/*position: absolute;
	  width:100%;*/
	  transition: all 1s cubic-bezier(.55,0,.1,1);
	}
	.slide-left-enter, .slide-right-leave-active {
    opacity: 0;    
    transform: translate(100px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    transform: translate(-100px, 0);
  }
</style>
