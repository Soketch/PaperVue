<template>
    <div class="AddChannelContainer" v-show="visible">
        <div class="AddChannelMain">
            <h4>新建频道</h4>
            <div>
                <input type="text" placeholder="输入频道名">
                <p>选择频道关键词:
                    <input type="checkbox" value="科学" name="hobby" />科学
                    <input type="checkbox" value="技术" name="hobby" />技术
                    <input type="checkbox" value="金融" name="hobby" />金融
                    <input type="checkbox" value="AI" name="hobby" />AI
                </p>
            </div>
        </div>
        <div class="AddChannelFooter">
            <button @click="$emit('close')">确认</button>
            <button @click="$emit('close')">取消</button>
        </div>


    </div>
</template>
<script setup>
import { ref, reactive } from "vue"
const visible = ref(true)

</script>
<style lang="scss">
.AddChannelContainer {
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

.AddChannelMain {
    height: 260px;
}

.AddChannelMain h4 {
    font-weight: 300;
}

.JoinChannelFooter {
    height: 30px;
}

.AddChannelFooter button {
    width: 50%;
    border: none;
    background: #effffe;
    font-size: 15px;
}

.AddChannelFooter button:hover {
    font-weight: 500;
    color: skyblue;
}
</style>
