<template>
    <div class="JoinChannelContainer" v-show="visible">
        <div class="JoinChannelMain">
            <h4>加入频道</h4>
            <div>
                <input type="text" placeholder="输入频道关键词：号码、名称...">
                <span><button>查找</button></span>
            </div>
            <div class="JoinChannelResult">
                <ul>
                    <!-- <li class="JoinChannelResultLi">
                        <div>制药研究室</div>
                        <div>123321</div>
                        <div>
                            <span>人数：102</span>
                            <span>在线</span>
                        </div>
                        <p>生物 | 制药 | 细胞膜</p>
                    </li>
                    <li class="JoinChannelResultLi">
                        <div>制药研究室</div>
                        <div>123321</div>
                        <div>
                            <span>人数：102</span>
                            <span>在线</span>
                        </div>
                        <p>生物 | 制药 | 细胞膜</p>
                    </li>
                    <li class="JoinChannelResultLi">
                        <div>制药研究室</div>
                        <div>123321</div>
                        <div>
                            <span>人数：102</span>
                            <span>在线</span>
                        </div>
                        <p>生物 | 制药 | 细胞膜</p>
                    </li>
                    <li class="JoinChannelResultLi">
                        <div>制药研究室</div>
                        <div>123321</div>
                        <div>
                            <span>人数：102</span>
                            <span>在线</span>
                        </div>
                        <p>生物 | 制药 | 细胞膜</p>
                    </li>
                    <li class="JoinChannelResultLi">
                        <div>制药研究室</div>
                        <div>123321</div>
                        <div>
                            <span>人数：102</span>
                            <span>在线</span>
                        </div>
                        <p>生物 | 制药 | 细胞膜</p>
                    </li> -->
                </ul>
            </div>
        </div>
        <div class="JoinChannelFooter">
            <button @click="$emit('close')">确认</button>
            <button @click="$emit('close')">取消</button>
        </div>


    </div>
</template>
<script setup >
import { ref, reactive } from "vue"
const visible = ref(true)

</script>
<style lang="scss">
.JoinChannelContainer {
    width: 600px;
    height: 300px;
    margin: 100px auto;
    background-color: #fff;
    opacity: 1;
    z-index: 3;
    border-radius: 20px;
    padding: 5px;
    background-image: linear-gradient(to right top, #fffffe, #effffe);
    // background-image: linear-gradient(to right top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.7));
    box-shadow: 0 5px 15px rgba(10, 10, 10, 0.8);
}

.JoinChannelMain h4 {
    font-weight: 300;
}

.JoinChannelMain input {
    width: 80%;
}

.JoinChannelResult {
    height: 220px;
}

.JoinChannelResult ul {
    height: calc(100% - 5px);
    overflow-y: scroll;
}

.JoinChannelResult ul::-webkit-scrollbar {
    display: none;
}

.JoinChannelResultLi {
    width: 100%;
    height: 100px;
    margin-top: 3px;
    background-color: skyblue;
}

.JoinChannelFooter {
    height: 30px;
}

.JoinChannelFooter button {
    width: 50%;
    border: none;
    background: #effffe;
    font-size: 15px;
}

.JoinChannelFooter button:hover {
    font-weight: 500;
    color: skyblue;
}
</style>
