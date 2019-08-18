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
                <div class="diskinner">
                    <img src="http://p1.music.126.net/oVCpfPtfAqNcAbRWMU7ffA==/109951163801547166.jpg?param=130y130">
                </div>
            </div>
            <div class="control">
                <div class="progress">
                    <mt-range v-model="rangeValue" :value='rangeValue' :step="10" :max="offset">
					</mt-range>
                </div>
                <div class="controlbar">
                    <div class="sequence">
                        <span class="mui-icon iconfont icon-Repeat"></span>
                    </div>
                    <div class="front">
                        <span class="mui-icon iconfont icon-Previous"></span>
                    </div>
                    <div class="playing">
                        <span class="mui-icon iconfont icon-Play"></span>
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
export default {
    data(){
        return {
        id: this.$route.params.id,   
        } 
    },
    methods:{
    back(){
        this.$router.go(-1);//返回上一层
        },
    
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
        filter: blur(20px);
        -webkit-filter: blur(20px);
    }
    .normalplayer{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
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
        background-color: rgba($color: #000000, $alpha: 0.3);
        margin: 80px auto;
        border-radius: 50%;
        padding: 15px 15px 15px 15px;
        .diskinner{
            width: 270px;
            height: 270px; 
        }

    }
    .diskinner > img{
        border-radius: 50%;
    }
    .control{
        width: 100%;
        background-color: pink;
        height: 200px;
        position: fixed;
        bottom: 0;
        .progress{
            height: 50px;
            background-color: hotpink;
        }
        .controlbar{
            background-color: skyblue;
            height: 150px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            div{
                width: 60px;
                height: 60px;
                background-color: #ccc;
                text-align: center;      
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
</style>