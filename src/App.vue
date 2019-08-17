<template>
  <div id="app">
	<searchbar v-if="search"></searchbar>
    <transition mode="out-in">
      <router-view/>
    </transition>
    
  </div>
</template>
<script>
import searchbar from "./components/searchbar.vue"

export default {
  data() {
    return {
      search:true
    }
  },
  components:{
    searchbar,
  },
  watch:{
    $route(e){
      if(e.name == 'musiclist'){
        this.search = false
      }else if(e.name == 'player'){
        this.search = false
      }
      else{
        this.search = true
      }
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
