<template>
  <ul class="footer" :style="{background:bgColor}">
    <li v-for = "menu in menuList" :key="menu.id" >
      <router-link :to = "menu.path" @click.native="changeBg(menu)">{{menu.name}}</router-link>
    </li>
  </ul>
</template>
<script>
import {mapState} from 'vuex';
export default {
  props: ['menuList'],
  methods:{
      changeBg(menu){
        //在组件中使用 this.$store.dispatch('xxx') 分发 action
        this.$store.dispatch('changeBg',menu);
        // this.$store.dispatch('changeBg',menu.title);
      }
  },
    //映射 this.bgColor 为 store.state.bgColor
    computed:mapState(['bgColor','title']),   

};
</script>
<style lang="scss">
    .footer {
      height: 1rem;
      width: 100%;
      color: #fff;
      position: fixed;
      bottom: 0;
      line-height: 1rem;
      display: flex;
      li {
        flex-grow: 1;
        text-align: center;
        a{
            color:#ccc;
            outline: none;
            &.router-link-active{
                color:#fff;
            }
        }
      }
    }
</style>
