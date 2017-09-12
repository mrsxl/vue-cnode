<template>
	<div class="user-info">
		<div class="no-login">
			<img src="../assets/img/head.png">
			<span>点击头像登录</span>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.user-info {
		width: 100%;
		height: 100%;

		.no-login {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			img {
				margin-bottom: 15px;
				border-radius: 50%;
				width: 70px;
				height: 70px;
			}
			span {
				color: #fff;
				font-size: 14px;
			}
		}
	}
</style>