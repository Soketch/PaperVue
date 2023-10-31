<template>
  <div class="Search">
    <div class="banner">探索连接的文档,输入论文标识符</div>

    <!-- 搜索 -->
    <div ref="searchBar" :class="{ fixedTop: searchBarFixedTop }" class="search-wrapper">
      <input-search :size="searchBarFixedTop ? 'small' : 'medium'" placeholder="搜索文章"
        v-model="searchKeyword"></input-search>
    </div>

    <div class="main-box clearfix">
      <h3 class="list-header">你可以尝试</h3>
      <ul class="p-lists">
        <li class="item">
          <img
            src="data:image/png;base64,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"
            alt="">
          <p>数字标识符</p>
        </li>
        <li class="item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMsSURBVHgB7ZrtreIwEEX9VlvA6wBKgAqADugAqAA6gA6ACqADSoAOoAPoADrw5kZCyvPGTshNPN7VHCm7Pwjm6WTGHzP5shlGacwvo1CoQBIVSKICSVQgiQokUYEkKpBEBZKoQBIVSKICSVQgiQokUYEkKpBEBZKoQJLfpgMej0d+NaHf7+dXm2OPx2PTGbYD5vM5+iyNruPx2OrY2cOwXaIpTNJJCs9mszwNL5eLeb1e5na7ee/9/v420+k0v7/X65nRaFRr7Hcq4zdc8PlgMMj/rxqPxkZgu916U2y1WlmGTNSP8ZbLpY1JFIEgm8hLBWYRaO/3u23C4XD4a757Pp82JtEEQhJklUmE3CbjQVhxnKYPgiGaQBBK5d1u99FYbkSv12srQVSBoI1U3mw2P76bLUJWiugCr9erNwrrpLL7faSxROq+iS4QYOX1STydTt7vlc175/PZSiIiECulK6KYyr6V1D2FSM17RUQEAkSOLwohygWLjJu6KSAmEIRSuZia7haI2Tu2jahApKpvb1jcFLvpjg10KogKBFg0Qsc8N0pjH9WqEBcIfHvDUFSmwhf+McKgqjIcDvPKTYhs3gsWWyVIoh4IKdmWJHgPPk9NHkgiAt9MJpPS+h5IMfpAUhXpbHX1frZYLEyKJFfS90UZInO/35vksAlRtRqHjnlSJCPQLVGZD455kiQhEMcyN9JC7UvpCkwRcYFllRkc1eoe86QRF+hGWvGoVnXMSwFRgWUlKjeyQgtLCqksJrCsS1dWogp189ATlkZMoDvvharLoW4eVm9JRAQ26ap10Zhvg+gCy94mqCOA7eZ1RVSBbFcttNn+tDHfFlEFsm8TVHXz/utXO9zoadpVC3XzJN5QiCLQnb/YaGnamO+CzgWWzXtsVy2lY16nAiEPadVG6rq4L1a6xzxEfQxaF5gVPvPFwhch7xSGANyHs3CdlRj34WHgAYTGdn8Hv9FlWrcu0N3n1bmq3szP/9APx4x1WtG39EmS6sr9i2gEkqhAEhVIogJJVCCJCiRRgSQqkEQFkqhAEhVIogJJVCCJCiRRgSQqkEQFkqhAEhVI8geuJ3bNmvKykAAAAABJRU5ErkJggg=="
            alt="">
          <p>arXiv论文</p>
        </li>
        <li class="item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgB7dsBbcJAGIbhv8sEIAEcgAQc4KBIqAPAASgACThAAhLAARJu/Zt12ZINCN/dNe3eJ2lGlmUtL7dcjx1FqBle9maQEFBEQBEBRQQUEVBEQBEBRQQUEVBEQBEBRQQUEVBEQFGSgLvdziaTiRVFkfSYzWZ2vV6tS0XsN1Q3m42t1+vm8Xg8tlTacH6O0+mU9Fx3hcjqJ+IvSNjv9yElP0d7+Dkvl0voQvSA7ZNKrT3PYrHoNGLvA7qyLJvHo9EonM/nkNMgArqqqjqJOJiAbrVafX3/cDiEHAYV0OWOOLiA7nvE+pYqpDTIgC5XxN4G9MnCz3Pv1sXvRVNHfLeeWi6Xtt1ubT6f23Q6tTrorz/nKxRftbSro3pkWlQhMss0Am+3W6gj/liRPDp81MYWfS3si/zPF8Zy8NH1zBsKPlJd7OvqfcBnpbou3g8UEVBEQBEBRQQUEVBEQBEBRQQUZQ+Y8v/F/rtzYwSKWAuLGIEiAooIKGIWFjECRczCIkagiIAiAoqYhUWMQBGzsIgRKCKgiIAiAooIKIoesN3o2PVn2L5rr+WvTZiK6DtUq6pqdoM+2jma0/F4bL6WZWnRhche2Tma4/BPM/m1xRb9Rrr17M7RHFL+JSQL+F8wC4sIKCKgiIAiAooIKCKgiIAiAooIKCKgiIAiAooIKCKg6AN0ntiSX6iOuAAAAABJRU5ErkJggg=="
            alt="">
          <p>Paper Title</p>
        </li>
        <li class="item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAADAFBMVEUeHh4fHx8gICAhISEiIiIjIyMlJSUmJiYnJycoKCgrKyssLCwtLS0vLy8xMTEyMjI1NTU4ODg5OTk8PDw+Pj4/Pz9ERERFRUVMTExSUlJXV1dZWVlaWlpcXFxeXl5gYGBhYWFjY2NkZGRmZmZnZ2doaGhqampsbGxubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJyenp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nze3t7f39/h4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcjvFvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA5LTIwVDE2OjEwOjUxKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0xM1QwMjowNTozOCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMC0xM1QwMjowNTozOCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjIiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzViZWZmMi04MTdiLTVjNDctODBjOC0zMTg5NDVlMzA3YTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Nzc1YmVmZjItODE3Yi01YzQ3LTgwYzgtMzE4OTQ1ZTMwN2E0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6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"
            alt="">
          <p>Paper URL</p>
        </li>
      </ul>

      <div class="Lable-box">
        <ul class="Lables-ul">
          <li class="Lable" v-for="(label, index) in labels" :key="label" :style="{ margin: `${margins[index]}px` }"
            @click="deleteLabel(index)">
            {{ label }}
          </li>
        </ul>
      </div>

    </div>
    <!-- 检索头部 -->
    <!-- 检索结果 -->
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result.id" class="td-row">
            <td><input type="checkbox" v-model="selected" :value="result">{{ result.id }}</td>
            <td>{{ result.title }}</td>
            <td>{{ result.author }}</td>
            <td>{{ result.source }}</td>
            <td>{{ result.date }}</td>
            <td>{{ result.type }}</td>
            <td>{{ result.use }}</td>
          </tr>
        </tbody>
      </table>
      <Pagination :total="total" :perPage="perPage" :currentPage="currentPage" :pagerCount="pagerCount"
        @update:currentPage="changePage">
      </Pagination>
    </div>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getOffsetTop } from "../../helper/utilities.js";
