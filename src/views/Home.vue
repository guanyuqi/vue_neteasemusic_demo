<template>
  <div class="home">
    <searchbar></searchbar>
    <div v-for='item in lunbolist' :key='item.id'>
      <img :src="item.img" alt="">
    </div>

  </div>
</template>

<script>

import searchbar from "../components/searchbar.vue";
 


export default {
  data() {
    return {
     lunbolist:[]
    }
  },
 mounted() {
    //挂载请求
    this.getlunbo()
  },
  methods: {
    //请求轮播图
    getlunbo(){
      //存储vue实例
      let that = this
      const axios = require('axios');
      axios.get('https://www.csdn.net/api/mock')
        .then(function (res) {
          that.lunbolist = res.data.lunbo.img
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
    }
  },
  components:{
    searchbar,
  }
}
</script>
<style lang="scss">
.home{
  background-color: #fff;
}
</style>
