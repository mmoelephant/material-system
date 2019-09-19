<template>
<div>
    <div class="detailPage">
        <left></left>
        <div class="detailRight">
            <div class="righTitle">
                <div>
                    <div class="bigTitle">申报详情</div>
                    <div class="desc">您可以查看当前申报的状态和之前填写的信息</div>
                </div>
                <div @click="backToList" class="backIcon">返回申报结果</div>
            </div>
            <div class="resTip">
                <img src="../../public/img/check1.png">
                <div style="margin-left:10px">项目审核中，我们的工作人员正在为您处理~</div>
            </div>
            <div class="fallback">
                <span>反馈信息</span>
                <span class="fallText">您上传的营业执照信息有误，请核实后从新提交，谢谢！</span>
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
            this.$router.push('/reportres')
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
    padding 10px 0 30px 20px
    border-bottom 1px #e6e6e6 solid
    box-sizing border-box
    font-size 12px
    color #a6a6a6
.fallText
    margin-left 30px
    color #333
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