<template>
	<div class="iconfont icon-totop" v-show="show"></div>
</template>

<script>
	export default {
		props: {
			show: true
		},
		methods: {
			backtoTop () {
				//this.
			}
		}
	}
</script>

<style lang="less" scoped>
	.icon-totop {
		position: fixed;
		right: 15px;
		bottom: 80px;
		display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(51, 51, 51, 0.7);
    color: #fff;
    font-size: 20px;
    
	}
</style>