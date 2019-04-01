<template>
    <div class="movie">
        <ul>
           <MovieList v-for=" (movie,index) in movieList" :key="index" :movie="movie" @click.native="getDetail(movie)"></MovieList>
        </ul>
        <div class="loading" v-show="isShow">
            <img src="../../assets/img/loading.gif" alt="" srcset="">
        </div>
        <div class="ending" v-show="isEnd">
            我也是有底线的...
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
            // i 和 j 用来测试，为什么会请求加入两次一样的数组
            // 原因是loding 加载后变长，重新计算Top Height，又请求了一次数据
            //i:1,
            //j:10
        }
    },
    created(){
        // console.log(this.j);
        this.getData();
        window.onscroll = () =>{
            var scollTop = document.documentElement.scrollTop;
            var scollHeight = document.documentElement.scrollHeight;
            var clientHeight = document.documentElement.clientHeight;
            // 加了一个this.isShow判断 是因为当loding出现的时候会重新计算scollTop 拉到底再次请求 
            if(scollTop + clientHeight === scollHeight && !this.isEnd && this.isShow == false){
                this.isShow = true;
                this.getData();  
            }
        }
    },
    methods:{
        getData(){
            // console.log(this.i++);
           Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movieList.length+'&count=5'
        //    前端浏览器不支持跨域请求 无法添加referer 需要后端
        //    ,{
        //        headers:{
        //            'referer':'https://movie.douban.com/',
        //            host: 'movie.douban.com'
        //        }
        //    }
           )
                .then((res)=>{
                    // console.log(res.data);
                    this.movieList =[...this.movieList,...res.data.subjects];
                    this.isShow = false;
                    if(res.data.subjects.length < 5){
                        this.isEnd = true;
                        this.isShow = false;
                    }
            });

        // 豆瓣API限制每小时请求次数，提取json放在了myjson上用作备用
        // Axios.get('https://api.myjson.com/bins/sx4oi')
        //       .then((res)=>{
        //           var arr = res.data.subjects.slice(this.movieList.length,this.movieList.length+5);
        //           this.movieList = [...this.movieList,...arr];
        //               this.isShow = false;
        //               if(arr.length < 5){
        //                   this.isEnd = true;
        //               }
        //       });
        },
        getDetail(movie){
            // console.log(movie.id);
            this.$router.push('/movie-detail/'+movie.id);
        }
    },
    components:{
        MovieList
    }
}
</script>
<style lang="scss">
   .loading , .ending{
       text-align: center;
   }
</style>
