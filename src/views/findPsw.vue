<template>
<div>
    <div class="signIn">
        <div class="middle">
            <div class="signInTable">
                <p class="signTitle">重置密码<span class="backBtn" @click="backToIndex">返回登录</span></p>
				<div class="signForm">
					<div class="signItem">
						<div class="itemLable">+86</div>
						<div class="itemInput">
							<input placeholder="请输入手机号码" v-model="phone" @input="itemInput(0)">
						</div>
						<p class="itemTip">{{phoneMsg}}</p>
						</div>
					<div class="signItem">
						<div class="itemLable">图形验证</div>
						<div class="itemInput codeItem">
							<input placeholder="请输入图形验证码" v-model="code" @input="itemInput(1)">
							<a href="javascript:void(0)"><canvas class="codeSpan" @click="createCode" id="code">获取验证码</canvas></a>
						</div>
						<p class="itemTip">{{codeMsg}}</p>
					</div>
					<div class="signItem">
						<div class="itemLable">短信验证</div>
						<div class="itemInput msgItem">
							<input placeholder="请输入短信验证码" v-model="msgInfo" @input="itemInput(2)">
							<span :class="senDisable == 0?'msgSpan':'msgSpan1'" @click="getMsgInfo" id="msgSpan">获取验证码</span>
						</div>
						<p class="itemTip">{{msgM}}</p>
					</div>
					<div class="signItem">
						<div class="itemLable">设置新密码</div>
						<div class="itemInput">
							<input placeholder="请设置新密码" v-model="psw" @input="itemInput(3)">
						</div>
						<p class="itemTip">{{pswMsg}}</p>
					</div>
					<div class="signItem">
						<div class="itemLable">再次确认</div>
						<div class="itemInput">
							<input type="password" placeholder="请再次确认" v-model="psw1" @input="itemInput(4)">
						</div>
						<p class="itemTip">{{pswMsg1}}</p>
					</div>
					<div class="signItem" style="border:none"><span class="signBtn" @click="signNow">立即重置</span></div>
				</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import $ from 'jquery'
// import { setTimeout } from 'timers';
export default {
    data(){
        return {
			phone:'',
			phoneMsg:'',
			code:'',
			codeMsg:'',
			msgInfo:'',
			msgM:'',
			psw:'',
			pswMsg:'',
			psw1:'',
			pswMsg1:'',
            checkCode:'',
            countdown:60,
            senDisable:0,
            sendStatus:0
        }
    },
    created(){
    },
	mounted() {
		this.createCode()
	},
    methods:{
        backToIndex(){
            this.$router.push({name:'home',query:{}})
        },
		createCode(){
			let code = ""
			let rand = new Array();
			let x = new Array();
			let y = new Array();   
			var codeLength = 4;//验证码的长度   
			var nums = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
						'S','T','U','V','W','X','Y','Z');//随机数   
			const canvas = document.getElementById('code'); //获取HTML端画布
			let context = canvas.getContext("2d"); //获取画布2D上下文
			context.fillStyle = "#fff"; //画布填充色
			context.fillRect(0, 0, canvas.width, canvas.height);
			// 创建渐变
			let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
			gradient.addColorStop("0", "magenta");
			gradient.addColorStop("0.5", "blue");
			gradient.addColorStop("1.0", "red");
			//清空画布
			context.fillStyle = gradient; //设置字体颜色
			context.font = "80px Arial"; //设置字体
			// context.textAlign="center"
			for(var i = 0; i < codeLength; i++) {
				//循环操作   
				rand[i] = nums[Math.floor(Math.random() * nums.length)]
				x[i] = i * 50 + 40;
				// y[i] = Math.random() * 60 + 40;
				context.fillText(rand[i],x[i],100);
				code+=rand[i]
			}  
			this.checkCode = code;//把code值赋给验证码  
        },
        getMsgInfo(){
            var obj = $('#msgSpan')
            // 控制频繁发送
            if(this.sendStatus == 0){
                // this.$api.sendmessage().then(v => {
                    // consoel.log(v)
                    // if(v.msg == 'success'){
                        this.$message({
                            type:'success',
                            message:'短信发送成功'
                        })
                        // this.msgDisable = false
                        let timer = setInterval(() => {
                            if(this.countdown == 0) {
                                clearInterval(timer)
                                this.senDisable = 0
                                obj.text('获取验证码')
                                this.countdown = 60
                                this.sendStatus = 0
                                return
                            } else {
                                // if(this.msgInfo != ''){
                                //     clearInterval(timer)
                                //     this.senDisable = 0
                                //     obj.text('获取验证码')
                                //     this.countdown = 60
                                //     this.sendStatus = 0
                                // }else{
                                    this.senDisable = 1
                                    this.countdown--
                                    obj.text("再次发送(" + this.countdown + "s)")
                                    this.sendStatus = 1
                                // }
                            }
                        },1000)
                    // }else{
                    //     this.$message({
                    //         type:'error',
                    //         message:'发送短信验证码失败！'
                    //     })
                    // }
                // })
            }else{
                this.$message({
                    type:'info',
                    message:'请稍候！'
                })
            }
		},
		itemInput(aa){
            if(aa == 0){
                if(this.phone == ''){
                    this.phoneMsg = '请输入手机号'
                }else{
                    this.phoneMsg = ''
                }
            }else if(aa == 1){
                // console.log(this.code)
                if(this.code == ''){
                    this.codeMsg = '请输入图形验证码'
                }else{
                    this.codeMsg = ''
                }
            }else if(aa == 2){
                if(this.msgInfo == ''){
                    this.msgM  = '请输入短信验证码'
                }else{
                    this.msgM  = ''
                }
            }
            else if(aa == 3){
                if(this.psw == ''){
                    this.pswMsg = '请输入密码'
                }else{
                    this.pswMsg = ''
                }
            }else{
                if(this.psw1 == '' || this.psw1 != this.psw){
                    this.pswMsg1 = '两次密码输入不一致'
                }else{
                    this.pswMsg1 = ''
                }       
            }
		},
        signNow(){
			if(this.phone.length != 11 ){
				this.phoneMsg = '请输入正确的手机号'
			}else if(this.code == ''){
				this.codeMsg = '请输入验证码'
			}else if(this.code != this.checkCode && this.code != this.checkCode.toLowerCase()){
				this.codeMsg = '请输入正确的图形验证码'
			}else if(this.msgInfo == '' || this.msgInfo.length != 4){
				this.msgM = '请输入正确的短信验证码'
			}else if(this.psw == ''){
				this.pswMsg = '请输入密码'
			}else if(this.psw.length < 6 || this.psw.length > 12){
				this.pswMsg = '请输入6~12位的密码'
			}else if(this.psw1 == '' || this.psw1 != this.psw){
				this.pswMsg1 = '两次密码输入不一致'
			}else{
				//调取注册接口
				this.$message({
					type:'success',
					message:'重置密码成功'
				})
			}
        },
    }

}
</script>

