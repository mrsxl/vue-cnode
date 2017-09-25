<template>
	<div class="login" :style="{height: clientHeight+'px'}">
		<x-header :left-options="{backText: ''}" style="background:transparent" class="header">
			<div slot="overwrite-left" class="back" @click="back"></div>
		</x-header>
		<div class="main">
			<img src="../assets/img/logo.png" class="logo">
			<input type="text" placeholder="Access Token" v-model="token">
			<button @click="login">登 录</button>
		</div>
		<footer>
			<p>PC端登录cnodejs.org后，在设置页可以找到Access Token</p>
		</footer>
		<div v-transfer-dom>
      <popup v-model="showWarn" position="top" :show-mask="false">
        <div class="warn">{{warnText}}</div>
      </popup>
    </div>
	</div>
</template>

<script>
	import { TransferDom, XHeader, Popup } from 'vux'
	import { getClientHeight } from '../utils'

	export default {
		directives: {
	    TransferDom
	  },
		components: {
			XHeader,
			Popup
		},
		data () {
			return {
				showWarn: false,
				warnText: '',
				token: ''
			}
		},
		computed: {
			clientHeight () {
				return getClientHeight();
			}
		},
		methods: {
			back () {
				this.$router.goBack();
			},
			login () {
				if (this.token === '') {
					this.showWarn = true;
					this.warnText = '请输入Access Token';
				} else {
					this.$store.dispatch('login', this.token).then(res => {
						let redirect = decodeURIComponent(this.$route.query.redirect || '/');
	          this.$router.replace({path: redirect});
					}).catch(err => {
						this.showWarn = true;
						this.warnText = '错误的Access Token';
					})
				}
			}, 
		},
		watch: {
	    showWarn (val) {
	      if (val) {
	        setTimeout(() => {
	          this.showWarn = false
	        }, 2000)
	      }
	    }
	  }
	}
</script>

<style lang="less" scoped>
	.login {
		position: relative;
		background: linear-gradient(143deg, #4dc2c4,#69ddd3,#88e9d8,#69e1d4);
		
		.header {
			.back {
				height: 15px;
		    width: 15px;
		    border: 1px solid #fff;
		    border-right: none;
		    border-bottom: none;
		    transform: rotate(-45deg);
			}
		}
		.main {
			display: flex;
			flex-direction: column;
			align-items: center;

			img{
				margin: 70px 0;
				width: 70%;
			}
			input {		
				outline: none;		    
		    padding: 10px;
		    width: 70%;
		    border-radius: 5px;
		    border: none;
		    font-size: 14px;
			}
			button {
				margin-top: 20px;
				width: 75%;
		    height: 35px;		    
		    border: 1px solid #69e1d4;		    
		    border-radius: 5px;
		    background: #fff;
		    color: #69e1d4;
		    font-size: 14px;		    
			}
		}
		footer {
			position: absolute;
			bottom: 30px;
			width: 100%;
			height: 50px;
			line-height: 50px;

			p {
				text-align: center;
				color: #fff;
				font-size: 12px;
			}
		}
	}
	.warn {
		background-color: #fff;
	  color: #69e1d4;
	  text-align: center;
	  padding: 10px;
	}
</style>