<template>
<div>
    <div class="signIn">
        <div class="middle">
            <div class="signInTable">
                <p class="signTitle">用户注册<span class="backBtn" @click="backToIndex">返回登录</span></p>
				<div class="signForm">
					<div class="signItem">
						<div class="itemLable">账号</div>
						<div class="itemInput">
							<input placeholder="请设置账号，建议英文和数字组合" v-model="phone" @input="signItemInput(0)">
						</div>
						<p class="itemTip">{{phoneMsg}}</p>
						</div>
					<div class="signItem">
						<div class="itemLable">设置密码</div>
						<div class="itemInput">
							<input placeholder="请输入密码" v-model="psw" @input="signItemInput(3)">
						</div>
						<p class="itemTip">{{pswMsg}}</p>
					</div>
					<div class="signItem">
						<div class="itemLable">再次确认</div>
						<div class="itemInput">
							<input type="password" placeholder="请再次确认" v-model="psw1" @input="signItemInput(4)">
						</div>
						<p class="itemTip">{{pswMsg1}}</p>
					</div>
					<div class="signItem">
						<div class="itemLable">图形验证</div>
						<div class="itemInput codeItem">
							<input placeholder="请输入图形验证码" v-model="code" @input="signItemInput(1)">
							<a href="javascript:void(0)">
                                <canvas class="codeSpan" @click="createCode" id="code">获取验证码</canvas>
                            </a>
						</div>
						<p class="itemTip">{{codeMsg}}</p>
					</div>
					<div class="signItem" style="border:none"><span class="signBtn" @click="signNow">立即注册</span></div>
				</div>
            </div>
        </div>
        <el-dialog title="用户注册协议" :visible.sync="dialog" width="820px" class="procolDialog" :before-close="handleClose"
        :close-on-click-modal="modalClose" :show-close="showClose">
            <div class="dialogCon">
                <p>在您注册成为行列用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署一下协议，
                    请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是一下粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
                </p>
                <p class="procolTitle">用户注册协议<span class="version">版本日期：2019.5.28</span></p>
                <div class="procol">
                    <div>
                        <p class="">一、总则</p>
                        <p>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。</p>
                        <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与保宝网之间自动形成协议关系，
                            用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。
                        </p>
                        <p>1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>
                    </div>
                    <div>
                        <p class="">一、总则</p>
                        <p>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。</p>
                        <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与保宝网之间自动形成协议关系，
                            用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。
                        </p>
                        <p>1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>
                    </div>
                    <div>
                        <p class="">一、总则</p>
                        <p>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。</p>
                        <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与保宝网之间自动形成协议关系，
                            用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。
                        </p>
                        <p>1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button class="cancelBtn" @click="backTo">取 消</el-button>
                <el-button type="primary" @click="agree" class="agreeBtn">同意并继续</el-button>
            </span>
        </el-dialog>

    </div>
</div>
</template>
<script>
import $ from 'jquery'
// import { setTimeout } from 'timers';
export default {
    data(){
        return {
            dialog:true,
            modalClose:false,
            showClose:true,
			phone:'',
			phoneMsg:'',
			code:'',
			codeMsg:'',
			psw:'',
			pswMsg:'',
			psw1:'',
			pswMsg1:'',
            checkCode:'',
        }

    },
    created(){
    },
	mounted() {
		this.createCode()
	},
    methods:{
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                this.$router.push({name:'home',query:{}})
            })
            .catch(_ => {});
        },
        backTo(){
            this.$router.push({name:'home',query:{}})
        },
        agree(){
            this.dialog = false
        },
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
		signItemInput(aa){
            if(aa == 0){
                if(this.phone == ''){
                    this.phoneMsg = '请输入账号'
                }else{
                    this.phoneMsg = ''
                }
            }else if(aa == 1){
                if(this.code == ''){
                    this.codeMsg = '请输入图形验证码'
                }else{
                    this.codeMsg = ''
                }
            }else if(aa == 3){
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
			if(this.phone.length == ''){
				this.phoneMsg = '请输入用户名'
			}else if(this.code == ''){
				this.codeMsg = '请输入验证码'
			}else if(this.code != this.checkCode && this.code != this.checkCode.toLowerCase()){
				this.codeMsg = '请输入正确的图形验证码'
			}else if(this.psw == ''){
				this.pswMsg = '请输入密码'
			}else if(this.psw.length < 6 || this.psw.length > 12){
				this.pswMsg = '请输入6~12位的密码'
			}else if(this.psw1 == '' || this.psw1 != this.psw){
				this.pswMsg1 = '两次密码输入不一致'
			}else{
                this.phoneMsg = ''
                this.codeMsg = ''
                this.pswMsg = ''
                this.pswMsg1 = ''
				//调取注册接口
				this.$message({
					type:'success',
					message:'注册成功'
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
    padding 80px 0
    box-sizing border-box

.signInTable
    width 560px
    background #fff
    padding 40px 50px 60px 50px
    box-sizing border-box
    box-shadow 0px 4px 8px 0px rgba(0, 0, 0, 0.1)
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
        height 48px
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
    height 46px
    background-color transparent
    position absolute 
    right 1px
    top 3px
    text-align center
    line-height 50px

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

.version
    position absolute
    right 0
    font-size 16px
    font-weight normal
.procol
    margin-top 40px
</style>
<style lang="stylus">
.procolDialog
    .el-dialog
        height 600px
        .el-dialog__header
            height 60px
            background #f5f5f5
            padding 0 20px
            box-sizing border-box
            .el-dialog__title
                font-size 16px
                color #666
                line-height 60px
                padding 0
        .el-dialog__body
            height 440px
            padding 20px
            box-sizing border-box
            font-size 14px
            color #333
            line-height 20px
            text-align justify
        .el-dialog__footer
            width 100%
            height 100px
            background #f5f5f5
            padding 0
            padding-top 20px
            box-sizing border-box
            text-align center
            .el-button
                width 200px
                height 48px
                background #ccc
                padding 0
                border none
                border-radius 0
                font-size 16px
                font-weight 400
                color #ffffff
                line-height 48px
            .el-button.cancelBtn:hover
                background-color #a6a6a6
            .el-button.agreeBtn
                background #2E7BFF
            .el-button.agreeBtn:hover
                background-color #609BFF
</style>

