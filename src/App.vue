<template>
  <div id="app">
	<searchbar v-show="searchflg"></searchbar>
    <transition mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>
<script>
import searchbar from "./components/searchbar.vue"
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  data() {
    return {
      // searchflg:true
    }
  },
  mounted(){
    this.get_currentroutename()
  },
  computed:{
    ...mapState(['searchflg'])
  },
  methods:{
    get_currentroutename(){
      this.currentroutename = this.$route.name
      this.$store.dispatch('searchflg',this.currentroutename)
    }
  },
  components:{
    searchbar,
  },
  watch:{
    $route(e){
      this.get_currentroutename()
    }
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app{
  overflow-x: hidden;
}
.v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
  // position: absolute;
}
.v-enter-active,
.v-leave-to-active{
  transition: all 0.5s ease;
}
  
</style>
