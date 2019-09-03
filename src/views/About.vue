<template>
  <div class="about">
    
    <button >点我</button>
    <div class="laoer">{{searchflg}}</div>

  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      currentroutename: '',
    }
  },
  mounted(){
    // this.get_currentroutename()
    this.getmusiclistinfo()
  },
  computed:{
    ...mapState(['searchflg','nmsl'])
  },
  methods:{
    getmusiclistinfo(){
        let that = this
        const axios = require('axios');
        axios.get(' http://192.168.2.100:3000/personalized?limit=15')
            .then(function (res) {
            console.log(res)
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    },
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
