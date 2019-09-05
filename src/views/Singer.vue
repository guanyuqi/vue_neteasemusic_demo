<template>
  <div class="singer">
    
    <div class="demo">
      <div class="tittle"><span>歌手排行榜</span></div>
      <div class="content">
        <router-link class="singer" v-for="item in singerlist" :key="item.id" :to="'/singer/singerlist/' + item.id">
          <span class="rank">{{item.lastRank+1}}</span>
          <img :src="item.picUrl">
          <span class="singername">{{item.name}}</span>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      singerlist:[],
    }
  },
  mounted(){
    this.getsingerlist()
  },
  methods:{
    getsingerlist(){
      let that = this
      const axios = require('axios');
      axios.get('http://192.168.2.100:3000/toplist/artist')
        .then(function (res) {  
            console.log(res)
            that.singerlist = res.data.list.artists
            that.singerlist.splice(49)

            console.log(that.singerlist)
        })
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        });
    },
    
  },
  components:{
    
  }
}
</script>
<style lang="scss" >
  .demo{
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 70px;
    // background-color: skyblue;
  }
  .content{
     margin-left: 10px;
    margin-right: 10px;
    background-color: #f2f2f2;
  }
  .singer{
    display: flex;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ccc;
    // margin-left: 5px;
    // margin-right: 5px;
    .rank{
      height: 30px;
      width: 30px;
      text-align: center;
      line-height: 70px;
      font-size: 14px;
    }
    img{
      margin-top: 5px;
      margin-left: 5px;
      width: 55px;
      height: 55px;
      border-radius: 3px;
    }
    .singername{
      margin-left: 20px;
      line-height:70px;
      width: 180px;
      font-size: 15px;
    }
    span{
      color: #000;
    }
  }
  .tittle{
    height: 30px;
    background-color: #d9dadb;
    font-size: 14px;
    color: #fff;
    span{
      line-height:30px;
      padding-left: 30px;
    }
  }


</style>
