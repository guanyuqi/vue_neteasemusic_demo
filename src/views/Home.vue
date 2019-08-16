<template>
  <div id="home">
    <div class="swipebox">
      <mt-swipe :auto="4000">
              <!-- 谁使用轮播组件 谁给lunbotulist传值 -->
        <mt-swipe-item v-for="item in lunbolist" :key="item.id">
          <img :src="item.img" alt=""> 
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="contantbox">
      <div class="head">推荐歌单</div>
      <ul>
        <li v-for="item in songimg" :key="item.id" >
          <router-link  :to="'/home/musiclist/' + item.id">
            <div class="songlistcontant">
              <img :src="item.img" alt="">
              <div class="songlistcount">
                <span class="mui-icon iconfont icon-Video"></span>
                <span>{{item.count}}</span>
              </div>
            </div>
          </router-link>
          <p class="info">{{item.txt}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

import searchbar from "../components/searchbar.vue"
export default {
  data() {
    return {
     lunbolist:[],
     songimg:[]
    }
  },
 mounted() {
    //挂载请求
    this.getlunbo()
    this.getsongimg()
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
    },

    //请求首页歌单图片
    getsongimg(){
      let that = this
      const axios = require('axios');
      axios.get('https://www.csdn.net/api/song')
        .then(function (res) {
          that.songimg = res.data.songimg.img
          console.log(that.songimg)
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
#home{
  margin-top:70px;
  background-color: #f2f2f2;
}
.swipebox{
  height: 130px;
  background-color: #cd2929;
}

#home > .swipebox > .mint-swipe{
  height: 185px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 5px;
  
}
img {
      height: 100%;
      width: 100%;
    }
.mint-swipe > .mint-swipe-item {
    text-align: center;
  }
.contantbox{
  margin-top: 80px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: #f2f2f2;
}
.head{
  font-size: 14px;
  font-weight: 600;
  letter-spacing:3px;
}
ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  list-style: none;
}
ul>li{
  width: 120px;
  height: 160px;
  margin: 10px 0px 15px 0px;
  
}
.songlistcontant{
  position: relative;
  img{
    border-radius: 4px;
  }
}

li > p{
  color: #444446;
  font-size: 12px;
}
.songlistcount{
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  span{
    color: #fff;
    margin-left: 3px;
    margin-right: 3px;
    font-size: 11px;
  }
}
</style>
