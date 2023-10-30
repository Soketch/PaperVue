<template>
  <div class="home">
    <div ref="banner" class="banner content-item-block">
      <div class="video-wrapper">
        <img ref="video" class="HomeImg" preload="auto" muted loop playsinline autoplay
          src="../../assets/docs/HomeMain.avif">
      </div>
      <h1 class="banner-title">
        激发创造 丰富生活
        <div class="subTitle">CREATE & JOIN</div>
      </h1>
      <div class="search">
        <input-search placeholder="输入城市或职位进行搜索"></input-search>
      </div>
      <div class="bottom-tips">
        <span class="arrow-down" @click="scrollDown">
          <i>⤓</i>
        </span>
        <span class="vertical-dashed"></span>
      </div>
    </div>

    <!-- main -->
    <div class="main">
      <div ref="product" class="product content-item-block">
        <h1 class="title">Inspire creativity, enrich life</h1>
        <div class="desc">————————————————————————————————</div>
        <ul class="product-list">
          <li class="product-item" v-for="(item, key) in products" :key="key" @click="jumpToDetail(item)">
            <img :src="item.logo" alt />
            <div>{{ item.title }}</div>
          </li>
        </ul>
        <router-link to="/products">
          <div class="more">
            <!-- <span class="more-button">了解更多</span> -->
            <BD-button size="large">了解更多</BD-button>
          </div>
        </router-link>
      </div>

      <!-- 服务 -->
      <div class="job-category content-item-block">
        <h2 class="job-category-title title">探索你感兴趣的领域</h2>
        <ul class="job-category-list clearfix">
          <li v-for="item in jobCategories" :key="item.nid" class="job-category-item">
            <router-link :to="{ name: 'jobs', query: { job_category_id: item.nid } }">
              <div class="image" :style="`background-image:url(${item.image})`">
                <span class="overlay" v-if="!item.nid">{{ item.name }}</span>
              </div>
              <div v-if="item.nid" class="name">{{ item.name }}</div>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- 学术领域 -->
      <div class="byteStandard content-item-block">
        <h1 class="title">直观地了解新的学术领域</h1>
        <div class="desc">输入一篇典型的论文，我们将为您构建该领域类似论文的图表。探索并构建更多图表，为您找到的有趣论文 - 很快您将对您感兴趣的领域的趋势、流行作品和动态有一个真实的、直观的理解。</div>
        <div class="content">
          <div class="image">
            <span v-show="productLayerVisible" class="layer" @animationend="onScrollRightAnimationEnd"></span>
            <img v-if="byteStandards[byteStandardActiveIndex]" style="width: 100%; height: 100%"
              :src="byteStandards[byteStandardActiveIndex].image" alt />
          </div>
          <div class="indicator">
            <ul>
              <li class="indicator-item" v-for="(item, index) in byteStandards" :key="index">
                <h3 :class="{ active: byteStandardActiveIndex === index }" @click="() => {
                  byteStandardActiveIndex = index;
                  productLayerVisible = true;
                }
                  ">{{ item.title }}</h3>
                <p v-html="item.content" v-show="byteStandardActiveIndex === index"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 简述相关列表 -->
      <div class="byteLife content-item-block">
        <h1 class="byteLife-title">发现最相关的先前和衍生作品</h1>
        <div class="block-item block-item-one">
          <div class="block-item-column block-item-column-text">
            <h3 class="block-item-column-title">使用我们的“先前作品”视图查找您感兴趣的领域中的重要祖先作品。</h3>
            <div class="content">
              <div class="content-item">
                <h3 class="content-item-title">使用我们的衍生作品视图查找该领域的文献综述，以及您输入的论文之后最近发表的最新技术状态。</h3>
                <p class="content-item-desc"></p>
              </div>
            </div>
          </div>
          <div class="block-item-column block-item-column-image">
            <img src="https://sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/life_1.png" alt />
          </div>
        </div>

        <div class="block-item block-item-one">
          <div class="block-item-column block-item-column-text">
            <h2 class="block-item-column-title">为您的论文创建参考书目</h2>
            <div class="content">
              <div class="content-item">
                <h3 class="content-item-title">从您绝对希望在参考书目中的参考文献开始，并使用相关论文来填补空白并找到其余的！</h3>
                <p class="content-item-desc"></p>
              </div>
              <div class="content-item">
                <h3 class="content-item-title">您可以搜索并直观地发现重要的近期论文。无需保留列表。</h3>
                <p class="content-item-desc"></p>
              </div>
            </div>
          </div>
          <div class="block-item-column block-item-column-image">
            <img src="https://sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/life_1.png" alt />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted, onUnmounted } from "vue";