<style lang="stylus" scoped>
.signIn
    width 100%
    max-height 100%

.middle
    width 100%
    padding 40px 0
    box-sizing border-box

.signInTable
    width 560px
    background #fff
    padding 40px 50px 60px 50px
    box-shadow 0px 4px 8px 0px rgba(0, 0, 0, 0.1)
    box-sizing border-box
    margin 0 auto

.signTitle
    margin-bottom 25px
    font-size 22px
    color #666666
    font-weight bold
    line-height 22px
    text-align center
    position relative

.backBtn
    padding-left 20px
    box-sizing border-box
    position absolute
    right 0
    font-size 14px
    color #2E7BFF
    font-weight normal
    cursor pointer
    background url('../../public/img/signIcon.png') no-repeat left center

.backBtn:hover
    text-decoration underline

.signForm
	width 100%
	
.signItem
    width 100%
    border 1px #d9d9d9 solid
    box-sizing border-box
    margin-bottom 30px
    display flex
    flex-wrap nowrap
    align-items center
    font-size 14px
    color #333
    line-height 50px
    text-align center
    position relative

.itemLable
	width 100px
	height 50px
	border-right 1px #d9d9d9 solid
	box-sizing border-box

.itemInput
    width calc(100% - 100px)
    input
        width 100%
        outline none
        border none
        text-indent 20px
.itemTip
	position absolute
	bottom -20px
	left 100px
	font-size 12px
	color red
	line-height 12px

.signBtn
    display inline-block
    width 100%
    height 50px
    background linear-gradient(90deg,#2EB3FF 0%,#2E7BFF 100%)
    border none
    margin-top 20px
    font-size 16px
    color #ffffff
    cursor pointer

.signBtn:hover
    background linear-gradient(90deg,#75CDFF 0%,#4A9CFF 100%)
    box-shadow 0px 3px 6px 0px rgba(9,133,255,0.3)
	

.codeSpan
    display inline-block
    width 120px
    height 47px
    background-color transparent
    position absolute 
    right 1px
    top 1px
    text-align center
    line-height 50px

.msgSpan
    display inline-block
    width 120px
    height 50px
    background #FE7F4D
    border none
    outline none
    position absolute 
    right 0
    top 0
    color white
    text-align center
    line-height 50px
    cursor pointer

.msgSpan:hover
    background #FF9A72

.msgSpan1
    display inline-block
    width 120px
    height 50px
    background #D9D9D9
    border none
    outline none
    position absolute 
    right 0
    top 0
    color white
    text-align center
    line-height 50px
    cursor pointer

</style>

