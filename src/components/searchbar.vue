<template>
    <div>
        <header>
            <div class="luyin"><img src="../assets/luyin.png" alt=""></div>
            <div class="inputbox">
                <img src="../assets/search.png" alt="">
                <input type="text" value="邓紫棋" placeholder="邓紫棋">
            </div>
            <div class="music"><img src="../assets/voice.png" alt=""></div>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    header{
        display: flex;
        height: 40px;
        width: 100%;
        margin-top:10px;
        align-items: center;
    }
    .music, .search{
        height: 30px;
        width: 30px;
        top: 5px;
    }
    .music{
        margin-right: 13px;
    }
    // img{
    //     width: 30px;
    //     height: 30px;
    //     margin-top:4px;  
    // }
    .inputbox{
        flex: 1;
        height: 35px;
        margin: 0 10px;
        position: relative;
    }
    .luyin > img{
        margin: 0 4px 0 14px;
        width: 30px;
        height: 30px;
    }
    .music > img{
        width: 30px;
        height: 30px;
        
    }
    .inputbox > img{
        position: absolute;
        height: 18px;
        width: 18px;
        margin-left: 80px;
        top: 50%;
        margin-top: -6px;
        
    }
    .inputbox > input{
        height: 100%;
        width: 100%;
        background-color: #f7f7f7;
        border: 0px;
        outline: none;
        border-radius: 35px;
        text-align: center;
        color:#8e908d;
        font-size: 15px;
    }
</style>