<template>
    <div :class="{ 'navbar': true, 'collapsed': collapsed, 'hovered': hovered }" @mouseover="addHoverClass"
        @mouseleave="removeHoverClass">
        <div class="toggle-button" @click="toggleSidebar">
            <span v-if="collapsed">☰</span>
            <span v-else>✕</span>
        </div>
        <ul>
            <!-- 添加一个箭头图标，表示可以展开或收起 -->
            <li @click="toggleRecentFiles" @mouseover="addFileHoverClass" @mouseleave="removeFileHoverClass">最近文件
                <i :class="{ 'arrow': true, 'down': showRecentFiles, 'right': !showRecentFiles }"></i>
            </li>
            <!-- 添加一个过渡效果，让展开或收起更平滑 -->
            <transition name="slide-fade">
                <ul v-if="showRecentFiles" class="recent-files">
                    <li><a href="#">text.md</a></li>
                    <li><a href="#">example.doc</a></li>
                    <!-- 添加更多文件名 -->
                </ul>
            </transition>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">联系我们</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collapsed: false,
            hovered: false,
            showRecentFiles: true // 默认展开
        }
    },
    methods: {
        toggleSidebar() {
            this.collapsed = !this.collapsed;
        },
        addHoverClass() {
            this.hovered = true;
        },
        removeHoverClass() {
            this.hovered = false;
        },
        toggleRecentFiles() {
            this.showRecentFiles = !this.showRecentFiles;
        },
        addFileHoverClass(e) {
            e.target.style.backgroundColor = "#eee";
        },
        removeFileHoverClass(e) {
            e.target.style.backgroundColor = "#fff";
        }
    }
}
</script>

<style scoped>
.navbar {
    width: 200px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #f0f0f0;
    border-right: 1px solid #ccc;
    transition: width 0.3s ease-in-out;
}

.navbar.collapsed {
    width: 150px;
}

.navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar li {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    cursor: pointer;
}

.navbar li:hover {
    background-color: #eee;
}

.navbar a {
    color: #333;
    text-decoration: none;
}

.toggle-button {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #333;
    cursor: pointer;
}

.toggle-button:hover {
    background-color: #eee;
}

.recent-files {
    font-weight: 400;
    font-size: 14px;
    /* 设置字体大小为 14px，你可以根据需要调整大小 */
    margin-top: 10px;
    /* 添加上外边距以与 navbar 标题分隔 */
}

.recent-files li {
    padding-left: 30px;
    margin-top: 2px;
    height: 20px;
    line-height: 20px;
}

.recent-files li:hover {
    background-color: #d0d0d0;
}

.arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    margin-left: 10px;
}

.arrow.down {
    border-left: 5px solid #333;
}

.arrow.right {
    border-left: none;
    border-right: 5px solid #333;
}

/* 过渡效果 */
.slide-fade-enter-active {
    transition: all .3s ease-in-out;
}

.slide-fade-leave-active {
    transition-delay: .1s;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.5, 1, .8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>
