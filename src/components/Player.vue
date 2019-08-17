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
        // left: -50%;
        // top: -50%;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(20px);
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
</style>