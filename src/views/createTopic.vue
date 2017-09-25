<template>
	<div>
		<x-header :left-options="{backText: ''}" style="background:linear-gradient(143deg,#4dc2c4,#69ddd3,#88e9d8,#69e1d4);" class="header">
			<div slot="overwrite-left" class="back" @click="back"></div>
			<span>发布帖子</span>
			<span slot="right" class="submit" @click="submit">发布</span>
		</x-header>
		<group :gutter="0" labelWidth="50">
			<popup-picker :data="tab" v-model="selectedTab" value-text-align="left" :show-name="true" placeholder="请选择板块" class="tab">
				<span slot="title" class="label"><i class="iconfont icon-all"></i></span>	
			</popup-picker>
			<x-input placeholder="标题字数10字以上" v-model="title" class="title">
				<span slot="label" class="label"><i class="iconfont icon-title"></i></span>
			</x-input>
			<x-textarea placeholder="内容字数30字以上" :height="height" v-model="content" class="content"></x-textarea>
		</group>
		<div v-transfer-dom>
      <popup v-model="showWarn" position="top" :show-mask="false">
        <div class="warn">{{warnText}}</div>
      </popup>
    </div>
	</div>
</template>

<script>
	import { TransferDom, XHeader, PopupPicker, XInput, XTextarea, Group, Popup } from 'vux'

	export default {
		directives: {
	    TransferDom
	  },
		components: {
			XHeader,
			PopupPicker,
			XInput,
			XTextarea,
			Group,
			Popup
		},
		mounted() {
			this.setHeight();
		},
		data () {
			return {
				//tab: [['分享', '问答', '招聘', '测试']],
				tab: [[{
					name: '分享',
					value: 'share'
				}, {
					name: '问答',
					value: 'ask'
				}, {
					name: '招聘',
					value: 'job'
				}, {
					name: '客户端测试',
					value: 'dev'
				}]],
				selectedTab: [],
				title: '',
				content: '',
				height: 0,
				showWarn: false,
				warnText: ''
			}
		},
		methods: {
			setHeight () {
				setTimeout(() => {
					let winHeight = document.documentElement.clientHeight;
					let headerHeight = document.querySelector('.header').offsetHeight;
					let tabHeight = document.querySelector('.tab').offsetHeight;
					let titleHeight = document.querySelector('.title').offsetHeight;
					
					this.height =  winHeight - headerHeight - tabHeight - titleHeight - 20;
				}, 500)
			},
			back () {
				this.$router.goBack();
			},
			//发布
			submit () {
				if (this.selectedTab.length === 0) {
					this.showWarn = true;
					this.warnText = '请选择一个版块';
				} else if (this.title === "") {
					this.showWarn = true;
					this.warnText = '请输入标题';
				} else if (this.title.length < 10) {
					this.showWarn = true;
					this.warnText = '标题字数10字以上';
				} else if (this.content === "") {
					this.showWarn = true;
					this.warnText = '请输入输入内容';
				}else if (this.content.length < 30) {
					this.showWarn = true;
					this.warnText = '内容字数30字以上';
				} else {
					this.$store.dispatch('createTopic', {
						tab: this.selectedTab[0],						
						title: this.title,
						content: this.content
					}).then(res => {
						if (res.data.success) {
							this.$router.replace({name: 'topic', params: {topicId: res.data.topic_id}});
						}
					}).catch(error => {
						this.showWarn = true;
						this.warnText = '新建主题失败，请重试';
					})
				}
			},
			
		},
		watch: {
	    showWarn (val) {
	      if (val) {
	        setTimeout(() => {
	          this.showWarn = false
	        }, 1500)
	      }
	    }
	  }
	}
</script>

<style lang="less" scoped>
	.header {
		.back {
			height: 15px;
	    width: 15px;
	    border: 1px solid #fff;
	    border-right: none;
	    border-bottom: none;
	    transform: rotate(-45deg);
		}
		.submit {
			font-size: 15px;
			color: #fff;
		}
	}
	.tab,
	.title,
	.content {
		font-size: 15px;
	}
	.label {
		margin-right: 20px;
		color: #69ddd3;
	}
	.warn {
		background-color: #fff;
	  color: #69e1d4;
	  text-align: center;
	  padding: 10px;
	}
</style>