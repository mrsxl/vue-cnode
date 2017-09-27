<template>
	<div class="no-data">
		<img src="../assets/img/nothing.png" v-if="!overwriteImg">
		<slot name="img" v-else></slot>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			overwriteImg: false
		}
	}
</script>

<style lang="less" scoped>
	.no-data {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;

		img {
			width: 80px;
			margin: 20px;
		}

		span {
			font-size: 14px;
			color: #ccc;
		}
	}
</style>