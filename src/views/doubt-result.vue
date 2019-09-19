<template>
    <router-view v-if='$route.name == "doubtdetail"'></router-view>
    <div v-else>
        <div class="dr">
            <left></left>
            <div class="drright">
                <div class="righTitle">
                    <div class="bigTitle">疑议结果</div>
                    <div class="desc">您在列表中查看当前疑议提交的记录</div>
                </div>
                <div>
                    <div class='tab'>
                        <div class='t'>
                            <div :class='sta ==0?"active":""' @click='tpt(0)'>全部</div>
                            <div :class='sta ==1?"active":""' @click='tpt(1)'>待反馈<span class='num'>2</span></div>
                            <div :class='sta ==2?"active":""' @click='tpt(2)'>已反馈</div>
                        </div>
                        <div style="display:flex">
                            <div>
                                <el-date-picker v-model="value1" type="date" placeholder="按提交时间查询"></el-date-picker>
                            </div>
                            <div class='ref'>
                                <input type="text" placeholder="请输入疑议标题名称">
                                <div></div>
                            </div>                           
                        </div>
                    </div>
                    <div>
                        <div class="askPriceBox">
                            <ul class="askPriceList">
                                <li class="askTitle">
                                    <span class="tt1">申报编号</span>
                                    <span class="tt2">公司名称</span>
                                    <span class="tt3">申报时间</span>
                                    <span class="tt4">审核状态</span>
                                    <span class="tt5">操作</span>
                                </li>
                                <li class="askList" v-for="item in tableData" :key="item.id">
                                    <div class="item_i1">{{item.id}}</div>
                                    <div class="item_i2">{{item.name}}</div>
                                    <div class="item_i3">{{item.time}}</div>
                                    <div class="item_i4 item_i4_1" v-show="item.status == 1" >待反馈</div>
                                    <div class="item_i4 item_i4_2" v-show="item.status == 2" >处理中</div>
                                    <div class="item_i4 item_i4_3" v-show="item.status == 3" >已反馈</div>
                                    <div class="item_i5">
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
            console.log(aa)
            this.$router.push({name:'doubtdetail'})
        },
        deleIt(){
            // this.$confirm('确认要删除该项吗？').then(_ => {}).catch(_ => {});
        }
    }
}
</script>
<style lang="stylus" scoped>
.dr
    width 1200px
    margin 0 auto
    margin-top 40px
    margin-bottom 60px
    display flex
.drright
    width 1000px
    min-height 780px
    background #fff
    padding 40px 30px
    box-sizing border-box
    box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.12)
    margin-left 20px
    flex-shrink 0

.tt1,.item_i1
    width 16%
.tt2,.item_i2
    width 30%
.tt3,.item_i3
    width 15%
.tt4,.item_i4
    width 14%
.tt5,.item_i5
    width 25%

.item_i4.item_i4_1
    color #089FE5
.item_i4.item_i4_2
    color #A6A6A6
.item_i4.item_i4_3
    color #04C837
.item_i4.item_i4_4
    color #E56244

</style>