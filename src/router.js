import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue';
import Book from './views/book/Book.vue';
import Music from './views/music/Music.vue';
import Photo from './views/photo/Photo.vue'
import MovieDetail from './views/movie/MovieDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/moviedetail',
      name: 'moviedetail',
      component: MovieDetail,
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo,
    }
  ],
});
