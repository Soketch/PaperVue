<template>
    <div id="container">
        <header>
            <childHeader @enter.enter="onAnimationStart" :class="{ [animationName]: $route.name === 'Crawling' }"
                :fixedToTop="$route.path === '/Crawling'" ref="header" :theme-color="themeColor">
            </childHeader>
        </header>
        <main>
            <router-view v-slot="{ Component }" :key="$route.path">
                <transition :name="animationName">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
    </div>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, computed, watch, onMounted } from "vue"
import childHeader from "../../components/childTool/childHeader.vue"
import { useRoute } from 'vue-router'
import EventBus from '../../helper/EventBus'

const route = useRoute()
const { proxy } = getCurrentInstance()

const animationName = ref("slideInDown")
const pageTransitionName = ref("")
const homeScrollY = ref(0)

onMounted(() => {
    // window添加事件
    window.addEventListener('scroll', menu)
})

// 监听鼠标滚动事件
const menu = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 滚动条滚动的距离
    let scrollStep = scrollTop - homeScrollY.value;
    // 更新——滚动前，滚动条距文档顶部的距离
    homeScrollY.value = scrollTop;
    if (scrollStep < 0) {
        animationName.value = "slideInDown";
    } else {
        animationName.value = "slideOutUp";
    }
}

EventBus.on("home-scrolling", (pos) => {
    homeScrollY.value = pos.y
})

const themeColor = computed(() => {
    return route.path === "/" ? homeScrollY.value < 400 ? "is-transparent" : "main-color" : "main-color"
})

watch(route, (newValue, oldValue) => {
    pageTransitionName.value = ["products", "home"].includes(newValue.name)
        ? ""
        : "jumpPage";
})

const onAnimationStart = (e) => {
    if (e.animationName === "slideInDown") {
        e.target.style.top = 0;
    } else {
        e.target.style.top = -64;
    }
}
</script>
<style lang="scss" scoped></style>
