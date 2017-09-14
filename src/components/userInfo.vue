<template>
	<div class="user-info">
		<div class="no-login" v-if="userInfo === null">
			<img src="../assets/img/head.png" @click="toLogin">
			<span>点击头像登录</span>
		</div>
		<div class="logged" v-else>
			<div class="info">
				<img :src="userInfo.avatar_url">
				<span>{{userInfo.loginname}}</span>
			</div>
			<button @click="logOut">注销</button>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			userInfo: null,
		},
		methods: {
			toLogin () {
				this.$router.push({name: 'login'});
			},
			logOut () {
				this.$store.dispatch('logOut');
			}
		}
	}
</script>

<style lang="less" scoped>
	.user-info {
		width: 100%;
		height: 100%;

		.no-login, .logged, .info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.info {
			position: relative;
			width: 100%;
		}
		.info:after {
			content: '';
			position: absolute;
			top: 45%;
			right: 15px;
			width: 10px;
			height: 10px;
			border: 2px solid #fff;
			border-left: none;
			border-bottom: none;
			transform: rotate(45deg);
		}
		.no-login, .logged {
			height: 100%;			

			img {
				border-radius: 50%;
				width: 70px;
				height: 70px;
			}
			span {
				margin-top: 5px;
				color: #fff;
				font-size: 16px;
			}
			button {
				margin-top: 5px;
				width: 50px;
				height: 25px;
				border: 1px solid #fff;
				border-radius: 3px;
				background: transparent;
				color: #fff;
			}
		}
	}
</style>