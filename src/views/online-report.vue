<template>
    <div>
        <div class="or">
            <left></left>
            <div class="oright">
                <div class="righTitle">
                    <div class="bigTitle">在线申报</div>
                    <div class="desc">在线提交申报材料，请注意上传的文件格式</div>
                </div>
                <div class="userInfoBox">
                    <div class="infobox1">
                        <div class="infoTitle">填写资料</div>
                        <div>
                            <el-form :label-position="labelPosition" label-width="130px" :model="form">
                                <el-form-item label="公司名称"><el-input v-model="form.name" placeholder="请输入公司名称"></el-input></el-form-item>
                                <el-form-item label="生产厂址">
                                    <el-input v-model="form.place" placeholder="请输入详细生产厂址"></el-input>
                                </el-form-item>
                                <el-form-item label="负责人">
                                    <el-input v-model="form.leader" placeholder="请输入负责人姓名"></el-input>
                                </el-form-item>
                                <el-form-item label="负责人电话">
                                    <el-input v-model="form.lcall" placeholder="请输入有效电话号码"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div class="infobox2">
                        <div class="infoTitle">附件上传</div>
                        <div>
                            <el-form :label-position="labelPosition" label-width="130px" :model="form">
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
                                    <p class="uploadTip">代理商或经销商需提供生产厂授权书。<br>文件上传格式为jpg/png，大小不超过5MB。</p>
                                </el-form-item>
                                <el-form-item label="产品检验报告">
                                    <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                    <p class="uploadTip">只能上传doc/pdf文件，大小不超过5MB。</p>
                                </el-form-item>
                                <el-form-item label="国家/企业标准文件">
                                    <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                    <p class="uploadTip1">*请选择国家标准文件或企业标准文件中的一种进行上传。</p>
                                    <p class="uploadTip2">只能上传doc/pdf文件，大小不超过5MB。</p>
                                </el-form-item>
                                <el-form-item label="材料申报表">
                                    <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                    <p class="uploadTip3">申报表模板下载</p>
                                    <p class="uploadTip2">只能上传doc/xls/pdf文件，大小不超过5MB。</p>
                                </el-form-item>
                                <el-form-item label="与甲方供货合同">
                                    <el-upload
                                        class="avatar-uploader"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <p class="uploadTip">文件上传格式为jpg/png，大小不超过5MB。</p>
                                </el-form-item>
                                <el-form-item label="绿建标识/专利证书">
                                    <el-upload
                                        class="avatar-uploader"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <p class="uploadTip">文件上传格式为jpg/png，大小不超过5MB。</p>
                                </el-form-item>
                                <el-form-item label="材料申报表">
                                    <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                    <p class="uploadTip3">真实性承诺书模板下载</p>
                                    <p class="uploadTip2">只能上传doc/xls/pdf文件，大小不超过5MB。</p>
                                </el-form-item>
                                <div>
                                    <div class='save-btn'>
                                        确认无误，提交资料
                                    </div>
                                </div>
                            </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="在线申报协议" :visible.sync="dialog" width="820px" class="procolDialog" :before-close="handleClose"
        :close-on-click-modal="modalClose" :show-close="showClose">
            <div class="dialogCon">
                <p>在您注册成为行列用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署一下协议，
                    请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是一下粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
                </p>
                <p class="procolTitle">在线申报协议<span class="version">版本日期：2019.5.28</span></p>
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
</template>
<script>
import left from '../components/left-sider'
export default {
    data(){
        return {
            dialog:true,
            modalClose:false,
            showClose:true,
            labelPosition:'right',
            form:{},
            imageUrl:'',
            fileList:[]
        }
    },
    components:{
        left,
    },
    methods:{
        handleClose(done) {
            this.$confirm('确认关闭？').then(_ => {
                this.$router.push({name:'home',query:{}})
            }).catch(_ => {
                
            });
        },
        backTo(){
            this.$router.push({name:'home',query:{}})
        },
        agree(){
            this.dialog = false
        },
        handleAvatarSuccess() {

        },
        beforeAvatarUpload(){

        },
        handlePreview(){

        },
        handleRemove(){

        },
        beforeRemove(){

        },
        handleExceed(){

        }
    }
}
</script>
<style lang="stylus" scoped>
.or
    width 1200px
    margin 0 auto
    margin-top 40px
    margin-bottom 60px
    display flex
.oright
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

.infobox1,.infobox2
    display flex
.infobox2
    margin-top 30px
.infoTitle
    font-size 14px
    color #333333
    font-weight bold

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

.uploadTip
    margin-top 14px
    font-size 12px
    color #A6A6A6
    line-height 22px
.uploadTip1
    margin-top 14px
    font-size 12px
    color #FF8560
    line-height 22px
.uploadTip2
    font-size 12px
    color #a6a6a6
    line-height 22px
.uploadTip3
    background url(../../public/img/down1.png) no-repeat left center
    padding-left 20px
    box-sizing border-box
    margin-top 14px
    font-size 12px
    color #333333
    font-weight bold
    line-height 22px
    text-decoration underline
    cursor pointer
.uploadTip3:hover
    background url(../../public/img/down2.png) no-repeat left center
    color #2E7BFF

.save-btn
    width 300px
    background #FF683F
    margin 40px 0 0 130px
    border-radius 40px
    font-size 14px
    color #fff
    font-weight bold
    text-align center
    line-height 40px
    cursor pointer
.save-btn:hover
    background #FF8D6E
</style>
<style lang="stylus">
.or
    .el-input__inner,.el-textarea__inner
        width 400px
</style>