import EventBus from "../../helper/EventBus/index.js";
import InputSearch from '../../components/Input-Search.vue';
import Pagination from "../../components/Pagination.vue";


// 检索表
const headers = ["题名", "作者", "来源", "发表时间", "类型", "使用次数"];
const results = [
  {
    id: 1,
    title: "Vue3入门教程",
    author: "张三,妮可基德曼，海利姆，胡福康宁......",
    source: "CSDN",
    date: "2023-10-01",
    type: "博客",
    use: 0
  },
  {
    id: 2,
    title: "Vue3实战项目",
    author: "李四",
    source: "掘金",
    date: "2023-10-05",
    type: "文章",
    use: 1
  },
  {
    id: 3,
    title: "Vue3源码解析",
    author: "王五",
    source: "知乎",
    date: "2023-10-10",
    type: "专栏",
    use: 0
  },
];

//分页器
const total = ref(1000); // 总数据条数
const perPage = ref(10); // 每页显示的条数
const currentPage = ref(1); // 当前的页码
const pagerCount = ref(9); // 显示的页码数量

// 定义一个方法，用来处理用户点击分页按钮时触发的事件
const changePage = (page) => {
  currentPage.value = page; // 更新当前的页码
  // 这里可以根据page来更新你的数据源，比如发送ajax请求等
};

