<template>
    <div class="header" :class="[{ fixedToTop }, themeColor]" ref="header">
        <ul class="navbar">
            <router-link to="/WorkBench/" exact v-slot="{ href, navigate, isActive }">
                <li class="navbar-item" :class="{ active: isActive }">
                    <a :href="href" @click="navigate">爬虫</a>
                </li>
            </router-link>
            <router-link exact to="/WorkBench/PaperEdit" v-slot="{ href, navigate, isActive }">
                <li class="navbar-item" :class="{ active: isActive }">
                    <a :href="href" @click="navigate">编辑</a>
                </li>
            </router-link>
            <router-link to="/WorkBench/SubScribe" v-slot="{ href, navigate, isActive }">
                <li class="navbar-item" :class="{ active: isActive }">
                    <a :href="href" @click="navigate">订阅</a>
                </li>
            </router-link>
            <router-link to="/WorkBench/ChatGroup" v-slot="{ href, navigate, isActive }">
                <li class="navbar-item" :class="{ active: isActive }">
                    <a :href="href" @click="navigate">聊天室</a>
                </li>
            </router-link>
            <router-link to="/WorkBench/User" v-slot="{ href, navigate, isActive }">
                <li class="navbar-item" :class="{ active: isActive }">
                    <a :href="href" @click="navigate"><svg t="1698406990641" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9031" width="32" height="32">
                            <path
                                d="M512 1022.1056c-282.3168 0-511.232-228.864-511.232-511.0784S229.632 0 512 0c282.3168 0 511.232 228.8128 511.232 511.0272 0 282.2656-228.864 511.0784-511.232 511.0784z m0-926.2592a415.2832 415.2832 0 0 0-415.3856 415.232c0 107.2128 41.0624 204.6464 107.8272 278.3232 60.16-29.1328 38.0416-4.9152 116.736-37.2736 80.5888-33.1264 99.6352-44.6464 99.6352-44.6464l0.768-76.288s-30.1568-22.8864-39.5264-94.72c-18.8928 5.4272-25.088-22.016-26.2144-39.424-1.024-16.896-10.9568-69.4784 12.0832-64.7168-4.7104-35.1744-8.0896-66.8672-6.4-83.6608 5.7344-58.88 62.976-120.5248 151.0912-124.9792 103.68 4.4544 144.7424 66.048 150.528 124.928 1.6384 16.8448-2.048 48.5376-6.7584 83.6096 23.04-4.6592 13.0048 47.872 11.8784 64.7168-1.024 17.408-7.3728 44.7488-26.2144 39.3728-9.4208 71.7824-39.5776 94.464-39.5776 94.464l0.7168 75.9296s19.0976 10.8032 99.6352 43.9296c78.6944 32.3584 56.576 9.5744 116.736 38.7584a413.184 413.184 0 0 0 107.776-278.3744A415.232 415.232 0 0 0 512 95.7952z"
                                fill="#4EB0FA" p-id="9032"></path>
                        </svg></a>
                </li>
            </router-link>
            <router-link to="/" v-slot="{ href, navigate, isActive }">
                <li class="navbar-item" :class="{ active: isActive }">
                    <a :href="href" @click="navigate">
                        <svg t="1698406568591" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4912" width="32" height="32">
                            <path
                                d="M891.18208 499.97824 529.1008 134.10944c-8.032-8.1152-20.864-8.14976-28.93568-0.0768L354.14528 280.05632 354.14528 243.3024c0-11.82336-9.28384-21.408-20.73856-21.408s-20.73856 9.58464-20.73856 21.408l0 78.2336L134.30784 499.90016c-4.07296 4.07424-6.35008 9.68832-6.30784 15.54176 0.04352 5.85344 2.4064 11.43296 6.53952 15.44064l101.0304 97.95968 0.92672 245.93152c0.04352 11.79136 9.31584 21.3248 20.73856 21.3248l509.33888 0c11.45344 0 20.73856-9.58464 20.73856-21.408L787.31264 628.96l103.38304-97.90592c4.19584-3.9744 6.62528-9.55392 6.71744-15.43168C897.50528 509.74592 895.2512 504.0896 891.18208 499.97824zM752.55296 603.77088c-4.2816 4.05376-6.71872 9.77664-6.71872 15.77472l0 233.73312-467.9424 0-0.87936-233.81632c-0.02304-5.88288-2.3872-11.4944-6.53952-15.52256l-91.68896-88.90496L514.5216 179.28832l332.01024 335.48416L752.55296 603.77088z"
                                p-id="4913"></path>
                        </svg>
                    </a>
                </li>
            </router-link>
        </ul>
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { toRefs, getCurrentInstance, computed, ref } from "vue";
import { useRouter } from "vue-router";

const store = useStore()
const router = useRouter()
const { proxy } = getCurrentInstance()


const props = defineProps({
    themeColor: {
        type: String,
        default: 'main-color'
    },
    fixedToTop: {
        type: Boolean,
        default: false
    }
})

const logout = () => {
    ElNotification({
        title: 'Success',
        message: '退出成功',
        type: 'success',
        offset: 100,
    })
    store.commit('LOGOUT')
}

const username = computed(() => {
    return store.state.username
})

const { themeColor, fixedToTop } = toRefs(props)

</script>
<style lang="less" scoped>
.header {
    color: #aaa;
    // background-color: rgba(90, 90, 125, .3);
    display: flex;
    height: 64px;
    align-items: center;
    padding: 10px 100px;
    min-width: 900px;
    box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.5);

    &.fixedToTop {
        position: fixed;
        width: 100%;
    }

    &.main-color {
        background-color: rgba(255, 255, 255, 0.8);
        border-bottom: 1px solid #eff0f1;

        a {
            color: #333;
        }

        .navbar-item {

            &:hover {
                a {
                    color: @main-color;
                }
            }

            &.active {
                a {
                    color: @main-color;
                }
            }
        }

        .login {
            .navbar-item {

                .el-dropdown span {
                    color: #333;
                }

                &:hover {
                    a {
                        color: @main-color;
                    }
                }

                &.active {
                    a {
                        color: @main-color;
                    }
                }
            }
        }
    }

    &.is-transparent {
        a {
            color: #fff;
        }

        .navbar-item {

            .el-dropdown span {
                color: #fff;
            }

            &:hover {
                color: #ccc;
            }

        }

        .active {
            color: #fff;
        }
    }

}

.navbar {
    margin-left: auto;
    margin-right: 20px;
    list-style: none;
    text-align: end;
    display: flex;

    &-item {
        padding: 4px 0;
        margin: 0 20px;

        &.active {
            border-bottom: 2px solid;
            color: @main-color;
        }
    }

    a {
        outline: none;
        cursor: pointer;
        transition: color 0.3s;
        line-height: 30px;
    }
}
</style>
  