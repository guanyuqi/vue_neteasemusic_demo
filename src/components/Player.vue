<template>
    <div id="palyer">
        <div class="normalplayer">
            <mt-header fixed>
                <div @click="back" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </div>
            </mt-header>
            <div class="backimg">
                <img src="http://p1.music.126.net/oVCpfPtfAqNcAbRWMU7ffA==/109951163801547166.jpg?param=130y130">
            </div>
            <nav>
                <span>人间不值得</span>
                <p>黄诗扶</p>
            </nav>
            <div class="disk">
                <div id="diskinner">
                    <img src="http://p1.music.126.net/oVCpfPtfAqNcAbRWMU7ffA==/109951163801547166.jpg?param=130y130">
                </div>
            </div>
            <audio id="audio" src="http://music.163.com/song/media/outer/url?id=460578140.mp3"></audio>
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
        
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
// import { type } from 'os';
// import { when } from 'q';
// import { setTimeout } from 'timers';
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
            currentroutename: ''
        } 
    },
    mounted(){
        this.play()
        this.gettime()
        this.get_currentroutename()
        
    },
    beforeDestroy() {
        clearInterval(this.timer);        
        this.timer = null;
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        },
        //点击播放按键
        play(){
            this.playflg = !this.playflg
            let audio = document.querySelector('#audio');
            let disk = document.querySelector('#diskinner')
            if(this.playflg == false){
                console.log('正在播放')
                audio.play() 
                disk.classList.add("rotate");
                disk.style.webkitAnimationPlayState = "running";      //disk旋转
                this.timer = setInterval(() => {                       //开启定时器
                   
                    
                    this.rangeValue = this.rangeValue + 1
                    let timedifrence = Math.abs(this.rangeValue - parseInt(audio.currentTime))      //****核心*****
                    if(timedifrence >= 5){                                                          //判断rangeValue(进度值)和当前时间差距
                        audio.currentTime = this.rangeValue                                         //如果拖动超过5S差值，即刻更新当前时间
                    }
                    var min = parseInt(audio.currentTime/60)
                    var sec = parseInt(audio.currentTime%60)
                    if (sec < 10){
                        sec = '0'+ sec
                    }
                    if(min < 1){
                        this.current = "00"+":"+ sec                 //拼接当前播放时间
                    }else{
                        this.current = "0"+min+":"+sec
                    }
                    if(audio.currentTime >= audio.duration){
                                           //时间满了后完成停止的操作即可，也要把时间归零
                        this.playflg = false           
                        this.stop()
                        console.log('时间满 停止第一次')
                        disk.style.webkitAnimationPlayState = "paused";
                        this.current = '00:00' 
                        this.rangeValue = 0
                        audio.currentTime = 0
                        this.stop()
                        console.log('时间满 停止第二次')
                        clearInterval(this.timer);        
                        this.timer = null;
                        console.log(audio.paused)
                    }
                },1000)   
            }else{
                console.log('停止')
                audio.pause()
                disk.style.webkitAnimationPlayState = "paused";
                clearInterval(this.timer);        
                this.timer = null;   
            }
            
        },
        stop(){
            let audio = document.querySelector('#audio');
            let disk = document.querySelector('#diskinner')
            this.playflg = !this.playflg
            if(this.playflg == true){
                console.log('停止')
                audio.pause()
                disk.style.webkitAnimationPlayState = "paused";
                clearInterval(this.timer);        
                this.timer = null;
            }
        },
        gettime(){
            let audio = document.querySelector('#audio');
            let that = this
            audio.addEventListener("canplay", function(){
                    audio.play()
                     var audio_duration = parseInt(audio.duration)
                    that.duration = audio_duration
                    that.duration_show_min = parseInt(audio.duration/60)
                    that.duration_show_sec = parseInt(audio_duration % 60)
                    })

        },
        get_currentroutename(){
            this.currentroutename = this.$route.name
            console.log(this.currentroutename)
            this.$store.dispatch('searchflg',this.currentroutename)
         }
    },
    computed:{
        ...mapState(['searchflg'])
    },
    watch:{
        rangeValue(rangeValue){
            
            console.log("检测!!!!!!!!!!!")
            if(this.rangeValue == this.duration){ 
                    
                    this.rangeValue = 0    
                    audio.currentTime = 0
                    this.current = '00:00'
                    this.playflg = false           
                    this.stop()
                    setTimeout(()=>{
                        let audio = document.querySelector('#audio');
                        audio.pause()
                        console.log("我听了")
                    },100)
                    
            }
        }
    }  
}
</script>
<style lang="scss">
    #palyer{
        height:100%;
        width:100%;
        position: absolute;
        background-color: #666;

    }
    #palyer  .mint-header {
        background-color:transparent; 
        margin-top: 10px;
    }
    #palyer  .backimg{
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
        width: 300px;
        height: 300px;
        background-color: rgba(0,0,0,0.3);
        margin: 80px auto;
        border-radius: 50%;
        padding: 15px 15px 15px 15px;
        #diskinner{
            width: 270px;
            height: 270px; 
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
</style>