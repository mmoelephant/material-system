<template>
<div class="loginPage">
    <div class="loginMain">
        <div class="loginCon">
            <div class='t'>
                <!-- <i></i> -->
                <h1>专业化建材价格信息采集平台</h1>
                <p>您可以进行相关材料申报，以及价格疑议提交。</p>
            </div>
            <div class='i'>
                <div class='tab'>
                    <p @click='login_type="zh"' :class='login_type=="zh"?"act":""'>账户登录</p>
                    <p @click='login_type="sjh"' :class='login_type=="sjh"?"act":""'>手机号登录</p>
                </div>
                <div class='pd' v-show='login_type=="zh"'>
                    <div :class='focusIndex ==0?"input act_i":error1&&error1.length>0?"input error_i":"input"'>
                        <div class='img'>
                            <i :class='focusIndex ==0?"n2":error1&&error1.length>0?"n3":"n1"'></i>
                        </div>
                        <span v-show='focusIndex == 0 && name.length == 0 && !isSupportPlaceholder' @click='getfocus(0)'>请输入账号</span>
                        <input 
                            autofocus="autofocus"
                            autocomplete="off"
                            v-model='name' 
                            :placeholder="isSupportPlaceholder?'请输入账号':''"     
                            @focus="focus(0)"
                            @blur="blur(0)"
                            :class='error1&&error1.length>0?"red":name&&name.length>0?"blue":""'>
                    </div>
                    <p class="errTip">{{error1}}</p>
                    <div :class='focusIndex ==1?"input act_i":error2&&error2.length>0?"input error_i":"input"'>
                        <div class='img'>
                            <i :class='focusIndex ==1?"p2":error2&&error2.length>0?"p3":"p1"'></i>
                        </div>
                        <span v-show='focusIndex == 1 && password.length==0 && !isSupportPlaceholder' @click='getfocus(1)'>请输入密码</span>
                        <input 
                            autocomplete="off"
                            v-model='password' 
                            :placeholder="isSupportPlaceholder?'请输入密码':''"
                            @focus="focus(1)"
                            @blur="blur(1)"
                            type='password'
                            :class='error2&&error2.length>0?"red":password&&password.length>0?"blue":""'>
                    </div>
                    <p class="errTip">{{error2}}</p>
                    <div :class='focusIndex ==2?"input act_i":error3&&error3.length>0?"input error_i":"input"'>
                        <div class='img'>
                            <i :class='focusIndex ==2?"c2":error3&&error3.length>0?"c3":"c1"'>
                            </i>
                        </div>
                        <span v-show='focusIndex == 2 && code.length==0 && !isSupportPlaceholder' @click='getfocus(2)'>请输入验证码</span>
                        <input 
                            autocomplete="off"
                            v-model='code' 
                            :placeholder="isSupportPlaceholder?'请输入验证码':''"
                            @focus="focus(2)"
                            @blur="blur(2)"
                            :class='error3&&error3.length>0?"red code_w":code&&code.length>0?"blue code_w":" code_w"'>
                        <canvas @click="createCode" class='code' id='code'></canvas>
                    </div>
                    <p class="errTip">{{error3}}</p>
                    <div :class='!error1&&error1.length>0 || (error2&&error2.length>0) || 
                        (error3&&error3.length>0) || !name || name.length ==0
                        || !password || password.length ==0
                        || !code || code.length ==0?"btn":"btn act_btn"'
                        @click='login'>
                        登 录
                    </div>
                </div>
                <div class='qrcode' v-show='login_type=="sjh"'>
                    <div :class='focusIndex ==0?"input act_i":error4&&error4.length>0?"input error_i":"input"'>
                        <div class='img'>
                            <i :class='focusIndex ==0?"n2":error4&&error4.length>0?"n3":"n1"'></i>
                        </div>
                        <span v-show='focusIndex == 0 && phone.length == 0 && !isSupportPlaceholder' @click='getfocus(0)'>请输入手机号</span>
                        <input 
                            autofocus="autofocus"
                            autocomplete="off"
                            v-model='phone' 
                            :placeholder="isSupportPlaceholder?'请输入手机号':''"     
                            @focus="focus(0)"
                            @blur="blur(0)"
                            :class='error4&&error4.length>0?"red":phone&&phone.length>0?"blue":""'>
                    </div>
                    <p class="errTip">{{error4}}</p>
                    <div :class='focusIndex ==1?"input act_i":error5&&error5.length>0?"input error_i":"input"'>
                        <div class='img'>
                            <i :class='focusIndex ==1?"c2":error5&&error5.length>0?"c3":"c1"'>
                            </i>
                        </div>
                        <span v-show='focusIndex == 1 && code1.length==0 && !isSupportPlaceholder' @click='getfocus(1)'>请输入验证码</span>
                        <input 
                            autocomplete="off"
                            v-model='code1' 
                            :placeholder="isSupportPlaceholder?'请输入验证码':''"
                            @focus="focus(1)"
                            @blur="blur(1)"
                            :class='error5&&error5.length>0?"red code_w":code1&&code1.length>0?"blue code_w":" code_w"'>
                        <canvas @click="createCode1" class='code' id='code1'></canvas>
                    </div>
                    <p class="errTip">{{error5}}</p>
                    <div :class='focusIndex ==2?"input act_i":error6&&error6.length>0?"input error_i":"input"'>
                        <div class='img'>
                            <i :class='focusIndex ==2?"d2":error6&&error6.length>0?"d3":"d1"'></i>
                        </div>
                        <span v-show='focusIndex == 2 && msgInfo.length==0 && !isSupportPlaceholder' @click='getfocus(2)'>请输入短信验证码</span>
                        <input 
                            autocomplete="off"
                            v-model='msgInfo' 
                            :placeholder="isSupportPlaceholder?'请输入短信验证码':''"
                            @focus="focus(2)"
                            @blur="blur(2)"
                            :class='error6&&error6.length>0?"red":msgInfo&&msgInfo.length > 0?"blue":""'>
                        <span :class="senDisable == 0?'msgSpan':'msgSpan1'" @click="getMsgInfo" id="msgSpan">获取验证码</span>
                    </div>
                    <p class="errTip">{{error6}}</p>
                    <div :class='!error4&&error4.length>0 || (error6&&error6.length>0) || 
                        (error5&&error5.length>0) || !phone || phone.length ==0
                        || !msgInfo || msgInfo.length == 0
                        || !code1 || code1.length == 0?"btn":"btn act_btn"'
                        @click='login1'>
                        登 录
                    </div>
                </div>
                <div class="wechatIcon">
                    <div class="iconBox"></div>
                    <div class="iconText">微信登录</div>
                </div>
                <div class='bottom'>
                    <p @click="findPsw">忘记密码？</p>
                    <p @click='goSignIn'>
                        <img src="../../public/img/signIcon.png" alt="">
                        立即注册
                    </p>
                </div>
            </div>
        </div>
    </div>
    <el-dialog title="新用户指引" :visible.sync="dialog" width="820px" class="procolDialog" :before-close="handleClose" :close-on-click-modal="modalClose" :show-close="showClose">
        <div class="dialogCon">
            <p>在您注册成为行列用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署一下协议，请您务必仔细阅读、
                充分理解协议中的条款内容后再点击同意（尤其是一下粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
            </p>
            <p class="procolTitle">平台使用流程及规则<span class="version">版本日期：2019.5.28</span></p>
            <div class="procol">
                <div>
                    <p class="">一、总则</p>
                    <p>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。</p>
                    <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与
                        保宝网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。
                    </p>
                    <p>1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>
                </div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="agree" class="agreeBtn">知道了</el-button>
        </span>
    </el-dialog>
