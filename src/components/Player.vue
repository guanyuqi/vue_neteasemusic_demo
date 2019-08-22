<template>
    <div id="player" >
        <audio id="audio" :src="songmsg.src" loop='false'></audio>
        <div class="normalplayer" v-show="playershow">
            <mt-header fixed>
                <div @click="back" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </div>
            </mt-header>
            <div class="backimg">
                <img :src='songmsg.img'>
            </div>
            <nav>
                <span>{{songmsg.name}}</span>
                <p>{{songmsg.singer}}</p>
            </nav>
            <div class="disk">
                <div id="diskinner">
                    <img :src='songmsg.img'>
                </div>
            </div>
            
            <div class="control">
                <div class="progress">
                    <mt-range
                    v-model="rangeValue"
                    :min="0"
                    :max="duration"
                    :step="1"
                    :bar-height="3">
                        <div class="start" slot="start">{{current}}</div>
                        <div class="end" slot="end">0{{duration_show_min}}:{{duration_show_sec}}</div>
                    </mt-range>
                </div>
                <div class="controlbar">
                    <div class="sequence">
                        <span class="mui-icon iconfont icon-Repeat"></span>
                    </div>
                    <div class="front">
                        <span class="mui-icon iconfont icon-Previous"></span>
                    </div>
                    <div class="playing" >
                        <span v-if="playflg"  @click="play" class="mui-icon iconfont icon-Play"></span>
                        <span v-if="!playflg" @click="stop" class="mui-icon iconfont icon-Pause"></span>
                    </div>
                    <div class="behind">
                        <span class="mui-icon iconfont icon-Next"></span>
                    </div>
                    <div class="love">
                        <span class="mui-icon iconfont icon-Mix"></span>
                    </div>
                </div>
            </div>
        
        </div>
        <div class="miniplayer" v-show="miniplayershow">
            <div class="minidisk" @click='normalshow'>
                <div id="minidiskinner">
                    <img :src='songmsg.img'>
                </div>
            </div>
            <div class="miniinfo">
                <div class="songname">{{songmsg.name}}</div>
                <div class="singer">{{songmsg.singer}}</div>
            </div>
            <div class="miniplaying" >
                <span v-if="playflg"  @click="play" class="mui-icon iconfont icon-Play"></span>
                <span v-if="!playflg" @click="stop" class="mui-icon iconfont icon-Pause"></span>
            </div>
        </div>
        
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import { constants } from 'buffer';
export default {
    data(){
        return {
            playflg :true,
            id: this.$route.params.id, 
            rangeValue: 0,            //进度值
            duration: 100,          //总时长
            duration_show_min: 1,
            duration_show_sec: 1,
            timer : null,
            current : '00:00',
            currentroutename: '',
            playershow : ''
        } 
    },
    mounted(){
        // this.play()
        this.gettime()
        // this.get_currentroutename()
        
    },

    methods:{
        back(){
            //this.$router.go(-1);//返回上一层
            console.log('player回退')
            this.$store.dispatch('playshowfalse')
            this.set_index()
            this.$store.dispatch('miniplayshowtrue')
        },
        //点击播放按键
        play(){
            this.playflg = false
            let audio = document.querySelector('#audio');
            let disk = document.querySelector('#diskinner')
            let minidisk = document.querySelector('#minidiskinner')
            console.log('正在播放')
            audio.play() 
            disk.classList.add("rotate");
            minidisk.classList.add("rotate");
            disk.style.webkitAnimationPlayState = "running";  
            minidisk.style.webkitAnimationPlayState = "running";    //disk旋转
            let that = this
            audio.ontimeupdate = function(){
                let timedifrence = Math.abs(that.rangeValue - parseInt(audio.currentTime))
                var min = parseInt(audio.currentTime/60)
                var sec = parseInt(audio.currentTime%60)
                if (sec < 10){
                    sec = '0'+ sec
                }
                if(min < 1){
                    that.current = "00"+":"+ sec                 //拼接当前播放时间
                }else{
                    that.current = "0"+min+":"+sec
                }      //****核心*****
                if(timedifrence >= 5){                                                          //判断rangeValue(进度值)和当前时间差距
                    audio.currentTime = that.rangeValue                                         //如果拖动超过5S差值，即刻更新当前时间
                }else{
                    that.rangeValue = parseInt(audio.currentTime)
                }
            }
        },
        stop(){
            this.playflg == true
            let audio = document.querySelector('#audio');
            let disk = document.querySelector('#diskinner');
            let minidisk = document.querySelector('#minidiskinner')
            this.playflg = !this.playflg
            audio.pause()
            disk.style.webkitAnimationPlayState = "paused";
            minidisk.style.webkitAnimationPlayState = "paused";
            clearInterval(this.timer);  
            console.log('暂停播放')      
        },
        clear(){
            let audio = document.querySelector('#audio');
            let disk = document.querySelector('#diskinner')
            let minidisk = document.querySelector('#minidiskinner')
            this.playflg = true           
            this.stop()
            disk.style.webkitAnimationPlayState = "paused";
            minidisk.style.webkitAnimationPlayState = "paused";
            this.current = '00:00' 
            this.rangeValue = 0
            audio.currentTime = 0.1
            console.log('清除进度')
        },
        gettime(){ 
            let audio = document.querySelector('#audio');
            let that = this
            var audio_duration = parseInt(audio.duration)
            that.duration = audio_duration
            that.duration_show_min = parseInt(audio.duration/60)
            that.duration_show_sec = parseInt(audio_duration % 60)
            if(that.duration_show_sec<10){
                that.duration_show_sec = '0'+that.duration_show_sec
            }
            console.log('加载时间完成')
        },
        set_index(){
            let player = document.querySelector('#player')
            if(player.style.zIndex == -1){
                player.style.zIndex = 1001
            }else if(player.style.zIndex == 1001){
                player.style.zIndex = -1
            }
            
        },
        normalshow(){
            console.log('显示大播放器')
            this.$store.dispatch('playshowtrue')
            this.$store.dispatch('miniplayshowfalse')
            this.$store.dispatch('searchflg_1')
        }
    },
    computed:{
        ...mapState(['searchflg','playershow','miniplayershow','songmsg']),

        isShow() {  
            return this.playershow = this.$store.state.playershow;
            console.log('computed计算出了')
        },

        isPlaying() {                                                       //监视当前播放歌曲数据
            return this.$store.state.songmsg.name;
        }
    },
    watch:{
        rangeValue(rangeValue){
            if(this.rangeValue == this.duration){                   //进度慢即刻清空停止
                this.clear()
                this.stop()
                          
                    
                    
            }
        },
        $route(e){
            this.$store.dispatch('playshowfalse')
        },
        isShow(){
            if(this.$store.state.playershow == true ){
                let that = this
                console.log('万恶之源!!!!!')
                audio.oncanplay = function(){
                    console.log('可以显示，开始播放!!!!!')
                    that.play()
                    that.gettime()
                    that.set_index()
                }
                setTimeout(() => {
                    audio.oncanplay = function(){}
                }, 5000);
                
            }else{
                console.log('watch调用back')
                // this.back()
            }
        },
        isPlaying(){                                        //如果当前歌曲数据改变即刻清空播放数据
            
            this.clear()
            this.play()
            console.log('检测到变化，正在停止清空 播放下一首')
        }

    }  
}
</script>
<style lang="scss">
    
    #player  .mint-header {
        background-color:transparent; 
        margin-top: 10px;
    }
    #player  .backimg{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(28px);
        -webkit-filter: blur(28px);
    }
    .normalplayer{
        position: fixed;
        height: 100%;
		width: 100%;
        z-index: 150;
        background-color: #666;
    }
    .normalplayer > nav{
        height: 70px;
        text-align: center;
        padding-top: 16px; 
        span{
            color: #fff;
            font-size: 19px;
            font-weight: 700;
        }
        p{
            color: #fff;
        }
    }
    .normalplayer > .disk{
        width: 270px;
        height: 270px;
        background-color: rgba(0,0,0,0.3);
        margin: 80px auto;
        border-radius: 50%;
        padding: 15px 15px 15px 15px;
        #diskinner{
            width: 240px;
            height: 240px; 
        }

    }
    #diskinner > img{
        border-radius: 50%;
    }
    .control{
        width: 100%;
        height: 200px;
        position: fixed;
        bottom: 0;
        .progress{             
            height: 50px;
            width: 90%;
            margin-left: 5%;
            .mt-range-progress{
                background-color: #c70c0c;
            }
            .mt-range-thumb{
                width: 20px;
                height: 20px;
                top:5px;
            }
            .start,.end{
                color: #fff;
                font-size: 13px;
                margin: 0 8px 0 8px;
            }
        }
        .controlbar{
            height: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            div{
                width: 60px;
                height: 60px;
                text-align: center;
                color:#fff;      
                span{
                    font-size: 25px;
                     line-height: 60px;
                }
            }
            .sequence, .love{
                span{
                    font-size: 20px;
                }
            }
            .playing{
                span{
                    font-size: 35px;
                }
            }
        }

    }

    @keyframes rotating{
			0%{
				transform: rotate(0deg);
			}
			100%{
				transform: rotate(360deg);
			}
    }
    .rotate{
        animation:rotating 20s linear 0.2s infinite;
    }
    .miniplayer{
        width: 100%;
        height: 8%;
        position: fixed;
        bottom: 0;
        background-color:rgba(255, 255, 255, .85);
        z-index: 1000;
        display: flex;
        align-items: center;
    }
    .minidisk{
        
        #minidiskinner{
            height: 50px;
            width: 50px;
            margin-left: 15px;
            img{
                border-radius: 50%;
            }
            
        }
    }
    .miniinfo{
        height: 50px;
        width: 60%;
        margin-left: 20px;
        .songname{
            font-size: 16px;
        }
        .singer{
            margin-top: 4px;
            font-size: 14px;
            color: #333;
        }
    }
    .miniplaying{
        margin: 0 auto;
        .iconfont{
            font-size: 25px;
        }
        
    }
</style>