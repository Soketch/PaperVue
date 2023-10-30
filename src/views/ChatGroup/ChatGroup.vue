<template>
    <div class="container">

        <div class="sidebar">
            <h2>聊天室频道</h2>
            <div class="channels">
                <h2>Channels</h2>
                <h3><button @click="showAddChannel = true">＋创建新频道</button></h3>
                <h3><button @click="showJoinChannels = true">加入频道</button></h3>
                <ul>
                    <li v-for="channel in channels" :key="channel.id" @click="selectChannel(channel)">
                        {{ channel.name }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="chat" :class="isShrink ? 'expand' : ''">
            <div class="messages">
                <div v-for="message in messages" :key="message.id"
                    :class="{ 'my-message': message.senderId === userId, 'other-message': message.senderId !== userId }">
                    <div class="msgHeader">
                        <img :src="message.senderAvatar" />
                        <span>{{ message.senderName }}</span>
                    </div>
                    <div class="bubble">
                        <p>{{ message.text }}</p>
                        <span>{{ message.time }}</span>
                    </div>
                </div>
                <div class="other-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
                <div class="my-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
                <div class="my-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
                <div class="my-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
                <div class="my-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
                <div class="my-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
                <div class="my-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
                <div class="my-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
                <div class="my-message">
                    <div class="bubble">
                        <div class="msgHeader">
                            <img src="../../assets/img/User/User-pic.jpg" />
                            <span>name</span>
                        </div>
                        <p> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <span>2023-10-9</span>
                    </div>
                </div>
            </div>
            <div class="input">
                <input type="text" v-model="message" @keyup.enter="sendMessage" />
                <button @click="sendMessage">发送</button>
            </div>
        </div>

        <div class="sidebar  shrink" :class="isShrink ? 'shrink' : 'reserveSide'">
            <button @click="toggleShrink" :class="isShrink ? 'small-button' : ''"><svg t="1698511598163" class="icon"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12771" width="32"
                    height="32">
                    <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#EB1313" p-id="12772"></path>
                    <path
                        d="M512 512m-236.307692 0a236.307692 236.307692 0 1 0 472.615384 0 236.307692 236.307692 0 1 0-472.615384 0Z"
                        fill="#FFFFFF" p-id="12773"></path>
                </svg></button>
            <div class="users" v-show="!isShrink">
                <h3>channel Name</h3>
                <div>成员列表</div>
                <ul>
                    <li v-for="user in users" :key="user.id">
                        {{ user.name }}
                    </li>
                </ul>
            </div>
        </div>
        <JoinChannels class="con2" v-show="showJoinChannels" @close="showJoinChannels = false"></JoinChannels>
        <AddChannel class="con2" v-show="showAddChannel" @close="showAddChannel = false"></AddChannel>
    </div>
</template>
  
<script setup >
import { ref, reactive, onMounted, watch } from "vue";
import io from "socket.io-client";
import JoinChannels from "../../components/childTool/joinChannel.vue";
import AddChannel from "../../components/childTool/addChannel.vue";
// 定义一个响应式的变量
const showJoinChannels = ref(false)
const showAddChannel = ref(false)
// 定义一个响应式的变量
const isShrink = ref(false)

// 定义一个方法，用于将isShrink的值取反
const toggleShrink = () => {
    isShrink.value = !isShrink.value
}
// Connect to the server
const socket = io("http://localhost:5173");

// Create some reactive variables
const userId = ref("");
const userName = ref("");
const channels = ref([]);
const users = ref([]);
const selectedChannel = ref(null);
const messages = ref([]);
const message = ref("");

// Prompt the user to enter their name
onMounted(() => {
    socket.emit("join", userName.value);
});

// Listen for events from the server
socket.on("user-id", (id) => {
    userId.value = id;
});

socket.on("channels", (data) => {
    channels.value = data;
});

socket.on("users", (data) => {
    users.value = data;
});

socket.on("message", (data) => {
    messages.value.push(data);
});

// Watch for changes in the selected channel
watch(selectedChannel, (value) => {
    if (value) {
        messages.value = [];
        socket.emit("join-channel", value.id);
    }
});



const selectChannel = (channel) => {
    selectedChannel.value = channel;
};

const sendMessage = () => {
    if (message.value) {
        const data = {
            senderId: userId.value,
            senderName: userName.value,
            text: message.value,
            time: new Date().toLocaleTimeString(),
        };
        socket.emit("send-message", data);
        message.value = "";
    }
};
</script>
  
<style lang="scss" scoped>
.container {
    display: flex;
    height: 93vh;
    position: absolute;
    z-index: 1;
}

.con2 {
    position: absolute;
    z-index: 3;
    left: 30%;
    top: 30%;
    margin: 0 auto;
}

.sidebar {
    width: 20%;
    background-color: #f0f0f0;
    padding: 10px;
}

.shrink {
    transition: all 0.5s;
}

.chat {
    width: 60%;
    margin: 0 1px;
    height: 93vh;
}

.shrink button {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
}

.sidebar.shrink {
    height: 20px;
    width: 20px;
    background-color: #fff;
    padding-top: 20px;
}

.sidebar.reserveSide {
    width: 20%;
    background-color: #f0f0f0;
    padding: 0 10px;
    height: 93vh;
}

.chat.expand {
    width: calc(60% + (20% - 50px));
}

.small-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
}


.channels,
.users {
    margin-bottom: 20px;
}

.channels h2,
.users h2 {
    margin-top: 0;
}

.channels ul,
.users ul {
    border-top: 1px solid #8e8e8e;
    list-style: none;
    padding-left: 0;
}

.channels h3 button {
    width: 100px;
    text-align: right;
}

.channels li,
.users li {
    cursor: pointer;
}


.messages {
    margin-top: 2px;
    height: calc(100% - 50px);
    overflow-y: scroll;
}

.messages::-webkit-scrollbar {
    display: none;
}

.messages div {
    display: flex;
    flex-direction: column;
    margin: 1px;
    padding: 0 10px;
    border-radius: 10px;
}


.messages .my-message {
    position: relative;
    align-self: flex-end;
    width: 53%;
    float: left;
}

.messages .other-message {
    position: relative;
    align-self: flex-end;
    float: right;
    width: 53%;
}


.messages .bubble {
    padding: 10px;
    border-radius: 10px;
}

.messages .bubble div {
    display: inline-block;
    height: 40px;
    padding-left: 5px;
}

.messages .bubble P {
    padding-left: 10px;
}

.bubble span {
    font-size: 13px;
    color: rgba($color: #8e8e8e, $alpha: 1.0);
}

.messages .bubble div span {
    color: rgba($color: #000, $alpha: 0.5);
}

.messages img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    display: inline-block;
}

.msgHeader {
    position: relative;
}

.messages .msgHeader span {
    margin-bottom: 5px;
    display: inline-block;
    margin-top: 0;
    position: absolute;
    bottom: -5px;
    left: 55px;
}

.messages .my-message {
    flex-direction: row-reverse;
}

.messages .my-message .bubble {
    background-color: #d0f0c0;
    border: solid 2px #a0c080;
    box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.1);
}

.messages .other-message .bubble {
    background-color: #f0f0f0;
    border: solid 2px #c0c0c0;
    box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.1);
}

.input {
    height: 50px;
    display: flex;
}

.input input {
    width: 80%;
    border: 1rpx solid rgba($color: #eee, $alpha: 0.3);
    padding: 10px;
}

.input button {
    width: 20%;
    border: none;
    background-color: #d0f0c0;
    color: rgba($color: #0000ff, $alpha: 0.3);
    font-size: 16px;
    font-weight: 500;
}
</style>
