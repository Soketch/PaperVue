<template>
    <div class="header"></div>
    <div class="main">
        <div class="top-Box"></div>
        <div class="Paper-Box">
            <ul>
                <li class="Paper" v-for="paper in papers" :key="paper.id">
                    <div class="head">
                        <h1 class="p-title">{{ paper.title }}</h1>
                        <h3 class="author">
                            <span v-for="(item) in paper.authors" :key="item.id">
                                <a href="#">{{ item.author }}</a>
                                <sup>{{ item.id }}</sup>
                            </span>
                        </h3>
                        <h3>
                            <a class="author" href="#" v-for="monad in paper.monads" :key="monad">{{ monad }}</a>
                        </h3>
                    </div>
                    <div class="p-row">
                        <span class="rowtit">摘要：</span>
                        <span class="abstract-text">{{ paper.abstract }}</span>
                    </div>
                    <!-- 使用一个v-for指令来循环输出关键词、资助资金、DOI等信息 -->
                    <div class="p-row" v-for="item in paper.info" :key="item.key">
                        <span class="rowtit">{{ item.key }}：</span>
                        <p class="keywords">{{ item.value }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="Footer">
        <div class="kthy">
            <div class="kthy-text">
                <a href="javascript:void(0)">CNKI学术情报&gt;&gt;</a>
            </div>
            <div class="kthy-text">
                <a href="javascript:void(0)">论文智能导航&gt;&gt;</a>
            </div>
            <div class="kthy-text">
                <a href="javascript:void(0)">更多功能请持续关注...</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { computed } from "vue";
// 这里是一些示例数据，你可以根据你的后端传入的数据进行修改
const papers = computed(() => [
    {
        id: 1,
        title: "多级pH响应的小干扰RNA与多西他赛共递送脂质体用于乳腺癌协同治疗的研究",
        authors: [
            { id: 1, author: "张丽" },
            { id: 2, author: "龚雨静" }
        ],
        monads: ["河北工业学院", "天津大学"],
        abstract: "目的 建立牛多抗对兔多抗夹心ELISA方法 检测Sabin株脊灰病毒灭活疫苗(Sabin strain inactivated poliovirus Vaccine,sIPV)D抗原含量,并对建立的方法 进行验证。方法 分别采用Ⅰ、Ⅱ、Ⅲ型sIPV疫苗原液作为抗原制备兔多抗,并通过间接ELISA法检测其效价及特异性。以牛多抗为包被抗体、兔多抗为显示抗体建立检测D抗原含量的双抗体夹心ELISA方法 ,并对方法 的准确度、精密度及D抗原专属性进行验证。用建立的方法 检测国内5家企业sIPV疫苗样品。结果 制备获得型别特异性好、效价高的Ⅰ、Ⅱ、Ⅲ型兔多抗,并成功建立了双抗体夹心ELISA方法 。采用四参数拟合,3型别标准曲线均具有良好的线性关系,R2均>0.99。Ⅰ、Ⅱ、Ⅲ型各试验加标回收率均为80%～120%,各浓度平均回收率分别为98.11%、97.41%、98.66%;重复性与中间精密度CV均<10%;能够对D/C抗原进行区分。建立的方法 对5家企业生产的sIPV疫苗均能够进行D抗原定量检测。结论 成功建立了检测sIPV疫苗D抗原含量的双抗体夹心ELI...",
        // 使用一个数组来存储关键词、资助资金、DOI等信息
        info: [
            { key: "关键词", value: "癌症, pH响应性, 脂质体" },
            { key: "资助资金", value: "国家自然科学基金" },
            { key: "DOI", value: "10.1007/s11432-023-3456-7" },
            { key: "专辑", value: "医药卫生科技" },
            { key: "专题", value: "基础医学" },
            { key: "分类号", value: "R392" }
        ],
    },
]);
</script>

<style lang="less" scoped>
.header {
    width: 96%;
    height: 60px;
    min-width: 1200px;
    margin: 0 auto;
    background-image: url(../../assets/img/banner.jpg);
}

.top-Box {
    width: 96%;
    height: 60px;
    min-width: 1200px;
}

.main {
    position: relative;
    width: 80%;
    margin: 0 auto;
    min-width: 1200px;
    padding: 0 0 50px;
    background-color: #f9f9f9;
}

.Paper-Box {
    padding: 20px; // 设置内边距
}

.Paper {
    margin-bottom: 20px; // 设置下边距
}

.head {
    display: flex; // 设置为弹性布局
    flex-direction: column; // 设置为垂直方向
    align-items: center; // 设置为居中对齐
}

.p-title {
    padding-top: 25px;
    padding-bottom: 15px;
    font-size: 24px;
    color: #333;
    font-weight: normal;
    line-height: 35px;
    vertical-align: middle;
    font-family: "Microsoft yahei";
    word-wrap: break-word;
}



.author {
    padding: 0;
    margin-right: 10px;
    line-height: 27px;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    color: #506697;
}

.author span {
    margin-right: 7px;
}

.author a {
    margin-right: 2px;
}

.author a:hover {
    color: #f60;
}

sup {
    top: -0.5em;
}

sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}

.p-row {
    float: none;
    min-height: 26px;
    padding-top: 8px;
    font-size: 14px;
    color: #000;
    clear: both;
    text-align: justify;
    text-justify: inter-word;
    display: table;
    width: 100%;
}

.rowtit {
    display: table-cell;
    vertical-align: top;
    padding-right: 5px;
    line-height: 26px;
    font-weight: bold;
    white-space: nowrap;
    width: 8px;
}

.abstract-text {
    display: inline;
    color: #666;
    line-height: 26px;
    font-weight: normal;
    text-align: justify;
    text-justify: inter-word;
    word-wrap: break-word;
    display: inline-block;
    line-break: anywhere;
}

.keywords {
    line-height: 26px;
    text-justify: inter-word;
    color: #666;
    word-wrap: break-word;
    display: table-cell;
    word-break: break-word;
}


.Footer {
    width: 100%;
    min-height: 112px;
    padding: 20px 30%;
    margin-top: 20px;
    background-color: #f1f6f9;
    clear: both;
}

.kthy {
    width: 800px;
    height: 38px;
    line-height: 38px;
    margin-bottom: 8px;
}

.kthy-text {
    font-size: 14px;
    padding-left: 21px;
    float: left;
}
</style>