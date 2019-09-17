<template>
<div>
	<el-header class="header">
		<div class="headerContainer">
			<div class="systemIcon">
				<img src="../public/img/logo.png">
				<div class="systemName">材料申报与价格疑议提交平台</div>
			</div>
			<div class="loginMsg">
				<div class="whoLogin">
					<div class="avatar"><img src="../public/img/avatar.png"></div>
					<div class="username">admin20134123</div>
				</div>
				<div class="signout">退出登录</div>
			</div>
		</div>
	</el-header>
	<el-container style='flex-direction:column;overflow:auto;margin-top:80px'>
		<router-view></router-view>
	</el-container>
	<el-footer :class='(route.name=="signIn" ||route.name == "findPsw")?"ac":""' style="height:auto;padding:30px 0 26px 0;box-sizing:border-box">
		<p class='ba quickLink'>
			<span>云南省工程建设标准定额管理网</span>
			<span>中华人民共和国住房和城乡建设部</span>
			<span>国家工程建设标准化信息网</span>
			<span>云南省住房与城乡建设厅</span>
			<span>云南省建设工程造价信息网</span>
			<span>云南省建设人才网</span>
			<span>云南城市建设培训中心</span>
		</p>
		<p class='ba'>滇公网安备 53011102000224  &nbsp备案编号：滇ICP备16007176号  
			&nbspCopyright © 2004-2019 &nbsp版权所有 © 昆明行列科技有限公司
		</p>
	</el-footer>
</div>
</template>
<script>
export default {
	data(){
		return {

		}
	},
	computed: {
		route(){
			return this.$route
		}
	},
	watch:{
		route(val) {
		}
	},
}
</script>
<style lang="stylus">
@import './assets/font/font.css'
.header
	width 100%
	height 80px !important
	background #fff
	box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.08)
	position fixed
	z-index 20
	top 0
.headerContainer
	width 1200px
	height 100%
	margin 0 auto
	display flex
	align-items center
	justify-content space-between
.systemIcon
	display flex
	align-items center
.systemName
	margin-left 10px
	font-size 18px
	color #333
	font-family alibabapuhui
.loginMsg
	display flex
	align-items center
	font-size 12px
	color #262626
.whoLogin
	display flex
	align-items center
.username
	margin-left 10px
.signout
	background url(../public/img/signOutIco1.png) no-repeat left center
	padding-left 18px
	box-sizing border-box
	margin-left 40px
	color #a6a6a6
	cursor pointer
.signout:hover
	background url(../public/img/signOutIco2.png) no-repeat left center
	color #2E7BFF
.ba
	font-size 12px
	color #333
	line-height 12px
	text-align center
	// margin-top 30px
	span
		padding 0 15px
		border-right 1px #d9d9d9 solid
		box-sizing border-box
		cursor pointer
	span:last-of-type
		border none
	span:hover
		color #2E7BFF
.ba+.ba
	color #A6A6A6
	margin-top 22px
.footerCon
	height auto
.ac
	width 100%
	position fixed
	bottom 0
	background #fff
</style>
