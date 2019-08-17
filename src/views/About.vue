<template>
  <div class="about">
    
    <div class="demo"></div>
    <aplayer autoplay
    :music="{
      title: 'secret base~君がくれたもの~',
      artist: 'Silent Siren',
      src: 'http://music.163.com/song/media/outer/url?id=476592630.mp3',
      pic: 'http://p3.music.126.net/EkPU_UxbmQzt2ENftl6IhA==/109951164297146790.jpg?param=200y200',
      }"
    />

  </div>
</template>

<script>
// import searchbar from "../components/searchbar.vue"
import Aplayer from 'vue-aplayer'

export default {
  data() {
    return {

    }
  },
  computed:{
    
  },
  components:{
    // searchbar,
    Aplayer,
  }
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
</style>
