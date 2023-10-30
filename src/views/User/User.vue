<template>
    <div class="container">
        <div class="Card">
            <div class="UserCover">
                <div>
                    <img src="../../assets/img/User/UserCover-img.png" alt="用户封面背景">
                </div>
                <div class="UserIpInfo">IP 属地{{ IpArea }}</div>
            </div>
            <div class="UserWrapper">
                <div class="wrapMain">
                    <div class="picEdit">
                        <div class="UserAvatar">
                            <img class="Avatar" src="../../assets/img/User/User-pic.jpg" alt="头像">
                        </div>
                        <label class="UploadPicWrap">
                            <input type="file" accept="image/png,image/jpeg" class="UploadPicInput">
                            <div class="Mask Mask-hidden">
                                <div class=""></div>
                                <div class="Mask-content">
                                    <div class="maskInnerText">修改我的头像</div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class="content">
                        <div class="contentHead">
                            <h3 class="Username">UserName</h3>
                            <h6>互联网</h6>
                        </div>
                        <transition name="slide-fade">
                            <div class="contentBody" v-show="isExpanded">
                                <div class="InfoMsg">
                                    <div class="InfoItem">属性 - 普通用户</div>
                                    <div class="InfoItem">职业 - 学生/教育</div>
                                </div>
                            </div>
                        </transition>
                        <div class="contentFooter">
                            <button class="MyButton" @click="isExpanded = !isExpanded">
                                <!-- 使用v-html指令显示不同的箭头图标 -->
                                <span v-html="isExpanded ? '&lt;' : '&gt;'"></span>{{ isExpanded ? "收起资料" : "查看更多"
                                }}</button>
                            <div><button class="MyButton EditMore"><router-link to="/UserMsgForm"
                                        tag="button">编辑更多资料</router-link></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div>
                <ul class="activeHead">
                    <li>动态</li>
                    <li>收藏</li>
                    <li>关注</li>
                    <li>提交</li>
                </ul>
            </div>
            <div class="Lists">
                <ul v-if="data.length > 0">
                    <li v-for="(item, index) in data" :key="index" class="active-item">
                        <div class="item-Top">
                            <span>{{ item.lion }}</span>
                            <span>{{ item.date }}</span>
                        </div>
                        <div class="item-Title">
                            <h3>{{ item.title }}</h3>
                        </div>
                        <div class="itemUserInfo">
                            <span class="authorImg"><img src="../../assets/img/User/User-pic.jpg" alt=""></span>
                            <div class="authorMsg">
                                <div class="authorName">{{ item.authorName }}</div>
                                <div class="authorDetail">{{ item.authorDetail }}</div>
                            </div>
                        </div>
                        <div class="item-content">
                            <div class="contentInner">
                                <span>{{ item.contentInner }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- 使用v-else指令显示没有数据时的内容 -->
                <div v-else style="text-align: center; line-height: 300px; font-size: 20px; color: #8e8e8e;">最近没有活动</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

const IpArea = "广西"
const isExpanded = ref(false)

// 模拟后端传入的数据数组
const data = reactive([
    {
        lion: "active-lion",
        title: "这是一个活动",
        date: "2023-09-30",
        authorName: "张三",
        authorDetail: "互联网从业者",
        contentInner: "网络上接收视频时首先要解协议（RTSP/RTMP/HTTP），然后是解格式（MKV，RMVB），之后才是将视频（H264）和音频（AAC）格式数据分别解码为图像（RGB/YUV）和声音（PCM），再根据时间戳同步播放。RTSP+RTP主要用于IPTV，原因是传输数据使用的是UDP，在网络环境比较稳定的情况下，传输效率比较高；RTMP主要用于互联网音视频传输，它使用的是TCP传输，因为互联网环境相对较差，采用RTMP保证了视频的传输质量，但是其传输延迟相对较高，传输效率相对较低。"
    },
    {
        lion: "active-lion",
        title: "这是另一个活动",
        date: "2023-06-16",
        authorName: "李四",
        authorDetail: "教育工作者",
        contentInner: "这是另一个content的详情"
    }
])
</script>
<style lang="scss" scoped>
.container {
    margin: 10px auto;
    padding: 0 16px;
    position: relative;
    width: 1000px;
    height: 90vh;
    // background-color: red;
}

.Card {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px hsla(0, 0%, 7%, .1);
    box-sizing: border-box;
    margin-bottom: 10px;
    overflow: hidden;
}

.contentBody {
    max-height: 200px;
    overflow: auto;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}

.UserCover {
    background: #f5f5f5;
    height: 240px;
    overflow: hidden;
    position: relative;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    transition: height .3s;
}

.UserCover-image img {
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.UserIpInfo {
    position: absolute;
    display: flex;
    bottom: 15px;
    right: 30px;
    align-items: center;
    backdrop-filter: blur(4px);
    border-radius: 4px;
    font-size: 14px;
    padding: 3px 4px 2px 3px;
    color: hsla(0, 0%, 100%, .8);
    background: rgba(0, 0, 0, .12);
}

.UserWrapper {
    background: #fff;
    position: relative;
    width: 100%;
    box-sizing: border-box;
}

.wrapMain {
    margin: 0 20px 24px;
    position: relative;
    // background-color: purple;
}

.picEdit {
    position: absolute;
    left: 0;
    top: -25px;
    cursor: pointer;
    z-index: 1;
}

.UserAvatar {
    // display: none;
    border-radius: 8px;
    border: 4px solid #fff;
}

.Avatar {
    background: #fff;
    border-radius: 2px;
    vertical-align: top;
    border-radius: 4px;
    width: 160px;
    aspect-ratio: auto 160 / 160;
    height: 160px;
}

.UploadPicWrap {
    background-color: red;
    cursor: pointer;
}

.UploadPicInput {
    display: none;
}

/* 定义鼠标悬停在UserAvatar上时，显示UploadPicWrap */
.UserAvatar:hover+.UploadPicWrap {
    opacity: 1;
}

/* 定义鼠标悬停在UploadPicWrap上时，保持显示 */
.UploadPicWrap:hover {
    opacity: 1;
}

/* 定义UploadPicWrap的初始透明度为0 */
.UploadPicWrap {
    opacity: 0;
}

.UserAvatarEditor-maskInner {
    border: 4px solid #fff;
    z-index: 4;
}

.Mask-mask {
    background: #121212;
    border-radius: 8px;
    box-sizing: border-box;
    height: 100%;
    opacity: .4;
    position: absolute;
    width: 100%;
    z-index: -1;
}

.Mask {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in;
    z-index: 1;
}

.Mask-hidden {
    opacity: 0;
    pointer-events: none;
}

.maskInnerText {
    white-space: nowrap;
}

.content {
    border-left: 164px solid transparent;
    padding-left: 32px;
    padding-top: 16px;
}

.contentHead {
    align-items: start;
    display: flex;
    justify-content: start;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 16px;
    position: relative;
}

.contentHead h3,
h6 {
    margin-bottom: 10px;
}

.contentBody {
    overflow: hidden;
    position: relative;
    width: 524px;
}

.contentFooter {
    padding-top: 8px;
    position: relative;
    display: flex;
    justify-content: start end;
}

.InfoItem {
    color: #8493a5;
    height: 18px;
    text-align: left;
    font-size: 14px;
    width: 120px;
}

.MyButton {
    background: none;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #8493a5;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    line-height: 32px;
    padding: 0 16px;
    text-align: center;
    margin-left: -20px;
}

.MyButton:hover {
    color: #636363;
}

.EditMore {
    color: rgba(0, 0, 255, 0.5);
    margin-left: 450px;
    border: 1px solid rgba(0, 0, 255, 0.5);
}

.main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px auto;
    min-height: 100vh;
    padding-right: 50px;

    width: 1000px;
}

.activeHead {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid #f5f5f5;
}

.activeHead li {
    flex-shrink: 0;
    padding: 0 40px;
    display: inline-block;
}

.Lists {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.Lists ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.active-item {
    // border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #999;
    margin: 10px;
    padding: 10px;
    height: 230px;
    width: 100%;
}

.item-Top {
    display: flex;
    justify-content: space-between;
    color: #8493a5;
    // background-color: blue;
}

.itemUserInfo {
    display: flex;
}

.authorImg {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    overflow: hidden;
}

.authorImg img {
    width: 100%;
    height: 100%;
}

.authorMsg {
    margin-left: 8px;
}

.item-Title {
    letter-spacing: 5px;
    margin-bottom: 4px;
}

.authorMsg .authorName {
    color: #454545;
    font-weight: 600;
}

.authorMsg .authorDetail {
    font-size: 14px;
    margin-top: 2px;
    color: #636363;
}

.item-content {
    margin-bottom: -4px;
    margin-top: 9px;
    overflow: hidden;
}

.contentInner {
    color: #121212;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
}
</style>
