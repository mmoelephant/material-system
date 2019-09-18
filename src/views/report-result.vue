<template>
    <router-view v-if='$route.name == "resultdetail"'></router-view>
    <div v-else>
        <div class="rr">
            <left></left>
            <div class="rrright">
                <div class="righTitle">
                    <div class="bigTitle">申报结果</div>
                    <div class="desc">您在列表中查看当前申报记录</div>
                </div>
                <div>
                    <div class='tab'>
                        <div class='t'>
                            <div :class='sta ==0?"active":""' @click='tpt(0)'>全部</div>
                            <div :class='sta ==1?"active":""' @click='tpt(1)'>待审核<span class='num'>2</span></div>
                            <div :class='sta ==2?"active":""' @click='tpt(2)'>审核中</div>
                            <div :class='sta ==3?"active":""' @click='tpt(3)'>审核通过</div>
                            <div :class='sta ==4?"active":""' @click='tpt(4)'>审核失败</div>
                        </div>
                        <div>
                            <el-date-picker v-model="value1" type="date" placeholder="按提交时间查询"></el-date-picker>
                        </div>
                        <div class='ref'>
                            <input type="text" placeholder="请输入公司名称">
                            <!-- <img src="../../public/img/searchIcon1.png" alt=""> -->
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div class="askPriceBox">
                            <ul class="askPriceList">
                                <li class="askTitle">
                                    <span class="tt1">申报编号</span>
                                    <span class="tt2">公司名称</span>
                                    <span class="tt3">负责人</span>
                                    <span class="tt4">申报时间</span>
                                    <span class="tt5">审核状态</span>
                                    <span class="tt6">操作</span>
                                </li>
                                <li class="askList" v-for="item in tableData" :key="item.id">
                                    <div class="item_i1">{{item.id}}</div>
                                    <div class="item_i2">{{item.name}}</div>
                                    <div class="item_i3">{{item.charge}}</div>
                                    <div class="item_i4">{{item.time}}</div>
                                    <div class="item_i5 item_i5_1" v-show="item.status == 1" >待审核</div>
                                    <div class="item_i5 item_i5_2" v-show="item.status == 2" >审核中</div>
                                    <div class="item_i5 item_i5_3" v-show="item.status == 3" >审核通过</div>
                                    <div class="item_i5 item_i5_4" v-show="item.status == 4" >审核失败</div>
                                    <div class="item_i6">
                                        <span class="editTwo" @click="toedit(item.id)" v-show="item.status == 1">再次编辑</span>
                                        <span class="see" @click="show_detail(item.id)" v-show="item.status != 1">查看详情</span>
                                        <span class="dele" @click="deleIt(item.id)" v-show="item.status != 1">删除</span>
                                    </div>
                                </li>
                                <div class="noData" v-show="tableData.length == 0">
                                    <div><img src="../../public/img/noIcon.png"></div>
                                    <div class="tips">
                                        <div class="tip1">没有找到相关信息</div>
                                        <div class="tip2">请输入准确的名称，再试试~</div>
                                        <div class="tipBtn">返回</div>
                                    </div>
                                </div>
                            </ul>
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
            sta:0,
            tableData:[
                {id:2016,name:'云南省启航工程建设有限公司',charge:'王志强',time:'2019-06-08',status:1},
                {id:2017,name:'云南省启航工程建设有限公司',charge:'王志强',time:'2019-06-08',status:2},
                {id:2018,name:'云南省启航工程建设有限公司',charge:'王志强',time:'2019-06-08',status:3},
                {id:2019,name:'云南省启航工程建设有限公司',charge:'王志强',time:'2019-06-08',status:4}
            ],
            value1:''
        }
    },
    components:{
        left,
    },
    methods:{
        tpt(bb){
            this.sta = bb
        },
        toedit(){

        },
        show_detail(aa){
            // ,query:{id:aa}
            this.$router.push({name:'resultdetail'})
        },
        deleIt(){
            // this.$confirm('确认要删除该项吗？').then(_ => {}).catch(_ => {});
        }
    }
}
</script>
<style lang="stylus" scoped>
.rr
    width 1200px
    margin 0 auto
    margin-top 40px
    margin-bottom 60px
    display flex
.rrright
    width 1000px
    min-height 780px
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
.tab
    background #fff
    padding 14px 0 16px 0
    // border 1px green solid
    box-sizing borde-box
    display flex
    justify-content space-between
    align-items center
    .t
        display flex
    .ref
        display flex
        align-items center
        input
            width 235px
            height 32px
            border 1px solid #E6E6E6
            box-sizing border-box
            outline none
            text-indent 10px
        div
            width 40px
            height 32px
            background url(../../public/img/searchIcon1.png) no-repeat center
            box-sizing border-box
            border 1px solid #E6E6E6
            border-left none
            cursor pointer
            // img
            //     width 16px
            //     height 16px
            //     margin 8px 12px
        div:hover
            background #2E7BFF url(../../public/img/searchIcon2.png) no-repeat center
            border none
        
    
.tab .t div
    padding 0 20px
    border-right 1px solid #E6E6E6
    box-sizing border-box
    font-size 14px
    color #666
    line-height 14px
    text-align center
    cursor pointer
.tab .t div:hover
    color #333
.tab .t div:last-of-type
    border none
.tab .t div:first-of-type
    padding-left 0
.tab div.active
    color #2E7BFF

.num
    color #FF2C22
    font-size 14px
    font-family MicrosoftYaHei-Bold
    font-weight bold

.askPriceBox
    background #ffffff
    font-size 12px
.askTitle
    height 36px
    background #f5f5f5
    display flex
    font-size 12px
    color #a6a6a6
    font-weight bold
    line-height 36px
    text-align center
.tt1,.item_i1
    width 16%
.tt2,.item_i2
    width 20%
.tt3,.item_i3
    width 10%
.tt4,.item_i4
    width 14%
.tt5,.item_i5
    width 20%
.tt6,.item_i6
    width 20%

.askList
    height 50px
    border-bottom 1px #e6e6e6 solid
    box-sizing border-box
    font-size 12px
    color #666
    line-height 50px
    text-align center
    display flex
    div
        padding 0 10px
        box-sizing border-box
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
.askList:hover
    background #fafafa
.item_i5.item_i5_1
    color #089FE5
.item_i5.item_i5_2
    color #A6A6A6
.item_i5.item_i5_3
    color #04C837
.item_i5.item_i5_4
    color #E56244

.editTwo
    color #333
.dele
    margin-left 20px
.see:hover,.editTwo:hover,.dele:hover
    color #2E7BFF
    cursor pointer

.noData
    display flex
    justify-content center
    align-items center
    margin-top 200px

.tips
    margin-left 30px

.tip1
    font-size 18px
    color #A5A9BD
    font-weight bold
    line-height 18px
.tip2
    margin 10px 0 20px 0
    font-size 12px
    color #a6a6a6
    font-weight normal
    line-height 12px
.tipBtn
    width 100px
    height 30px
    border 1px #d9d9d9 solid
    box-sizing border-box
    font-size 14px
    color #666666
    line-height 30px
    text-align center
    cursor pointer
.tipBtn:hover
    background #f5f5f5
</style>
<style lang="stylus">
.el-date-editor
    .el-input__inner
        width 200px
        height 32px
        border-radius 0
    .el-input__icon.el-icon-date
        line-height 32px
</style>