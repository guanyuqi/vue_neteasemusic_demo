<template>
    <div id="ranklist">
        <mt-header fixed>
            <router-link to="/singer" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="contant">
            <div class="bgimg">
                <img :src="musiclistinfo[0].img" alt="">
                <div class="txtbox">
                    <span>{{musiclistinfo[0].txt}}</span>
                </div>
            </div>
            <div class="list">
                <div class="listbox">
                    <div class="listhead">
                        <span class="mui-icon iconfont icon-Video"></span>
                        <span class="listheadspan">播放全部<span>(共{{ musiclist.length }}首)</span></span>
                    </div>
                    <div class="countantbox" v-for="(item,index) in musiclist" :key="item.id" @click="set_player(index)" :to="'/home/music' + item.id">
                        <div class="num">{{index+1}}</div>
                        <div class="msg">
                            <div>{{item.name}}</div>
                            <div>{{item.ar[0].name}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
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
    this.getmusiclist()
    this.get_currentroutename()
    },
    methods:{
    getmusiclist(){
        let that = this
        const axios = require('axios');
        axios.get('http://192.168.2.100:3000/artists?id='+that.id)
            .then(function (res) { 
                console.log(res) 
                
                let info = [{'name':res.data.artist.name,'img':res.data.artist.picUrl,
                'txt':res.data.artist.briefDesc}]
                that.musiclistinfo = info
                console.log(info) 
                that.musiclist = res.data.hotSongs.splice(25)
                 console.log(that.musiclist)
                for(let i = 0; i<that.musiclist.length;i++){
                    if(that.musiclist[i].ar.length>1){
                        that.musiclist[i].ar[0].name = that.musiclist[i].ar[0].name+'/'+that.musiclist[i].ar[1].name
                    }
                }
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    },
    //根据路由名字判断搜索栏显示
    get_currentroutename(){
      this.currentroutename = this.$route.name
      this.$store.dispatch('searchflg',this.currentroutename)
    },

    //进入播放器事件
    set_player(index){
        console.log('进入播放器')
        this.$store.dispatch('playshowtrue')
        this.$store.dispatch('searchflg_1')
        this.$store.dispatch('miniplayshowfalse')
        let songindex = index
        console.log(songindex)
        this.$store.dispatch('setsongindex',songindex)
        let musiclistmsg = []
        for(let i = 0;i<this.musiclist.length;i++){
            musiclistmsg[i] = {}
            musiclistmsg[i].name = this.musiclist[i].name
            musiclistmsg[i].singer = this.musiclist[i].ar[0].name
            musiclistmsg[i].src = 'http://music.163.com/song/media/outer/url?id='+this.musiclist[i].id+'.mp3'
            musiclistmsg[i].img = this.musiclist[i].al.picUrl
        }
        this.$store.dispatch('setmusiclist',musiclistmsg)
    }

    },
    


}
</script>
<style lang="scss">
    #ranklist > .mint-header {
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
    .txtbox > span{
        font-size: 15px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
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