</div>
</template>
<script>
import $ from 'jquery'
import { setTimeout } from 'timers';
export default {
	data() {
		return {
			login_type:'sjh',
			isSupportPlaceholder:true,
			focusIndex:0,
			name:'',
			password:'',
			code:'',
			checkCode:'',
			checkCode1:'',
			error1:'',
			error2:'',
            error3:'',
            error4:'',
            error5:'',
            error6:'',
            phone:'',
            code1:'',
            msgInfo:'',
            senDisable:0,
            sendStatus:0,
            countdown:60,
            dialog:true,
            modalClose:false,
            showClose:true,
		}
	},
	methods:{
        handleClose(done) {
            this.$confirm('确认关闭？').then(_ => {
                this.$router.push({name:'home',query:{}})
            }).catch(_ => {});
        },
        agree(){
            this.dialog = false
        },
		goSignIn(){
			this.$router.push({name:'signIn',query:{}})
		},
		findPsw(){
			this.$router.push({name:'findPsw',query:{}})
		},
		getfocus(index) {
            $('input')[index].focus()
        },
        focus(i) {
            this.focusIndex = i
            if(i ==0) {
                this.error1 = ''
                this.error4 = ''
            } else if(i==1){
                this.error2 = ''
                this.error5 = ''
            } else {
				this.error3 = ''
				this.error6 = ''
			}
		},
		blur(i) {
			// this.focusIndex=-1
            // if(i==0) {
            //     if(this.name.length>0) {
            //         return
            //     } else {
            //         this.error1 = '请输入账号/手机号'
            //     }
            // } else if(i==1){
            //     if(this.password.length>0) {
            //         return
            //     } else {
            //         this.error2 = '请输入密码'
            //     }
            // } else {
			// 	if(this.code.length>0) {
            //         return
            //     } else {
            //         this.error3 = '请输入验证码'
            //     }
			// }
		},		
		createCode(){
			let code = ""
			let rand = new Array();
			let x = new Array();
			// let y = new Array();   
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
		createCode1(){
			let code = ""
			let rand = new Array();
			let x = new Array();
			// let y = new Array();   
			var codeLength = 4;//验证码的长度   
			var nums = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
						'S','T','U','V','W','X','Y','Z');//随机数   
			const canvas = document.getElementById('code1'); //获取HTML端画布
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
			this.checkCode1 = code;//把code值赋给验证码  
		},
		async login() {
            // if(!this.check()) return
            this.$router.push('/onlinereport')
        },
		async login1() {
            // if(!this.check1()) return
            this.$router.push('/onlinereport')
		},
		check() {
            if(!this.name || this.name.length==0) {
                this.error1 = '请输入正确的账号'
                return false
            } else if(!this.password || this.password.length < 6 || this.password.length > 12) {
                this.error2 = '请输入6-12位之间的密码！'
                return false
            } else if(!this.code || this.code.length ==0) {
				this.error3 = '请输入验证码'
                return false
			} else  if(this.code != this.checkCode.toLowerCase()) {
				this.error3 = '验证码错误'
				this.createCode()
                return false
			}
            else {
				return true
            }
        },
		check1() {
            if(!this.phone || this.phone.length!=11) {
                this.error4 = '请输入正确的手机号'
                return false
            } else if(!this.code1 || this.code1.length ==0) {
				this.error5 = '请输入验证码'
                return false
			} else  if(this.code1 != this.checkCode1.toLowerCase()) {
				this.error5 = '验证码错误'
				this.createCode1()
                return false
			}else if(!this.msgInfo || this.msgInfo.length!=6) {
                this.error6 = '请输入正确的短信验证码'
                return false
            } else {
				return true
            }
        },
        getMsgInfo(){
            var obj = $('#msgSpan')
            var data1 = {
                TemplateCode:'SMS_159783581',
                SignName:'行列资讯',
                PhoneNumbers:'18487071983'
            }
            // 控制频繁发送
            if(this.sendStatus == 0){
                this.$api.sendmessage(data1).then(v => {
                    console.log(v)
                    if(v.msg == 'success'){
                        this.$message({
                            type:'success',
                            message:'短信发送成功'
                        })
                        // this.msgDisable = false
                        let timer = setInterval(() => {
                            if(this.countdown == 0) {
                                clearInterval(timer)
                                this.senDisable = 0
                                obj.text('发送验证码')
                                this.countdown = 60
                                this.sendStatus = 0
                                return
                            } else {
                                if(this.msgInfo != ''){
                                    clearInterval(timer)
                                    this.senDisable = 0
                                    obj.text('发送验证码')
                                    this.countdown = 60
                                    this.sendStatus = 0
                                }else{
                                    this.senDisable = 1
                                    this.countdown--
                                    // obj.text("再次发送(" + this.countdown + "s)")
                                    obj.text("已发送")
                                    this.sendStatus = 1
                                }
                            }
                        },1000)
                    }else{
                        this.$message({
                            type:'error',
                            message:'发送短信验证码失败！'
                        })
                    }
                })
            }else{
                this.$message({
                    type:'info',
                    message:'请稍候！'
                })
            }
        },
	},
	mounted() {
		const input = $('input')[0]
		this.isSupportPlaceholder =  'placeholder' in input
		this.createCode()
		this.createCode1()
		const that = this
		document.onkeydown = function(e) {
			var keycode = document.all ? event.keyCode : e.which;
			if (keycode == 13) {
                if(this.login_type == 'sjh' ){
                    that.login1()
                }else{
                    that.login()
                }
				return false;
			}
		}
	},
}
</script>
<style lang="stylus" scoped>
input
    border none
    outline 0
    appearance none
