<template>
    <div class="movie">
        <ul>
           <MovieList v-for=" (movie,index) in movieList" :key="index" :movie="movie"></MovieList>
        </ul>
        <div class="loading" v-show="isShow">
            <img src="../../assets/img/loading.gif" alt="" srcset="">
        </div>
        <div v-show="isEnd">
            ...到底了
        </div>
    </div>
</template>
<script>
import Axios from 'axios';
import MovieList from '@/views/movie/MovieList.vue'
import { get } from 'http';
export default {
    data(){
        return{
            movieList:[],
            isShow:false,
            isEnd:false,
        }
    },
    created(){
        this.getData();
        window.onscroll = () =>{
            let scollTop = document.documentElement.scrollTop;
            let scollHeight = document.documentElement.scrollHeight;
            let clientHeight = document.documentElement.clientHeight;
            if(scollTop + clientHeight == scollHeight && !this.isEnd){
                this.isShow = true;
                this.getData();  
            }
        }
    },
    methods:{
        // getData(){
        //    Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movieList.length+'&count=5')
        //         .then((res)=>{
        //             this.movieList = [...this.movieList,...res.data.subjects];
        //             this.isShow = false;
        //             if(res.data.subjects.length < 5){
        //                 this.isEnd = true;
        //                 // this.isShow = false;
        //             }
        //     });
        // },
        getData(){
           Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movieList.length+'&count=5')
                .then((res)=>{
                    this.movieList =[...this.movieList,...res.data.subjects];
                    console.log(movieList);
                    this.isShow = false;
                    // if(res.data.subjects.length < 5){
                        // this.isEnd = true;
                        // this.isShow = false;
                    // }
            });
        }
    },
    components:{
        MovieList
    }
}
</script>
<style lang="scss">
   .loading{
       text-align: center;
   }
</style>
