<template>
    <div id="searchbar">
        <header>
            <div class="bars"><span class="mui-icon mui-icon-bars"></span></div>
            <!-- <div class="inputbox"> -->
            <div class="middle"><span>NETEASE-M</span></div>
            <!-- </div> -->
            <div class="search"><span class="mui-icon mui-icon-search"></span></div>
        </header>
        <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item " style="height:35px" href="#tabbar">
				<span class="mui-tab-label">推荐</span>
			</router-link>
			<router-link to="/ranking" class="mui-tab-item" style="height:35px" href="#tabbar-with-chat">
				<span class="mui-tab-label">排行</span>
			</router-link>
			<router-link to="/singer" class="mui-tab-item"  style="height:35px" href="#tabbar-with-contact">
				<span class="mui-tab-label">歌手</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
export default {
    mounted(){
        this.haha()
    },
    methods:{
        haha(){
            console.log('头部加载')
        }
    }
}
</script>
<style lang="scss" scoped>
    #searchbar{
        z-index: 1000;
    }
    #searchbar, header, .middle,
    .bars, .search, span
    {
        background-color:  #cd2929;
    }
    #searchbar{
        position:fixed;
        top: 0px;
        width: 100%;
    }
    header{
        display: flex;
        height: 40px;
        width: 100%;
        align-items: center;
    }
    .middle{
        flex:1;
        height: 30px;
        text-align: center;
    }
    .middle > span{
        line-height: 30px;
        color: #fff;
        letter-spacing:4px;
    }
    
    .bars, .search{
        width: 30px;
        height: 30px;
        padding-left: 10px;
        padding-right: 35px;
        span{
            line-height: 30px;
            color: #fff;
            font-weight: 500;
        }
    }
    .search{ 
        padding-right: 31px;
    }
    
    .mui-bar-tab > .mui-active > span{
	font-size: 14px;
	height: 22px;
	box-sizing: border-box;
	color: #fff;
	display: block;
	width: 40px;
	margin: 0 auto;
	border-bottom: 2px solid #fff;
    }
    #searchbar > .mui-bar{
    -webkit-box-shadow: none;
    box-shadow: none;
    }
    .mui-tab-item > .mui-tab-label{
    font-size: 14px;
    height: 22px;
    display: block;
    color: #f1f1f1;
    background-color:#cd2929;
    box-sizing: border-box;
    }
    #searchbar > .mui-bar-tab, .mui-bar{
    background-color:#cd2929;
    top: 35px;
    height: 25px;
    }
    .mui-bar-tab > .mui-tab-item{
        height: 35px;
    }
</style>