import { watchScrollDirection } from "../../helper/utilities.js";
import EventBus from '../../helper/EventBus'
import InputSearch from '../../components/Input-Search.vue'
import BDButton from '../../components/BD-Button.vue'
import { useRouter } from 'vue-router'

const { proxy } = getCurrentInstance()
const router = useRouter()
const productLayerVisible = ref(false)


const products = ref([])
// 列表
const jobCategories = ref([])

// 获取列表
const getJobCategory = async () => {
  let res = await proxy.$api.getCategory()
  jobCategories.value = res.data
}

// 简述标准列表
const byteStandards = ref([
  {
    "title": "持续学习和成长",
    "content": "提高要求<br>在更大范围里找最优解<br>不放过问题，思考本质<br>",
    "image": "https://sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/bytestyle1clear.png"
  },
  {
    "title": "试多种可能，快速迭代",
    "content": "直接体验，深入事实<br>注重效果<br>突破，打破定式<br>",
    "image": "https://sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/story/tancheng.png"
  },
  {
    "title": "清晰-简洁",
    "content": "想法热点<br>求真，暴露问题，<br>准确、简洁、直接，有条理&重点",
    "image": "https://sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/story/tancheng.png"
  },
  {
    "title": "多元兼容",
    "content": "多元，建立火星视角<br>参与，集思广益，挑战自己<br>海纳百川",
    "image": "https://sf3-ttcdn-tos.pstatp.com/obj/atsx-fe/p/assets/duoyuanjianrong_1584512668065.jpg"
  }
])
const byteStandardActiveIndex = ref(0)


const onScrollRightAnimationEnd = () => {
  productLayerVisible.value = false
}

onMounted(() => {
  EventBus.emit("home-scrolling",
    { x: document.body.scrollLeft, y: document.body.scrollTop }
  )
  getProductList()
  getJobCategory()
})

