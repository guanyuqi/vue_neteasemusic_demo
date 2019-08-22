### day1：

​	今天看了下别人的项目觉得挺有意思的，想了想我的项目都是跟网上视频做的，都是跟着别人思路走，对个人能力感觉没啥用。这次就干脆自己从0开始弄吧，顺便也温习下vue。

​	晚上主要还是弄了下项目结构然后先用脚手架搭好，写了个搜索框组件，然后大量时间全部去折腾ui框架了，mui，mint-ui，vux全部试了下 感觉还是前两个好点（自己做项目装个插件都要经常报错 ，解决这些问题花了大量时间）

​								------ 2019.8.14

### day2：

​	中午开始做的，下午把tabbar做好了，之前项目用的没改icon，我在网上搜了半天，差点放弃这个mui了，还好别人教用阿里云图标库替换这种骚操作。

​	然后今天时间全部花到了axios和mock上面，之前学的是vue-resource，已经过时了就过了遍axios，然后axios的使用又折腾半天，终于弄出来了，然后用mock拦截数据这些。。。。

​	今天花了这么多时间，虽然进度很慢，但是已经把准备工作都做的差不多了，不用想api接口那些了，明天争取把home组件完成。

​								------ 2019.8.15

### day3：

​	没有api自己写伪造数据感觉好麻烦

​	主要记录遇到的问题和处理方式：

​	由于app.vue中引入了头部组件，所以在其他组件中会显示，这里使用watch监听route的name来改变组件的v-if显示与否。

​	最主要的还是播放器核心的音频组件这个问题，找到了一个Vue-APlayer，试了下感觉还不错，翻了下文档熟悉了一下，明天改。

​								------ 2019.8.16

### day4：

​	那个音乐组件放弃了 还是自己折腾一个出来吧，今天主要时间全部学VUEX去了，之前写样式不怎么费脑，后面要数据交换了就比较麻烦了，明天把播放器折腾出来，主要是播放器要写一个全屏的和一个固定底部的。

​								------ 2019.8.17

### day5：

​	周末给自己放了个假，今天继续。

​	把播放器UI弄好了 播放键点击事件设定好了，点击切换图标然后让音乐唱盘旋转暂停用了dom操纵盒子的animation。mint-ui文档真的垃圾，全靠猜

​	问题：

​		加载页面后获取不到歌曲duration，要点击后才能获取到，应该是mp3还没加载完 mounted就执行了，查了下要监听audio的onplay事件，用addEventListener监听后可以获取了，但是又影响了加载立即播放，遂直接用暴力的audio.play了，调试了下用slow3G也可以，看来的解决了

​								------ 2019.8.19



### day6：

​	修改了下播放器停止策略，改为了watch进度变化，当进度慢了后设定一个timeout来停止（原来的方法不知道为什么老是进度归零后依然自动播放，试了很多方法只有这个可行）

​								------ 2019.8.20

### day7：

​	完成了小播放器，使用vuex管理播放以及组件显示，player中用watch store中数据变化来执行操作，今天大部分时间都拿去填坑了

​								------ 2019.8.21



### day8：

​	获取歌单的时候直接将歌单中歌曲信息获取到，再通过给歌单中歌曲绑定点击事件触发vuex action 使用payload来传递歌曲信息然后再替换修改state中的数据，然后给播放器组件接受。



问题：

​	1、使用定时器监听播放进度有内鬼，坑太多了，后来你发现了一个神仙方法 audio的ontimeupdate事件，之前看了很多文档都没发现有这个方法，调用这个可以直接获取进度改变触发函数。整个播放进度就修改成完全体了。

​	2、修改了进入歌曲操作逻辑，原来是播放器显示就开始播放，后来歌曲还没加载就开始空放，改为了canplay操作

​	

​								------ 2019.8.22