<template>
  <div class="about">
    
    <button @click="jia">点我</button>
    <div class="laoer" >{{searchflg}}</div>
    <div>{{musiclist[songindex]}}</div>
    <!-- <div>{{music}}</div> -->

  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      currentroutename: '',
      count : 0,
      music :  this.$store.state.musiclist
    }
  },
  mounted(){
    // this.get_currentroutename()
   
  },
  computed:{
    ...mapState(['searchflg','nmsl','musiclist','songindex']),
    
  },
  watch:{
    count(){
      this.music =  this.$store.state.musiclist[this.count]
    }
  },
  methods:{
    jia(){
      this.count=this.count+1
    }
  },
}
</script>
<style lang="scss" scoped>
*{
   margin-top:85px;
  padding: 0;
}
  .demo{
    width: 300px;
    height: 500px;
    background-color: #6a788f;
  }
  .laoer{
    width: 200px;
    height: 200px;
    background-color: pink;
  }
</style>