.loginMain
    width 100%
    height 620px
    background url('../../public/img/loginbg.jpg') no-repeat
    background-size 100% 100%
.loginCon
    width 1200px
    height 620px
    margin 0 auto
    display flex
    justify-content space-between
    align-items center
.i
    width 380px
    background #fff
.tab
    padding 40px 0 36px 0
    box-sizing border-box
    font-size 18px
    color #666
    display flex
    align-items center
    p
        border-right 1px solid #E6E6E6
        width 50% 
        text-align center
        cursor pointer
    p+p
        border-right none 
    .act
        color #2E7BFF
        font-family MicrosoftYaHei-Bold
        font-weight 600
    p:hover
        color #2E7BFF
.pd,.qrcode
    padding 0 40px
    box-sizing border-box
.input
    display flex
    align-items center
    border 1px solid #D9D9D9
    position relative
.img
    width 40px
    height 40px
    background #f4f4f4
    display flex
    align-items center
    justify-content center
    border-right 1px solid #D9D9D9
    flex-shrink 0
    i
        display block
        width 50%
        height 50%
.n1
    background url('../../public/img/登陆1.png') no-repeat center
    background-size 100% 100%
.n2
    background url('../../public/img/登陆2.png') no-repeat center
    background-size 100% 100%
.n3
    background url('../../public/img/登陆3.png') no-repeat center
