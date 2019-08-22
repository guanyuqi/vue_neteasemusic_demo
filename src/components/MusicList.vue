<template>
    <div id="musiclist">
        <mt-header fixed>
            <router-link to="/home" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="contant">
            <div class="bgimg">
                <img :src="musiclistinfo.img" alt="">
                <div class="txtbox">
                    <span>{{musiclistinfo.txt}}</span>
                </div>
                <div class="count">
                    <span class="mui-icon iconfont icon-erji"></span>
                    <span>{{musiclistinfo.count}}</span>
                </div>
            </div>
            <div class="list">
                <div class="listbox">
                    <div class="listhead">
                        <span class="mui-icon iconfont icon-Video"></span>
                        <span class="listheadspan">播放全部<span>(共{{ musiclist.length }}首)</span></span>
                    </div>
                    <div class="countantbox" v-for="item in musiclist" :key="item.id" @click="set_player(item.id)" :to="'/home/music' + item.id">
                        <div class="num">{{item.id}}</div>
                        <div class="msg">
                            <div>{{item.name}}</div>
                            <div>{{item.singer}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {
            id: this.$route.params.id,
            musiclistinfo:[],
            musiclist:[],
            currentroutename: ''
        } 
    },
    mounted() {
    //挂载请求
    this.getmusiclistinfo()
    this.getmusiclist()
    this.get_currentroutename()
    },
    methods:{
    getmusiclistinfo(){
        let that = this
        const axios = require('axios');
        axios.get('https://www.csdn.net/api/song')
            .then(function (res) {
            that.musiclistinfo = res.data.songimg.img[that.id-1]
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    },
    getmusiclist(){
        let that = this
        const axios = require('axios');
        axios.get('https://www.csdn.net/api/list')
            .then(function (res) {  
                that.musiclist=res.data.list.data
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    },
    get_currentroutename(){
      this.currentroutename = this.$route.name
      this.$store.dispatch('searchflg',this.currentroutename)
    },
    set_player(id){
        console.log('进入播放器')
        this.$store.dispatch('playshowtrue')
        this.$store.dispatch('searchflg_1')
        this.$store.dispatch('miniplayshowfalse')
        let songmsg = {}
        songmsg.name = this.musiclist[id-1].name
        songmsg.singer = this.musiclist[id-1].singer
        songmsg.src = this.musiclist[id-1].songid
        songmsg.img = this.musiclist[id-1].songimg
         this.$store.dispatch('getsongmsg',songmsg)
    }

    },
    


}
</script>
<style lang="scss">
    #musiclist > .mint-header {
        background-color:transparent;
        margin-top: 10px;
    }
    .bgimg{
         position: relative;
         z-index: -1;
         img{
             width: 100%;
         }
    }
    .txtbox, .count{
        position: absolute;
    }
    .txtbox, .count{
        margin-left: 10px;
        bottom: 18%;
        span{
            color: #fff;
        }
    }
    .count{
        bottom: 8%;
        margin-left: 15px;
        span{
            margin-left: 3px;
            letter-spacing:1px;
            font-size: 13px;
        }
         
    }
    .list{
        height: 800px;
        background-color: #f2f2f2;
        margin-top:-20px;
        z-index: 1000;
        width: 100%;
        border-radius: 15px 15px 0 0;
       
    }
    .listhead{
        // background-color: pink;
        border-radius: 15px 15px 0 0;
        height: 40px;
        letter-spacing:1px;
        z-index: 2;
        .iconfont {
            display:block;
            float: left;
            margin: 10px 13px 0 16px;
            
            font-size: 20px;
        }
        .listheadspan{
            line-height: 40px;
            font-size: 16px;
            span{
                margin-left: 3px;
                font-size: 12px;
                color: #757575;
            }
        }
        
        

    }
    .countantbox{
        border-top: 1px solid #e4e4e4;
        height: 50px;
        background-color: #f2f2f2;
        .num{
            height: 50px;
            float: left;
            width: 50px;
            text-align: center;
            line-height: 50px;
            color: #757575;
        }
        .msg{
            height: 50px;
            padding-top: 5px;
            font-size: 16px;
            letter-spacing:1px;
            color: #000;
            div:nth-child(2){
                font-size: 12px;
                color: #757575;
            }
        }
    }


</style>