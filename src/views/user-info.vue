<template>
    <div>
        <div>
            <div class="ui">
                <left></left>
                <div class="uiright">
                    <div class="righTitle">
                        <div class="bigTitle">会员信息</div>
                        <div class="desc">请录入对应的信息，确保所填信息真实有效</div>
                    </div>
                    <div class="userInfoBox">
                        <el-form :label-position="labelPosition" label-width="130px" :model="form">
                            <el-form-item label="企业名称"><el-input v-model="form.name" placeholder="请输入企业名称"></el-input></el-form-item>
                             <el-form-item label="营业执照">
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <p style='font-size:12px;color:#A6A6A6;line-height:16px'>*请以JPEG、PNG格式上传图片，图片大小控制在100k以内</p>
                            </el-form-item>
                            <el-form-item label="法人代表">
                                <el-input v-model="form.region" placeholder="请输入法人姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="注册资本">
                                <el-input v-model="form.type" placeholder="请输入注册资本，如1000.00万元"></el-input>
                            </el-form-item>
                            <el-form-item label="统一社会信用代码">
                                <el-input v-model="form.code" placeholder="请输入统一社会信用代码"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人">
                                <el-input v-model="form.username" placeholder="请输入联系人姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="公司座机">
                                <el-input v-model="form.callnum" placeholder="请输入电话号码"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码">
                                <el-input v-model="form.phone" placeholder="请输入14位有效手机号码"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮箱">
                                <el-input v-model="form.phone" placeholder="请输入有效邮箱格式"></el-input>
                            </el-form-item>
                            <div>
                                <div class='save-btn'>
                                    保 存
                                </div>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import left from '../components/left-sider'
export default {
    data(){
        return {
            labelPosition:'right',
            form:{},
            imageUrl:'',
            // value:''
        }
    },
    components:{
        left,
    },
    methods:{
        handleAvatarSuccess() {

        },
        beforeAvatarUpload(){

        }
    }
}
</script>
<style lang="stylus" scoped>
.ui
    width 1200px
    margin 0 auto
    margin-top 40px
    margin-bottom 60px
    display flex
.uiright
    width 1000px
    background #fff
    padding 40px 30px
    box-sizing border-box
    box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.12)
    margin-left 20px
    flex-shrink 0
.bigTitle
    margin-bottom 10px
    font-size 22px
    color #666666
.desc
    font-size 12px
    color #a6a6a6
.userInfoBox
    padding 50px 0 60px 40px
    box-sizing border-box
.save-btn
    width 120px
    margin 40px 0 0 130px
    background #2E7BFF
    font-size 14px
    color #fff
    font-weight bold
    text-align center
    line-height 42px
    cursor pointer
.save-btn:hover
    background #609BFF
</style>
<style lang="stylus">
.ui
    .el-input__inner,.el-textarea__inner
        width 400px
        // border-color #D8DBDF
</style>