// 定义一个数组来存储Lable
const labels = ref(["碳14", "Vue+vite+TS", "ChatGPT", "QT_Quick", "复合酶细胞制药", "WebRTC", "node.js", "ninja版本控制"]);
// 定义一个数组来存储每个Lable的间距
const margins = ref([]);
// 定义一个函数来生成随机的间距
function randomMargin() {
  return Math.floor(Math.random() * 20 + 5);
}

// 定义一个函数来删除指定的Lable
function deleteLabel(index) {
  // 从数组中删除指定索引的元素
  labels.value.splice(index, 1);
  margins.value.splice(index, 1);
}


// 在组件挂载后生成初始的间距
onMounted(() => {
  // 遍历每个Lable
  for (let label of labels.value) {
    // 把随机的间距添加到数组中
    margins.value.push(randomMargin());
  }
});

</script>

<style scoped lang="less">
.Search {
  background-color: rgba(18, 18, 18, 0);
  ;
}

.banner {
  height: 200px;
  line-height: 300px;
  color: #fff;
  width: 100%;
  min-width: @main-width;
  background-image: url("https://w.wallhaven.cc/full/mp/wallhaven-mpz22y.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  font-size: @font-size-larger;
}

.search-wrapper {
  position: absolute;
  width: 100%;
  padding: 0 200px;
  transform: translateY(-50%);
  z-index: 100;

  &.fixedTop {
    position: fixed;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
    top: 0;
    padding: 20px 130px;
    z-index: 1000;
    background-color: #fff;
    transform: translateY(0);
  }
}

.main-box {
  width: @main-width;
  max-height: 40vh;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 100px 0 200px;
}

.list-header {
  width: 80%;
  font-weight: 400;
  text-align: center;
}

.p-lists {
  width: 80%;
  height: 50px;
  margin-top: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.item p {
  text-align: center;
}

.Lable-box {
  position: relative;
  border-top: 1px solid #000;
  height: 150px;
  width: 80%;
  margin-top: 60px;
  padding-left: 20px;
}

.Lable-box::before {
  position: absolute;
  top: 5px;
  left: 2px;
  width: 20px;
  height: 82px;
  content: '热门词';
  word-wrap: normal;
  font-family: 'Arial Narrow';
}

.Lables-ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 90px;
  overflow: hidden;
  margin-left: 15px;
}

.Lable {
  position: relative;
  width: auto;
  padding: 0 15px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0px 20px 10px 0;
  font-size: 12px;
  line-height: 20px;
  color: rgba(0, 0, 0, .8);
  text-align: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
}

.Lable:after {
  content: "✕";
  position: absolute;
  bottom: -0.25em;
  right: -0.5em;
  width: 1em;
  height: 1em;
}

.Lable:hover::after {
  color: #c7c7c2;
}

.table-container {
  width: @main-width;
  margin: 0 auto;
  height: auto;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table th,
.table td {
  padding: 10px;
  text-align: center;
}

.table th {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  background-color: #f0f0f0;
}


.table td:nth-child(1) {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
}

.table td:nth-child(1):hover {
  color: skyblue;
}

.table td:not(:nth-child(1)) {
  font-size: 12px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  max-width: 60px;
  white-space: wrap;
}

/*设置奇数行颜色*/
.table tr:nth-child(odd) {
  background: rgba(170, 170, 170, 0.1);
}

/*设置偶数行颜色*/
.table tr:nth-child(even) {
  background: #fff;
}

.pageBox {
  width: 100%;
  height: 30px;
  background-color: red;
}
</style>