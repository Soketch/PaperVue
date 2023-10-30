<template>
    <div class="container">
        <div class="contBox fixedCrawling">
            <div class="left-sideBar ">
                <div class="SearchTop">
                    <input type="text" placeholder="    输入...">
                </div>
                <div class="navbar">
                    <ul class="PaperList">
                        <li class="PaperItem" v-for="pa in paper" :key="pa.id" @click="selectPaper(pa.id)">
                            <h4 class="OriginLable">Origin Paper</h4>
                            <h4 class="PaperTitle">{{ pa.title }}</h4>
                            <div>
                                <span>
                                    <p v-for="(item) in pa.authors.slice(0, 3)" :key="item.id">
                                        <a href="javaScript:void(0);">{{ item.author }}.</a>
                                    </p>
                                </span>
                                <span>{{ pa.date }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="PaperMain">
                <div class="head">
                    <h1 class="p-title">{{ paper[selectedId].title }}</h1>
                    <h3 class="author">
                        <span v-for="(item) in paper[selectedId].authors" :key="item.id">
                            <a href="javaScript:void(0);">{{ item.author }}</a>
                            <sup>{{ item.id }}</sup>
                        </span>
                    </h3>
                    <h3>
                        <a class="author" href="#" v-for="monad in paper[selectedId].monads" :key="monad">{{ monad
                        }}</a>
                    </h3>
                </div>
                <div class="p-row">
                    <span class="rowtit">摘要：</span>
                    <span class="abstract-text">{{ paper[selectedId].abstract }}</span>
                </div>
                <div class="p-row" v-for="item in paper[selectedId].info" :key="item.key">
                    <span class="rowtit">{{ item.key }}：</span>
                    <p class="keywords">{{ item.value }}</p>
                </div>

            </div>
            <div class="right-sideBar">
                <div class="HeadBtn">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div class="childViews">

                    <WordSideBar></WordSideBar>
                    <ChartsSideBar></ChartsSideBar>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup >
import { ref, reactive } from "vue";
import WordSideBar from "../../components/childTool/wordSideBar.vue";
import ChartsSideBar from "../../components/childTool/chartsSideBar.vue";
import { computed } from "vue";

//后端传递数据
const paper = computed(() => [
    {
        id: 0,
        title: "多级pH响应的小干扰RNA与多西他赛共递送脂质体用于乳腺癌协同治疗的研究",
        date: "2023-09-11",
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
    {
        id: 1,
        title: "多级pH响应",
        date: "2023-07-1",
        authors: [
            { id: 1, author: "张丽" },
            { id: 2, author: "龚雨静" }
        ],
        monads: ["河北工业学院", "天津大学"],
        abstract: "目的",
        info: [
            { key: "关键词", value: "癌症, pH响应性, 脂质体" },
            { key: "资助资金", value: "国家自然科学基金" },
            { key: "DOI", value: "10.1007/s11432-023-3456-7" },
            { key: "专辑", value: "医药卫生科技" },
            { key: "专题", value: "基础医学" },
            { key: "分类号", value: "R392" }
        ],
    },
    {
        id: 2,
        title: "基于WebRTC推流技术在运营商可信人脸认证研究及应用",
        date: "2023-10-30",
        authors: [
            { id: 1, author: "江映繁" },
            { id: 2, author: "任权伟" },
            { id: 3, author: "许超" },
            { id: 4, author: "陈鑫" },
            { id: 5, author: "曾昭雁" }
        ],
        monads: ["天翼数字生活科技有限公司数字生活账号事业部天翼数字生活科技有限公司账号能力事业部天翼数字生活科技有限公司研发部"],
        abstract: "从可信人脸认证在运营商身份认证场景中变得有挑战和现有用户体验感知不足入手，阐述了运营商可信人脸认证选取了WebRTC的从离线视频传输改为在线视频流获取方式，提升了活体识别的响应速度和用户感知，并描述了平台部署、反诈身份核验场景研究及实践经验。",
        info: [
            { key: "关键词", value: "运营商可信人脸认证技术;WebRTC;实时视频推流技术;反诈身份核验场景;" },
            { key: "Series", value: " Electronic Technology ＆ Information Science" },
            { key: "Subject", value: "Computer Software and Application of Computer" },
            { key: "Classification Code", value: "TP391.41" }
        ],
    }
]);

const selectedId = ref(0);
const selectPaper = (id) => { selectedId.value = id; };

</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 95vh;

    .fixedCrawling {
        position: fixed;
        height: 94vh;
        top: 65px;
        width: 100%;
        height: 100%;
        display: flex;

        .left-sideBar {
            width: 20%;
        }

        .PaperMain {
            width: 40%;
        }

        .right-sideBar {
            width: 40%;
        }
    }

}

.left-sideBar {
    padding-right: 20px;

    .SearchTop {
        width: 100%;
        height: 30px;

        input {
            width: 100%;
            height: 100%;
            background: url(../../assets/img/Tools/search.png) no-repeat;
            background-position: 2px 6px;
        }

        input:hover {
            background: none;
        }

        input:hover::placeholder {
            opacity: 0;
        }

    }

    .navbar {
        width: 100%;
        height: calc(100% - 30px);
        cursor: pointer;

        .PaperItem {
            border-bottom: 1px solid #8e8e8e;

            h4 {
                padding-top: 10px;
                padding-left: 5px;
                font-weight: 400;
            }

            div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            span {
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                font-weight: 300;
                font-size: 14px;
                padding: 10px 8px;
                height: 30px;
                line-height: 10px;
            }

            p {
                height: 100%;
                display: inline;
                margin-right: 7px;
                max-width: 100px;
                max-height: 60px;
                overflow: hidden;

                a {
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
            }

            .PaperTitle {
                max-height: 60px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        .PaperItem:hover {
            background-color: rgba($color: #8e8e8e, $alpha: 0.3);
        }

        .PaperItem:not(:first-child) .OriginLable {
            display: none;
        }
    }
}


.PaperMain {
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
        text-align: center;
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
}

.right-sideBar {
    padding-left: 20px;

    .HeadBtn {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: #8e8e8e;

        button {
            flex: 1;
        }
    }

    .childViews {
        width: 100%;
        height: calc(100% - 32px);
        margin-top: 1px;
        background-color: yellow;
    }
}
</style>