// 位置跳转
const scrollDown = () => {
  proxy.$refs.product.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// 产品跳转
const jumpToDetail = (item) => {
  router.push({
    name: "products",
    query: {
      id: item.nid
    }
  });
}

// 获取列表
const getProductList = async () => {
  let res = await proxy.$api.getProductList({})
  products.value = res.data
}
</script>

<style scoped lang="less">
@keyframes verticalMotion {
  0% {
    transform: translateY(6px);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(6px);
  }
}

@keyframes scrollToRight {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

.home {
  .main {
    width: @main-width;
    margin: auto;
  }

  .content-item-block {
    .title {
      font-size: @font-size-larger;
    }
  }
}

.banner {
  height: 100vh;
  min-height: 400px;
  min-width: @main-width;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(51, 112, 255, 0.2);
  position: relative;

  .video-wrapper {
    font-size: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;

    .HomeImg {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &-title {
    color: #fff;
    font-size: 60px;
    text-align: center;

    .subTitle {

      &::after,
      &::before {
        content: "";
        position: absolute;
        background-image: linear-gradient(270deg,
            hsla(0, 0%, 100%, 0),
            #fff 47%,
            hsla(0, 0%, 100%, 0));
        height: 2px;
        width: 89px;
        top: 50%;
        transform: translateY(-50%);
      }

      &:before {
        right: 10px;
      }

      &:after {
        left: 10px;
      }

      position: relative;
      margin-top: 10px;
      font-size: @font-size-base;
      letter-spacing: 20px;
    }
  }

  .search {
    width: 500px;
    margin-top: 100px;
    margin-bottom: 40px;
  }

  .bottom-tips {
    position: absolute;
    bottom: 30px;
    width: 50px;
    height: 50px;
    flex-shrink: 0;

    text-align: center;

    .arrow-down {
      display: block;
      margin-bottom: 4px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #fff;
      text-align: center;
      line-height: 40px;
      color: #fff;
      cursor: pointer;
      font-size: 21px;

      i {
        animation: verticalMotion 1.3s infinite linear;
        display: inline-block;
        font-style: normal;
      }
    }

    // 分割竖线
    .vertical-dashed {
      border-left: 1px dashed #fff;
      height: 30px;

      display: inline-block;
    }
  }
}

// main
.product {
  margin-top: 40px;
  text-align: center;
  padding: 40px 40px;
  background-size: 100%;
  background: url(//sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/global.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 370px;

  .desc {
    margin: 40px 0;
  }

  &-list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &-item {
    width: 90px;
    // height: 90px;
    cursor: pointer;

    &:nth-child(1),
    &:nth-child(9) {
      margin-top: 116px;
    }

    &:nth-child(2),
    &:nth-child(8) {
      margin-top: 80px;
    }

    &:nth-child(3),
    &:nth-child(7) {
      margin-top: 55px;
    }

    &:nth-child(4),
    &:nth-child(6) {
      margin-top: 30px;
    }

    &:hover {
      color: @main-color;

      img {
        border-radius: 19px;

        transform: scale(1.2);
        transform-origin: bottom;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
    }

    img {
      width: 90px;
      height: 90px;
      border-radius: 19px;

      margin-bottom: 10px;
      transition: transform 0.3s;
    }
  }

  .more {
    margin: auto;
    margin-top: 170px;

    width: 149px;
  }
}

// 职位
.job-category {
  text-align: center;
  margin-top: 90px;

  &-list {
    margin-top: 70px;
  }

  &-item {
    float: left;
    margin-bottom: 16px;

    .image {
      width: 250px;
      height: 250px;
      line-height: 250px;
      background-repeat: no-repeat;
      background-size: 100%;
      border-radius: 50%;
      margin: 0 auto;

      transition: all 0.3s;
      background-position: center;
      overflow: hidden;

      &:hover {
        box-shadow: 0 0 8px 1px #ccc;
        background-size: 110%;

        &+.name {
          color: @main-color;
        }
      }

      .overlay {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;

        font-size: 40px;
      }
    }

    .name {
      margin-top: 23px;
      font-size: @font-size-large;
    }

    margin: 0 2.5%;
    margin-bottom: 30px;
    width: 20%;
  }
}


.byteStandard {
  padding: 40px 40px;
  overflow: hidden;

  .title {
    margin-bottom: 30px;
  }

  .desc {
    margin-bottom: 40px;
  }

  .content {
    .image {
      .layer {
        // left: -100%;
        width: 100%;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        animation: scrollToRight 0.8s ease-in-out;
      }

      position: relative;

      float: left;
      width: 700px;
      height: 450px;
      margin-right: 100px;
      overflow: hidden;

      img {
        border-radius: 6px;
        object-fit: cover;
      }
    }
  }

  .indicator {
    color: #aaa;

    &-item {
      margin: 32px 0;

      h3 {
        &.active {
          color: black;
          font-size: 32px;
          font-weight: 400;
        }

        cursor: pointer;
      }
    }
  }
}

.byteLife {

  // width:1200px;
  // overflow: hidden;
  &-title {
    margin-bottom: 70px;
  }

  padding-left: 10%;

  .block-item {
    overflow: hidden;
    margin-bottom: 100px;

    &:nth-child(odd) {
      .block-item-column {
        &-text {
          margin-right: 9%;
        }

        float: left;
      }
    }

    &:nth-child(even) {
      .block-item-column {
        &-image {
          margin-right: 9%;
        }

        float: right;
      }
    }

    &-column {
      &-title {
        margin-bottom: 40px;
        padding-bottom: 40px;
        border-bottom: 1px solid #ccc;
      }

      &-text {
        width: 30%;
      }

      &-image {
        height: 400px;
        width: 59%;
        border-radius: 8px;
        overflow: hidden;

        img {
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>