.p1
    background url('../../public/img/密码1.png') no-repeat center
    background-size 100% 100%
.p2
    background url('../../public/img/密码2.png') no-repeat center
    background-size 100% 100%
.p3
    background url('../../public/img/密码3.png') no-repeat center
.c1
    background url('../../public/img/验证码1.png') no-repeat center
    background-size 100% 100%
.c2
    background url('../../public/img/验证码2.png') no-repeat center
    background-size 100% 100%
.c3
    background url('../../public/img/验证码3.png') no-repeat center
.d1
    background url('../../public/img/短信1.png') no-repeat center
    background-size 100% 100%
.d2
    background url('../../public/img/短信2.png') no-repeat center
    background-size 100% 100%
.d3
    background url('../../public/img/短信3.png') no-repeat center
span
    font-size 14px
    color #A6A6A6
    position absolute
    left 50px
input
    margin-left 10px
    flex-shrink 1
span.msgSpan
    left auto
    right 14px
    font-size 12px
    color #333
    text-decoration underline
    cursor pointer

span.msgSpan:hover
    color #5091ff

span.msgSpan1
    left auto
    right 14px
    font-size 12px
    color #ccc
.code_w
    width 147px
.errTip
    height 20px
    font-size 12px
    color #FF6868
    line-height 20px
.act_i
    border-color #2E7BFF
    .img
        border-color #2E7BFF
.error_i
    border-color #FF6868
    .img
        border-color #FF6868	
.code
    width 96px
    height 40px
.btn
    width 100%
    height 40px
    background #B3BAC4
    margin 10px 0 30px 0
    font-size 14px
    color #fff
    font-weight bold
    text-align center
    line-height 40px
.act_btn
    background linear-gradient(90deg,#2EB3FF 0%,#2E7BFF 100%)
    cursor pointer
.act_btn:hover
    background linear-gradient(90deg,#75CDFF 0%,#4A9CFF 100%)
    box-shadow 0px 3px 6px 0px rgba(9,133,255,0.3)
.wechatIcon
    margin-bottom 30px
    cursor pointer
.iconBox
    width 52px
    height 52px
    background url(../../public/img/weixin1.png) no-repeat center
    margin 0 auto
.iconBox:hover
    background url(../../public/img/weixin2.png) no-repeat center
.iconText
    margin-top 10px
    font-size 12px
    color #333
    text-align center
.bottom
    display flex
    align-items center
    justify-content space-between
    width 100%
    height 50px
    background #f4f4f4
    padding 0 30px
    box-sizing border-box
    p
        width 50%
        display flex
        font-size 14px
        color #333
        line-height 14px
        cursor pointer
        img
            width 14px
            margin-right 4px
    p:hover
        color #2E7BFF
        text-decoration underline

    p+p
        justify-content flex-end
        color #2E7BFF
.t
    color #fff
    h1
        font-size 32px
        font-family MicrosoftYaHei-Bold
        font-weight bold
        margin-bottom 16px
    p
        font-size 14px

.dialogCon
    height 100%
    padding 0 20px
    box-sizing border-box
    overflow auto

.procolTitle
    margin-top 36px
    font-size 20px
    font-weight bold
    line-height 20px
    position relative

span.version
    position absolute
    left auto
    right 0
    font-size 16px
    font-weight normal
span.dialog-footer
    left 50%
    margin-left -100px
    
.procol
    margin-top 40px
</style>