<template>
    <div class='leftside'>
        <ul v-for='(item,index) in tree' :key='index'>
            <p>{{item.name}}</p>
            <li v-for='(c,i) in item.c' :key='i' 
                @click='$router.push(c.path)'
                :class='$route.path == c.path?"on":""'>
                {{c.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
           tree:[
               {
                    name:'会员管理',
                    c:[{
                        name:'会员信息',
                        path:'/userinfo'   
                    }]
                },
                {
                    name:'价格信息报送',
                    c:[{
                        name:'在线申报',
                        path:'/onlinereport'
                    },{
                        name:'申报结果',
                        path:'/reportres',
                        // children:[
                        //     {
                        //         path:'resultdetail',
                        //         name:'resultdetail',
                        //     }
                        // ]
                    }]
                },
                {
                    name:'价格疑议处理',
                    c:[{
                        name:'疑议提交',
                        path:'/doubtcommit'
                    },{
                        name:'疑议结果',
                        path:'/doubtres'
                    }]
                },
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .leftside
        width 180px
        background #fff
        padding 40px 0 40px 30px
        box-sizing border-box
        box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.12)
        ul
            width 100%
            margin-bottom 40px
            p
                font-size 16px
                color #333
                line-height 16px
                margin-bottom 30px
            li
                font-size 14px
                color #666
                line-height 14px 
                margin-bottom 20px
                cursor pointer
            .on 
                color #2E7BFF

</style>