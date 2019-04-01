<template>
<div class="movie-detail" v-if="show">
    <h3>名称:{{movieDetail.title}}</h3>
    <img :src="movieDetail.images.large">
    <p>id：{{movieDetail.id}}</p>
    <p>简介:{{movieDetail.summary}}</p>
</div>    
</template>
<script>
import Axios from 'axios';
export default {
    data(){
        return {
            movieDetail:{},
            show:false,
        }
    },
    created(){
        var movieId = this.$route.params.id;
        Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com//v2/movie/subject/'+movieId)
            .then((res)=>{
                this.movieDetail = res.data;
                this.show = true;
                console.log(this.movieDetail);
        });
    }
}
</script>
<style lang="scss">
    .movie-detail{
        img{
            border: 1px solid #000;
            margin-left: 0.8rem;
        }
    }
</style>
