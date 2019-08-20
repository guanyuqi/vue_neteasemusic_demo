<template>
  <div class="about">
    
    <button @click="dian">点我</button>
    <div class="laoer">{{searchflg}}{{nmsl}}</div>

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
    this.get_currentroutename()
  },
  computed:{
    ...mapState(['searchflg','nmsl'])
  },
  methods:{
    dian(){
      this.$store.dispatch('searchflg',this.currentroutename)
    },
    get_currentroutename(){
      this.currentroutename = this.$route.name
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
