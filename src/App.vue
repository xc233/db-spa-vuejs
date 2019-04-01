<template>
    <div id="app">
        <CommonHeader></CommonHeader>
        <router-view class="content"/>
        <CommonFooter :menuList ="menuList"></CommonFooter>
    </div>
</template>
<script>
import CommonHeader from "@/components/CHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
export default {
    data(){
        return {
            menuList:[{
                name:'电影',
                path:'/movie',
                // bgColor:'rgb(33, 150, 243)',
                bgColor:'rgb(47, 54, 64)',
                title:'豆瓣电影'
            },{
                name:'音乐',
                path:'/music',
                bgColor:'rgb(194, 54, 22)',
                title:'豆瓣电台'
            },{
                name:'书籍',
                path:'/book',
                bgColor:'rgb(109, 33, 79)',
                title:'豆瓣读书'
            },{
                name:'我的',
                path:'/me',
                bgColor:'#007880',
                title:'个人中心'
            }],
        }
    },
    components: {
        CommonHeader,
        CommonFooter
    },
    created(){
        var path = this.$route.path;
        var menu = this.menuList.filter(ele=>{
            return ele.path == path;
        });
        this.$store.dispatch('changeBg',menu[0]);
    }
};
</script>
<style lang="scss">
    .content{
        margin: 1rem 0;
    }
</style>
