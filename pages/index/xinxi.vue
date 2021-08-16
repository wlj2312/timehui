<template>
	<view class="contair">
		<view class="img flex-center">
			<image src="../../static/img/WELCOME.png"></image>
		</view>
		<view class="model">
			<view class="model-1">
				<view class="input-model flex-left">
					<image class='img1 m-r10' src="../../static/img/img05.png"></image>
					<input  type="text" v-model="name" placeholder="输入姓名" style="color:#ffffff;" placeholder-class="shuru"/>
				</view>
				<view class="line"></view>
			</view>
			<view class="model-1">
				<view class="input-model flex-left">
					<image class='img2 m-r10' src="../../static/img/img06.png"></image>
					<input  type="text" v-model="number" placeholder="手机号登录" maxlength=11  style="color:#ffffff;" placeholder-class="shuru"/>
				</view>
				<view class="line"></view>
			</view>
			<view class="model-1">
				<view class="input-model flex-left">
					<image class='img3 m-r10' src="../../static/img/img07.png"></image>
					<input  type="text" v-model="code" placeholder="手机验证码" style="color:#ffffff;width: 160rpx;" maxlength=8 placeholder-class="shuru"/>
					<view class="send" @click="Sendyan()" >{{codeMsg}}</view>
				</view>
				<view class="line"></view>
			</view>
			<view class="model-1">
				<view class="input-model flex-left"	>
					<image class='img4 m-r10' src="../../static/img/img08.png"></image>
					<!-- <input  type="text" v-model="area" placeholder="所在地区" style="color:#ffffff;width: 210rpx;" placeholder-class="shuru"/> -->
					<AddressPicker @change="change" style="font-size: 14px;font-weight: 400;color: #FFFEFE;opacity: 0.7;" :level="3">{{planLocate}} </AddressPicker>
				</view>
				<view class="line"></view>
			</view>
			<view class="model-1">
				<view class="input-model flex-left">
					<image class='img5 m-r10' src="../../static/img/img09.png"></image>
					<input  type="text" v-model="street" placeholder="详细地址" style="color:#ffffff;width: 210rpx;" placeholder-class="shuru"/>
				</view>
				<view class="line"></view>
			</view>
		</view>
		<view class="flex-center" @click="Send()">
			<view class='three flex-center'><view style="opacity: 0.7;" >提交</view></view>
		</view>
	</view>
</template>

<script>
	import AddressPicker from "@/components/lingdang-AddressPicker/AddressPicker.vue"
	export default {
		data() {
			return {
				codeMsg:'',
				name:'',//姓名
				number:'',//手机号
				code:'',//验证码
				street:'',//详细地址
				province:"",//省
				city:"",//市
				county:"",//区
				planLocate: '请选择地址',
				codeDisabled:true
			};
		},
		components: {
			AddressPicker
		},
		onShow() {
			this.codeMsg = '发送';
		},
		methods:{
			//发送验证码
			Sendyan(){
				
				console.log(this.codeMsg,'this.codeMsg2')
				uni.request({
				    url: this.$store.state.baseURL + '/api/user/sendcode', //发送信息
				    method: 'POST',
					data: {
						mobile:this.number,
					},
					header: {  
					    'content-type': 'application/x-www-form-urlencoded',  
					  }, 
				    success: (res) => {
						if(res.data.error_code == 0){
							uni.showToast({
							    title: '验证码发送成功',
							    duration: 1000
							});
							let obj = this;
							var curCount = 60;
							var InterValObj = window.setInterval(function () {
							    if (curCount == 0) {
							        window.clearInterval(InterValObj); //停止计时器
							        obj.codeMsg = '重新发送';
							        obj.codeDisabled = false;
							    } else {
							        curCount--;
							        obj.codeMsg = curCount + '秒后再获取';
									console.log(obj.codeMsg,'obj.codeMsg1')
							    }
							}, 1000);
						}else{
							uni.showToast({
							    title: res.data.error_msg,
							    duration: 1000
							});
						}
						console.log(res.data.error_msg,'验证码发送成功')
					},
					fail(err) {
						console.log(err,'err111')
					}
				});
			},
			//提交信息
			Send(){
				var re = /^1\d{10}$/
				if (re.test(this.number)){
					
				}else{
					uni.showToast({
						title: '手机号错误',
						duration: 2000
					});
					return;
				}
				console.log(this.city,this.county,'this.county')
				if(this.city == this.county){
					uni.showToast({
						title: '地址有误',
						duration: 2000
					})
				}else{
					uni.request({
					    url: this.$store.state.baseURL + '/api/user/register', //提交信息
					    method: 'POST',
						data: {
							username:this.name,
							mobile:this.number,
							province:this.province,
							city:this.city,
							county:this.county,
							street:this.street	,
							code:this.code
						},
						header: {  
						    'content-type': 'application/x-www-form-urlencoded',  
						  }, 
					    success: (res) => {
							if(res.data.error_code == 0){
								uni.showToast({
								    title: res.data.error_msg,
								    duration: 2000
								});
								uni.navigateTo({
								    url: 'tips?state=3'
								});
							}else{
								uni.showToast({
								    title: res.data.error_msg,
								    duration: 2000
								});
							}
							
						},
						fail(err) {
							console.log(err)
						}
					});
				}
				
			},
			change(result) {
				console.log(JSON.stringify(result.data));
				this.planLocate = '';
				result.data.forEach((item, index) => {
					if (index === 0) {
						this.planLocate += item.name
					} else {
						this.planLocate += '-' + item.name
					}
				});
				let arr = this.planLocate.split('-');
				this.province = arr[0];
				this.city = arr[1];
				this.county = arr[2];
			},
		}
	}
</script>

<style lang="less" scoped>
.contair{
	width: 375rpx*2;
	height: 812rpx*2;
	background-image: url(../../static/img/ziliaobj.png);
	background-repeat: no-repeat;
	background-size: 375rpx*2 812rpx*2;
	margin-top: -2rpx*2;
	.img{
		padding-top: 70rpx*2;
		image{
			width: 240rpx*2;
			height: 58rpx*2;
		}
		
	}
	.model{
		padding: 0 54rpx*2;
		.img1{
			width: 13rpx*2;
			height: 13rpx*2;
		}
		.img2{
			width:12rpx*2;
			height: 17rpx*2;
		}
		.img3{
			width: 10rpx*2;
			height: 18rpx*2;
		}
		.img4{
			width: 14rpx*2;
			height: 14rpx*2;
		}
		.img5{
			width: 14rpx*2;
			height: 16rpx*2;
		}
		.input-model{
			margin:48rpx*2 0 10rpx*2  80rpx*2;
		}
		.send{
			background: #a4ddd5;
			font-size: 11rpx*2;
			font-weight: 400;
			color: #FFFEFE;
			opacity: 0.6;
			padding: 3rpx*2 11rpx*2;
			border-radius: 6rpx*2;
			
		}
		.line{
			width: 266rpx*2;
			height: 1rpx*2;
			background: #71CFBA;
			box-shadow: 0rpx*2 0rpx*2 14rpx*2 1rpx*2 rgba(0, 0, 0, 0.83);
			
		}
		.shuru{
			font-size: 13rpx*2;
			font-weight: 400;
			color: #FFFEFE;
			opacity: 0.7;
		}
	}
	.three{
		width: 275rpx*2;
		height: 50rpx*2;
		margin-top: 80rpx*2;
		background-image: url(../../static/img/img10.png);
		background-repeat: no-repeat;
		background-size: 275rpx*2 50rpx*2;
		
		font-size: 18rpx*2;
		color: #FFFFFF;
		
	}
}
</style>
