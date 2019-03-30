<template>
     <li class="movie-li">
        <div class="movie-img">
            <img :src= movie.images.large>
        </div>
        <div class="movie-desc">
            <h3>{{movie.title}}</h3>
            <p>观众评分 <span class="aver">{{movie.rating.average}}</span></p>
            <span>主演：<span v-for="actor in movie.casts" :key="actor.id">{{actor.name }} </span> </span>
        </div>
    </li>
</template>
<script>
export default {
    props:['movie']
}
</script>
<style lang="scss">
    .movie-li {
        display: flex;
        padding: 10px;
        .movie-img{
            flex-grow: 1;
            width: 0;
        }
        .movie-desc{
            flex-grow: 3;
            width: 0;
            margin-left: 20px;
            .aver{
                color:orange;
            }
        }
    }
</style>
