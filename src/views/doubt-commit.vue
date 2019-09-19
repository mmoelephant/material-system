<template>
    <div>
        <div class="dc">
            <left></left>
            <div class="dcright">
                <div class="righTitle">
                    <div class="bigTitle">疑议提交</div>
                    <div class="desc">如果您有任何价格疑议，请在此填写相关信息进行反馈</div>
                </div>
                <div class="userInfoBox">
                    <div class="infobox1">
                        <div class="infoTitle">价格疑议</div>
                        <div>
                            <el-form :label-position="labelPosition" label-width="130px" :model="form">
                                <el-form-item label="疑议期刊"><el-input v-model="form.jour" placeholder="输入范例：2018年7月除税预算价"></el-input></el-form-item>
                                <el-form-item label="疑议内容">
                                    <el-input type="textarea" rows="5" v-model="form.content" placeholder="请输入详细疑议内容"></el-input>
                                </el-form-item>
                                <el-form-item label="疑议附件">
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
                                    <p class="uploadTip">请上传可以提供疑议参考的doc/pdf/jpg/png等文件，大小不超过5MB。</p>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div class="infobox2">
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
                        <div class="infoTitle">证明资料</div>
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
            fileList:[]
        }
    },
    components:{
        left,
    },
    methods:{
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
.dc
    width 1200px
    margin 0 auto
    margin-top 40px
    margin-bottom 60px
    display flex
.dcright
    width 1000px
    background #fff
    padding 40px 30px
    box-sizing border-box
    box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.12)
    margin-left 20px
    flex-shrink 0

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
.dc
    .el-input__inner,.el-textarea__inner
        width 400px
</style>