<template>
	<div>
		<x-header :left-options="{backText: ''}" style="background: linear-gradient(143deg, #4dc2c4,#69ddd3,#88e9d8,#69e1d4);">
			<span>登录</span>
		</x-header>
		<div class="main">
			<img src="../assets/img/logo.png" class="logo">
			<input type="text" name="">
			<button>登录</button>
		</div>
		<footer>
			<p>PC端登录nodejs.org后,在设置页可以找到access_token</p>
		</footer>
	</div>
</template>

<script>
	import { XHeader } from 'vux'

	export default {
		components: {
			XHeader
		}
	}
</script>

<style lang="less" scoped>
	
</style>