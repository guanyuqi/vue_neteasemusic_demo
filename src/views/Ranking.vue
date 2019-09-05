<template>
  <div class="about">
    
    <div class="content">
      <ul class="rankbox">
        <router-link :to="'/ranking/ranklist/' + item.id" v-for="item in ranklist" :key="item.id">
         
            <div class="imgbox">
              <img :src="item.coverImgUrl">
            </div>
            <div class="songbox">
              <span>1. {{item.tracks[0].first}}-{{item.tracks[0].second}}</span>
              <span>2. {{item.tracks[1].first}}-{{item.tracks[1].second}}</span>
              <span>3. {{item.tracks[2].first}}-{{item.tracks[2].second}}</span>
            </div>
          </router-link>
      
      </ul>

    </div>

  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      ranklist:[],
    }
  },
  mounted(){
    this.getranklist()
  },
  computed:{
    ...mapState(['searchflg','nmsl','musiclist','songindex']),
    
  },
  watch:{
  
  },
  methods:{
    getranklist(){
      let that = this
      const axios = require('axios');
      axios.get('http://192.168.2.100:3000/toplist/detail')
        .then(function (res) {  
            console.log(res)
            that.ranklist = res.data.list
            that.ranklist.splice(4)
            console.log(that.ranklist)
        })
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        });
    },
  }
 
}
</script>
<style lang="scss" scoped>
  
  .content{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 70px;
    background-color: #f2f2f2;
  }
  .rankbox{
    a{
      display: block;
      width: 100%;
      height: 108px;
      margin: 8px 10px 0 10px;
      display: flex;
      border-bottom: 1px solid #ccc;
      .imgbox > img{
        height: 100px;
        width: 100px;
        border-radius: 5px;
      }
      .songbox{
        flex: 1;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        font-size: 12px;
        color: #000;
      }
    }
  }
</style>
