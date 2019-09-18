<template>
<div>
    <div class="detailPage">
        <left></left>
        <div class="detailRight">
            <div class="righTitle">
                <div>
                    <div class="bigTitle">提交详情</div>
                    <div class="desc">您可以查看当前疑议提交的状态和之前填写的信息</div>
                </div>
                <div @click="backToList" class="backIcon">返回疑议结果</div>
            </div>
            <div class="resTip">
                <img src="../../public/img/check1.png">
                <div style="margin-left:10px">我们的工作人员正在为您处理中，请稍后~</div>
            </div>
            <div class="fallback">
                <span>2019-8-28疑议反馈说明.pdf</span>
                <span class="download">下载附件</span>
            </div>
            <div class="detailBox">
                <div class="ddItem">
                    <div class="itemName">公司名称</div>
                    <div class="itemCon">云南建设工程有限公司</div>
                </div>
                <div class="ddItem">
                    <div class="itemName">生产厂址</div>
                    <div class="itemCon">云南建设工程有限公司</div>
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

        }
    },
    components:{
        left,
    },
    methods:{
        backToList(){
            this.$router.push('/doubtres')
        }
    }
}
</script>
<style lang="stylus" scoped>
.detailPage
    width 1200px
    margin 0 auto
    margin-top 40px
    margin-bottom 60px
    display flex

.detailRight
    width 1000px
    min-height 780px
    background #fff
    padding 40px 30px
    box-sizing border-box
    box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.12)
    margin-left 20px
    flex-shrink 0
.righTitle
    display flex
    justify-content space-between
    align-items center
.bigTitle
    margin-bottom 10px
    font-size 22px
    color #666666
.desc
    font-size 12px
    color #a6a6a6
.backIcon
    background url(../../public/img/backIcon.png) no-repeat left center
    padding-left 18px
    box-sizing border-box
    font-size 12px
    color #2E7BFF
    font-weight bold
    text-decoration underline
    cursor pointer
.backIcon:hover
    color #609BFF
.resTip
    display flex
    align-items center
    background #f5f5f5
    padding 0 20px
    box-sizing border-box
    margin-top 20px
    font-size 14px
    color #666666
    font-weight bold
    line-height 40px
.fallback
    padding 20px
    border-bottom 1px #e6e6e6 solid
    box-sizing border-box
    font-size 12px
    color #262626
    font-weight bold
    line-height 12px
    display flex
    justify-content space-between
    align-items center
.download
    width 90px
    height 28px
    background #FF683F
    color #ffffff
    font-weight normal
    line-height 28px
    text-align center
    cursor pointer
.download:hover
    background #FF8D6E
.detailBox
    padding 50px 115px
    box-sizing border-box
.ddItem
    display flex
    align-items center
    margin-bottom 30px
.itemName
    font-size 14px
    color #a6a6a6
    text-align right
.itemCon
    margin-left 30px
    font-size 12px
    color #666
</style>