<template>
<div>
    <div class="workstand">
        <left></left>
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
    }

}
</script>
<style lang="stylus" scoped>
.workstand
    width 1200px
    margin 0 auto
    margin-top 40px
    display flex
</style>