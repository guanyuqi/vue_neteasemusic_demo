<template>
  <div id="app">
    <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item " href="#tabbar">
				<span class="mui-icon iconfont icon-CN_NetEasemusic"></span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link to="/about" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon iconfont icon-video"></span>
				<span class="mui-tab-label">视频</span>
			</router-link>
			<router-link to="/about" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon iconfont icon-music"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
			<router-link to="/about" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon iconfont icon-group"></span>
				<span class="mui-tab-label">云村</span>
			</router-link>
      <router-link to="/about" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon iconfont icon-user"></span>
				<span class="mui-tab-label">账号</span>
			</router-link>
		</nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  background-color: #fff;
}
.mui-bar-tab > .mui-active  span{
 color: #ff3a3d;
}
#app > .mui-bar{
  -webkit-box-shadow: none;
  box-shadow: none;
}
.mui-tab-item > .iconfont,.mui-tab-label{
  color: #8f928f;
  background-color: #efefef;
}
#app > .mui-bar-tab, .mui-bar{
  background-color: #efefef;
}
</style>
