<template>
    <div class="music">
        <Aplayer :music = "musicList[0]" :list = "musicList" v-if="isShow">

        </Aplayer>
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer';
import Axios from 'axios';
export default {
    data(){
        return {
            musicList:[],
            isShow:false,
        }
    },
    created(){
        // 使用vuex写死背景颜色和标题
        // this.$store.dispatch('changeBg',{
        //     bgColor:'rgb(0, 150, 136)',
        //     title:'Music'
        // })

        Axios.get('/data/musicdata.json')
            .then((res)=>{
                var data = res.data.musicData;
                    data.forEach((elem) => {
                        var obj = {};
                        obj.title = elem.title;
                        obj.src = elem.src;
                        obj.artist = elem.author;
                        obj.pic = elem.musicImgSrc;
                        this.musicList.push(obj);
                    });
                    this.isShow = true;
        })
    },
    components: {
        Aplayer,
    }
}
</script>
<style lang="scss">
    .aplayer{
        margin: 0px;
    }
</style>
